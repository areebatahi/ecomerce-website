import bcrypt from "bcrypt";
import "dotenv/config";
import chalk from "chalk";
import productSchema from "../schema/productSchema.mjs";
import Product from "../models/product/product.mjs";

const createProduct = async (req, res) => {
    console.log(chalk.bgCyan("incoming call to product api"));
    if (!req.body) {
        return req.status(400).json({ message: "Bad request" });
    }
    try {
        const product = await productSchema.validateAsync(req.body);
        const newProuct = await Product.create({ ...product });

        await newProuct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: { id: newProuct.id, newProuct },
        });
    } catch (error) {
        if (error?.code === 11000) {
            return res.status(409).json({
                message: "Duplicate prouct - product already exists",
                error: error.message,
            });
        }
        console.error(chalk.bgRed("product Error:"), error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ message: "product deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ message: "product updated successfully", product });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
export { createProduct, getAllProduct, deleteProduct, updateProduct };
