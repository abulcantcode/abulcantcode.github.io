import React from "react";
import NavBar from "../_components/NavBar";
import ProjectsSection from "../_components/ProjectsSection";

const page = () => {
  return (
    <main className='flex min-h-screen flex-col bg-white dark:bg-black'>
      <NavBar />
      <ProjectsSection />
    </main>
  );
};

export default page;
