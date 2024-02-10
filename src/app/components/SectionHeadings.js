export function SectionTitle({ children }) {
  return <h3 className="font-bold text-3xl mb-4">{children}</h3>;
}

export function SectionSubText({ placeholder }) {
  return (
    <textarea
      rows={3}
      type="text"
      className="border-none bg-transparent text-lg w-full"
      placeholder={placeholder}
    />
  );
}
