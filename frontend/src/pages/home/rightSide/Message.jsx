import UserMessage from "../../../component/message/UserMessage";

function Message() {
  return (
    <>
      <div style={{ minHeight: "calc(92vh - 8vh)" }}>
        <UserMessage />
        <UserMessage />
      </div>
    </>
  );
}

export default Message;
