import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useUserGet from "../../context/useUserGet";
import useConversation from "../../zustand/useConversation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { allUsers } = useUserGet();
  const { setSelectConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers?.find((user) => {
      const fullName = user?.fullName || "";
      return fullName.toLowerCase().includes(search.toLowerCase());
    });
    if (conversation) {
      setSelectConversation(conversation);
    } else {
      alert("User not found!");
    }
    setSearch("");
  };

  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4 ">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className="input border-[1px] border-gray-700 rounded-lg p-3 bg-slate-900 flex items-center gap-2 w-[80%]">
              <input
                type="text"
                className="outline-none"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button type="submit">
              <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
