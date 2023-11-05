"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import classNames from "classnames";

const SKILL_LST = [
  {
    skill: "React",
    image: "/images/react.webp",
  },
  {
    skill: "NextJS",
    image: "/images/nextjs.webp",
  },
  {
    skill: "TypeScript",
    image: "/images/typescript.webp",
  },
  {
    skill: "JavaScript",
    image: "/images/javascript.webp",
  },
  {
    skill: "Java",
    image: "/images/java.webp",
  },
  {
    skill: "Spring Boot",
    image: "/images/spring-boot-logo.png",
  },
  {
    skill: "AWS",
    image: "/images/aws.webp",
  },
  {
    skill: "Selenium",
    image: "/images/Selenium_Logo.png",
  },
  {
    skill: "Maven",
    image: "/images/Maven.png",
  },
  {
    skill: "C++",
    image: "/images/cpp.webp",
  },
  {
    skill: "SQL",
    image: "/images/postgresql.webp",
  },
  {
    skill: "Python",
    image: "/images/python.webp",
  },
  {
    skill: "CSS",
    image: "/images/css.webp",
  },
  {
    skill: "HTML",
    image: "/images/html.webp",
  },
  {
    skill: ".NET Framework",
    image: "/images/dotnet.webp",
  },
  {
    skill: "Docker",
    image: "/images/docker.webp",
  },
  {
    skill: "Git",
    image: "/images/git.webp",
  },
];

const TAGS = ["Personal Projects", "University Projects"];

const PROJECT_LST = [
  {
    title: "Time Management App (In Development)",
    description: [
      "Collaborating with my brother on the development of a personalised time management application.",
      "Crafting features tailored to streamline tasks, including shopping, gym routines, and to-do lists.",
      "Prioritising intuitive user interfaces and seamless experiences for enhanced organisation and productivity.",
    ],
    tags: ["React", "Next JS", "Remix", "HTML", "JavaScript", "CSS", "SQL"],
    filterTag: "Personal Projects",
  },
  {
    title: "Final Year Project: Vehicle Maintenance App",
    description: [
      "Gathered requirements through user interviews and app analysis",
      "Designed a robust system using UML diagrams, created an efficient NoSQL database, and developed a real-time maintenance storage app using Java on Firebase.",
      "Gained valuable experience in Android software development, database design, and application deployment",
    ],
    tags: [
      "Java",
      "Firebase",
      "App Development",
      "Android Studios",
      "REST API",
      "UML Diagrams",
    ],
    filterTag: "University Projects",
  },
  {
    title: "Team Project: Cloud Group Messaging App",
    description: [
      "Developed an innovative group messaging and file sharing application.",
      "Utilised AWS services to host both the application and its database.",
      "Implemented functionality enabling users to create private and public chat rooms.",
    ],
    tags: ["AWS", "HTML", "JavaScript", "CSS", "SQL"],
    filterTag: "University Projects",
  },
  {
    title: "Analysis of Packet Capture",
    description: [
      "Conducted packet capture analysis, documenting malicious activity.",
      "Identified network vulnerabilities exploited by the attacker, conducted in-depth packet analysis to recover stolen data, and generated a comprehensive recovery-focused report.",
    ],
    tags: ["Wireshark", "Linux"],
    filterTag: "University Projects",
  },
  {
    title: "Team Project: Bussiness Management System",
    description: [
      "Modelled and designed the business system, creating necessary diagrams and documentation.",
      "Developed a user-friendly GUI with Java and Swing, linked to an SQLite database using error-handling mechanisms.",
      "Thoroughly tested the system with diverse test cases to ensure robust functionality.",
    ],
    tags: ["Java", "SQL"],
    filterTag: "University Projects",
  },
  {
    title: "Robot Wars",
    description: [
      "Simulated 2D plane motion and collisions using the standard C++ library.",
      "Ensured efficient, extensible code with headers, constants, references, and pointers. ",
      "Employed vector manipulation functions like count_if and find_if. ",
    ],
    tags: ["C++"],
    filterTag: "University Projects",
  },
  {
    title: "Network Infrastructure for Community Needs",
    description: [
      "Deployed a star topology for 3 computer suites and 2 offices collaboratively with a team of 2. ",
      "Installed ports, outlets, switches, and crafted CAT6 cables, integrating trunking to the central hub, and conducted thorough continuity tests to ensure faultless completion. ",
    ],
    tags: [],
    filterTag: "Personal Projects",
  },
  {
    title: "Natural Learning AI Game",
    description: [
      "Developed a game inspired by 'Flappy Birds' using PyGame.",
      "Utilised a Natural Learning Library (NEAT) to create multiple versions of the main character and iteratively trained them across generations to learn how to play the game.",
    ],
    tags: ["Python", "PyGame", "NEAT"],
    filterTag: "Personal Projects",
  },
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState(PROJECT_LST);

  return (
    <section>
      <div className='mt-24 md:mt-36 flex justify-center'>
        <div className='w-full m-3 md:w-2/3 xl:w-1/2'>
          <h1 className='text-center text-5xl font-bold mb-12 text-black dark:text-white'>
            Projects
          </h1>
          <h2 className='text-3xl mb-4 text-black dark:text-white font-semibold'>
            Skills:
          </h2>
          <div className='flex flex-wrap content-center'>
            {SKILL_LST.map((content, index) => (
              <div
                className='text-black dark:text-white bg-[#e6e6dd] dark:bg-zinc-700 rounded-es-xl flex items-center p-2 m-2 text-center'
                key={`skill-${index}`}
              >
                <p className='mr-2'>{content.skill}</p>
                <div className='w-[17px] h-[17px]'>
                  <Image
                    src={content.image}
                    alt='logo-img'
                    width={17}
                    height={17}
                    style={{
                      width: "auto",
                      height: "auto",
                      aspectRatio: "1/1",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <h2 className='text-3xl mt-6 mb-4 text-black dark:text-white font-semibold'>
            Projects
          </h2>
          <h2 className='text-xl mb-4 text-black dark:text-white'>
            Filter Projects:
          </h2>
          <div className='flex gap-2 flex-wrap w-full'>
            {TAGS.map((tag, index) => (
              <button
                onClick={() =>
                  setProjects(
                    PROJECT_LST.filter((project) => project.filterTag === tag)
                  )
                }
                key={`tag-${index}`}
                className={classNames(
                  "text-md text-white dark:bg-orange-400 dark:text-black rounded-lg  font-semibold px-2 pt-0.5 pb-1 ",
                  !!projects.find((project) => project.filterTag === tag)
                    ? "bg-green-700 dark:bg-orange-400"
                    : "bg-zinc-700 dark:bg-zinc-400"
                )}
              >
                {tag}
              </button>
            ))}
            <button
              onClick={() => setProjects(PROJECT_LST)}
              className={classNames(
                "text-md  text-white dark:bg-orange-400 dark:text-black rounded-lg  font-semibold px-2 pt-0.5 pb-1 ",
                JSON.stringify(projects) === JSON.stringify(PROJECT_LST)
                  ? "bg-green-700 dark:bg-orange-400"
                  : "bg-zinc-700 dark:bg-zinc-400"
              )}
            >
              All
            </button>
          </div>
          <div className='flex justify-center w-full mt-1'>
            <div className='w-full'>
              {projects.map((content, index) => (
                <ProjectCard
                  {...content}
                  key={`project-${index}`}
                ></ProjectCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
