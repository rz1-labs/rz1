import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Navbar from '@/components/layout/Navbar'

import '@/styles/main.css'

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'RZ1 (mdrizwanfk)',
  description: `Rizwan Khan's Portfolio App`,
  icons: {
    icon: [
      {
        url: '/favicon-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
