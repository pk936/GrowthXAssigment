import { sectionsList } from "../constants";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export default function MenuCard() {
  const { sectionsList: addedSection, onAddSection } = useContext(AppContext);

  const menuItems = sectionsList
    .filter((s) => !addedSection.data[s.id])
    .map(({ label, id }) => {
      return (
        <li
          key={id}
          className="w-full text-start hover:bg-[#EFEFEF] rounded-md"
        >
          <button
            className=" p-2 font-bold text-sm flex items-center gap-2"
            onClick={() => onAddSection(id, { isEditing: true })}
          >
            <AddIcon /> Add {label}
          </button>
        </li>
      );
    });

  return (
    <div
      className="z-10 bg-white py-5 px-2  w-60 rounded-xl text-black
      absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      shadow-xl"
    >
      <ul className="flex flex-col items-center justify-center">{menuItems}</ul>
    </div>
  );
}

function AddIcon() {
  return (
    <div className="bg-[#EFEFEF] w-2 h-2 p-2 rounded-full flex items-center justify-center">
      +
    </div>
  );
}
