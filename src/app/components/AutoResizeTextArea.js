import {  useRef, useState } from "react";

function AutoResizeTextarea(props) {
  const [content, setContent] = useState("");
  const textArea = useRef();

  const handleTextareaChange = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    setContent(event.target.value); // Update content state
  };

  return (
    <textarea
      ref={textArea}
      value={content}
      onChange={handleTextareaChange}
      {...props}
    />
  );
}

export default AutoResizeTextarea;
