import express from 'express';
const router = express.Router();

router.post("/", async (req, res) => {
    console.log("🔥 HOTEL POST route hit");
    console.log("🔐 Auth:", req.auth);

    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // continue with hotel creation...
    res.json({ success: true, message: "Hotel created successfully (dummy)" });
});

export default router;
