import defaultImage from "@/app/images/default-portfolio-image.png";
import Image from "next/image";
import DefaultImage from "./DefaultImage";

export default function Title(params) {
  return (
    <div className="flex">
      <DefaultImage />
      <input
        type="text"
        className="border-none bg-transparent px-2"
        placeholder="Enter site title"
      />
    </div>
  );
}
