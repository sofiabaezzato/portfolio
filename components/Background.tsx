"use client"

import { motion } from "framer-motion"
import React from 'react'

const Background = () => {


  return (
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
}

export default Background