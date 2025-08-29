import { ExternalLink, Github } from "lucide-react";
import { Footer } from "./Footer";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";

export default function Projects() {
  const router = useRouter();
  const { isDark } = useTheme();

  const projects = [
    {
      title: "EKS Microservices Deployment",
      description:
        "Provisioned and managed an EKS cluster using Terraform, Ansible, Helm, and ArgoCD for GitOps workflow. Set up monitoring and logging using Prometheus, Grafana and EFK.",
      technologies: [
        "EKS",
        "GitOps",
        "Terraform",
        "Ansible",
        "logging",
        "monitoring",
      ],
      image: "/assets/yomex.jpeg",
      github: "https://www.github.com",
      article: "https://www.github.com",
    },
    {
      title: "Automated GitOps Workflow",
      description:
        "Automated infrastructure and app deployment using GitHub Actions, Terraform, Ansible, and Docker, with GitOps workflows, branching strategies and cost optimization via InfraCost.",
      technologies: ["CI/CD", "GitOps", "InfraCost", "Terraform"],
      image: "/assets/yomex.jpeg",
      github: "https://www.github.com",
      article: "https://www.github.com",
    },
    {
      title: "Full Stack Application Deployment",
      description:
        "Fully automated workflow for infrastructure provisioning and deployment of full stack application and monitoring stack (Prometheus, Grafana, Loki, Promtail, and cAdvisor).",
      technologies: ["automation", "monitoring", "logging", "Terraform"],
      image: "/assets/yomex.jpeg",
      github: "https://www.github.com",
      article: "https://www.github.com",
    },
    {
      title: "Static Site on S3",
      description:
        "Hosted a performant static website using Amazon S3 and CloudFront, leveraging caching and compression for cost-effective global delivery.",
      technologies: [
        "S3",
        "CloudFront",
        "StaticHosting",
        "WebsiteOptimization",
      ],
      image: "/assets/yomex.jpeg",
      github: "https://www.github.com",
      article: "https://www.github.com",
    },
    {
      title: "Serverless Sports Notifier",
      description:
        "Built a serverless real-time NBA score notification system using AWS Lambda, SNS, EventBridge, and the NBA API to deliver alerts via SMS and email.",
      technologies: ["Serverless", "AWSLambda", "SNS", "EventBridge", "Python"],
      image: "/assets/yomex.jpeg",
      github: "https://www.github.com",
      article: "https://www.github.com",
    },
    {
      title: "Dev-Prod Docker Workflow",
      description:
        "Created a unified dev-to-prod workflow using Docker Compose, ensuring consistent environments, simplified debugging, and faster deployment cycles.",
      technologies: ["Docker-compose", "Docker", "nginx", "Containers"],
      image: "/assets/yomex.jpeg",
      github: "https://www.github.com",
      article: "https://www.github.com",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-blue-400 dark:text-blue-400">Projects</span>
             </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
              Here are some of my recent projects that demonstrate my expertise
              in Kubernetes, cloud infrastructure, and DevOps automation. Each
              project reflects my approach to solving real-world challenges
              using modern DevOps practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded flex items-center space-x-2 text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                       <span>📄</span>
                       <span>Article</span>
                     </button>

                    <a
                      href={project.github}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                     >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <button
              onClick={() => router.push("/projects")}
              className="border border-blue-600 text-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
           >
              View All Projects
            </button>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Layout>
  );
}
