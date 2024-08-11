import Logout from "../../../component/logout/Logout";
import SearchBar from "../../../component/searchBar/SearchBar";
import Users from "../../../component/users/Users";

function LeftSide() {
  return (
    <div className="w-[30%] text-gray-300 bg-black ">
      <SearchBar />
      <Users />
      <Logout />
    </div>
  );
}

export default LeftSide;
