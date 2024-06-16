'use client';
import React from 'react'
import {BsArrow90DegRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import Link from 'next/link';

const services =[
  {
    num:'01',
    title:'Web Developement',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam suscipit vitae ad.",
    href:""
  },
  {
    num:'02',
    title:'UX/UI Design',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam suscipit vitae ad.",
    href:""
  },
  {
    num:'03',
    title:'App Developement',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam suscipit vitae ad.",
    href:""
  },
  {
    num:'01',
    title:'Wordpress Developement',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam suscipit vitae ad.",
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