"use client"

import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/profile_picture.png'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5)
  
  return (
    <section
      className='mb-28 max-w-[50rem] text-center'
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className='relative scroll-mt-96' id='home'>
          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt='Sofia picture'
              quality='100'
              priority={true}
              className='h-[7rem] w-[7rem] rounded-full object-cover shadow-xl border-[0.35rem] border-white'
            />
          </motion.div>
          
          <motion.span
            className='absolute -bottom-5 -right-5 text-6xl'
            initial={{ opacity: 0, scale: 0, rotate: -100}}
            animate={{ opacity: 1, scale: 1, rotate: 0}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >👋</motion.span>
        </div>
        
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
      >
        <span className='font-bold'>Hi, Sofia here!</span> I'm a frontend enthusiast diving into the world of full-stack JavaScript. <span className="font-bold">My focus?</span> Crafting magic with <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-semibold'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{
          delay: 0.2,
        }}
      >

        <Link
          href='#contact'
          className='group bg-[#ffd500] text-gray-600 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-[#ffd500] hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform'
        >Contact me<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition-transform'/></Link>

        <a
          href="https://www.linkedin.com/in/sofia-baezzato"
          target='_blank'
          className='bg-white p-4 text-gray-600 flex items-center gap-2 rounded-full hover:scale-110 hover:text-gray-950 active:scale-95 transition-transform'
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/sofiabaezzato"
          target='_blank'
          className='bg-white p-4 text-gray-600 text-[1.3rem] flex items-center gap-2 rounded-full hover:scale-110 hover:text-gray-950 active:scale-95 transition-transform'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro