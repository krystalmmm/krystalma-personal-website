"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Backend REST API",
    description: "Build backend REST API with Python and Django",
    image: "/images/project-logos/rest-api-logo.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krystalmmm",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Hotel Booking App",
    description: "Full stack app with Next.js & Typescript, CI/CD with Jenkins & Docker",
    image: "/images/project-logos/hotel-logo.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krystalmmm",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Serverless REST API",
    description: "Build serverles REST API using the serverless framework",
    image: "/images/project-logos/serverless-logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krystalmmm",
    previewUrl: "https://github.com/krystalmmm",
  },
  {
    id: 4,
    title: "Distributed Systems",
    description: "Distributed File Storage in GO",
    image: "/images/project-logos/distrbuted-logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krystalmmm",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="grid">
          <h2 className="text-center justify-center text-4xl font-barlow font-normal text-white mt-4 mb-4 md:mb-12">
            THINGS I&apos;VE MADE
          </h2>
        </div>
        <div className="grid">
          <p className="text-white text-center text-sm col-span-1 font-barlow font-light mb-8 sm: justify-center lg:text-lg">
            I’ve worked on lots of little projects over the years here are just some of them. You are more than welcome to visit my GitHub, check out more interesting projects.
          </p>
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
        <div className="col-start-2 mt-8 mb-8 py-8 px-8">
          <a type="button" href="https://github.com/krystalmmm" className="px-6 py-3 w-full font-barlow sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-slate-600">Visit Full Archive</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;