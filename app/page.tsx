'use client'

import { useState } from 'react'
import Image from 'next/image'
import meta from '../package.json'

interface Tool {
  name: string
  href: string
  version: string
  logo: string
}

const stack: Tool[] = [
  {
    name: 'next',
    href: 'https://nextjs.org',
    version: meta.dependencies['next'],
    logo: '/next.svg',
  },
  {
    name: 'react',
    href: 'https://react.dev',
    version: meta.dependencies['react'],
    logo: '/react.svg',
  },
  {
    name: 'tailwindcss',
    href: 'https://tailwindcss.com/',
    version: meta.devDependencies['tailwindcss'],
    logo: '/tailwindcss.svg',
  },
  {
    name: 'typescript',
    href: 'https://typescriptlang.org',
    version: meta.devDependencies['typescript'],
    logo: '/typescript.svg',
  },
]

function Home() {
  const [message, setMessage] = useState('This is rz1-labs/nextjs-starter!')

  const mouseHoverHandler = (tool: Tool) => {
    setMessage(`${tool.name} v${tool.version.substring(1)}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        {message}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
        {stack.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => mouseHoverHandler(tool)}
            className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="h-24 flex items-center justify-center mb-6">
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                width={90}
                height={90}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-base font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-center">
              {tool.name}
            </span>
            <span className="text-sm text-gray-500 mt-2 text-center">
              v{tool.version.substring(1)}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Home
