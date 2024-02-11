"use client";
import Image from "next/image";
import vector from "@/app/images/Vector.png";
import Menu from "./Menu";
import SubmitButton from "./SubmitButton";

export default function NavBar(params) {
  //   const menuItems = sectionsList.map(({ label, href }, i) => {
  //     return (
  //       <li key={i} className="w-full text-start hover:bg-[#EFEFEF] rounded-md">
  //         <a href={href} className="block p-2 font-bold">
  //           {label}
  //         </a>
  //       </li>
  //     );
  //   });

  return (
    <nav className="hidden md:flex bg-[#232323] h-14 items-center px-4  text-white text-xs  gap-40">
      <div className="flex items-center gap-3">
        <Image src={vector} width={30} height={13} />
        <label className="text-sm">Site Builder</label>
      </div>
      <div className="flex gap-20 flex-1">
        <Menu label="Sections" />
        <Menu label="Preferences" />
      </div>
      <div className="flex gap-5 justify-self-end items-center">
        <button>Preview</button>
        <SubmitButton label="Publish" />
      </div>
    </nav>
  );
}
