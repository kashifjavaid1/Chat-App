import { create } from "zustand";

const useConversation = create((set) => ({
  selectConversation: null,
  setSelectConversation: (conversation) =>
    set({ selectConversation: conversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
