import { useContext, useState } from "react";
import MenuCard from "./MenuCard";

export default function AddSectionButton() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="flex relative">
      <button
        onClick={toggleMenu}
        className="w-full text-center border-2 border-dotted border-black rounded-md py-4"
      >
        + <span className="text-black font-semibold text-sm">Add sections</span>
      </button>
      {showMenu && <MenuCard />}
    </div>
  );
}
