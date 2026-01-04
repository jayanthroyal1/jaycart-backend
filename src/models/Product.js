import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: "text" },
    description: { type: String },
    category: { type: String, index: true },
    price: { type: Number, index: true },
    image: String,
    stock: Number,
  },
  { timestamps: true }
);

// Text search index
productSchema.index({ name: "text", description: "text" });

export default mongoose.model("Product", productSchema);
