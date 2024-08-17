import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import LeftSide from "./pages/home/leftSide/LeftSide";
import Login from "./pages/home/login/Login";
import RightSide from "./pages/home/rightSide/RightSide";
import SignUp from "./pages/home/signUp/SignUp";
import { Toaster } from "react-hot-toast";
function App() {
  const [authUser] = useAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Routes for authenticated users */}
          {authUser ? (
            <>
              <Route
                path="/"
                element={
                  <div className="drawer lg:drawer-open">
                    <input
                      id="my-drawer-2"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content flex flex-col items-center justify-center">
                      <RightSide />
                    </div>
                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu w-80 min-h-full bg-black text-base-content">
                        <LeftSide />
                      </ul>
                    </div>
                  </div>
                }
              />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/login" />} />{" "}
            </>
          )}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
