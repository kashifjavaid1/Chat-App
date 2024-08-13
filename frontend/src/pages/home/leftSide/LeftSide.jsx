import Logout from "../../../component/logout/Logout";
import SearchBar from "../../../component/searchBar/SearchBar";
import Users from "../../../component/users/Users";

function LeftSide() {
  return (
    <div className="w-[30%] text-gray-300 bg-black ">
      <SearchBar />
      <div
        className="overflow-y-auto"
        style={{ minHeight: "calc(90vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default LeftSide;
