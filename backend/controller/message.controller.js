import Conversation from "../models/conversaction.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    // first message send in body
    const { message } = req.body;
    // parse message id
    const { id: receiverId } = req.params;
    // sender id user collection current loggdin user
    const senderId = req.user._id;
    // already conversation
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json({ newMessage });
  } catch (error) {
    console.log(error.message);
  }
};

export const getConversation = async (req, res) => {
  try {
    // params id name is ChatUser
    const { id: chatUser } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("messages");
    if (!conversation) {
      return res.status(404).json([]);
    }
    const message = conversation.messages;
    res.status(200).json(message);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
