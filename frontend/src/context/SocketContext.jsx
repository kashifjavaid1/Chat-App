import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";

const socketContext = createContext();

export const useSocket = () => {
  return useContext(socketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const [authUser] = useAuth();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:3000", {
        query: {
          userId: authUser.user._id,
        },
        transports: ["websocket"],
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUser(users);
      });

      return () => {
        socket.close();
        setSocket(null);
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <socketContext.Provider value={{ socket, onlineUser }}>
      {children}
    </socketContext.Provider>
  );
};
