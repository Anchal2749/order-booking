import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Save new orders (bulk)
router.post("/", async (req, res) => {
  try {
    const saved = await Order.insertMany(req.body); // expects array
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Error saving orders", error: err });
  }
});

// Fetch all orders
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ orderDate: -1 });
  res.json(orders);
});

export default router;
