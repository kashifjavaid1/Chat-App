import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await axios?.post(
        `/api/message/send/${selectConversation?._id}`,
        { message }
      );
      setMessages([...messages, response?.data]);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, messages, sendMessage };
};

export default useSendMessage;
