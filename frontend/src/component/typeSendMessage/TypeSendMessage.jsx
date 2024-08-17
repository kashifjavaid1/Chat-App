import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage";
import { useState } from "react";

function TypeSendMessage() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();
  const handleMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      console.log("Message is empty, not sending.");
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex justify-center space-x-2 h-[8vh]">
      <div className="w-[70%]">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type here"
          className="input border-[2px] border-gray-700 rounded-lg p-3 bg-slate-900 w-full"
        />
      </div>
      <button onClick={handleMessage}>
        <IoSendSharp className="text-3xl" />
      </button>
    </div>
  );
}

export default TypeSendMessage;
