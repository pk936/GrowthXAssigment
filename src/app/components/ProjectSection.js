import { useState } from "react";
import DefaultImage from "./DefaultImage";
import { SectionTitle, SectionSubText } from "./SectionHeadings";
import SectionWrapper from "./SectionWrapper";
import AutoResizeTextarea from "./AutoResizeTextArea";
import CustomLink from "./CustomLink";

const emptyProject = [
  {
    title: "",
    link: "",
    description: "",
  },
];

export default function ProjectSection({ id, data }) {
  const [projectsList, setProjectsList] = useState(emptyProject);

  function onAddCard() {
    setProjectsList([...projectsList, emptyProject]);
  }

  const list = projectsList.map((p, i) => {
    return <ProjectCard key={i} data={p} />;
  });

  let placeholder = null;

  if (data.isEditing) {
    placeholder = <AddCard onAddCard={onAddCard} />;
  }

  return (
    <SectionWrapper id={id} data={data}>
      <SectionTitle>Projects</SectionTitle>
      <SectionSubText placeholder="Click to add subtext" />
      <div className="flex flex-wrap  gap-10">
        {list}
        {placeholder}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard() {
  return (
    <div className="flex flex-col justify-between items-start h-56 md:w-[45%] w-full border-[1px] border-solid border-[#DADADA] bg-white p-4 rounded-3xl">
      <DefaultImage />
      <input
        type="text"
        placeholder="Enter project title"
        className="text-sm text-black font-medium w-full"
      />
      <CustomLink placeholder="Enter project link" />
      <AutoResizeTextarea
        className="text-xs font-medium w-full"
        rows={5}
        placeholder="Enter description"
      />
    </div>
  );
}

function AddCard({ onAddCard }) {
  const commonClasses =
    "border-[1px] border-solid border-[#DADADA] p-4 rounded-3xl";

  return (
    <button
      onClick={onAddCard}
      className={
        " md:w-[45%] w-full h-56 flex md:flex-col items-center justify-center bg-[#EEEEEE] text-sm font-bold" +
        commonClasses
      }
    >
      <label>+</label>
      <label>Add New Card</label>
    </button>
  );
}
