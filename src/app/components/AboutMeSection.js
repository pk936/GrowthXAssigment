import { AppContext } from "../AppContext";
import Editor from "./lexicalEditor/Editor";
import { SectionSubText, SectionTitle } from "./SectionHeadings";
import SectionWrapper from "./SectionWrapper";
import { useContext, useState } from "react";

export default function AboutMeSection({ id, data }) {
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
      <SectionTitle>About Me</SectionTitle>
      <Editor isEditing={isEditing} placeholder="Start writing..." />
    </SectionWrapper>
  );
}
