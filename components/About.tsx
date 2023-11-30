'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const About = () => {

  return (
    <section
      className='mb-28 max-w-[45rem] text-center'
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p
        className='text-xl mb-3 leading-8'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel labore commodi et nostrum ex ipsa cupiditate id sunt, dolore facilis unde temporibus hic minima, nobis mollitia aliquam. Commodi, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel labore commodi et nostrum ex ipsa cupiditate id sunt, dolore facilis unde temporibus hic minima, nobis mollitia aliquam. Commodi, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel labore commodi et nostrum ex ipsa cupiditate id sunt, dolore facilis unde temporibus hic minima, nobis mollitia aliquam. Commodi, a!
      </motion.p>

    </section>
  )
}

export default About