import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
function useUserGet() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const respons = await axios.get("/api/user", {
          Credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(respons.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getAllUsers();
  }, []);
  return { allUsers, loading };
}

export default useUserGet;
