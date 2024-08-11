import { IoSendSharp } from "react-icons/io5";

function TypeSendMessage() {
  return (
    <div className="flex justify-center space-x-2 h-[8vh]">
      <div className="w-[70%]">
        <input
          type="text"
          placeholder="Type here"
          className="input  border-[2px] border-gray-700 rounded-lg p-3  bg-slate-900 w-full "
        />
      </div>
      <button>
        <IoSendSharp className="text-3xl" />
      </button>
    </div>
  );
}

export default TypeSendMessage;
