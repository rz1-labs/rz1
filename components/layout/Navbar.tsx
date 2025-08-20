'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.25 // 25dvh
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'shrink' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left side - Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              <Image
                src="/header-logo.svg"
                alt="Logo"
                width={isScrolled ? 200 : 300}
                height={isScrolled ? 200 : 300}
                className="transition-all duration-300"
              />
            </Link>
          </div>

          {/* Right side - Navigation and Button */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/work"
                className="text-gray-900 hover:text-blue-600 transition-all duration-200 font-medium backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg hover:shadow-xl"
              >
                Work
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-blue-600 transition-all duration-200 font-medium backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg hover:shadow-xl"
              >
                Blog
              </Link>
              <Link
                href="/socials"
                className="text-gray-900 hover:text-blue-600 transition-all duration-200 font-medium backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-xl"
              >
                Socials
              </Link>
            </nav>

            {/* Connect Button */}
            <Link
              href="/connect"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
