const Navbar = ({ name }) => {
  return (
    <div>
      <div className="flex justify-between bg-gray-400 p-3 w-screen h-15">
        <h2
          className="font-normal
        text-xl p-1"
        >
          Hello <span className="text-2xl font-bold">{name}👋</span>
        </h2>

        <div className="flex justify-between gap-4">
          <button className="bg-gray-500 border-none p-2 font-medium rounded-xl">
            Home1
          </button>
          <button className="bg-gray-500 border-none p-2 font-medium rounded-xl">
            Home2
          </button>
          <button className="bg-gray-500 border-none p-2 font-medium rounded-xl">
            Home3
          </button>
          <button className="bg-gray-500 border-none p-2 font-medium rounded-xl">
            Home4
          </button>
          <div className="justify-end">
            <button className="bg-red-500 border-none p-2 font-medium rounded-xl">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
