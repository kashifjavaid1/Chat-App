import LeftSide from "./pages/home/leftSide/LeftSide";
import Login from "./pages/home/login/Login";
import RightSide from "./pages/home/rightSide/RightSide";
import SignUp from "./pages/home/signUp/SignUp";

function App() {
  return (
    <>
      {/* <div className="flex h-screen">
        <LeftSide />
        <RightSide />
      </div> */}
      <div>
        <SignUp />
        <Login />
      </div>
    </>
  );
}

export default App;
