import { useTheme } from "next-themes";
import classNames from "classnames";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DayNight = () => {
  const { setTheme, theme } = useTheme();

  return (
    <label className='cursor-pointer rounded-full overflow-hidden'>
      <input
        className='hidden'
        type='checkbox'
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />
      <div
        className={classNames(
          "flex w-12 h-12 md:w-10 md:h-10 relative rounded-full items-center overflow-hidden"
        )}
      >
        <div
          className={classNames(
            "dark:opacity-0 bg-gradient-to-b from-blue-700 to-blue-200 w-12 h-12 md:w-10 md:h-10 absolute m-auto",
            "rounded-full overflow-hidden duration-500 dark:translate-x-10 dark:-translate-y-10"
          )}
        />
        <div
          className={classNames(
            "absolute overflow-hidden rounded-full bg-gradient-to-t from-blue-700 to-red-900 w-12 h-12 md:w-10 md:h-10",
            "duration-500 -translate-x-10 translate-y-10 dark:translate-x-0 dark:translate-y-0 opacity-0 dark:opacity-100"
          )}
        />
        <div
          className={classNames(
            "dark:opacity-0 bg-gradient-to-b w-12 h-12 md:w-10 md:h-10 absolute m-auto",
            "rounded-full overflow-hidden duration-500 dark:-translate-x-10",
            "flex items-center justify-center text-yellow-300"
          )}
        >
          <SunIcon className='h-8 w-8' />
        </div>
        <div
          className={classNames(
            "absolute overflow-hidden rounded-full bg-gradient-to-t w-12 h-12 md:w-10 md:h-10",
            "duration-500 translate-x-10 dark:translate-x-0 dark:translate-y-0 opacity-0 dark:opacity-100 text-center",
            "flex items-center justify-center text-purple-200"
          )}
        >
          <MoonIcon className='h-8 w-8' />
        </div>
      </div>
    </label>
  );
};

export default DayNight;
