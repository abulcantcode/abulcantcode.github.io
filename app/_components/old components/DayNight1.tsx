import { useState } from "react";
import { useTheme } from "next-themes";
import classNames from "classnames";

const DayNight1 = () => {
  const { setTheme, theme } = useTheme();
  const [j, setJ] = useState(false);

  return (
    <label className='cursor-pointer'>
      <input
        className='hidden'
        type='checkbox'
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />

      <div
        className={classNames(
          "flex w-20 h-20 bg-gray-400 relative rounded-full items-center overflow-hidden"
        )}
      >
        <div
          className={classNames(
            "dark:opacity-0 bg-gradient-to-b from-blue-700 to-blue-300 w-20 h-20 absolute m-auto",
            "rounded-full overflow-hidden duration-500 dark:translate-x-10 dark:-translate-y-10"
          )}
        >
          <div
            className={classNames(
              "absolute bg-yellow-300 w-14 h-14 rounded-full -translate-x-4 -translate-y-4"
            )}
          />
          <div
            className={classNames(
              "absolute bg-gradient-to-b from-pink-700 to-blue-700 w-20 h-20 opacity-0 hover:opacity-100 duration-500 dark:opacity-100"
            )}
          >
            <div
              className={classNames(
                "absolute bg-yellow-500 w-14 h-14 rounded-full translate-x-4 translate-y-8"
              )}
            />
          </div>
          <div
            className={classNames(
              "absolute bg-green-900 w-10 h-14 rounded-full translate-y-[50px] translate-x-12"
            )}
          />
          <div
            className={classNames(
              "absolute bg-green-700 w-12 h-10 rounded-full translate-y-[60px]"
            )}
          />
          <div
            className={classNames(
              "absolute bg-green-500 w-12 h-10 rounded-full translate-y-14 translate-x-7"
            )}
          />
        </div>
        <div
          className={classNames(
            "absolute w-20 h-20 overflow-hidden rounded-full bg-slate-500 hover:bg-yellow-500 duration-500 -translate-x-10 translate-y-10 dark:translate-x-0 dark:translate-y-0 opacity-0 dark:opacity-100"
          )}
        >
          <div
            className={classNames(
              "absolute w-5 h-10 bg-slate-500 border border-gray-200 translate-x-8 translate-y-6"
            )}
          />
          <div
            className={classNames(
              "absolute w-10 h-10 bg-slate-500 border border-gray-200 rounded-full translate-x-5 text-center translate-y-3"
            )}
          >
            K
          </div>
        </div>
      </div>
    </label>
  );
};

export default DayNight1;
