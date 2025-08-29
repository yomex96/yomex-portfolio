import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Experience', path: '/experience', id: 'experience' },
    { name: 'Skills', path: '/skills', id: 'skills' },
    { name: 'Blog', path: '/blog', id: 'blog' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ]

  useEffect(() => {
    const currentPath = router.pathname
    const currentNav = navItems.find(item => item.path === currentPath)
    if (currentNav) {
      setActiveSection(currentNav.id)
    }
  }, [router.pathname])

  const handleNavClick = (item) => {
    setActiveSection(item.id)
    router.push(item.path)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-dark-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="text-2xl font-bold">
              <span className="text-primary-500">&lt;</span>
              <span className="text-primary-600 dark:text-primary-400">Robert</span>
              <span className="text-primary-500">/&gt;</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md nav-link ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header