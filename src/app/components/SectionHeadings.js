import AutoResizeTextarea from "./AutoResizeTextArea";

export function SectionTitle({ children }) {
  return <h3 className="font-bold md:text-3xl text-2xl mb-4">{children}</h3>;
}

export function SectionSubText({ placeholder }) {
  return (
    <AutoResizeTextarea
      // rows={3}
      className="border-none bg-transparent w-full mb-10"
      placeholder={placeholder}
    />
  );
}
