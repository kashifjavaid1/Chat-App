import useGetAllUsers from "../../context/user";
import UserAvter from "../userAvater/UserAvter";

function Users() {
  const [allUsers] = useGetAllUsers();
  console.log("🚀 ~ Users ~ allUsers:", allUsers);
  return (
    <div>
      <h1 className=" px-8 py-2 my-1 text-white font-semibold bg-slate-800 rounded-md">
        Message
      </h1>
      {/* user Avter */}
      <div
        className="flex-1 py-3 overflow-y-auto"
        style={{ maxHeight: "calc(90vh - 15vh)" }}
      >
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
        <UserAvter />
      </div>
    </div>
  );
}

export default Users;
