import Conversation from "../models/conversaction.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  //   console.log("sendMessage", req.params.id, req.body.message);

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
      conversation.messages.push(newMessage);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json({ message: "success", newMessage });
  } catch (error) {
    console.log(error.message);
  }
};
