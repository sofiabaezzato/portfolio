import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sofia | Developer',
  description: 'Sofia is a developer with no experience (yet)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-50 text-gray-900 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 bg-[url(../public/grain.svg)] bg-repeat`}>
        <Background />
        
        <ActiveSectionContextProvider>
          <Header />
          {children}

          <Toaster position='bottom-right'/>
          <ThemeSwitch />
          <Footer />
        </ActiveSectionContextProvider>
         
      </body>
    </html>
  )
}
