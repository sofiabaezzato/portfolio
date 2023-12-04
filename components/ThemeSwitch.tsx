"use client"

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("dark")
  const [rotate, setRotate] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null
    if (savedTheme) setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    setRotate(!rotate)
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
      <motion.div
      animate={{rotate: rotate ? -100 : 0}}
      transition={{duration: 1.5}}
      >{theme === "light" ? <BsMoon /> : <BsSun />}</motion.div>
    </button>
  )
}

export default ThemeSwitch