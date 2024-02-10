import { useState } from "react";
import DefaultImage from "./DefaultImage";
import { SectionTitle, SectionSubText } from "./SectionHeadings";
import SectionWrapper from "./SectionWrapper";

const emptyExperience = [
  {
    title: "",
    link: "",
    description: "",
  },
];

export default function ExperienceSection({ id, data }) {
  const [expList, setExpList] = useState(emptyExperience);

  function onAddCard() {
    setExpList([...expList, emptyExperience]);
  }

  const list = expList.map((p, i) => {
    return <ExpCard key={i} data={p} />;
  });

  return (
    <SectionWrapper id={id} data={data}>
      <SectionTitle>Experience</SectionTitle>
      <SectionSubText placeholder="Click to add subtitle" />

      <div className="flex flex-col gap-10">
        {list}
        <AddCard onAddCard={onAddCard} />
      </div>
    </SectionWrapper>
  );
}

function ExpCard({ title, link, desc }) {
  return (
    <div className="shadow-lg flex flex-col gap-5 bg-white border-[1px] border-solid border-[#DADADA] p-4 rounded-3xl">
      <div className="flex items-center gap-5 ">
        <div>
          <DefaultImage />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Enter company title"
            className=" text-black font-medium"
          />
          <input
            type="text"
            placeholder="Enter designation"
            className="text-sm text-gray-400 font-medium  "
          />
        </div>
      </div>

      <div className="flex gap-10">
        <input
          type="text"
          placeholder="+ Add location"
          className="text-sm  font-medium  "
        />
        <input
          type="text"
          placeholder="+ Add timeline"
          className="text-sm font-medium  "
        />
      </div>

      <div>
        <textarea
          rows={5}
          className="w-full"
          placeholder="Add description..."
        />
      </div>
    </div>
  );
}

function AddCard({ onAddCard }) {
  const commonClasses =
    "border-[1px] border-solid border-[#DADADA] p-4 rounded-xl";

  return (
    <button
      onClick={onAddCard}
      className={
        "flex justify-center bg-[#EEEEEE] text-sm font-bold" + commonClasses
      }
    >
      <label>+ Add Next</label>
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
