import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <div>
        <div className='flex justify-between mx-auto py-6 px-4 item-center bg-white shadow-md md:text-xl md:px-8 md:py-8'>
            <h4 className='font-sans font-bold'>Where in the world?</h4>
            <div className='flex items-center space-x-2 font-semibold'>
            <MdOutlineDarkMode />
                <p class='dark'>Dark Mode</p>
            </div>
        </div>

    </div>
  )
}

export default Header