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
        description: [
          "Played a pivotal role in developing ET2, an internationally used insurance broking web application.",
          "Collaborated closely with stakeholders to design requirements and implement bug fixes using the Test-Driven Development (TDD) approach.",
          "Expertise in integrating external web services through REST APIs and Maven, enhancing application functionality and user experience.",
          "Ensured build stability by implementing automated integration tests using tools like Selenium, Cucumber, and Docker.",
          "Actively participated in Agile development team activities, including sprint retrospectives, proposing process enhancements, assisting with build issues, and reviewing pull requests.",
        ],
        tags: [
          "Java",
          "Maven",
          "Docker",
          "Spring Boot",
          "Selenium",
          "Agile",
          "TDD",
        ],
        logoSrc: "/images/marsh-logo.png",
        imgW: 80,
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
        description: [
          "Graduated with a 2:1 during my university journey.",
          "Completed diverse range of relevant modules enhancing my skill set and knowledge.",
          "Successfully completed a dissertation, honing problem-solving abilities in real-world contexts.",
          "In-depth studies in areas including Data Structures & Algorithms, Functional Programming, C++, and Java.",
          "Gained valuable problem-solving skills and deep understanding of programming languages and algorithms, instrumental in my technology career.",
        ],
        tags: [],
        logoSrc: "/images/City-Uni.png",
        imgW: 100,
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
        description: [
          "Served as an Assistant at Training 4 U Services, excelling in various roles for organisational success.",
          "Fostered strong customer relations and effectively handled inquiries at the front desk.",
          "Taught ESOL, functional skill Maths, and English, achieving a 100% qualification rate for students.",
          "Created essential teaching materials, contributing to high student success rates.",
          "Demonstrated versatility in event promotion and course advertising efforts.",
          "Collaborated closely with stakeholders to drive organisational growth initiatives.",
        ],
        tags: [],
        logoSrc: "/images/t4us-logo.png",
        imgW: 100,
      },
      {
        title: "Waiter",
        company: "Venue Central",
        location: "Luton, UK",
        dateWorked: "09/2011 - 06/2016",
        description: [
          "Provided exceptional customer service and created a welcoming atmosphere for patrons as a Waiter at Venue Central.",
          "Supervised a team of servers, meticulously organising their schedules and duties for seamless operations.",
          "Played a crucial role in training new staff, emphasising attention to detail and industry best practices.",
        ],
        tags: [],
        logoSrc: "/images/vc.png",
        imgW: 45,
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
