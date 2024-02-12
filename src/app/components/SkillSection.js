import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Editor from "./lexicalEditor/Editor";
import AutoResizeTextarea from "./AutoResizeTextArea";

export default function SkillSets({ id, data }) {
  return (
    <SectionWrapper id={id} data={data}>
      <div className="flex flex-col md:flex-row justify-between md:gap-4">
        <LeftSection isEditing={data.isEditing} title="Skills" />
        <RightSection isEditing={data.isEditing}>
          <LeftSection isEditing={data.isEditing} />
        </RightSection>
      </div>
    </SectionWrapper>
  );
}

function LeftSection({ isEditing, title }) {
  return (
    <div className="mr-4 md:w-1/2 md:h-[535px] w-full flex flex-col border-[1px] border-solid border-[#DADADA] bg-white p-4 rounded-3xl">
      {title ? (
        <h3 className="font-bold text-xl mb-4">{title}</h3>
      ) : (
        <input
          type="text"
          className="font-bold text-xl mb-4"
          placeholder="Untitled"
        />
      )}
      {/* <AutoResizeTextarea
        className="text-sm leading-6"
        placeholder="Write description here..."
        row={10}
      /> */}
      <Editor isEditing={isEditing} placeholder="Write description here..." />
    </div>
  );
}

function RightSection({ children, isEditing }) {
  const [addCard, setAddCard] = useState(false);

  function onAddCard() {
    setAddCard(true);
  }

  const commonClasses =
    "ml-4 border-[1px] border-solid border-[#DADADA] p-4 rounded-3xl md:w-1/2 md:h-[535px] w-full";

  const placeholder = (
    <button
      onClick={onAddCard}
      className={
        "flex flex-col  items-center justify-center bg-[#EEEEEE] text-sm font-bold" +
        commonClasses
      }
    >
      <label>+</label>
      <label>Add New Card</label>
    </button>
  );

  if (!addCard && isEditing) {
    return placeholder;
  }

  if (addCard || (addCard && !isEditing)) {
    return children;
  }

  return null;
}
