import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectConversation } = useConversation();

  const sendMessage = async (message) => {
    console.log("🚀 ~ sendMessage ~ message:", message);
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/message/send/${selectConversation?._id}`,
        { message }
      );

      if (response?.data) {
        setMessages([...messages, response.data?.newMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, messages, sendMessage };
};

export default useSendMessage;
