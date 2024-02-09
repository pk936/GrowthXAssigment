import { useState } from "react";

export default function Menu({ label }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="cursor-pointer">
        <label>
          {label}
          {showMenu ? (
            <span className="text-xs">&#9650;</span>
          ) : (
            <span className="text-xs">&#9660;</span>
          )}
        </label>
      </button>
      {showMenu && (
        <div className="bg-white py-5 px-2 absolute top-12 w-60 rounded-xl text-black">
          <ul className="flex flex-col items-center justify-center">
            <li className="w-full text-start hover:bg-[#EFEFEF] rounded-md">
              <a href className="block p-2 font-bold text-sm">
                About You
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
