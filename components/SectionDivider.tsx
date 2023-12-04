'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <motion.div
      className='bg-gray-200 mb-28 h-16 w-1 rounded-full hidden sm:block dark:bg-gray-900 animate-bounce'
      initial={{ opacity: 0, y: -100}}
      animate={{ opacity: 1, y: 0}}
      transition={{
        duration: 1,
        delay: 0.2,
      }}

    ></motion.div>
  )
}

export default SectionDivider