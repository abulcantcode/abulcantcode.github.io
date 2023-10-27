import React from "react";
import ExperienceCard from "./ExperienceCard";

const EXP_DATA = [
  {
    title: "Tech Experience",
    content: [
      {
        title: "DevOps Intern",
        company: "Marsh",
        location: "London, UK",
        dateWorked: "09/2021 - 09/2022",
        description: "description",
        tags: ["Java", "Maven", "Docker"],
        logoSrc: "",
      },
    ],
  },
  {
    title: "Education",
    content: [
      {
        title: "BSc Computer Science with Placement",
        company: "City, University of London",
        location: "London, UK",
        dateWorked: "09/2019 - 09/2023",
        description: "description",
        tags: [],
        logoSrc: "",
      },
    ],
  },
  {
    title: "Experience",
    content: [
      {
        title: "Assistant",
        company: "Training 4 U Services",
        location: "Luton, UK",
        dateWorked: "09/2021 - 09/2022",
        description: "description",
        tags: [],
        logoSrc: "",
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <div className='mt-24 md:mt-36 flex justify-center'>
        <div className='w-full m-3 md:w-2/3 xl:w-1/2'>
          <h1 className='text-center text-5xl font-bold mb-12 text-black dark:text-white'>
            Experience
          </h1>
          <h2 className='text-3xl mb-6 text-black dark:text-white font-semibold'>
            Technical Experience
          </h2>
          {EXP_DATA.find(
            ({ title }) => title === "Tech Experience"
          )?.content.map((content, index) => (
            <ExperienceCard
              {...content}
              key={`exp-card-${index}`}
            ></ExperienceCard>
          ))}
          <h2 className='text-3xl mb-6 text-black dark:text-white font-semibold'>
            Education
          </h2>
          {EXP_DATA.find(({ title }) => title === "Education")?.content.map(
            (content, index) => (
              <ExperienceCard
                {...content}
                key={`exp-card-${index}`}
              ></ExperienceCard>
            )
          )}
          <h2 className='text-3xl mb-6 text-black dark:text-white font-semibold'>
            Other Experience
          </h2>
          {EXP_DATA.find(({ title }) => title === "Experience")?.content.map(
            (content, index) => (
              <ExperienceCard
                {...content}
                key={`exp-card-${index}`}
              ></ExperienceCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
