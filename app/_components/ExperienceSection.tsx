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
        description:
          "In my professional journey, I played a pivotal role in the development of ET2, an internationally used insurance broking web application. Collaborating closely with stakeholders, I meticulously designed requirements and implemented bug fixes using the Test-Driven Development (TDD) approach. My expertise extended to integrating external web services through REST APIs and Maven, enhancing the application's functionality and user experience." +
          "Additionally, I took charge of ensuring build stability by implementing automated tests using tools like Selenium, Cucumber, and Docker. My proactive involvement in our Agile development team included active participation in sprint retrospectives, proposing process enhancements, assisting the team with build issues, and meticulously reviewing pull requests. This experience not only showcased my technical proficiency but also demonstrated my dedication to collaborative problem-solving and delivering exceptional results.",
        tags: ["Java", "Maven", "Docker"],
        logoSrc: "/images/marsh-logo.png",
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
        description:
          "During my university journey, I graduated with a 2:1. My coursework included a diverse range of relevant modules, each contributing significantly to my skill set and knowledge base. In my final year, i completed a dissertation where i was able hone my problem-solving abilities and apply theoretical knowledge to real-world scenarios. My coursework also included in-depth studies in areas such as Data Structures & Algorithms, Functional Programming, and programming languages like C++ and Java. Additionally, I excelled in Mathematics for Computing, showcasing my ability to grasp complex concepts." +
          "These academic experiences not only reflect my dedication to learning but also demonstrate my commitment to understanding the intricacies of computer science. They provided me with valuable problem-solving skills and a deep understanding of programming languages and algorithms, which have been instrumental in my career in technology.",
        tags: [],
        logoSrc: "/images/City-Uni.png",
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
        dateWorked: "07/2018 - 04/2019",
        description:
          "At Training 4 U Services, I served as an Assistant, juggling multiple roles to ensure the organization's success. I excelled at the front desk, fostering strong customer relations and handling inquiries effectively. Additionally, I taught ESOL and functional skill maths and English, creating essential teaching materials that resulted in a 100% qualification rate for my students. My versatility extended to event promotion and course advertising, collaborating closely with stakeholders to drive organizational growth.",
        tags: [],
        logoSrc: "/images/abul.png",
      },
      {
        title: "Waiter",
        company: "Venue Central",
        location: "Luton, UK",
        dateWorked: "09/2011 - 06/2016",
        description:
          "As a Waiter at Venue Central, I provided exceptional customer service, creating a welcoming atmosphere for patrons. I supervised a team of servers, meticulously organizing their schedules and duties. I also played a crucial role in training new staff, emphasizing attention to detail and industry best practices.",
        tags: [],
        logoSrc: "/images/vc.png",
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
          <div className='mb-8'>
            {EXP_DATA.find(
              ({ title }) => title === "Tech Experience"
            )?.content.map((content, index) => (
              <ExperienceCard
                {...content}
                key={`exp-card-${index}`}
              ></ExperienceCard>
            ))}
          </div>
          <h2 className='text-3xl mb-6 text-black dark:text-white font-semibold'>
            Education
          </h2>
          <div className='mb-8'>
            {EXP_DATA.find(({ title }) => title === "Education")?.content.map(
              (content, index) => (
                <ExperienceCard
                  {...content}
                  key={`exp-card-${index}`}
                ></ExperienceCard>
              )
            )}
          </div>
          <h2 className='text-3xl mb-6 text-black dark:text-white font-semibold'>
            Other Experience
          </h2>
          <div className='mb-8'>
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
      </div>
    </section>
  );
};

export default ExperienceSection;
