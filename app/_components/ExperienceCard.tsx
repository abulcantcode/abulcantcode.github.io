import React from "react";
import Image from "next/image";
import { BuildingOfficeIcon, CalendarIcon } from "@heroicons/react/24/solid";

interface TTabData {
  title: string;
  company: string;
  location: string;
  dateWorked: string;
  description: string[];
  tags: string[];
  logoSrc: string;
  imgW: number;
}

const ExperienceCard = ({
  title,
  company,
  location,
  dateWorked,
  description,
  tags,
  logoSrc,
  imgW,
}: TTabData) => {
  return (
    <div className='bg-[#e6e6dd] dark:bg-zinc-700 p-3 rounded-lg m-2 md:mb-4'>
      <h2 className='text-xl font-semibold mb-1 ml-0.5 text-black dark:text-white'>
        {title}
      </h2>
      <div className='mx-1'>
        <div className='mb-2 sm:flex items-center'>
          <div className='flex items-center'>
            <BuildingOfficeIcon className='w-3 h-3 mr-1 text-green-900 dark:text-gray-300' />
            <p className='text-sm text-green-700 dark:text-orange-300 font-semibold'>
              {company}
            </p>
          </div>
          <p className='text-xs pl-2 text-gray-700 dark:text-gray-400'>
            {location}
          </p>
        </div>
        <div className='flex items-center mb-1'>
          <CalendarIcon className='w-3 h-3 mr-1  text-green-900 dark:text-gray-300' />
          <p className='text-xs text-gray-800 dark:text-gray-300'>
            {dateWorked}
          </p>
        </div>
        <hr className='w-10 mt-2 border-gray-400'></hr>
        <div className='my-1 text-gray-800 dark:text-gray-300 text-sm md:text-md'>
          <ul className='bullets my-1 text-gray-800 dark:text-gray-300 text-sm md:text-md'>
            {description.map((content, index) => (
              <li key={`descrip-${index}`}>{content}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex grid-cols-2 items-center mt-2'>
        <div className='flex gap-1 flex-wrap w-full'>
          {tags.map((tag, index) => (
            <p
              key={`tag-name-${index}`}
              className='text-xs font-semibold border-green-700 text-green-800 dark:border-orange-400 dark:text-orange-300 border rounded-lg px-2 pt-0.5 pb-1 '
            >
              {tag}
            </p>
          ))}
        </div>
        <div className='flex justify-end mr-1 dark:invert mt-auto mb-1'>
          <Image
            src={logoSrc}
            alt='company_img'
            width={imgW}
            height={60}
            style={{ width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
