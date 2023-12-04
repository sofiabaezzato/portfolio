"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import DevIcon from 'devicon-react-svg'
import Image from 'next/image'

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
      id='skills'
    >
      <SectionHeading>My Toolbox</SectionHeading>
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
            {skill.name === "Tailwind" || skill.name === "Next.js" || skill.name === "Framer Motion" ? <Image src={skill.icon} alt='dev-icon' width={20} height={20} className='text-gray-600 '/> :
            <DevIcon icon={skill.icon} className='text-gray-600' width={20} height={20}/>}
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills