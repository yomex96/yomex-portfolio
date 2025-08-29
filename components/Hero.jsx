import { useEffect, useState } from 'react'
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Hero = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yomex96/yomex96/blob/main/README.md', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abayomi-robert-onawole/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://www.twitter.com', label: 'Twitter' },
    { icon: ExternalLink, href: 'https://www.portfolio.com', label: 'Portfolio' },
    { icon: Mail, href: 'mailto:abayomirobertonawole@gmail.com', label: 'Email' },
  ]

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary-600 dark:text-primary-400 block">Hello, I'm</span>
                <span className="text-gray-900 dark:text-white block">Abayomi Robert</span>
                <span className="text-gray-900 dark:text-white block">Onawole</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                <span className="text-gray-700 dark:text-gray-300">Backend Developer & DevOps Engineer</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Empowering Businesses with Scalable, Secure, and Automated Backend Solutions using Python, JavaScript, Golang, and AWS Cloud Computing
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => router.push('/projects')}
                className="btn-primary"
              >
                View Projects
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-r from-primary-400 to-primary-600 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-full flex items-center justify-center text-6xl font-bold text-primary-600 dark:text-primary-300">
                    <Image
                    src="/assets/yomex.jpeg"
                    alt="Profile Picture"
                    layout="fill"
                    objectFit="cover"
                    className='rounded-full p-2'
                  />
                  </div>
                  
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero