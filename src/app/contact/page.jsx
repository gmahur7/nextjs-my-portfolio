"use client"

import React from 'react'
import { Button} from '@/components/ui/button'
import { Input} from '@/components/ui/input'
import { Textarea} from '@/components/ui/textarea'
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const info = [ 
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+91) 701 730 8602"
  },
  {
    icon:<FaEnvelope/>,
    title:"E-Mail",
    description:"gm7017308@gmail.com"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"Devipura 1st, Bulandshahr, UP 203001"
  }
]

const Contact = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:1,duration:0.5,ease:"easeIn"}}} className='py-6 '>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          <div className='lg:h-[54%] order-2 lg:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl '>
              <h3 className='text-4xl text-accent'>Let's Work Together</h3>
              <p className='text-white/60 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est corrupti officiis ducimus dolor unde!</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="EMail Address" />
                <Input type="phone" placeholder="Phone No" />
              </div>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select A Service</SelectLabel>
                    <SelectItem value="est">Web Developement</SelectItem>
                    <SelectItem value="cst">Wordpress Developement</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200[x]" placeholder="Type Your Message Here." />
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center order-1 lg:order-none mb-8 lg:mb-0'>
            <ul className='flex flex-col gap-10'>
              {
                info.map((item,index)=>{
                  return <li key={index} className='flex items-center gap-6 '>
                      <div className='w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1 '>
                        <p className='text-white/60 '>{item.title}</p>
                        <h3 className='text-xl'>{item.description}</h3>
                      </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact