"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'
import { useSectionInView } from '@/lib/hooks'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section
      className='mb-28 scroll-mt-28'
      id='projects'
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
      </div>
    </section>
  )
}

export default Projects