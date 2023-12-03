import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500 dark:text-slate-300'>
      <small className='mb-2 text-xs'>
        &copy; {new Date().getFullYear()} Sofia - made with ❤️
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with React (Next.js), Typescript, Framer Motion and Resend. Hosted in Vercel.
      </p>
    </footer>
  )
}

export default Footer