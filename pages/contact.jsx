import Layout from '../components/Layout'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { Footer } from './Footer'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abayomi@gmail.com",
      href: "mailto:abayomi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 916 076 5827",
      href: "tel:+2349160765827"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  ]

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-8">
              Contact
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-12">
              Let's discuss your next project or collaboration opportunity.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon
                      return (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 transition-all duration-300 hover:scale-105"
                        >
                          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</p>
                            <p className="text-gray-900 dark:text-white font-medium">{contact.value}</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="p-3 bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 transition-all duration-300 hover:scale-110"
                          aria-label={social.label}
                        >
                          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
      <Footer />
        </div>
      </div>
    </Layout>
  )
}