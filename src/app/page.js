"use client";

import NavBar from "./components/NavBar";
import PortfolioTitle from "./components/PortfolioTitle";
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
  const { sectionsList, isPreview } = useContext(AppContext);
  console.log("sectionsList", sectionsList);
  const sections = [];

  Object.keys(sectionsList.data).map((sectionId) => {
    const sectionData = sectionsList.data[sectionId];
    if (sectionData) {
      sections.push(getSectionElement(sectionId, sectionData));
    }
  });

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

  console.log("sectionsList", sections.length);

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col md:gap-32 gap-16 justify-between md:p-24 p-4">
        <PortfolioTitle />
        <IntroSection>
          {sections}
          {!sectionsList.isAnySectionEditing && sections.length < 5 && (
            <AddSectionButton />
          )}
          {sections.length === 5 && !isPreview && (
            <label className="text-center text-sm font-semibold">
              All sections added! Looks good.
            </label>
          )}
        </IntroSection>
      </main>
    </>
  );
}
