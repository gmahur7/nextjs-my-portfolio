'use client';
import React from 'react'
import {BsArrow90DegRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import Link from 'next/link';

const services =[
  {
    num:'01',
    title:'MERN Developement',
    description:"Proficient in building full-stack web applications using React.js, Next.js, Node.js, and Express.js. Skilled in creating responsive user interfaces and robust backend services, with a solid understanding of MongoDB for database management. Passionate about applying my skills to contribute to innovative projects.",
    href:""
  },
  {
    num:'02',
    title:'Next.js Developement',
    description:"Experienced in building dynamic and responsive web applications using Next.js. Proficient in server-side rendering, static site generation, and creating seamless user experiences. Passionate about leveraging Next.js to develop high-performance, scalable applications.",
    href:""
  },
  {
    num:'03',
    title:'Frontend Developement',
    description:"Skilled in building dynamic and responsive user interfaces with React.js. Proficient in creating seamless and interactive web experiences, leveraging modern JavaScript features and component-based architecture. Passionate about delivering high-quality, user-friendly applications.",
    href:""
  },
  {
    num:'04',
    title:'Backend Developement',
    description:"Proficient in developing robust and scalable backend services using Node.js and Express.js. Experienced in designing and managing databases with MongoDB, ensuring efficient data storage and retrieval. Passionate about building high-performance server-side applications and APIs.",
    href:""
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center px-5 py-12 lg:py-0'>
      <div className="conatiner mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className='px-[20px] flex flex-wrap gap-[60px]'>
          {
            services.map((service,index)=>{
              return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500' >{service.num}</div>
                  <Link className='w-[70px] h-[70px]rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45' href={service.href}>
                  <BsArrow90DegRight className='text-primary text-3xl '/>
                    </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                <p className='text-white/60'>{service.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services