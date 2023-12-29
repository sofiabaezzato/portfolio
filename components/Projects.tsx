'use client'

import React from 'react'
import { projectsData } from '@/lib/data'
import SectionHeading from './SectionHeading'
import ProjectTitle from './ProjectTitle'


const Projects = () => {


  return (
    <section className='w-full sm:max-w-[53rem]'>
      <SectionHeading>Projects</SectionHeading>
      <div className="flex w-full gap-10 sm:gap-20 items-start my-48">
        <div className="w-full py-[30vh]">
          <ul className="">
            {projectsData.map((project) => (
              <li key={project.id}>
                <ProjectTitle id={project.id}>{project.title}</ProjectTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky flex top-1/2 sm:top-1/3 items-center w-full sm:w-1/2 -ml-[12rem] sm:ml-4">
          <div className="relative aspect-square bg-gradient-to-br from-white/50 to-slate-300/40 rounded-2xl w-[80vw] dark:from-gray-900/10 dark:to-gray-900/75 overflow-hidden">
            {projectsData.map((project) => (
              <project.card id={project.id} key={project.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects