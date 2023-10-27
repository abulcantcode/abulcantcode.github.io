import React from "react";

const ProjectsSection = () => {
  return (
    <section>
      <div className='mt-24 md:mt-36 flex justify-center'>
        <div className='w-full m-3 md:w-2/3 xl:w-1/2'>
          <h1 className='text-center text-5xl font-bold mb-12 text-black dark:text-white'>
            Projects
          </h1>
          <h2 className='text-3xl mb-6 text-black dark:text-white font-semibold'>
            Languages
          </h2>
          {}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
