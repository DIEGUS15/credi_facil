import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    reference: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    // provider: {},
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["disponible", "agotado"],
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
