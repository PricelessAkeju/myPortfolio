import React from 'react'
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import myLogo from '../IMAGES/myLogo.jpg'


const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className='bg- white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <nav className='flex justify-between items-center p-5'>
        <img 
                src={myLogo} 
                alt='STA'
                className='ml-4 md:ml-28 lg:ml-44 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 animate-pulse rounded-full'
            /> 


         <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
            <MdWbSunny className='text-2xl cursor-pointer' />
            ) : (
                
            <MdNightsStay className="text-2xl cursor-pointer" />
               
            )}
        </div> 
           
            
        </nav>
    </header>
        
  )
}

export default Header