import React from 'react'
import {FaRegHandshake, FaTwitter, FaFacebook, FaLinkedin, FaArrowDown} from "react-icons/fa";
import PASSPORT from "../IMAGES/MY PASSPORT.jpg"

const Hero = () => {


    const social = [
        {
            id: 1,
            link: "https://twitter.com/pricelessoju",
            icon: <FaTwitter/>
        },
        {
            id: 2,
            link: "https://www.facebook.com/Harkejuh",
            icon: <FaFacebook/>
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/olatunji-akeju-51b962221",
            icon: <FaLinkedin/>
        }
    ]

    window.addEventListener('scroll', function(){
        const downArrow = document.querySelector(".down-arrow");
        if(window.scrollY >= 90){
            downArrow.classList.add('hide-down-arrow');
        }else{
            downArrow.classList.remove('hide-down-arrow');
        }
    });


  return (
   <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
    <h2 className='text-5xl text-rose-600 uppercase font-bold'>Akeju Tunji Samson</h2>
    <h3 className='py-3 text-2xl'>Full Stack Web Developer</h3>
    <p className='max-w-xl font-light text-gray-500'>
      Hello,<span className='animate-pulse text-4xl justify-center'><FaRegHandshake /> </span> 
       I am a passionate Full Stack Web developer with a strong foundation in both frontend and backend technologies.
       I am currently looking for opportunities to contribute to innovative projects and build meaningful connections with clients.
    </p>
{/* SOCIAL ICONS */}
<div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
    {social.map(item => (
        <a href={item.link} target='_blank' rel='noopener noreferrer' key={item.id} 
        className='cursor-pointer duration-300 hover:text-rose-600'
        >
            {item.icon}
        </a>
    ))}
    </div>
    {/* my passport and resume */}
    <div>
        <img src={PASSPORT} alt='Akeju Tunji Samson'
         className='w-60 h-60 md:w-72 md:h-72 object-top object-cover rounded-xl pt-5'/>
        <a href='/Resume.pdf' 
        download={true}
        className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'>
             Resume 
        </a>
    </div>
    <div className='mt-10 down-arrow'>
    <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
    </div>
   </section>
  )
}

export default Hero