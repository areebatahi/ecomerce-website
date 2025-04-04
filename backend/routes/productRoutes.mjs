import express from "express";
const router = express.Router();
import { createProduct, getAllProduct, deleteProduct, updateProduct } from "../controller/userProduct.mjs";

router.get("/product", getAllProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;