import { useState } from "react";
import AutoResizeTextarea from "./AutoResizeTextArea";

export default function CustomLink({ placeholder }) {
  const [addLink, setAddLink] = useState();

  if (addLink)
    return (
      <AutoResizeTextarea
        placeholder={placeholder}
        className="text-sm text-[#999999] font-medium"
      />
    );

  return (
    <button
      onClick={() => setAddLink(true)}
      className=" text-sm text-[#0085FF] font-medium "
    >
      Add link
    </button>
  );
}
