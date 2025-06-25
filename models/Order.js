
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: String,
  supplier: String,
  quantity: Number,
  price: Number,
  orderDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order", orderSchema);
