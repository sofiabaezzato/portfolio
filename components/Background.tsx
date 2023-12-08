"use client"

import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react'

const Background = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null)

  const handleWindowSizeChange = () => {
    if (typeof window !== 'undefined') setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  },[])

  const isMobile = () => {
    if (screenWidth) return screenWidth <= 768
  }

  return (
    isMobile() ? (
      <>
        <div
          className='bg-[#ffc1c3] absolute top-[-6rem] -z-50 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[6rem] sm:w-[68.75rem] dark:bg-[#ffc1c3]/80'
        ></div>
        <div
          className='bg-[#c9c2ff] absolute top-[-1rem] -z-50 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[6rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5b5783d5]/90'
          ></div>
      </>
    ) : (
      <>
        <motion.div
          className='bg-[#ffc1c3] absolute top-[-6rem] -z-50 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[6rem] sm:w-[68.75rem] dark:bg-[#ffc1c3]/80'
          animate={{ scale: 0.6 }}
          transition={{
            ease: "linear",
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
          }}

        ></motion.div>
        <motion.div
          className='bg-[#c9c2ff] absolute top-[-1rem] -z-50 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[6rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5b5783d5]/90'
          animate={{ scale: 0.7 }}
          transition={{
            ease:"linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </>
    )   
  )
}

export default Background