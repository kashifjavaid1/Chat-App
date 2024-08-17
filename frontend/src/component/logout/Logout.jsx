/* eslint-disable react/prop-types */
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Logout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("You’ve been logged out. See you soon!");
      window.location.reload();
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="px-7 py-[15px] bg-gray-900">
        <button onClick={handleLogin}>
          <TbLogout2 className="text-4xl text-white   cursor-pointer rounded-full " />
        </button>
      </div>
    </>
  );
}

export default Logout;
