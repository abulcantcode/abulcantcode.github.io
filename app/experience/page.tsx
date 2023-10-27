import React from "react";
import NavBar from "../_components/NavBar";
import ExperienceSection from "../_components/ExperienceSection";

const page = () => {
  return (
    <main className='flex min-h-screen flex-col bg-white dark:bg-black'>
      <NavBar />
      <ExperienceSection />
    </main>
  );
};

export default page;
