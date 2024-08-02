"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Front-end",
    id: "front-end",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>Material-UI</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Redux</li>
        <li>Django</li>
        <li>Python</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Firebase</li>
        <li>AWS</li>
      </ul>
    ),
  },
  {
    title: "Database",
    id: "database",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>SQLite</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Git</li>
        <li>VS Code</li>
        <li>Docker</li>
        <li>Jenkins</li>
        <li>Postman</li>
        <li>Figma</li>
        <li>Jira</li>
        <li>Vercel</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("front-end");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="rounded-full md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-full" src="/images/about-image.png" alt="About Me image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex font-barlow flex-col space-y-4 h-full">
          <h2 className="text-4xl font-normal text-white mb-4">ABOUT ME</h2>
          <p className="text-sm font-light lg:text-lg">
            I am a full stack software developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with some frameworks and tools listed below.
          </p>
          <p className="text-sm font-light lg:text-lg">
            I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row font-barlow font-light justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("front-end")}
              active={tab === "front-end"}
            >
              {" "}
              Front-end{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("database")}
              active={tab === "database"}
            >
              {" "}
              Database{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;