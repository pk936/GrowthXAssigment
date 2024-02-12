"use client";

import NavBar from "./components/NavBar";
import Title from "./components/Title";
import IntroSection from "./components/IntroSection";
import AddSectionButton from "./components/AddSectionButton";
import AboutMeSection from "./components/AboutMeSection";
import Context, { AppContext } from "./AppContext";
import { useContext } from "react";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import ConectSection from "./components/ConnectSection";

export default function App() {
  return (
    <Context>
      <Layout />
    </Context>
  );
}

function Layout() {
  const { sectionsList } = useContext(AppContext);
  console.log("sectionsList", sectionsList);
  const sections = [];

  for (const key in sectionsList.data) {
    if (Object.hasOwnProperty.call(sectionsList.data, key)) {
      const sectionData = sectionsList.data[key];

      if (sectionData) {
        sections.push(getSectionElement(key, sectionData));
      }
    }
  }

  function getSectionElement(key, sectionData) {
    switch (key) {
      case "aboutYou":
        return (
          <AboutMeSection key="aboutYou" id="aboutYou" data={sectionData} />
        );

      case "skillSet":
        return <SkillSection key="skillSet" id="skillSet" data={sectionData} />;

      case "projects":
        return (
          <ProjectSection key="projects" id="projects" data={sectionData} />
        );

      case "exp":
        return <ExperienceSection key="exp" id="exp" data={sectionData} />;

      case "cta":
        return <ConectSection key="cta" id="cta" data={sectionData} />;
    }
  }

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col md:gap-32 gap-16 justify-between md:p-24 p-4">
        <Title />
        <IntroSection>
          {sections}
          {!sectionsList.isAnySectionEditing && <AddSectionButton />}
          {sectionsList.length === 5 && (
            <label className="text-sm font-semibold">
              All sections added! Looks good.
            </label>
          )}
        </IntroSection>
      </main>
    </>
  );
}
