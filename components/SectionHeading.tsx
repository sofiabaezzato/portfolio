'use client'

import React from 'react'
import { motion } from 'framer-motion'

type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children } : SectionHeadingProps) => {
  return (
    <motion.h2
      className='text-center text-3xl font-medium mb-8 dark:text-slate-300'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        amount: 0.5,
        once: true
      }}
    >
      {children}
    </motion.h2>
  )
}

export default SectionHeading