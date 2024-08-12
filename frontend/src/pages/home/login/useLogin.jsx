import axios from "axios";
import { useForm } from "react-hook-form";
import API_ROUTE from "../../../../config";
import { useAuth } from "../../../context/AuthProvider";

function useLogin() {
  const [setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data?.email,
      password: data?.password,
    };

    try {
      const res = await axios.post(`${API_ROUTE}/user/login`, userInfo);
      if (res.data) {
        alert("User login up");
      }
      localStorage.setItem("ChatApp", JSON.stringify(res.data.user));
      setAuthUser(res.data.user);
      reset();
    } catch (error) {
      if (error.response) {
        alert("Error" + error.response.data.message);
      }
    }
  };

  const inputFields = [
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
  ];

  return {
    register,
    handleSubmit,
    onSubmit,
    inputFields,
    errors,
  };
}

export default useLogin;
