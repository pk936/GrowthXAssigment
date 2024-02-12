import { useContext } from "react";
import { AppContext } from "../AppContext";
import SubmitButton from "./SubmitButton";

export default function SectionWrapper({ id, data, children }) {
  const { isEditing } = data;
  const { onAddSection, isPreview } = useContext(AppContext);

  function onSave() {
    onAddSection(id, {
      isEditing: false,
    });
  }

  function onCancel() {
    onAddSection(id, undefined);
  }

  const disable = isEditing
    ? "pointer-events-auto border-[1px] md:p-8 p-4"
    : "pointer-events-none border-none";

  if (isPreview && isEditing) {
    return null;
  }

  return (
    <div id={id} className="flex flex-col gap-4">
      {isEditing && (
        <div className="flex flex-row-reverse gap-4 text-xs">
          <SubmitButton label="Save" onClick={onSave} />
          <button onClick={onCancel}>Cancel</button>
        </div>
      )}

      <div
        className={
          disable +
          " container border-solid border-[#828282] rounded-lg mx-auto"
        }
      >
        {children}
      </div>
    </div>
  );
}
