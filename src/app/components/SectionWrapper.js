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

  return (
    <div className="flex flex-col gap-4">
      {isEditing && (
        <div className="flex flex-row-reverse gap-4 text-xs">
          <SubmitButton label="Save" onClick={onSave} />
          <button onClick={onCancel}>Cancel</button>
        </div>
      )}

      <div className="border-[1px] border-solid border-[#828282] rounded-lg p-8">
        {children}
      </div>
    </div>
  );
}
