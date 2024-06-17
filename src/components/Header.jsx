import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='py-8 md:py-12 text-white'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>Gaurav <span className='text-accent'>Singh</span></h1>
                </Link>
                <div className='hidden md:flex items-center gap-4 lg:gap-8'>
                    <Nav />
                    <Link href='/contact'><Button>Hire Me</Button></Link>
                </div>
                <div className='md:hidden'>
                    <MobileNav/>
                    {/* <Link href='/contact'><Button>Hire Me</Button></Link> */}
                </div>
            </div>
        </header>
    )
}

export default Header