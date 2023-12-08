'use client'

import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'
import { RxHamburgerMenu } from "react-icons/rx";
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { AnimatePresence, motion } from 'framer-motion';

const MobileHeader = () => {
  const [isToggle, setIsToggle] = useState(false)
  const { activeSection, setActiveSection, setTimeLastClick } = useActiveSectionContext()

  const menuAnimation = {
    initial: {
      scaleY: 0,
      opacity: 0
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0]
      }
    },
  }

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      }
    })
  }

  return (
    <header className='fixed z-[999] left-0 top-0 select-none w-full'>
      <AnimatePresence>
        {isToggle ? (
          <motion.div
            className="bg-[#ffd500] origin-top w-screen h-screen flex flex-col p-5 text-2xl text-gray-900 touch-none"
            variants={menuAnimation}
            initial='initial'
            animate='animate'
          >
            <button
              onClick={() => setIsToggle(!isToggle)}
              className='self-end'
            >
              <BsX className='text-4xl'/>
            </button>
            <nav className='mt-4 text-center'>
              <ul className='flex flex-col gap-4'
                
              >
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                  >
                    <Link
                      className={
                        clsx('flex w-full items-center justify-center px-3 py-3 font-medium hover:text-gray-950 transition-[color] dark:hover:text-white',
                        {
                          'font-bold text-gray-100 dark:hover:text-white': activeSection === link.name
                        }
                        )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name)
                        setTimeLastClick(Date.now())
                        setIsToggle(!isToggle)
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : (
          <nav className="flex p-5 w-full justify-end items-center">
            <button
              className='cursor-pointer text-2xl'
              onClick={() => setIsToggle(!isToggle)}
            >
              <RxHamburgerMenu />
            </button>
          </nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default MobileHeader