import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CheckCircle, Award, Calendar, Eye, Activity } from 'lucide-react';
import { Footer } from './Footer';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Cloud Platforms');

  const skillCategories = {
    'Cloud Platforms': {
      description: 'My expertise in designing, implementing, and managing cloud infrastructure across major platforms.',
      skills: [
        { name: 'AWS', level: 95, subtitle: 'Proficiency' },
        { name: 'Microsoft Azure', level: 60, subtitle: 'Proficiency' },
        { name: 'Oracle', level: 60, subtitle: 'Proficiency' }
      ],
      certifications: [
        {
          title: 'AWS Certified Solutions Architect',
          provider: 'Amazon Web Services',
          status: 'Active',
          year: '2025',
          active: true
        },
        {
          title: 'AWS Certified Cloud Practitioner',
          provider: 'Amazon Web Services',
          status: 'Active',
          year: '2025',
          active: true
        },
          {
      title: 'Terraform Associate',
      provider: 'HashiCorp',
      status: 'In View',
      year: '2025',
      category: 'Infrastructure as code',
      icon: '🏆',
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    }
      ],
      projects: [
        'Multi-region AWS infrastructure deployment with high availability and DR capabilities',
        'Cost optimization initiative resulting in 35% reduction in cloud spending',
        'Hybrid cloud architecture connecting on-premise systems with AWS services'
      ]
    },
    'Containers': {
      description: 'Containerization and orchestration expertise with Docker and Kubernetes.',
      skills: [
        { name: 'Docker', level: 88, subtitle: 'Proficiency' },
        { name: 'Kubernetes', level: 85, subtitle: 'Proficiency' },
        { name: 'Container Orchestration', level: 82, subtitle: 'Proficiency' }
      ],
      certifications: [
        {
          title: 'Kubernetes and Cloud Native Associate',
          provider: 'Cloud Native Computing Foundation',
          status: 'In View',
          year: '2025',
          active: true
        }
      ],
      projects: [
        'Microservices deployment using Kubernetes clusters',
        'Container security implementation and best practices',
        'CI/CD pipeline integration with containerized applications'
      ]
    },
    'CI/CD': {
      description: 'Continuous integration and deployment pipeline expertise.',
      skills: [
        { name: 'Jenkins', level: 90, subtitle: 'Proficiency' },
        { name: 'GitHub Actions', level: 85, subtitle: 'Proficiency' },
        { name: 'GitLab CI', level: 80, subtitle: 'Proficiency' }
      ],
      certifications: [],
      projects: [
        'Automated deployment pipelines for microservices',
        'Multi-environment deployment strategies',
        'Quality gates and automated testing integration'
      ]
    },
    'IaC': {
      description: 'Infrastructure as Code tools and practices.',
      skills: [
        { name: 'Terraform', level: 88, subtitle: 'Proficiency' },
        { name: 'CloudFormation', level: 85, subtitle: 'Proficiency' },
        { name: 'Ansible', level: 75, subtitle: 'Proficiency' }
      ],
      certifications: [],
      projects: [
        'Infrastructure automation for multi-cloud environments',
        'Configuration management and compliance',
        'Infrastructure versioning and rollback strategies'
      ]
    },
    'Monitoring': {
      description: 'Application and infrastructure monitoring solutions.',
      skills: [
        { name: 'Prometheus', level: 85, subtitle: 'Proficiency' },
        { name: 'Grafana', level: 80, subtitle: 'Proficiency' },
        { name: 'ELK Stack', level: 82, subtitle: 'Proficiency' }
      ],
      certifications: [],
      projects: [
        'Real-time monitoring and alerting systems',
        'Custom dashboard development',
        'Log aggregation and analysis solutions'
      ]
    },
    'Programming': {
      description: 'Programming languages and frameworks for backend development.',
      skills: [
        { name: 'Python', level: 95, subtitle: 'Proficiency' },
        { name: 'JavaScript/Node.js', level: 90, subtitle: 'Proficiency' },
        { name: 'Golang', level: 85, subtitle: 'Proficiency' }
      ],
      certifications: [],
      projects: [
        'Scalable REST API development',
        'Microservices architecture implementation',
        'Database optimization and query performance'
      ]
    },
    'Messaging': {
      description: 'Message queuing and event-driven architecture.',
      skills: [
        { name: 'Apache Kafka', level: 85, subtitle: 'Proficiency' },
        { name: 'RabbitMQ', level: 80, subtitle: 'Proficiency' },
        { name: 'Amazon SQS', level: 88, subtitle: 'Proficiency' }
      ],
      certifications: [],
      projects: [
        'Event-driven microservices communication',
        'Real-time data streaming pipelines',
        'Message queue optimization and scaling'
      ]
    },
    'Other Tools': {
      description: 'Additional tools and technologies in my toolkit.',
      skills: [
        { name: 'Git/GitHub', level: 95, subtitle: 'Proficiency' },
        { name: 'Linux/Unix', level: 90, subtitle: 'Proficiency' },
        { name: 'API Development', level: 95, subtitle: 'Proficiency' }
      ],
      certifications: [],
      projects: [
        'Version control strategy implementation',
        'API design and documentation',
        'System administration and optimization'
      ]
    }
  };

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      status: 'Active',
      year: '2025',
      category: 'Cloud',
      icon: '🏆',
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      provider: 'Amazon Web Services',
      status: 'Active',
      year: '2025',
      category: 'Cloud',
      icon: '⬢',
      color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    },
     {
      title: 'Terraform Associate',
      provider: 'HashiCorp',
      status: 'In View',
      year: '2025',
      category: 'Infrastructure as code',
      icon: '🏆',
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    }, 
    {
      title: 'Oracle Cloud Infrastructure Multicloud Architect Professional',
      provider: 'Oracle',
      status: 'In View',
      year: '2025',
      category: 'Cloud',
      icon: '🏆',
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Kubernetes and Cloud Native Associate',
      provider: 'Cloud Native Computing Foundation',
      status: 'In View',
      year: '2025',
      category: 'Containers',
      icon: '🏆',
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'HNG Certificate of Proficiency',
      provider: 'HNG Internship',
      status: 'Active',
      year: '2024',
      category: 'DevOps',
      icon: 'HNG',
      color: 'bg-indigo-500 text-white'
    }
   
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    if (status === 'Active') {
      return `${baseClasses} bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400`;
    } else if (status === 'In View') {
      return `${baseClasses} bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400`;
    }
    return `${baseClasses} bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400`;
  };

  const getCategoryBadge = (category) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (category) {
      case 'Cloud':
        return `${baseClasses} bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400`;
      case 'Containers':
        return `${baseClasses} bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400`;
      case 'DevOps':
        return `${baseClasses} bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400`;
      default:
        return `${baseClasses} bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400`;
    }
  };

  const tabs = Object.keys(skillCategories);
  const activeCategory = skillCategories[activeTab];

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and certifications
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          {/* Tab Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-center flex-wrap">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {activeTab}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {activeCategory.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Skills Progress Bars */}
                <div>
                  <div className="space-y-6">
                    {activeCategory.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-800 dark:text-gray-200 font-medium">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.subtitle}
                            </span>
                          </div>
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column Content */}
                <div className="space-y-8">
                  {/* Certifications */}
                  {activeCategory.certifications.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                        {activeTab} Certifications
                      </h3>
                      <div className="space-y-4">
                        {activeCategory.certifications.map((cert, index) => (
                          <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <h4 className="font-semibold text-gray-900 dark:text-white">
                                    {cert.title}
                                  </h4>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                  {cert.provider}
                                </p>
                                <div className="flex items-center space-x-2">
                                  <span className={getStatusBadge(cert.status)}>
                                    {cert.status}
                                  </span>
                                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                    {cert.year}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related Projects */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      {activeTab}-Related Projects
                    </h3>
                    <div className="space-y-3">
                      {activeCategory.projects.map((project, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {project}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Certifications Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-blue-600 dark:text-blue-400">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Industry-recognized certifications that validate my expertise in various technologies and domains
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      {cert.icon === 'HNG' ? (
                        <span className="text-white font-bold text-sm">HNG</span>
                      ) : (
                        <span className="text-2xl">{cert.icon}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {cert.provider}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className={getStatusBadge(cert.status)}>
                        {cert.status}
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {cert.year}
                      </span>
                      <span className={getCategoryBadge(cert.category)}>
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-8'>
            <Footer />
          </div>
        </div>
      </div>
    </Layout>
  );
}