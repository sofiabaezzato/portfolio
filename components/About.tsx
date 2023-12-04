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
        className='text-xl mb-3 leading-8 dark:text-slate-200'
        ref={ref}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel labore commodi et nostrum ex ipsa cupiditate id sunt, dolore facilis unde temporibus hic minima, nobis mollitia aliquam. Commodi, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel labore commodi et nostrum ex ipsa cupiditate id sunt, dolore facilis unde temporibus hic minima, nobis mollitia aliquam. Commodi, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel labore commodi et nostrum ex ipsa cupiditate id sunt, dolore facilis unde temporibus hic minima, nobis mollitia aliquam. Commodi, a!
      </p>

    </motion.section>
  )
}

export default About