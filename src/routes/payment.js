import express from "express";
import crypto from "crypto";
import { razorpay } from "../utils/razorpay.js";
import { ENV } from "../config/env.js";

const router = express.Router();

router.post("/order", async (req, res) => {
  const order = await razorpay.orders.create({
    amount: req.body.amount * 100,
    currency: "INR",
  });
  res.json(order);
});

router.post("/verify", (req, res) => {
  const { order_id, payment_id, signature } = req.body;
  const expected = crypto
    .createHmac("sha256", ENV.RAZORPAY_KEY_SECRET)
    .update(order_id + "|" + payment_id)
    .digest("hex");

  res.json({ success: expected === signature });
});

export default router;
