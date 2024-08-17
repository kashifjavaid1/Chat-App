import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  core: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
  },
});

//  real time message funcation define

// realtime message code goes here
export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};
const users = io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
  }
  io.emit("getOnlineUsers", Object.keys(users));
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

export { app, io, server };
