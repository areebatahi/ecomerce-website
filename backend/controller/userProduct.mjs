import bcrypt from "bcrypt";
import User from "../models/user/index.mjs";
import "dotenv/config";
import userSchema from "../schema/userSchema.mjs";
import chalk from "chalk";

const createProduct = async (req, res) => {
    console.log(chalk.bgCyan("incoming call to product api"));
    if (!req.body) {
        return req.status(400).json({ message: "Bad request" });
    }
    try {
        const user = await userSchema.validateAsync(req.body);
        const newUser = await User.create({ ...user, password: password });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: { id: newUser.id, email: newUser.email },
        });
    } catch (error) {
        if (error?.code === 11000) {
            return res.status(409).json({
                message: "Duplicate email - Email already exists",
                error: error.message,
            });
        }
        console.error(chalk.bgRed("Signup Error:"), error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
};
export { createProduct, getAllProduct, deleteProduct, updateProduct };
