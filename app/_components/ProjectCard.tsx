import React from "react";
import { BuildingOfficeIcon, CalendarIcon } from "@heroicons/react/24/solid";

interface TProjectData {
  title: string;
  description: string[];
  tags: string[];
  filterTag: string;
}

const ProjectCard = ({ title, description, tags, filterTag }: TProjectData) => {
  return (
    <div className='bg-[#e6e6dd] dark:bg-zinc-700 p-3 rounded-lg m-2 md:mb-4'>
      <h2 className='text-xl font-semibold ml-0.5 text-black dark:text-white'>
        {title}
      </h2>
      <div className='mx-1'>
        <hr className='w-10 mt-1 mb-2 border-gray-400'></hr>
        <ul className='bullets my-1 text-gray-800 dark:text-gray-300 text-xs'>
          {description.map((content, index) => (
            <li key={`descrip-${index}`}>{content}</li>
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-wrap gap-1'>
        {tags
          .filter((tag) => !!tag)
          .map((tag, index) => (
            <p
              key={`tag-name-${index}`}
              className=' text-xs border-green-700 text-green-800 dark:border-orange-400 dark:text-orange-300 border rounded-lg px-2 pt-0.5 pb-1 w-fit'
            >
              {tag}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
