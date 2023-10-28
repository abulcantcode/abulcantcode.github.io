import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const SKILL_LST = [
  {
    skill: "Java",
    image: "/images/abul.png",
  },
  {
    skill: "C++",
    image: "/images/abul.png",
  },
  {
    skill: "SQL",
    image: "/images/abul.png",
  },
];

const TAGS = ["TAG 1", "HELLO TAG 2", "TAG 3", "HELLO I AM THE 4TH TAG"];

const PROJECT_LST = [
  {
    title: "Final Year Project: Vehicle Maintenance App",
    description: [
      "Gathered requirements through user interviews and app analysis",
      "Designed a robust system using UML diagrams, created an efficient NoSQL database, and developed a real-time maintenance storage app using Java on Firebase.",
      "Gained valuable experience in Android software development, database design, and application deployment",
    ],
    tags: [],
  },
  {
    title: "Analysis of Packet Capture",
    description: [
      "Conducted packet capture analysis, documenting malicious activity.",
      "Identified network vulnerabilities exploited by the attacker, conducted in-depth packet analysis to recover stolen data, and generated a comprehensive recovery-focused report.",
    ],
    tags: [""],
  },
  {
    title: "Team Project",
    description: [
      "Modelled and designed the business system, creating necessary diagrams and documentation.",
      "Developed a user-friendly GUI with Java and Swing, linked to an SQLite database using error-handling mechanisms.",
      "Thoroughly tested the system with diverse test cases to ensure robust functionality.",
    ],
    tags: [],
  },
  {
    title: "Robot Wars",
    description: [
      "Simulated 2D plane motion and collisions using the standard C++ library.",
      "Ensured efficient, extensible code with headers, constants, references, and pointers. ",
      "Employed vector manipulation functions like count_if and find_if. ",
    ],
    tags: [],
  },
  {
    title: "Network Infrastructure for Community Needs",
    description: [
      "Deployed a star topology for 3 computer suites and 2 offices collaboratively with a team of 2. ",
      "Installed ports, outlets, switches, and crafted CAT6 cables, integrating trunking to the central hub, and conducted thorough continuity tests to ensure faultless completion. ",
    ],
    tags: [],
  },
];

const ProjectsSection = () => {
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
          <div className='flex'>
            {SKILL_LST.map((content, index) => (
              <div
                className='text-black dark:text-white bg-[#e6e6dd] dark:bg-zinc-700 rounded-es-xl w-fit h-fit flex justify-center p-2 m-2'
                key={`skill-${index}`}
              >
                <p className='mr-2'>{content.skill}</p>
                <Image
                  src={content.image}
                  alt='logo-img'
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </div>
          <h2 className='text-3xl mt-6 mb-4 text-black dark:text-white font-semibold'>
            Projects
          </h2>
          <h2 className='text-xl mb-4 text-black dark:text-white'>
            Filter Projects:
          </h2>
          <div className='flex gap-2 flex-wrap w-full mb-3'>
            {TAGS.map((tag, index) => (
              <p
                key={`tag-${index}`}
                className='text-md bg-green-700 text-white dark:bg-orange-400 dark:text-black rounded-lg  font-semibold px-2 pt-0.5 pb-1 '
              >
                {tag}
              </p>
            ))}
          </div>
          <div className='flex justify-center w-full mt-1'>
            <div className='w-full'>
              {PROJECT_LST.map((content, index) => (
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
