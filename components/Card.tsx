import React from 'react'
import { projectsData } from '@/lib/data'
import { useCardStore } from '@/lib/store'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

type CardProps = {
  gradient: string,
  children: React.ReactNode
} & SingleCardProps

type SingleCardProps = {
  id: string
}

export const Card = ({gradient, children, id}: CardProps) => {
  const inVieWCard = useCardStore((state) => state.inViewCard)
  return (
    <div
      className={inVieWCard === id ? `absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br ${gradient} opacity-100 transition-all p-2 sm:p-4` : `absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br ${gradient} opacity-0 transition-all p-2 sm:p-4`}
    >
      {children}
    </div>
  )
}

export const ToolboxCard = ({id}: SingleCardProps) => {
  return (
    <Card id={id} gradient='from-[#f7f0ff] to-red-200 dark:from-white/0 dark:to-red-300'>
        <div
          className='flex gap-2 mt-2 mb-4'
        >
          <Link
            href={projectsData[0].website}
            target='-blank'
            className='group/button text-xs font-semibold bg-[#ffd500] text-gray-600 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:bg-[#ffd500] hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform z-10'
          >
            Live
            <BsArrowRight className='opacity-70 group-hover/button:translate-x-1 transition-transform'/>
          </Link>
          
          <Link
            href={projectsData[0].repoUrl}
            target='_blank'
            className='group/button text-xs font-semibold bg-white text-gray-600 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:border-gray-950 hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform z-10'
          >Code<BsArrowRight className='opacity-70 group-hover/button:translate-x-1 transition-transform'/></Link>
        </div>  

        <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-200 text-xs sm:text-sm">
          {projectsData[0].description}
        </p>

        <ul
          className='flex flex-wrap mt-4 gap-2'
        >
          {projectsData[0].tags.map((tag, index) => (
            <li
              key={index}
              className='bg-slate-700 text-white text-xs px-3 py-1 tracking-wider rounded-full'
            >
              {tag}
            </li>
          ))}
        </ul>
        
        <Image
          src={projectsData[0].imageUrl}
          alt={projectsData[0].title}
          className='mt-4 ml-16 w-[28.25rem] rounded-t-lg shadow-2xl sm:absolute'
        />
    </Card>
  )
}

export const KnightCard = ({id}: SingleCardProps) => {
  return (
    <Card id={id} gradient='from-[#f7f0ff] to-[#d3f3f1] dark:from-[#f7f0ff]/0 dark:to-[#d3f3f1]'>
        <div
          className='flex gap-2 mt-2 mb-4'
        >
          <Link
            href={projectsData[1].repoUrl}
            target='_blank'
            className='group/button text-xs font-semibold bg-white text-gray-600 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:border-gray-950 hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform z-10'
          >Code<BsArrowRight className='opacity-70 group-hover/button:translate-x-1 transition-transform'/></Link>
        </div>  

        <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-200 text-xs sm:text-sm">
          {projectsData[1].description}
        </p>

        <ul
          className='flex flex-wrap mt-4 gap-2'
        >
          {projectsData[1].tags.map((tag, index) => (
            <li
              key={index}
              className='bg-slate-700 text-white text-xs px-3 py-1 tracking-wider rounded-full'
            >
              {tag}
            </li>
          ))}
        </ul>
        
        <Image
          src={projectsData[1].imageUrl}
          alt={projectsData[1].title}
          className='mt-4 ml-16 w-[28.25rem] rounded-t-lg shadow-2xl sm:absolute'
        />
    </Card>
  )
}


export const BattleshipCard = ({id}: SingleCardProps) => {
  return (
    <Card id={id} gradient='from-[#f7f0ff] to-[#f5e6ad] dark:from-[#f7f0ff]/0 dark:to-[#f5e6ad]'>
        <div
          className='flex gap-2 mt-2 mb-4'
        > 
          <Link
            href={projectsData[2].repoUrl}
            target='_blank'
            className='group/button text-xs font-semibold bg-white text-gray-600 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:border-gray-950 hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform z-10'
          >Code<BsArrowRight className='opacity-70 group-hover/button:translate-x-1 transition-transform'/></Link>
        </div>  

        <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-200 text-xs sm:text-sm">
          {projectsData[2].description}
        </p>

        <ul
          className='flex flex-wrap mt-4 gap-2'
        >
          {projectsData[2].tags.map((tag, index) => (
            <li
              key={index}
              className='bg-slate-700 text-white text-xs px-3 py-1 tracking-wider rounded-full'
            >
              {tag}
            </li>
          ))}
        </ul>
        
        <Image
          src={projectsData[2].imageUrl}
          alt={projectsData[2].title}
          className='mt-4 ml-16 w-[28.25rem] rounded-t-lg shadow-2xl sm:absolute'
        />
    </Card>
  )
}
