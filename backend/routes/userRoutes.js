import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
} from "../controllers/userController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// ---------------------
// Create Admin (One Time)
// ---------------------
router.get("/make-admin", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const admin = new User({
      name: "Super Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    res.send("Admin created!");
  } catch (err) {
    res.status(500).send("Failed to create admin");
  }
});

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

// Admin Route
router.get("/all", protect, adminOnly, getAllUsers);

export default router;
