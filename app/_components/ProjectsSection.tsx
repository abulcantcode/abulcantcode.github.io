import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const SKILL_LST = [
  {
    skill: "Java",
    image: "",
  },
  {
    skill: "C++",
    image: "",
  },
  {
    skill: "SQL",
    image: "",
  },
];

const TAGS = ["TAG 1", "HELLO TAG 2", "TAG 3", "HELLO I AM THE 4TH TAG"];

const PROJECT_LST = [
  {
    title: "Java",
    description: ["x"],
    tags: [],
  },
  {
    title: "Java",
    description: ["y"],
    tags: [""],
  },
  {
    title: "Java",
    description: ["z"],
    tags: [""],
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
                  src='/images/abul.png'
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
          <div className='flex justify-center w-full'>
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
