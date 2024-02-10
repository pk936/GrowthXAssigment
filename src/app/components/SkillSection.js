import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function SkillSets({ id, data }) {
  return (
    <SectionWrapper id={id} data={data}>
      <div className="grid grid-cols-2 gap-4">
        <LeftSection />
        <RightSection />
      </div>
    </SectionWrapper>
  );
}

function LeftSection() {
  return (
    <div className="w-[359px] h-[535px] flex flex-col border-[1px] border-solid border-[#DADADA] bg-white p-4 rounded-lg">
      <h3 className="font-bold text-xl mb-4">Skills</h3>
      <textarea
        type="text"
        className="text-sm leading-6"
        placeholder="Write description here..."
        row={10}
      />
    </div>
  );
}

function RightSection() {
  const [addCard, setAddCard] = useState(false);

  function onAddCard() {
    setAddCard(true);
  }

  const commonClasses =
    "border-[1px] border-solid border-[#DADADA] p-4 rounded-lg w-[359px] h-[535px]";

  const placeholder = (
    <button
      onClick={onAddCard}
      className={
        "flex flex-col items-center justify-center bg-[#EEEEEE] text-sm font-bold" +
        commonClasses
      }
    >
      <label>+</label>
      <label>Add New Card</label>
    </button>
  );

  if (addCard) {
    return (
      <div className={"flex flex-col border-[#DADADA] " + commonClasses}>
        <input
          type="text"
          className="font-bold text-xl mb-4"
          placeholder="Untitled"
        />
        <textarea
          type="text"
          className="text-sm leading-6"
          placeholder="Write description here..."
          row={10}
        />
      </div>
    );
  }

  return placeholder;
}
