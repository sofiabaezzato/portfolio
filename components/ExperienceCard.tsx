import { experiencesData } from '@/lib/data'
import { motion } from 'framer-motion'
import React from 'react'
import { BsCheckCircleFill, BsFillCheckSquareFill } from 'react-icons/bs'
import { FaHammer, FaToolbox } from 'react-icons/fa'

type ExperienceProps = (typeof experiencesData)[number]

const ExperienceCard = ({
  title,
  date,
  description,
  did,
  learn,
  icon
}: ExperienceProps) => {
  return (
    <div>
      <motion.div className='bg-[#ffd500] pr-3 pb-3 rounded-full w-14 h-14'>
        <div className='text-5xl animate-bounce'>{icon}</div>
      </motion.div>
      <div
      className='bg-slate-100/10 mt-3 p-6 w-[22rem] sm:w-[42rem] border border-black/5 overflow-hidden sm:p-8 relative mb-3 sm:mb-6 last:mb-0 rounded-2xl'
      >

      <p
        className='font-semibold underline'
      >
        {date}</p>
      <h3
        className='text-2xl font-semibold dark:text-slate-200'
      >
        {title}
      </h3>
      
      <p
        className='pt-3 text-xs sm:text-sm'
      >{description}</p>

      <div
        className='pt-4 flex gap-2 items-center'
      >
        <FaToolbox />
        <h3
          className='text-xl font-medium dark:text-slate-200'
        >
          What I did
        </h3>
      </div>
      <p
        className='pt-2 text-xs sm:text-sm'
      >{did}</p>

      <div
        className='pt-4 flex gap-2 items-center'
      >
        <BsFillCheckSquareFill />
        <h3
          className='text-xl font-medium dark:text-slate-200'
        >
          What I've learned
        </h3>
      </div>
      <p
        className='pt-2 text-xs sm:text-sm'
      >
        {learn}
      </p>
      
      </div>
    </div>
    
  )
}

export default ExperienceCard