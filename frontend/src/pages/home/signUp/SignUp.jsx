import { InputField } from "../../../component/inputFields/InputFields";
import { motion } from "framer-motion";
import useSignUp from "./useSignUp";

export default function SignUp() {
  const { register, handleSubmit, onSubmit, inputFields, errors } = useSignUp();

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Chat App
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-600 mb-4">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((field) => (
            <div key={field.name}>
              <InputField
                type={field.type}
                placeholder={field.placeholder}
                register={register(field.name, field.validation)}
                iconPath={field.iconPath}
                name={field.name}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ))}

          <div className="flex flex-col items-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg font-semibold mb-4"
            >
              Sign Up
            </motion.button>
            <p className="text-gray-600">
              Have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => console.log("Login clicked")}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
