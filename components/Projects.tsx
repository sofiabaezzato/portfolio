import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
  return (
    <section className='scroll-mt-28 h-[5000px]' id='projects'>
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