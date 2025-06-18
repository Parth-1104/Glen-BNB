import { useAuth, useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY || "$";
    const navigate = useNavigate();
    const { user } = useUser();
    const { getToken } = useAuth()

    const [isOwner, setIsOwner] = useState(false);
    const [showHotelReg, setShowHotelReg] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [searchedCities, setSearchedCities] = useState([]); // max 3 recent searched cities

    const facilityIcons = {
        "Free WiFi": assets.freeWifiIcon,
        "Free Breakfast": assets.freeBreakfastIcon,
        "Room Service": assets.roomServiceIcon,
        "Mountain View": assets.mountainIcon,
        "Pool Access": assets.poolIcon,
    };

    const fetchUser = async () => {
        console.log("🔁 fetchUser called");
      
        try {
          const token = await getToken();
          console.log("🔐 Token:", token);
      
          if (!token) {
            console.warn("⚠️ No token retrieved from Clerk");
            return;
          }
      
          const { data } = await axios.get("https://glen-bnb.vercel.app/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          console.log("✅ Data received:", data);
      
          if (data.success) {
            setIsOwner(data.role === "hotelOwner");
            setSearchedCities(data.recentSearchedCities);
          } else {
            console.warn("❌ Retry fetching user in 2s...");
            setTimeout(fetchUser, 2000);
          }
        } catch (error) {
          console.error("❌ Error in fetchUser:", error.message);
          toast.error(error.message);
        }
      };
      

    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms')
            if (data.success) {
                setRooms(data.rooms)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        console.log("👤 useEffect running - user is:", user);
        if (user) {
          fetchUser();
        }
      }, [user]);
      

    useEffect(() => {
        fetchRooms();
    }, []);

    const value = {
        currency, navigate,
        user, getToken,
        isOwner, setIsOwner,
        axios,
        showHotelReg, setShowHotelReg,
        facilityIcons,
        rooms, setRooms,
        searchedCities, setSearchedCities
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

};

export const useAppContext = () => useContext(AppContext);