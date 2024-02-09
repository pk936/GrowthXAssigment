import defaultImage from "@/app/images/default-portfolio-image.png";
import Image from "next/image";

export default function Title(params) {
  return (
    <div className="flex">
      <div className="border-2 border-dotted  border-[#AEAEAE] bg-[#EFEFEF] rounded-md p-2 ">
        <Image src={defaultImage} width={12} height={12} />
      </div>
      <input
        type="text"
        className="border-none bg-transparent px-2"
        placeholder="Enter site title"
      />
    </div>
  );
}
