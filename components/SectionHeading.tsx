'use client'

import React from 'react'
import motion from 'framer-motion'

type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children } : SectionHeadingProps) => {
  return (
    <div

    >
      <h2 className='text-center text-3xl font-medium mb-8 dark:text-slate-300'>{children}</h2>
    </div>
  )
}

export default SectionHeading