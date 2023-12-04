'use client'

import React, { createContext, useState, useEffect, useContext } from "react"

type ThemeContextProviderProps = {
  children: React.ReactNode;
}

type ThemeContextType = {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider ({
  children,
 }: ThemeContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {    
    if (darkTheme === true) {
      window.localStorage.setItem("darkTheme", 'false')
      document.documentElement.classList.remove("dark")
    } else {
      window.localStorage.setItem("darkTheme", "true")
      document.documentElement.classList.add("dark")
    }
    setDarkTheme(() => !darkTheme)
  }

  useEffect(() => {
    const isLocalThemeDark = window.localStorage.getItem("darkTheme") as string
    if (isLocalThemeDark !== null) {
      const isDark = isLocalThemeDark === 'true'
      setDarkTheme(isDark)
    }

    if (darkTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  }, [darkTheme])

  return (
    <ThemeContext.Provider value={{
      darkTheme, 
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error('useTheme must be used whitin a ThemeContextProvider')
  }

  return context
}