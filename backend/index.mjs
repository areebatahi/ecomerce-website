import express from "express";
import mongoose from "./db/index.mjs";
import userRoutes from "./routes/userRoutes.mjs"
import cartRoutes from "./routes/cartRoutes.mjs"
import productRoutes from "./routes/productRoutes.mjs"
import chalk from "chalk";
import cors from "cors";
import connectToDB from "./db/index.mjs";

//Connecting MongoDB
connectToDB()
const app = express();

app.use(
	cors({
		origin: ['http://localhost:5174', 'http://localhost:5173','https://ecomerce-website-vert.vercel.app'],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);


app.use(express.json());
const port = 4000;
app.use("/api/auth",userRoutes)
app.use("/api/cart",cartRoutes)
app.use('/api/products', productRoutes);

app.use("/", (req, res, next) => {
  console.log("Request URL:", req.url, "method: ", req.method);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
