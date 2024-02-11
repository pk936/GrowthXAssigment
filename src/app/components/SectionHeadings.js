export function SectionTitle({ children }) {
  return <h3 className="font-bold md:text-3xl text-2xl mb-4">{children}</h3>;
}

export function SectionSubText({ placeholder }) {
  return (
    <textarea
      rows={3}
      type="text"
      className="border-none bg-transparent md:text-lg w-full"
      placeholder={placeholder}
    />
  );
}
