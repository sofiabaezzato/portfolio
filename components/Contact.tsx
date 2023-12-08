"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'

const Contact = () => {
  const { ref } = useSectionInView('Contact', 0.5)

  return (
    <motion.section
      id='contact'
      className='mb-32 w-[min(100%,38rem)] text-center'
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <motion.p
        className='text-gray-700 -mt-6 dark:text-slate-300'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          amount: 0.5,
          once: true
        }}
        transition={{
          delay: 0.3
        }}
      >Feel free to contact me through this form.</motion.p>

      <form
        className='flex flex-col gap-1 mt-10 '
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent!')
        }}
      >
        <input
          name='email'
          type="email"
          className='h-14 rounded-lg border border-black/5 p-4 dark:bg-white dark:bg-opacity-10 dark:placeholder:text-gray-500'
          placeholder='Your email'
          maxLength={200}
          required
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg border border-black/5 p-4 dark:bg-white dark:bg-opacity-10 dark:placeholder:text-gray-500'
          placeholder='Your message'
          maxLength={5000}
          required
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  )
}

export default Contact