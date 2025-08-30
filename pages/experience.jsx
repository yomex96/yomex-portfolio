
import { Download, Cloud, GitBranch, Container, Code, DownloadIcon } from 'lucide-react'
import Layout from "../components/Layout";
import { Footer } from '../components/Footer';

export default function Experience() {
  const expertiseAreas = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Designing scalable and resilient cloud architectures on AWS"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines", 
      description: "Building efficient delivery pipelines for continuous deployment"
    },
    {
      icon: Container,
      title: "Containerization",
      description: "Orchestrating containers with Docker and Kubernetes"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Automating infrastructure with Terraform and Ansible"
    }
  ]

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "TIFI",
      companyType: "🏢",
      period: "Aug 2024 - Jan 2025",
      description: [
        "Led the migration from Docker Compose to EKS, designing a production-ready Kubernetes Infrastructure with GPU support, autoscaling, and environment isolation",
        "Built and maintained CI/CD pipelines using GitHub Actions and ArgoCD, reducing manual deployments and cutting release times by over 50%",
        "Designed background job architecture using RabbitMQ and Celery, enabling smooth asynchronous processing for rendering and encoding workloads",
        "Implemented observability tools like Prometheus, Grafana, and EFK, helping reduce incident detection and resolution time by 40%",
        "Secured EKS infrastructure with RBAC, IAM Roles for Service Accounts (IRSA), API Gateway, AWS WAF, and TLS ingress termination",
        "Reduced cloud costs by ~30% by introducing spot instances, right-sizing workloads, and using auto-scaling strategies"
      ],
      skills: ["Kubernetes", "EKS", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
      title: "DevOps Engineer",
      company: "HNG TECH (Internship)",
      companyType: "🏢",
      period: "Jul 2024 - Aug 2024",
      description: [
        "Deployed a Next.js application across seven environments concurrently using GitHub Actions and Docker",
        "Containerized a three-tier application with Docker for optimized deployments and configured Nginx for traffic management",
        "Developed a background messaging system using Flask, RabbitMQ, and Celery to handle asynchronous tasks",
        "Automated user onboarding and system account creation with Bash scripts, reducing manual effort",
        "Created a system monitoring tool to track active ports, user logins, Nginx configurations, Docker containers, and system logs"
      ],
      skills: ["Docker", "GitHub Actions", "RabbitMQ", "Celery", "Next.js"]
    },
    {
      title: "DevOps Engineer",
      company: "Fiverr Freelancing (Remote)",
      companyType: "🏢",
      period: "Sep 2023 - Mar 2024",
      description: [
        "Participated in version control workflows using Git to maintain codebase integrity and facilitate collaboration",
        "Developed Bash scripts to automate repetitive tasks such as log rotation, file backups, and also parse log files",
        "Implemented Docker containers to containerize applications, reducing deployment time",
        "Contributed to the implementation CI/CD pipelines to include application and security testing",
        "Collaborated with development teams to optimize application performance",
        "Automated multiple servers' configurations using Ansible"
      ],
      skills: ["Docker", "CI/CD", "Bash", "Git", "Ansible"]
    },
    {
      title: "System Administrator", 
      company: "Xfusion Corp (Virtual)",
      companyType: "🏢",
      period: "Apr 2023 - Sep 2023",
      description: [
        "Carried out systems configurations on the nautilus datacenter across multiple app servers",
        "Administered user accounts, permissions, and access rights on different app servers",
        "Troubleshot multiple Linux installations and ensured the smooth running of applications on app servers",
        "Set up and configured new systems, troubleshooting and resolving technical issues, and implementing security measures",
        "Improved system performance and reduced downtime through regular maintenance and updates",
        "Collaborated with other IT teams to troubleshoot and resolve technical issues, reducing downtime"
      ],
      skills: ["Linux"]
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-blue-400 dark:text-blue-400">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              My journey in the world of DevOps and cloud engineering, solving complex infrastructure challenges
            </p>
            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors duration-200">
              <Download size={20} />
              Download Resume
            </button> */}
        <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition duration-200 no-underline"><Download size={20} /> Download Resume</a>
          </div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-400 dark:text-blue-400 mb-4">
                  <area.icon size={32} />
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-3 text-lg">
                  {area.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Professional Journey Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Professional <span className="text-blue-400 dark:text-blue-400">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              A timeline of my career growth and the impactful projects that have shaped my expertise in DevOps and cloud engineering.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500 dark:bg-blue-500"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 dark:bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">{exp.companyType}</span>
                </div>

                {/* Experience Card */}
                <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-100 dark:bg-gray-800 border border-blue-200 dark:border-blue-500 rounded-lg p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-medium mb-3">
                      <span>📅</span>
                      <span>{exp.period}</span>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 flex items-center gap-2">
                      {exp.companyType} {exp.company}
                    </p>

                    {/* Description */}
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start gap-2">
                          <span className="text-blue-400 dark:text-blue-400 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-400/30 text-blue-600 dark:text-blue-300 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center py-8'>
            {/* <button className="flex items-center justify-center mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              <DownloadIcon />
              Download Resume
            </button> */}
            <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition duration-200 no-underline"><Download size={20} /> Download Resume</a>

          </div>
          

   
        <Footer />
        </div>
      </div>
    </Layout>
  )
}