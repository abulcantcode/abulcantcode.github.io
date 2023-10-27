import React from "react";
import { BuildingOfficeIcon, CalendarIcon } from "@heroicons/react/24/solid";

interface TTabData {
  title: string;
  company: string;
  location: string;
  dateWorked: string;
  description: string;
  tags: string[];
  logoSrc: string;
}

const ExperienceCard = ({
  title,
  company,
  location,
  dateWorked,
  description,
  tags,
  logoSrc,
}: TTabData) => {
  return (
    <div className='bg-zinc-700 p-3 rounded m-2 min-w-full sm:min-w-[400px] md:min-w-[400px]'>
      <h2 className='text-xl font-semibold mb-1 ml-0.5'>{title}</h2>
      <div className='mx-1'>
        <div className='mb-2 sm:flex items-center'>
          <div className='flex items-center'>
            <BuildingOfficeIcon className='w-3 h-3 mr-1 text-gray-300' />
            <p className='text-sm text-orange-300 font-semibold'>{company}</p>
          </div>
          <p className='text-xs pl-2 text-gray-400'>{location}</p>
        </div>
        <div className='flex items-center mb-1 text-gray-300'>
          <CalendarIcon className='w-3 h-3 mr-1' />
          <p className='text-xs'>{dateWorked}</p>
        </div>
        <hr className='w-10 mt-2 border-gray-400'></hr>
        <div className='my-1 text-gray-300 text-xs'>
          <p>{description}</p>
        </div>
      </div>
      <div className='flex grid-cols-2 items-center mt-2'>
        <div className='flex gap-1 flex-wrap w-full'>
          {tags.map((tag, index) => (
            <p
              key={`tag-name-${index}`}
              className='text-xs border-orange-400 border rounded-lg px-2 pt-0.5 pb-1 text-orange-300'
            >
              {tag}
            </p>
          ))}
        </div>
        <div className='flex justify-end w-full mr-1'>
          <p>
            logo
            {
              //NEED TO ADD IMAGE REF
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;