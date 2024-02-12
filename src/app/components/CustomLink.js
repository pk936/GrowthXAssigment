import { useState } from "react";

export default function CustomLink({ placeholder }) {
  const [addLink, setAddLink] = useState();

  if (addLink)
    return (
      <input
        type="text"
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
