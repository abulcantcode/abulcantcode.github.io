"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li className='mb-2'>Marsh, DevOps Intern</li>
        <li className='mb-2'>From 09-2021 To 09/2022</li>
        <li>
          Worked closely with stakeholders to design requirements on ET2, an
          internationally used insurance broking web application.
        </li>
        <li>
          Developed bug fixes and requirements using the Test-Driven Development
          approach.
        </li>
        <li>
          Implemented automated tests for build stability, employing tools like
          Selenium, Cucumber, and Docker.
        </li>
        <li>
          Contributed to an Agile development team, actively engaging in sprint
          retrospectives, and proposing process enhancements.
        </li>
        <li>Assisted the team with build issues and reviewed pull requests.</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc'>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>City, University of London</li>
        <li>BSc Computer Science with Placement</li>
        <li>From 09-2019 To 04/2023</li>
        <li>Graduated with a 2:1</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid-cols-2 md:grid gap-8 items-center py-8 px-3 xl:gap-16 sm:py-16 xl:px-16'>
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            fionsodifjnsldnoisddnoisnfoinn oisnfoisen fosn fsn i nlinlisn ioni
            jsn fkjsnfnefnsekdsdncli klm lk ml f edf ldflf df df sdfsdfsd fsd
            fsdf sdf sd fsdf ds djkfnslnfsidlmf sdfm silfmsldmflskdfm km k
            kmkmkm.
          </p>
        </div>
        <Image
          src='/images/coding.png'
          width={500}
          height={500}
          alt='coding image'
        />
      </div>
      <div className=''>
        <div className='flex flex-row mt-8 justify-center'>
          <TabButton
            selectTab={() => handleTabChange("experience")}
            active={tab === "experience"}
          >
            Experience
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
        </div>
        <div className='mt-8'>
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
