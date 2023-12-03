"use client"

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme") as Theme | null
    if (currentTheme) setTheme(currentTheme)
    else if (window.matchMedia("prefers-color-scheme: dark").matches) setTheme("dark")
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }

  }

  return (
    <button
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-50 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all dark:bg-gray-900 dark:border-none'
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  )
}

export default ThemeSwitch