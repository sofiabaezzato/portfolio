'use client'

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const element = useRef(null)
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center scroll-mt-28'
      ref={element}
      id='about'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      viewport={{
        amount: 0.5
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p
        className='text-lg sm:text-xl mb-3 sm:leading-8 dark:text-slate-200'
        ref={ref}
      >
        As a <span className='underline font-bold'>multipotentialite</span>, I have no “one true calling” the way specialists do. Multipotentialites thrive on learning, exploring, and mastering new skills.
        Over the past four years, I&apos;ve worked as a <span className='underline'>freelancer</span>, wearing multiple hats as a <span className='underline font-bold'>videomaker, motion designer, and project manager</span>.
        Starting in January 2023, I embarked on a journey to become a <span className="font-bold underline">JavaScript developer</span>, enrolling in courses like CS50 from Harvard, The Odin Project, and Full Stack Open.
        In four words, <span className="underline font-bold">I&apos;m a serial learner</span>.
      </p>

    </motion.section>
  )
}

export default About