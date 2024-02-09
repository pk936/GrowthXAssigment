"use client";

import Image from "next/image";
import defaultImage from "@/app/images/default-portfolio-image.png";
import { useState } from "react";

export default function Highlights() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-48 items-center">
        <div className="flex flex-col gap-10">
          <Avatar />
        </div>
        <div className="w-1/2 flex flex-col">
          <input
            type="text"
            className="border-none bg-transparent px-2 text-7xl"
            placeholder="Click to add title"
          />

          <input
            type="text"
            className="border-none bg-transparent px-2 text-lg"
            placeholder="Click to add subtitle"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="border-none bg-transparent px-2 font-semibold"
          placeholder="Your name here"
        />
        <input
          type="text"
          className="border-none bg-transparent px-2 text-sm"
          placeholder="Enter email"
        />
      </div>
    </div>
  );
}

function Avatar() {
  const [file, setFile] = useState();

  function onUpload(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
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
        className="overflow-hidden relative cursor-pointer border-[1px] border-dotted border-[#AEAEAE] bg-[#EFEFEF] rounded-2xl w-72 h-72 flex justify-center items-center"
      >
        <Image
          src={file || defaultImage}
          objectFit={file ? "cover" : "scale-down"}
          fill
        />
      </label>
    </>
  );
}
