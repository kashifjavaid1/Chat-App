import PropTypes from "prop-types";

export const InputField = ({ placeholder, type, iconPath }) => (
  <label className="block mb-4">
    <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-5 w-5 text-gray-500 mr-2"
      >
        <path d={iconPath} />
      </svg>
      <input
        type={type}
        className="flex-1 py-2 px-3 text-gray-800 placeholder-gray-400 outline-none"
        placeholder={placeholder}
      />
    </div>
  </label>
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
};
