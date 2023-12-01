"use client"

import React, {createContext, useContext, useState} from 'react'
import type { SectionName } from '@/lib/types'

type ActiveSectionContextProps = {
  children: React.ReactNode
}
type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeLastClick: number
  setTimeLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home")
  // keep track of the click time to disable observer when user clicks on a navbar link
  const [timeLastClick, setTimeLastClick] = useState(0)

  return <ActiveSectionContext.Provider
    value={{
      activeSection,
      setActiveSection,
      timeLastClick,
      setTimeLastClick
    }}
  >
    {children}
  </ActiveSectionContext.Provider>
}

// hook which take care of the null value in ActiveSectionContext
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }

  return context
}

export default ActiveSectionContextProvider