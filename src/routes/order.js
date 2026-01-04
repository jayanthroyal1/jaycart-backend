import express from "express";
import crypto from "crypto";
import Order from "../models/Order.js";
import Payment from "../models/Payment.js";
import { razorpay } from "../utils/razorpay.js";
import { ENV } from "../config/env.js";
import { requireAuthHttp } from "../middleware/requireAuthHttp.js";

const router = express.Router();

// 🔒 Create order (AUTH REQUIRED)
router.post("/create", requireAuthHttp, async (req, res, next) => {
  try {
    const { items, totalAmount } = req.body;

    const order = await Order.create({
      user: req.user._id,
      items,
      totalAmount,
    });

    const razorpayOrder = await razorpay.orders.create({
      amount: totalAmount * 100,
      currency: "INR",
      receipt: order._id.toString(),
    });

    await Payment.create({
      orderId: order._id,
      razorpayOrderId: razorpayOrder.id,
      status: "CREATED",
    });

    res.json({
      orderId: order._id,
      razorpayOrderId: razorpayOrder.id,
      amount: totalAmount,
    });
  } catch (err) {
    next(err);
  }
});

// 🔒 Verify payment (AUTH REQUIRED)
router.post("/verify", requireAuthHttp, async (req, res, next) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", ENV.RAZORPAY_KEY_SECRET)
      .update(razorpayOrderId + "|" + razorpayPaymentId)
      .digest("hex");

    if (generatedSignature !== razorpaySignature) {
      return res.status(400).json({ success: false });
    }

    const payment = await Payment.findOneAndUpdate(
      { razorpayOrderId },
      {
        razorpayPaymentId,
        razorpaySignature,
        status: "PAID",
      },
      { new: true }
    );

    await Order.findByIdAndUpdate(payment.orderId, { status: "PAID" });

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
