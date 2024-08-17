import Logout from "../../../component/logout/Logout";
import SearchBar from "../../../component/searchBar/SearchBar";
import Users from "../../../component/users/Users";

function LeftSide() {
  return (
    <div className="w-full text-gray-300 bg-black ">
      <SearchBar />
      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(86vh - 8vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default LeftSide;
