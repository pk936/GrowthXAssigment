import { useContext, useRef, useState } from "react";
import MenuCard from "./MenuCard";
import useClickOutside from "../hooks/useClickOutside";

export default function AddSectionButton() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutside({ eleRef: menuRef, action: () => setShowMenu(false) });

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
      {showMenu && (
        <div ref={menuRef}>
          <MenuCard />
        </div>
      )}
    </div>
  );
}
