import defaultImage from "@/app/images/default-portfolio-image.png";
import Image from "next/image";

export default function DefaultImage() {
  return (
    <div className="self-start border-2 border-dotted  border-[#AEAEAE] bg-[#EFEFEF] rounded-md p-2 ">
      <Image src={defaultImage} width={12} height={12} />
    </div>
  );
}
