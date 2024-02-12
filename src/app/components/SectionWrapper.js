import { useContext } from "react";
import { AppContext } from "../AppContext";
import SubmitButton from "./SubmitButton";

export default function SectionWrapper({ id, data, children }) {
  const { isEditing } = data;
  const { onAddSection } = useContext(AppContext);

  function onSave() {
    onAddSection(id, {
      isEditing: false,
    });
  }

  function onCancel() {
    onAddSection(id, undefined);
  }

  const disable = isEditing
    ? "pointer-events-auto border-[1px]"
    : "pointer-events-none border-none";

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
          " container border-solid border-[#828282] rounded-lg mx-auto p-8"
        }
      >
        {children}
      </div>
    </div>
  );
}
