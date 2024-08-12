import axios from "axios";
import { useForm } from "react-hook-form";
import API_ROUTE from "../../../../config";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function useSignUp() {
  const { setAuthUser } = useAuth(); // Correctly destructure setAuthUser
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  // Watch password and confirm password fields
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  // Custom validation for confirmPassword
  const validationPassword = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data?.fullName,
      email: data?.email,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
    };
    try {
      const res = await axios.post(`${API_ROUTE}/user/signup`, userInfo, {
        withCredentials: true,
      });
      if (res.data) {
        alert("User signed up");
        localStorage.setItem("ChatApp", JSON.stringify(res.data.createUser));
        setAuthUser(res.data.createUser);

        // Call reset before navigating
        reset();
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.message);
      }
    }
  };

  const inputFields = [
    {
      type: "text",
      placeholder: "Full Name",
      name: "fullName",
      iconPath:
        "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z",
      validation: { required: "Full name is required" },
    },
    {
      type: "email",
      placeholder: "Email",
      name: "email",
      iconPath:
        "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email address",
        },
      },
    },
    {
      type: "password",
      placeholder: "Password",
      name: "password",
      iconPath:
        "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
      validation: { required: "Password is required" },
    },
    {
      type: "password",
      placeholder: "Confirm Password",
      name: "confirmPassword",
      iconPath:
        "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
      validation: {
        required: "Confirm Password is required",
        validate: validationPassword,
      },
    },
  ];

  return {
    register,
    handleSubmit,
    onSubmit,
    inputFields,
    confirmPassword,
    errors,
  };
}

export default useSignUp;
