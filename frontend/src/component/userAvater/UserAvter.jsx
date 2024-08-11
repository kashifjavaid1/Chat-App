function UserAvter() {
  return (
    <>
      <div className="flex space-x-3 px-6 py-3  hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Kashif</h1>
          <span>kashif@gmail.com</span>
        </div>
      </div>
    </>
  );
}

export default UserAvter;
