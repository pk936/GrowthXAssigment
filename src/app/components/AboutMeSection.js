import { AppContext } from "../AppContext";
import Editor from "./lexicalEditor/Editor";
import { SectionSubText, SectionTitle } from "./SectionHeadings";
import SectionWrapper from "./SectionWrapper";
import { useContext, useState } from "react";

export default function AboutMeSection({ id, data }) {
  //   const [formData, setFormData] = useState(data);
  const { isEditing } = data;
  const { onAddSection } = useContext(AppContext);

  const [html, setHtml] = useState("");

  function onChange(html) {
    setHtml(html);
  }

  function onBlur(e) {
    // setFormData({
    //   ...formData,
    //   value: e.target.value,
    // });
  }

  const parser = new DOMParser();

  return (
    <SectionWrapper id={id} data={data}>
      <SectionTitle>About Me</SectionTitle>
      <Editor isEditing={isEditing} onChange={onChange} />
      {}
      {/* <SectionSubText onBlur={onBlur} placeholder="Start here" /> */}
    </SectionWrapper>
  );
}
