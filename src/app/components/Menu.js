import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../AppContext";
import SubmitButton from "./SubmitButton";
import MenuCard from "./MenuCard";
import { sectionsList } from "../constants";
import useClickOutside from "../hooks/useClickOutside";

export default function Menu({ label }) {
  const [showMenu, setShowMenu] = useState(false);
  const { sectionsList: addedSection, onAddSection } = useContext(AppContext);
  const menuRef = useRef(null);

  useClickOutside({ eleRef: menuRef, action: () => setShowMenu(false) });

  const menuItems = sectionsList
    .filter(
      (s) => addedSection.data[s.id] && !addedSection.data[s.id].isEditing
    )
    .map(({ label, id }) => {
      return (
        <li
          key={id}
          className="w-full text-start hover:bg-[#EFEFEF] rounded-md"
        >
          <a href={`#${id}`} className="block p-2  text-sm">
            {label}
          </a>
        </li>
      );
    });

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="cursor-pointer flex gap-2">
        {label}
        {showMenu ? (
          <span className="text-[10px]">&#9650;</span>
        ) : (
          <span className="text-[10px]">&#9660;</span>
        )}
      </button>
      {showMenu && (
        <div
          ref={menuRef}
          className="z-10 flex flex-col  justify-center font-semibold bg-white py-5 px-2 absolute top-12 w-60 rounded-xl text-black"
        >
          {menuItems.length > 0 ? (
            <ul className="">{menuItems}</ul>
          ) : (
            <EmptyMenu />
          )}
        </div>
      )}
    </div>
  );
}

function EmptyMenu() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <label className="text-4xl text-gray-300">!</label>
      <p className="text-xs font-semibold leading-6 text-center">
        You have not added any sections, click to add new section
      </p>

      <SubmitButton theme="white" label="Add Section" onClick={toggleMenu} />
      {showMenu && <MenuCard />}
    </div>
  );
}
