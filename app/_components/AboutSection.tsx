"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./old components/TabButton";
import ExperienceCard from "./ExperienceCard";

const EXP_DATA = [
  {
    title: "Experience",
    id: "experience",
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
      {
        title: "Assistant",
        company: "Training 4 U Services",
        location: "Luton, UK",
        dateWorked: "07/2018 - 04/2019",
        description: "description",
        tags: [],
        logoSrc: "",
      },
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
        title: "DevOps Intern",
        company: "Marsh",
        location: "London, UK",
        dateWorked: "09/2021 - 09/2022",
        description: "description",
        tags: ["Java", "Maven", "Docker"],
        logoSrc: "",
      },
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
    title: "Projects",
    id: "projects",
    content: [],
  },
  {
    title: "Education",
    id: "education",
    content: [],
  },
];

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: EXP_DATA.find(({ id }, index) => id === "experience")?.content.map(
      (content, index) => (
        <ExperienceCard {...content} key={`exp-card-${index}`}></ExperienceCard>
      )
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc px-3'>
        <li>Java, used in Industry Experience, Personal projects</li>
        <li>JavaScript, Next JS, React JS, used in personal projects</li>
        <li>Python</li>
        <li>C++</li>
        <li>Selenium</li>
        <li>SQL</li>
        <li>PHP</li>
        <li>FireBase</li>
        <li>Docker</li>
        <li>Maven</li>
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
  return (
    <section className='bg-gradient-to-b from-[#cccccc] to-[#777777] p-7 md:p-20'>
      <div>
        <div>
          <div className='overflow-hidden relative'>
            <div className='flex overflow-x-auto md:flex-wrap'>
              {TAB_DATA.find((t) => t.id === "experience")?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
