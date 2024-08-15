import Loading from "../../../component/loading/Loading";
import UserMessage from "../../../component/message/UserMessage";
import useUserMessagesGet from "../../../context/useUserMessagesGet";

function Message() {
  const { messages, loading } = useUserMessagesGet();
  return (
    <>
      <div style={{ minHeight: "calc(82vh - 8vh)" }}>
        {!loading && messages.length === 0 && (
          <div>
            <p className="text-center mt-40 text-xl">
              Say! Hi to start the conversation
            </p>
          </div>
        )}
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          messages.length > 0 &&
          messages?.map((message) => {
            return <UserMessage key={message?._id} message={message} />;
          })
        )}
      </div>
    </>
  );
}

export default Message;
