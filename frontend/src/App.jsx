import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import LeftSide from "./pages/home/leftSide/LeftSide";
import Login from "./pages/home/login/Login";
import RightSide from "./pages/home/rightSide/RightSide";
import SignUp from "./pages/home/signUp/SignUp";

function App() {
  const [authUser] = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {authUser ? (
          <>
            <Route
              path="/"
              element={
                <div className="flex h-screen">
                  <LeftSide />
                  <RightSide />
                </div>
              }
            />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
