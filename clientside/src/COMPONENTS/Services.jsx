import React from 'react'
import Section from './COMMON/Section'
import webDev from '../IMAGES/webDev.jpg'
import mobileApp from '../IMAGES/mobileApp.jpg'
import tutor from '../IMAGES/tutor.jpg'


const Services = () => {

    const services =[
        {
            id: 1,
            image: webDev,
            title: 'Web Development',
        },
        {
            id: 2,
            image:mobileApp,
            title:'Mobile Development' ,
           
        },
        {
            id: 3,
            image:tutor,
            title:'Tutorship' ,
           
        }
    ]
  return (
   <Section title='Services'
    subtitle=" We are dedicated to creating intuitive, responsive, and secure web applications that not only meet our clients' needs but also enhance user experiences." >

<div className='grid gap-10 lg:grid-cols-3'>
    {services.map(({id, image, title})=>(
        
            <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark: shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                <img src={image} alt={title}  className='w-36 h-36 md:w-44 md:h-44 object-contain' />
                <h3 className='mt-5 text-base'>{title}</h3>
            </div>
        
    ))}
</div>
<Section/>
   </Section>
  )
}

export default Services