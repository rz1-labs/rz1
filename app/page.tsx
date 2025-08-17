export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center">
        Welcome to RZ1
      </h1>
      <p className="text-2xl text-gray-600 text-center max-w-3xl mb-12">
        A showcase of my work, thoughts, and digital presence
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <a
          href="/work"
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Work</h3>
          <p className="text-gray-600">Explore my projects and portfolio</p>
        </a>

        <a
          href="/blog"
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blog</h3>
          <p className="text-gray-600">Read my thoughts and insights</p>
        </a>

        <a
          href="/socials"
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Socials</h3>
          <p className="text-gray-600">Connect with me online</p>
        </a>
      </div>
    </div>
  )
}
