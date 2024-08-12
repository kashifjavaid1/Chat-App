import { motion } from "framer-motion";
import { InputField } from "../../../component/inputFields/InputFields";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Chat <span className="text-green-600"> App</span>
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-600 mb-4">
          Login
        </h2>

        <form>
          <InputField
            type="email"
            placeholder="Email"
            iconPath="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
          />
          <InputField
            type="password"
            placeholder="Password"
            iconPath="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          />
          <div className="flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg font-semibold mb-4"
            >
              Login
            </motion.button>
            <p className="text-gray-600">
              Have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
