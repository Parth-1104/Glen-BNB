import { verifyToken } from "@clerk/clerk-sdk-node";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const payload = await verifyToken(token); // Verify Clerk token
    const clerkId = payload.sub;

    const user = await User.findOne({ clerkId }); // ✅ Use clerkId, not _id
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user; // Attach user to request
    req.auth = { userId: clerkId }; // Attach Clerk ID (used in room controller)

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
