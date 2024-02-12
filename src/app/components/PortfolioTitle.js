import AutoResizeTextarea from "./AutoResizeTextArea";
import DefaultImage from "./DefaultImage";

export default function PortfolioTitle(params) {
  return (
    <div className="flex items-center">
      <DefaultImage />
      <AutoResizeTextarea
        className="border-none bg-transparent px-2 font-semibold"
        placeholder="Enter site title"
      />
    </div>
  );
}
