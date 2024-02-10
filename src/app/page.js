"use client";

import NavBar from "./components/NavBar";
import Title from "./components/Title";
import IntroSection from "./components/IntroSection";
import AddSectionButton from "./components/AddSectionButton";
import AboutMeSection from "./components/AboutMeSection";
import Context, { AppContext } from "./AppContext";
import { useContext } from "react";
import SkillSection from "./components/SkillSection";
import Avatar from "./components/Avatar";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";

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
  const { aboutYou, skillSet, projects, exp, cta } = sectionsList.data;

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col gap-32 justify-between p-24">
        <Title />
        <IntroSection>
          {aboutYou && <AboutMeSection id="aboutYou" data={aboutYou} />}
          {skillSet && <SkillSection id="skillSet" data={skillSet} />}
          {projects && <ProjectSection id="projects" data={projects} />}
          {exp && <ExperienceSection id="projects" data={exp} />}
          {cta && <ProjectSection id="projects" data={cta} />}

          {!sectionsList.isAnySectionEditing && <AddSectionButton />}
        </IntroSection>
      </main>
    </>
  );
}
