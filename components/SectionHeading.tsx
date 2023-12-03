import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children } : SectionHeadingProps) => {
  return (
    <h2 className='text-center text-3xl font-medium mb-8 dark:text-slate-300'>{children}</h2>
  )
}

export default SectionHeading