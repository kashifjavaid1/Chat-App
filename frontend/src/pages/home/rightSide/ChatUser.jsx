import { useSocket } from "../../../context/SocketContext.jsx";
import useConversation from "../../../zustand/useConversation.js";

function ChatUser() {
  const { onlineUser } = useSocket();
  const { selectConversation } = useConversation();
  const online = onlineUser.includes(selectConversation._id);
  return (
    <div className="flex space-x-3 bg-gray-800 h-[8vh] hover:bg-gray-700 duration-300 items-center justify-center">
      <div className={`avatar ${online ? "online" : "offline"}`}>
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      {/* status */}
      <div>
        <h1 className="text-xl">{selectConversation?.fullName}</h1>
        <span className="text-sm">{online ? "online" : "offline"}</span>
      </div>
    </div>
  );
}

export default ChatUser;
