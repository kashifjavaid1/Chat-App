import { useSocket } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

/* eslint-disable react/prop-types */
function UserAvter({ user }) {
  const { selectConversation, setSelectConversation } = useConversation();
  const isSelectedUser = selectConversation?.id === user.id;
  const { socket, onlineUser } = useSocket();
  const online = onlineUser.includes(user._id);

  return (
    <>
      <div
        className={`hover:bg-slate-800 duration-300 ${
          isSelectedUser ? "bg-slate-900" : ""
        }`}
        onClick={() => setSelectConversation(user)}
      >
        <div className="flex space-x-3 px-6 py-3  hover:bg-slate-700 duration-300 cursor-pointer">
          <div className={`avatar ${online ? "online" : ""}`}>
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div>
            <h1 className="font-bold">{user?.fullName}</h1>
            <span>{user?.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAvter;
