"use client";

import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Highlights from "./components/Highlights";
import AddSectionButton from "./components/AddSectionButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col gap-32 justify-between p-24">
        <Title />
        <Highlights />
        <AddSectionButton />
      </main>
    </>
  );
}
