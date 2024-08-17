import { useEffect, useRef } from "react";
import Loading from "../../../component/loading/Loading";
import UserMessage from "../../../component/message/UserMessage";
import useUserMessagesGet from "../../../context/useUserMessagesGet";
import useGetSocketMessage from "../../../context/useGetSocketMessage";

function Message() {
  const { messages, loading } = useUserMessagesGet();
  useGetSocketMessage();
  const lastMessage = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (lastMessage.current) {
        lastMessage.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
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
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <UserMessage message={message} />
          </div>
        ))
      )}
    </div>
  );
}

export default Message;
