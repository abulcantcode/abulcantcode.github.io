import { useTheme } from "next-themes";
import classNames from "classnames";

const DayNight = () => {
  const { setTheme, theme } = useTheme();

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
          "flex w-10 h-10 bg-gray-400 relative rounded-full items-center overflow-hidden"
        )}
      >
        <div
          className={classNames(
            "dark:opacity-0 bg-gradient-to-b from-blue-700 to-blue-300 w-20 h-20 absolute m-auto",
            "rounded-full overflow-hidden duration-500 dark:translate-x-10 dark:-translate-y-10"
          )}
        ></div>
        <div
          className={classNames(
            "absolute overflow-hidden rounded-full bg-gradient-to-t from-red-700 to-pink-300 w-20 h-20 duration-500 -translate-x-10 translate-y-10 dark:translate-x-0 dark:translate-y-0 opacity-0 dark:opacity-100"
          )}
        ></div>
      </div>
    </label>
  );
};

export default DayNight;
