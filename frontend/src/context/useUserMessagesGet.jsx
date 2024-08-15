import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

function useUserMessagesGet() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      if (!selectConversation?._id) {
        return;
      }
      setLoading(true);
      try {
        setMessages([]);
        const response = await axios.get(
          `/api/message/get/${selectConversation._id}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    getMessage();
  }, [selectConversation, setMessages]);

  return { loading, messages };
}

export default useUserMessagesGet;
