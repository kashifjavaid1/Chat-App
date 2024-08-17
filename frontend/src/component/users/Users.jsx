import useUserGet from "../../context/useUserGet";
import UserAvter from "../userAvater/UserAvter";

function Users() {
  const { allUsers } = useUserGet();
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
        {/* all user fetch */}
        {allUsers?.map((users, index) => {
          return (
            <div key={index}>
              <UserAvter user={users} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
