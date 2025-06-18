import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// POST /api/hotels
export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;

    const clerkUserId = req.auth?.userId;
    if (!clerkUserId) {
      return res.status(401).json({ success: false, message: "Unauthorized: Missing Clerk user ID" });
    }

    // Find the user using clerkId
    const user = await User.findOne({ clerkId: clerkUserId });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const owner = user._id;

    // Check if this user already registered a hotel
    const hotelExists = await Hotel.findOne({ owner });
    if (hotelExists) {
      return res.json({ success: false, message: "Hotel Already Registered" });
    }

    // Register hotel
    await Hotel.create({ name, address, contact, city, owner });

    // Update user's role
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.json({ success: true, message: "Hotel Registered Successfully" });

  } catch (error) {
    console.error("Error in registerHotel:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
