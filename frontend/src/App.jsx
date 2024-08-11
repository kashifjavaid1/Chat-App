import LeftSide from "./pages/home/leftSide/LeftSide";
import RightSide from "./pages/home/rightSide/RightSide";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}

export default App;
