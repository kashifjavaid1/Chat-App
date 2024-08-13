/* eslint-disable react/prop-types */
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
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
      alert("User logged out");
      window.location.reload();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="px-7 py-3">
        <button onClick={handleLogin}>
          <TbLogout2 className="text-4xl text-white   cursor-pointer rounded-full " />
        </button>
      </div>
    </>
  );
}

export default Logout;
