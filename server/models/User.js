import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  image: String,
  role: { type: String, enum: ["user", "hotelOwner"], default: "user" },
  recentSearchedCities: [String],
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;