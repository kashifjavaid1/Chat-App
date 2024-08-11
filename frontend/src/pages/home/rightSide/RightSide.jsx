import TypeSendMessage from "../../../component/typeSendMessage/TypeSendMessage";
import ChatUser from "./ChatUser";
import Message from "./Message";

function RightSide() {
  return (
    <div className="w-[70%] text-gray-300 bg-slate-900">
      <ChatUser />
      <div
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(92vh - 8vh)" }}
      >
        <Message />
      </div>
      <TypeSendMessage />
    </div>
  );
}

export default RightSide;
