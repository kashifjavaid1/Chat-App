import { useEffect } from "react";
import TypeSendMessage from "../../../component/typeSendMessage/TypeSendMessage";
import useConversation from "../../../zustand/useConversation";
import ChatUser from "./ChatUser";
import Message from "./Message";
import { useAuth } from "../../../context/AuthProvider";
import { CiMenuFries } from "react-icons/ci";

function NoConversationSelected() {
  const [authUser] = useAuth();

  return (
    <div className="relative">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center">
          Welcome{" "}
          <span className="font-semibold text-xl">
            {authUser?.user?.fullName}
          </span>
          <br />
          No chat selected, please start a conversation by selecting someone
          from your contacts.
        </h1>
      </div>
    </div>
  );
}

function RightSide() {
  const { selectConversation, setSelectConversation } = useConversation();
  useEffect(() => {
    return setSelectConversation(null);
  }, [setSelectConversation]);

  return (
    <div className="w-full bg-slate-900 text-gray-300">
      {!selectConversation ? (
        <NoConversationSelected />
      ) : (
        <div className="text-gray-300 bg-slate-900">
          <ChatUser />
          <div
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "calc(92vh - 8vh)" }}
          >
            <Message />
          </div>
          <TypeSendMessage />
        </div>
      )}
    </div>
  );
}

export default RightSide;
