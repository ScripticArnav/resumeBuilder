import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function HeaderHeroFooter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [headingOffset, setHeadingOffset] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
      setHeadingOffset(position * 0.5) // Adjust this value to change the parallax effect
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrollPosition > 50 ? 'bg-gray-900/70 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            {/* Logo */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className="flex items-center">
                <span className="sr-only">Your Company</span>
                <svg
                  className="h-8 w-auto sm:h-10 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold text-white">ResumePro</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-10">
              <a href="/" className="text-base font-medium text-white hover:text-yellow-300 transition-colors duration-300">
                Home
              </a>
              <a href="/about" className="text-base font-medium text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                About
              </a>
              <a href="/services" className="text-base font-medium text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                Services
              </a>
              <a href="/ContactPage" className="text-base font-medium text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                Contact
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="/login"
                className="whitespace-nowrap text-base font-medium text-white hover:text-yellow-300 transition-colors duration-300"
              >
                Sign in
              </a>
              <a
                href="/SignupPage"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 p-2 transition transform origin-top-right md:hidden bg-black shadow-lg">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-700">
              <div className="pt-5 pb-6 px-5">
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700 transition-colors duration-300"
                    >
                      <span className="ml-3 text-base font-medium text-white">Home</span>
                    </a>
                    <a
                      href="/about"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700 transition-colors duration-300"
                    >
                      <span className="ml-3 text-base font-medium text-white">About</span>
                    </a>
                    <a
                      href="/services"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700 transition-colors duration-300"
                    >
                      <span className="ml-3 text-base font-medium text-white">Services</span>
                    </a>
                    <a
                      href="/contact"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700 transition-colors duration-300"
                    >
                      <span className="ml-3 text-base font-medium text-white">Contact</span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="/signup"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-white">
                    Existing customer?{' '}
                    <a href="/login" className="text-indigo-400 hover:text-yellow-300 transition-colors duration-300">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 transition-all duration-1000 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transform: `translateY(${headingOffset}px)`,
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Resume Builder
            </span>
          </h1>
          <p className={`text-xl sm:text-2xl mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Create professional resumes in minutes with our easy-to-use builder. Stand out from the crowd and land your dream job.
          </p>
          {!isMenuOpen && (
            <button 
              className={`bg-indigo-400 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Get Started
            </button>
          )}
        </div>
      </section>
    </div>
  )
}