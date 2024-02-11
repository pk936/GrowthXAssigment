"use client";

import Image from "next/image";
import defaultImage from "@/app/images/default-portfolio-image.png";
import { useContext, useState } from "react";
import { AppContext } from "../AppContext";

export default function Avatar() {
  const [file, setFile] = useState();

  function onUpload(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <input
        type="file"
        multiple="false"
        accept="image/*"
        id="uploadImgBtn"
        onChange={onUpload}
        hidden
      />
      <label
        for="uploadImgBtn"
        className="overflow-hidden relative cursor-pointer border-[1px] border-dotted border-[#AEAEAE] bg-[#EFEFEF] rounded-2xl md:w-72 md:h-72 h-64 w-full flex justify-center items-center"
      >
        <Image
          src={file || defaultImage}
          objectFit={file ? "cover" : "scale-down"}
          fill
        />
      </label>
    </div>
  );
}
