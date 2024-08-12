import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import LeftSide from "./pages/home/leftSide/LeftSide";
import Login from "./pages/home/login/Login";
import RightSide from "./pages/home/rightSide/RightSide";
import SignUp from "./pages/home/signUp/SignUp";

function App() {
  const [authUser] = useAuth();
  return (
    <>
      <div></div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                <div className="flex h-screen">
                  <LeftSide />
                  <RightSide />
                </div>
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signUp"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
