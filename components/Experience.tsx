"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { experiencesData } from '@/lib/data';

const Experience = () => {
  return (
    <section
      id='experience'
    >
      <SectionHeading>My Experience</SectionHeading>
      {experiencesData.map((item, index) => (
        
      ))}
    </section>
  )
}

export default Experience