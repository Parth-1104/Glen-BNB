import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import User from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";

export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const hotel = await Hotel.findOne({ owner: user._id });
    if (!hotel) {
      return res.status(404).json({ success: false, message: "No Hotel found" });
    }

    const images = await Promise.all(
      req.files.map(file => cloudinary.uploader.upload(file.path).then(res => res.secure_url))
    );

    await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: +pricePerNight,
      amenities: JSON.parse(amenities),
      images,
    });

    res.json({ success: true, message: "Room created successfully" });
  } catch (error) {
    console.error("Room creation error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// API to get all rooms
// GET /api/rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true })
      .populate({
        path: 'hotel',
        populate: {
          path: 'owner', 
          select: 'image',
        },
      }).sort({ createdAt: -1 });
    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to get all rooms for a specific hotel
// GET /api/rooms/owner
export const getOwnerRooms = async (req, res) => {
  try {
    const hotelData = await Hotel.findOne({ owner: req.auth.userId });
    const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate("hotel");
    res.json({ success: true, rooms });
  } catch (error) {
    console.log(error);
    
    res.json({ success: false, message: error.message });
  }
};

// API to toggle availability of a room
// POST /api/rooms/toggle-availability
export const toggleRoomAvailability = async (req, res) => {
  try {
    const { roomId } = req.body;
    const roomData = await Room.findById(roomId);
    roomData.isAvailable = !roomData.isAvailable;
    await roomData.save();
    res.json({ success: true, message: "Room availability Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};