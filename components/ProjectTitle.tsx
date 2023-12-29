import React, { useEffect, useRef } from 'react'
import { inView, useInView } from 'framer-motion'
import { useCardStore } from '@/lib/store'

type Props = {
  children: React.ReactNode
  id: string
}

const ProjectTitle = ({children, id} : Props) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })
  const setInViewCard = useCardStore((state) => state.setInViewCard)
  const inViewCard = useCardStore((state) => state.inViewCard)

  useEffect(() => {
    if (isInView) setInViewCard(id)
    if (!isInView && inViewCard === id) setInViewCard(null)
  }, [isInView, id, setInViewCard, inViewCard])
  
  return (
    <p ref={ref} className={isInView ? 'text-2xl sm:text-5xl py-28 text-gray-900 font-bold dark:text-slate-300 transition-colors' : 'text-2xl sm:text-5xl py-28 font-bold text-gray-300 dark:text-slate-800 transition-colors'}>
      {children}
    </p>
  )
}

export default ProjectTitle