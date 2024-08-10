import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { useDarkMode } from './DarkModeContext'; // Ensure path is correct
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const Header = () => {
  const { dark, toggleDarkMode } = useDarkMode(); // Use the custom hook

  return (
    <div className='flex justify-between mx-auto py-6 px-4 items-center bg-white dark:bg-gray-800 shadow-md md:text-xl md:px-8 md:py-8'>
      <h4 className='font-sans font-bold dark:text-white'>Where in the world?</h4>
      <button onClick={toggleDarkMode} className='flex items-center space-x-2 font-semibold dark:text-white'>
        {dark ? <IoMdSunny /> : <IoMdMoon />}
        <p>{dark ? 'Light Mode' : 'Dark Mode'}</p>
      </button>
    </div>
  );
};

export default Header;
