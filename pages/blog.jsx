import Layout from '../components/Layout'
import { Calendar, Clock } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      title: "Cost Optimization and Automation: A Full Stack GitOps Workflow",
      excerpt: "Explore how to integrate cost optimization with GitOps practices to create efficient CI/CD pipelines while keeping infrastructure costs under control.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "GitOps",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "How to Automate Full Stack Deployments with Terraform and Ansible",
      excerpt: "Learn a comprehensive approach to automating both infrastructure provisioning and application deployment using the powerful combination of Terraform and Ansible.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Automation",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Automated Static Web Hosting with GitLabCI and S3",
      excerpt: "Discover how to create a seamless deployment pipeline for static websites using GitLabCI and Amazon S3, complete with optimized delivery through CloudFront.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Web Hosting",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Using Nginx Proxy Manager and Docker to Deploy a 3-Tier App",
      excerpt: "A practical guide to developing and deploying a three-tier application using Docker containers and Nginx Proxy Manager with custom domain configuration.",
      date: "2024-01-01",
      readTime: "12 min read",
      category: "Docker",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'GitOps': 'bg-blue-500',
      'Automation': 'bg-green-500', 
      'Web Hosting': 'bg-orange-500',
      'Docker': 'bg-purple-500',
      'DevOps': 'bg-red-500',
      'Backend': 'bg-yellow-500'
    }
    return colors[category] || 'bg-gray-500'
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Latest <span className="text-blue-400 dark:text-blue-400">Articles</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Insights and tutorials on DevOps practices, Kubernetes, and cloud infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl cursor-pointer animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${getCategoryColor(post.category)} text-white rounded-full text-sm font-medium`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 font-medium">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-transparent border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-300 font-medium">
                View All Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}