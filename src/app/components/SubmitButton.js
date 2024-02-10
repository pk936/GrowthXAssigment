export default function SubmitButton({ label, theme = "blue", onClick }) {
  const cssClasses =
    theme === "blue"
      ? "bg-[#0085FF] text-white "
      : "bg-white border-[1px] border-solid border-black text-black";
  return (
    <button
      onClick={onClick}
      className={cssClasses + " px-4 py-2 rounded-full "}
    >
      {label}
    </button>
  );
}
