"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
}

const Skills = () => {
  const { ref } = useSectionInView('Skills', 0.5)
 
  return (
    <section
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul
        className='flex flex-wrap justify-center gap-2 text-md text-gray-800'
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='flex gap-2 bg-white border border-gray-600 rounded-xl px-5 py-3 justify-center items-center'
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon}
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills