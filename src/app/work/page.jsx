'use client';
import React,{useState} from 'react'
import { BsArrowUpRight,BsGithub } from 'react-icons/bs';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: 1,
    category:'frontend',
    title:'',
    description:'lorem ipsum',
    stack:[{name:'HTML 5'},{name:"CSS 3"},{name:"JavaScript"}],
    image:"",
    live:"",
    github:""
  },
  {
    num: 2,
    category:'Backend',
    title:'',
    description:'lorem ipsum',
    stack:[{name:'HTML 5'},{name:"CSS 3"},{name:"JavaScript"}],
    image:"",
    live:"",
    github:""
  }
]

const Work = () => {

  const [project,setProject]=useState(projects[0])

  const handleSlideChange=(swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:1,duration:0.4}}} className='min-h-[80vh] flex flex-col justify-center py-12 lg:px-0 '>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row  lg:gap-[30px]'>
            <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
              <div className='flex flex-col gap-[30px] h-[50%]'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h2>
                <p className='text-white/60'>{project.description}</p>
                <ul className='flex gap-4 '>
                  {
                    project.stack.map((item,index)=>{
                      return <li className='text-xl text-accent' key={index}>{item.name}{index===project.stack.length-1?null:<span>,</span>}</li>

                    })
                  }
                </ul>
                <div className='border border-b-white/60 '>
                  <div className='flex ite gap-4'>
                    <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full  bg-white/5 flex justify-center items-center group-hover:text-accent'>
                          <BsArrowUpRight/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full  bg-white/5 flex justify-center items-center group-hover:text-accent'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-[50%]'>
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="lg:h-[520px] mb-12"
                onSlideChange={handleSlideChange} >
                {
                  projects.map((project,index)=>{
                    return <SwiperSlide key={index} className="w-full ">
                      <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 '>
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 '></div>
                        <div>
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  })
                }
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconsStyles=""/>
              </Swiper>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default Work