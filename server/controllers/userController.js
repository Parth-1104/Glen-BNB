
// Get User data using Token (JWT)
// GET /api/user/
export const getUserData = async (req, res) => {
  try {
    const user = req.user; // Already attached in middleware
    res.json({
      success: true,
      role: user.role,
      recentSearchedCities: user.recentSearchedCities || [],
    });
  } catch (err) {
    console.error("Fetch user error:", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// Store User Recent Searched Cities
// POST /api/user/recent-searched-cities
export const storeRecentSearchedCities = async (req, res) => {
  try {
    const { recentSearchedCity } = req.body;
    const user = await req.user;
    // Store max 3 recent searched cities
    if (user.recentSearchedCities.length < 3) {
      user.recentSearchedCities.push(recentSearchedCity);
    } else {
      user.recentSearchedCities.shift();
      user.recentSearchedCities.push(recentSearchedCity);
    }
    await user.save();
    res.json({ success: true, message: "City added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};