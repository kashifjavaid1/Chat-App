import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");

  let parsedUserState;
  try {
    parsedUserState = initialUserState
      ? JSON.parse(initialUserState)
      : undefined;
  } catch (error) {
    console.error("Invalid JWT or local storage data", error);
    parsedUserState = undefined;
  }

  const [authUser, setAuthUser] = useState(parsedUserState);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
