"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'

const Header = () => {
  const { activeSection, setActiveSection, setTimeLastClick } = useActiveSectionContext()

  return (
    <header className='z-[999] relative select-none'>
      <motion.div
        className='fixed top-0 left-1/2 -translate-x-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-50 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:h-[3.25rem] dark:bg-gray-900 dark:bg-opacity-70 dark:border-none'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
      </motion.div>

      <nav className='fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 sm:h-[initial] sm:py-0'>
        <ul
          className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-10 dark:text-gray-400'
        >
          {links.map((link) => (
            <motion.li
              className='h-3/4 flex items-center justify-center relative'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link 
                className={
                  clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-[color] dark:hover:text-gray-50',
                  {
                    'text-gray-950 dark:hover:text-gray-950': activeSection === link.name
                  }
                  )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeLastClick(Date.now())
                }}
              >
                {link.name}

                {link.name === activeSection ? 
                  <motion.span
                  className='bg-[#ffd500] rounded-full absolute inset-0 -z-10'
                  layoutId='activeSection'
                  transition={{
                    type: 'spring',
                    stiffness: 600,
                    damping: 25
                  }}
                ></motion.span>
                : null
                }
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header