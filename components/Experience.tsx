'use client'

import React, { useRef } from 'react'
import SectionHeading from './SectionHeading'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion, useScroll, useTransform } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { BsBackpack3Fill, BsFillBookFill, BsFillBookmarkFill } from 'react-icons/bs'

const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.1)

  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-89%"])
  const ballMove = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], ["50%", "40%" , "50%", "40%", "50%", "32%", "50%", "40%" , "60%", "55%", "47%"])
  const ballScale = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.35, 0.4, 0.55, 0.6, 0.7, 0.8, 0.9999999, 1], ["100%", "40%" , "100%", "100%", "40%", "100%", "100%", "40%", "40%", "100%", "0%" ])

  return (
    <section
      className='mb-28 w-full text-center scroll-mt-28'
      id='experience'
      ref={ref}
    >
      <SectionHeading>My Experience</SectionHeading>
      <div
        className='relative h-[500vh]'
        ref={targetRef}
      >
        <div
          className='sticky top-0 h-screen flex items-center overflow-hidden'
        >
          <motion.div
            style={{ x }}
            className='flex mt-[2rem] gap-[100vw] text-left items-center '
          >
            <div className='flex flex-col items-center justify-center gap-3 min-w-[15rem]'>
              <motion.div className='bg-[#ffd500] pr-3 pb-3 rounded-full'>
                <BsBackpack3Fill className='text-4xl animate-bounce' />
              </motion.div>
              <h2 className="text-2xl font-medium !leading-[1.2] sm:text-4xl text-center">It&apos;s been a long journey.</h2>
            </div>
            
            {experiencesData.map((item, index) => (
              <ExperienceCard key={index} {...item}/>
            ))}
            <div className='flex flex-col items-center justify-center gap-3 min-w-[15rem]'>
              <motion.div className='bg-[#ffd500] pr-3 pb-3 rounded-full'>
                <BsFillBookmarkFill className='text-3xl animate-bounce' />
              </motion.div>
              <h2 className="text-2xl font-medium !leading-[1.2] sm:text-4xl text-center min-w-[20rem]">Let&apos;s add a new chapter together?</h2>
            </div>
          </motion.div>
          <motion.div
              style={{ top: ballMove, scale: ballScale }}
              initial={{ y: -20, scale: 0 }}
              whileInView={{ scale: [2, 1] }}
              transition={{ duration: 1, type:'spring'}}
              className='bg-[#ffd500] rounded-full h-4 w-4 absolute left-[50%] top-[50%] -z-10'

            ></motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience