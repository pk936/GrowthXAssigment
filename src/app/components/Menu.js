import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import SubmitButton from "./SubmitButton";
import MenuCard from "./MenuCard";

export default function Menu({ label }) {
  const [showMenu, setShowMenu] = useState(false);
  const { sectionsList } = useContext(AppContext);
  const list = [];

  const object = sectionsList.data;

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key) && !object[key]?.isEditing) {
      const element = object[key];
      list.push(
        <li className="w-full text-start hover:bg-[#EFEFEF] rounded-md">
          <a href={`#${key}`} className="block p-2  text-sm">
            {key}
          </a>
        </li>
      );
    }
  }

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
        <div className="flex flex-col  justify-center font-semibold bg-white py-5 px-2 absolute top-12 w-60 rounded-xl text-black">
          {list.length > 0 ? <ul className="">{list}</ul> : <EmptyMenu />}
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
