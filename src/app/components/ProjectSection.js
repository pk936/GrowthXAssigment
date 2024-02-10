import { useState } from "react";
import DefaultImage from "./DefaultImage";
import { SectionTitle, SectionSubText } from "./SectionHeadings";
import SectionWrapper from "./SectionWrapper";

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

  return (
    <SectionWrapper id={id} data={data}>
      <SectionTitle>Projects</SectionTitle>
      <SectionSubText placeholder="Click to add subtitle" />
      <div className="flex flex-wrap  gap-10">
        {list}
        <AddCard onAddCard={onAddCard} />
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ title, link, desc }) {
  return (
    <div className="flex flex-col justify-between h-56 md:w-[45%] w-full border-[1px] border-solid border-[#DADADA] bg-white p-4 rounded-3xl">
      <DefaultImage />
      <input
        type="text"
        placeholder="Enter project title"
        className="text-sm text-black font-medium"
      />
      <ProjectLink />
      <textarea
        className="text-xs font-medium"
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
        " w-[45%] h-56 flex flex-col items-center justify-center bg-[#EEEEEE] text-sm font-bold" +
        commonClasses
      }
    >
      <label>+</label>
      <label>Add New Card</label>
    </button>
  );
}

function ProjectLink() {
  const [addLink, setAddLink] = useState();

  if (addLink)
    return (
      <input
        type="text"
        placeholder="Enter project link"
        className="text-sm font-medium"
      />
    );

  return (
      <button
        onClick={() => setAddLink(true)}
        className="self-start text-sm text-[#0085FF] font-medium "
      >
        Add link
      </button>
  );
}
