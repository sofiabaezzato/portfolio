import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import Background from '@/components/Background'
import ThemeContextProvider from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hi! Sofia here👋',
  description: 'Sofia is a developer with no experience (yet)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-50 text-gray-900 relative pt-20 sm:pt-28 dark:bg-gray-950 dark:text-white bg-[url(../public/grainLight.svg)] dark:bg-[url(../public/grainDark.svg)] bg-repeat`}>
        <ThemeContextProvider>
          <Background />
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position='bottom-right'/>
            <ThemeSwitch />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
