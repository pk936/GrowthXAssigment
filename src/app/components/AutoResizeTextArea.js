import { useContext, useRef, useState } from "react";
import { AppContext } from "../AppContext";

function AutoResizeTextarea(props) {
  const { isPreview } = useContext(AppContext);
  const [content, setContent] = useState("");
  const textArea = useRef();

  const handleTextareaChange = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    setContent(event.target.value); // Update content state
  };

  if (isPreview) return <div className={props.className}>{content}</div>;

  return (
    <textarea
      rows={1}
      ref={textArea}
      value={content}
      onChange={handleTextareaChange}
      {...props}
    />
  );
}

export default AutoResizeTextarea;
