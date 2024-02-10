import { AppContext } from "../AppContext";
import LexicalEditor from "./LexicaEditor";
import { SectionSubText, SectionTitle } from "./SectionHeadings";
import SectionWrapper from "./SectionWrapper";
import { useContext, useState } from "react";

export default function AboutMeSection({ id, data }) {
  //   const [formData, setFormData] = useState(data);
  const { isEditing } = data;
  const { onAddSection } = useContext(AppContext);

  function onBlur(e) {
    // setFormData({
    //   ...formData,
    //   value: e.target.value,
    // });
  }

  return (
    <SectionWrapper id={id} data={data}>
      <SectionTitle>About Me</SectionTitle>
      {/* <LexicalEditor /> */}
      <SectionSubText onBlur={onBlur} placeholder="Start here" />
    </SectionWrapper>
  );
}
