import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import { useTheme } from '../contexts/ThemeContext'

const Layout = ({ children }) => {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-dark-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout