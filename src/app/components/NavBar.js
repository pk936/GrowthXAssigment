"use client";
import Image from "next/image";
import vector from "@/app/images/Vector.png";
import Menu from "./Menu";
import SubmitButton from "./SubmitButton";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export default function NavBar(params) {
  const { onTogglePreview, isPreview } = useContext(AppContext);

  //   const menuItems = sectionsList.map(({ label, href }, i) => {
  //     return (
  //       <li key={i} className="w-full text-start hover:bg-[#EFEFEF] rounded-md">
  //         <a href={href} className="block p-2 font-bold">
  //           {label}
  //         </a>
  //       </li>
  //     );
  //   });

  if (isPreview) {
    return (
      <div className="flex justify-center  mt-2">
        <SubmitButton
          onClick={onTogglePreview}
          className="border-[1px] border-solid text-sm rounded-full"
          label="Exit Preview"
        />
      </div>
    );
  }

  return (
    <nav className="flex bg-[#232323] h-14 items-center px-4  text-white text-xs  md:gap-40">
      <div className="hidden md:flex items-center gap-3">
        <Image src={vector} width={30} height={13} />
        <label className="text-sm">Site Builder</label>
      </div>
      <div className="flex gap-20 flex-1">
        <Menu label="Sections" />
        <Menu label="Preferences" />
      </div>
      <div className="flex gap-5 justify-self-end items-center">
        <button onClick={onTogglePreview}>Preview</button>
        <SubmitButton label="Publish" />
      </div>
    </nav>
  );
}
