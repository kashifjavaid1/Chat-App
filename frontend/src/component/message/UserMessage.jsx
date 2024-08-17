/* eslint-disable react/prop-types */
function UserMessage({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = authUser.user._id === message.senderId;
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "";
  return (
    <>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </>
  );
}

export default UserMessage;
