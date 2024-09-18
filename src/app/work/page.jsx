'use client';
import React, { useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion'
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: 1,
    category: 'MERN Stack',
    title: 'XeroBook',
    description: "Our web app streamlines your business finances, providing you with intuitive tools to manage your transactions with ease.Track income, expenses, and outstanding invoices effortlessly, giving you full control over your cash flow in one convenient place.Whether it's managing invoices, recording payments, or monitoring expenses, our app ensures that your business finances are organized, accurate, and always up to date.",
    stack: [{
      name: 'Node.js'
    }, {
      name: "MongoDB"
    }, {
      name: "React.js"
    }, {
      name: "Express.js"
    }, {
      name: "Material UI"
    }, {
      name: "JavaScript"
    }],
    image: "/assets/images/xerobook.png",
    live: "https://xerobook.in",
    github: ""
  },
  {
    num: 2,
    category: 'NextJS FullStack',
    title: 'URL Shorter',
    description: "URL Shortener is a web application built to efficiently shorten long URLs and track their visits. The frontend is developed using Next.js for seamless performance and responsiveness, while the backend is powered by Hono.js to handle URL shortening and tracking. The application leverages MongoDB for data storage, and Tailwind CSS ensures a sleek, modern design. With support for both TypeScript and JavaScript, this app delivers a reliable and scalable solution for managing shortened URLs. You can explore the live version at https://ushort-silk.vercel.app/."
    ,
    stack: [{
      name: 'Next.js'
    }, {
      name: "Hono.js"
    }, {
      name: "MongoDB"
    }, {
      name: "Tailwind CSS"
    }, {
    }, {
      name: "TypeScript"
    }, {
      name: "JavaScript"
    }],
    image: "/assets/images/UrlShorterFull.png",
    live: "https://ushort-silk.vercel.app/",
    github: "https://github.com/gmahur7/url-shortner"
  },
  {
    num: 3,
    category: 'Next JS Full Stack',
    title: 'Next Auth App',
    description : "The Next Auth App is a basic authentication system built with Next.js and React.js. It allows users to sign up, log in, and manage their accounts with ease. The app is styled with Tailwind CSS for a sleek and responsive design, while TypeScript ensures strong type safety across the project. This full-stack application demonstrates secure authentication functionality, providing a foundation for more complex apps. You can explore the live version at https://basic-next-auth-app.vercel.app/ or check out the source code on GitHub: https://github.com/gmahur7/next-auth-app."
    ,
    stack: [{
      name: 'Next.js'
    }, {
      name: "React.js"
    }, {
      name: "Tailwind CSS"
    }, {
      name: "TypeScript"
    }, {
      name: "JavaScript"
    }],
    image: "/assets/images/NextAuth.png",
    live: "https://basic-next-auth-app.vercel.app/",
    github: "https://github.com/gmahur7/next-auth-app"
  },
  {
    num: 4,
    category: 'Frontend',
    title: 'Note Taking App',
    description: "The Note Taking App is a simple and efficient tool to help users organize their thoughts and tasks. Built using React.js with state management powered by Redux.js, this app allows users to effortlessly add, edit, and manage notes. Each note includes a title and description, providing a clear and structured way to store important information. With a clean and modern interface designed using Material UI, and the app built in both TypeScript and JavaScript, it offers a smooth and reliable experience. Try it out live at https://note-app-redux-ts.vercel.app/ or explore the code on GitHub: https://github.com/gmahur7/note-app-redux-ts."
    ,
    stack: [{
      name: 'React.js'
    }, {
      name: "Redux.js"
    }, {
      name: "Material UI"
    }, {
      name: "TypeScript"
    }, {
      name: "JavaScript"
    }],
    image: "/assets/images/NoteApp.png",
    live: "https://note-app-redux-ts.vercel.app/",
    github: "https://github.com/gmahur7/note-app-redux-ts"
  },
]

const Work = () => {

  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.4 } }} className='min-h-[80vh] flex flex-col justify-center py-12 lg:px-0 '>
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
                  project.stack.map((item, index) => {
                    return <li className='text-xl text-accent' key={index}>{item.name}{index === project.stack.length - 1 ? null : <span>,</span>}</li>

                  })
                }
              </ul>
              <div className='border border-b-white/60 '>
                <div className='flex ite gap-4'>
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full  bg-white/5 flex justify-center items-center group-hover:text-accent'>
                          <BsArrowUpRight />
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
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
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
                projects.map((project, index) => {
                  return <SwiperSlide key={index} className="w-full ">
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 '>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 '></div>
                      <div>
                        <Image src={project.image} className="object-cover" alt="" height={300} width={500} layout='responsive' />
                      </div>
                    </div>
                  </SwiperSlide>
                })
              }
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconsStyles="" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work