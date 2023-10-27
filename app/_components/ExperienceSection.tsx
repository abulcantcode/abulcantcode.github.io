import React from "react";
import ExperienceCard from "./ExperienceCard";

const EXP_DATA = [
  {
    title: "DevOps Intern",
    company: "Marsh",
    location: "London, UK",
    dateWorked: "09/2021 - 09/2022",
    description: "description",
    tags: ["Java", "Maven", "Docker"],
    logoSrc: "",
  },
  {
    title: "Assistant",
    company: "Training 4 U Services",
    location: "Luton, UK",
    dateWorked: "09/2021 - 09/2022",
    description: "description",
    tags: [],
    logoSrc: "",
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <div className='mt-24 md:mt-36 flex justify-center'>
        <div className='w-full m-3 md:w-2/3 xl:w-1/2'>
          {EXP_DATA.map((content, index) => (
            <ExperienceCard
              {...content}
              key={`exp-card-${index}`}
            ></ExperienceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
