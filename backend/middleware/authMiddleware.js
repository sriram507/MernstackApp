import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Protect (requires login)
export const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: "No token, access denied" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Admin Only
export const adminOnly = (req, res, next) => {
  if (req.user.role === "admin") next();
  else res.status(403).json({ message: "Admin access only" });
};
