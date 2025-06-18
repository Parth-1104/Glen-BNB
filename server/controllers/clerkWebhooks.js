import { Webhook } from "svix";
import User from "../models/User.js";

// POST /api/clerk
const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const event = await whook.verify(JSON.stringify(req.body), headers);
    const { data, type } = event;

    const userData = {
      clerkId: data.id, // Don't use _id
      email: data.email_addresses[0]?.email_address,
      firstName: data.first_name,
      lastName: data.last_name,
      image: data.image_url || data.profile_image_url,
    };

    switch (type) {
      case "user.created": {
        const exists = await User.findOne({ clerkId: data.id });
        if (!exists) await User.create(userData);
        break;
      }

      case "user.updated": {
        await User.findOneAndUpdate({ clerkId: data.id }, userData);
        break;
      }

      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });
        break;
      }

      default:
        break;
    }

    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
