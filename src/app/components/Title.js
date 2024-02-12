import DefaultImage from "./DefaultImage";

export default function Title(params) {
  return (
    <div className="flex">
      <DefaultImage />
      <input
        type="text"
        className="border-none bg-transparent px-2 font-semibold"
        placeholder="Enter site title"
      />
    </div>
  );
}
