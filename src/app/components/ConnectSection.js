import { AppContext } from "../AppContext";
import CustomLink from "./CustomLink";
import DefaultImage from "./DefaultImage";
import Editor from "./lexicalEditor/Editor";
import { SectionSubText, SectionTitle } from "./SectionHeadings";
import SectionWrapper from "./SectionWrapper";
import { useContext, useState } from "react";

export default function ConnectSection({ id, data }) {
  console.log("data", data);

  //   const [formData, setFormData] = useState(data);
  const { isEditing } = data;

  function onBlur(e) {
    // setFormData({
    //   ...formData,
    //   value: e.target.value,
    // });
  }

  return (
    <SectionWrapper id={id} data={data}>
      <SectionTitle>Let&apos;s Connect</SectionTitle>
      <SectionSubText placeholder="Enter subtext here" />
      <div className="flex items-center gap-2">
        <DefaultImage />
        <CustomLink placeholder="Add link" />
      </div>
    </SectionWrapper>
  );
}
