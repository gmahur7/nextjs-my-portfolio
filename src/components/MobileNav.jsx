'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import { links } from './Nav';
import {Sheet, SheetContent, SheetTrigger} from '../components/ui/sheet'
import {CiMenuFries} from 'react-icons/ci'
import Link from 'next/link';

const MobileNav = () => {
    const pathname=usePathname()
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
            <div className='mt-32 mb-5 text-center text-2xl '>
                <Link href='/'>
                <h1 className='text-4xl font-semibold'>Gaurav <span className='text-accent'>Singh</span></h1></Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-5'>
                {
                    links.map((link, index) => {
                        return <Link className={`${link.path===pathname&&"text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`} href={`${link.path}`} key={index}>{link.name}</Link>
                    })
                }
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav