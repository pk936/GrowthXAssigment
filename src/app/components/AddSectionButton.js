import { useState } from "react";
import { sectionsList } from "../constants";

export default function AddSectionButton() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  const menuItems = sectionsList.map(({ label, href }, i) => {
    return (
      <li key={i} className="w-full text-start hover:bg-[#EFEFEF] rounded-md">
        <button className=" p-2 font-bold text-sm flex items-center gap-2">
          <AddIcon /> Add {label}
        </button>
      </li>
    );
  });

  return (
    <button
      onClick={toggleMenu}
      className="relative text-center border-2 border-dotted border-black rounded-md py-4"
    >
      + <span className="text-black font-semibold text-sm">Add sections</span>
      {showMenu && (
        <div
          className="bg-white py-5 px-2  w-60 rounded-xl text-black
        absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        shadow-xl"
        >
          <ul className="flex flex-col items-center justify-center">
            {menuItems}
          </ul>
        </div>
      )}
    </button>
  );
}

function AddIcon() {
  return (
    <div className="bg-[#EFEFEF] w-2 h-2 p-2 rounded-full flex items-center justify-center">
      +
    </div>
  );
}
