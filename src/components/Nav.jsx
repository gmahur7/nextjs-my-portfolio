'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },

]

const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className='flex lg:gap-8 gap-4'>
            {
                links.map((link, index) => {
                    return <Link className={`${link.path===pathname&&"text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={`${link.path}`} key={index}>{link.name}</Link>
                })
            }
        </nav>
    )
}

export default Nav
