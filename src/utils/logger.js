import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

// ================================
// 10. src/utils/razorpay.js
// ================================
import Razorpay from "razorpay";
import { ENV } from "../config/env.js";

export const razorpay = new Razorpay({
  key_id: ENV.RAZORPAY_KEY_ID,
  key_secret: ENV.RAZORPAY_KEY_SECRET,
});
