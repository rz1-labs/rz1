'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-900 font-handwriting"
            >
              <div className="leading-tight">
                <div>RIZWAN FARDEEN</div>
                <div>KHAN MOHAMMED</div>
              </div>
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
