'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-transparent sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[25dvh]">
          {/* Left side - Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              <Image
                src="/header-logo.svg"
                alt="Logo"
                width={300}
                height={300}
              />
            </Link>
          </div>

          {/* Right side - Navigation and Button */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/work"
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Work
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
              <Link
                href="/socials"
                className="text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
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
