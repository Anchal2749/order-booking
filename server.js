import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import orderRoutes from "./routes/orders.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.log(err));

app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));



