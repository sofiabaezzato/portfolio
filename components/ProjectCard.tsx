'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number]

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  website,
  repoUrl
} : ProjectProps) => {
  const element = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 1", "1 0.9"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <motion.section
      className='group bg-slate-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative mb:3 sm:mb-6 last:mb-0 rounded-2xl'
      ref={element}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress
      }}
    >
      <div
        className='py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%]'
      >
        <h3
          className='text-2xl font-semibold'
        >{title}</h3>

        <div
          className='flex gap-2 mt-2 mb-4'
        >
          <Link
            href={website}
            target='-blank'
            className='group/button text-xs font-semibold bg-[#ffd500] text-gray-600 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:bg-[#ffd500] hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform'
          >Live<BsArrowRight className='opacity-70 group-hover/button:translate-x-1 transition-transform'/></Link>
          <Link
            href={repoUrl}
            target='_blank'
            className='group/button text-xs font-semibold bg-white text-gray-600 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:border-gray-950 hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform'
          >Code<BsArrowRight className='opacity-70 group-hover/button:translate-x-1 transition-transform'/></Link>
        </div>  

        <p className="mt-2 leading-relaxed text-slate-700">{description}</p>

       

        <ul
          className='flex flex-wrap mt-4 gap-2'
        >
          {tags.map((tag, index) => (
            <li
              key={index}
              className='bg-slate-700 text-white text-xs px-3 py-1 tracking-wider rounded-full'
            >
              {tag}
            </li>
          ))}
        </ul>

        
      </div>

      <Image
        src={imageUrl}
        alt={title}
        className='absolute top-20 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-110 transition-transform'
      />
    </motion.section>
  )
}

export default ProjectCard