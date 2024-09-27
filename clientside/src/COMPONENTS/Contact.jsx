import React from 'react'
import Section from './COMMON/Section'
import { FaTwitter, FaLinkedin, FaFacebook,} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
    const mySocial =[
        {
            id: 1,
            link: "https://twitter.com/pricelessoju",
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: "https://www.facebook.com/Harkejuh",
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/olatunji-akeju-51b962221",
            icon: <FaLinkedin />
        },
        {
            id: 4,
            link: "",
            icon: <IoMdMail />
        },
    ];
  return (
    <Section
    title='Contact'
    subtitle="Let STA handle your next project ."
    >
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div> 
                <img src="https://www.whiteriver.org/wp-content/uploads/2018/10/ContactUsHeader.jpg" 
                alt='Contact-info'
                className='w-48 h-32 md:w-72 md:h-44 lg:w-80 lg:h-48'
                /> 
            </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'>
                    I will always be available for discussions regarding Backend, Frontend and tutoring opportunities.
                    You can easily contact me via any of the preferred medium.
                </p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3xl'>
                {mySocial.map(({id, link, icon}) => (
                    <a href={link} key={id} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600'>
                        {icon}
                    </a>
                ))}
            </div>

          
        </div>

        
    </Section>
  )
}

export default Contact