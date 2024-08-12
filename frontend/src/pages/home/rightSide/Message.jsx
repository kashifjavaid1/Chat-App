import UserMessage from "../../../component/message/UserMessage";

function Message() {
  return (
    <>
      <div style={{ minHeight: "calc(82vh - 8vh)" }}>
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </div>
    </>
  );
}

export default Message;
