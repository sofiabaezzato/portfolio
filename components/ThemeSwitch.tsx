"use client"

import { motion } from 'framer-motion';
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import {useTheme} from '@/context/ThemeContext';

const ThemeSwitch = () => {
  const { darkTheme, toggleTheme } = useTheme()

  return (
    <button
      className='fixed bottom-10 sm:bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-50 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all dark:bg-gray-900 dark:border-none'
      onClick={toggleTheme}
      aria-label='change theme'
    >
      <motion.div
      animate={{rotate: darkTheme ? -100 : 0}}
      transition={{duration: 1.5}}
      >{darkTheme ? <BsSun alt='light mode'/> : <BsMoon alt='dark mode'/>}</motion.div>
    </button>
  )
}

export default ThemeSwitch