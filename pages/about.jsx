import { Users, Video, Cloud, Mic } from "lucide-react";
import Layout from "../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { Footer } from "./Footer";
import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const router = useRouter();
  const { isDark } = useTheme();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="min-h-screen px-2 md:px-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-blue-400 dark:text-blue-400">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Cloud Engineer | DevOps Enthusiast | Community Builder
            </p>
          </div>

          {/* Main Content Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Passionate about DevOps{" "}
              <span className="text-blue-400 dark:text-blue-400">
                Excellence
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                
                <div className="relative w-96 h-96 dark:bg-blue-200 bg-blue-400 rounded-lg flex items-center justify-center">
                  {/* Profile Image Container */}
                  <div className="w-88 h-88 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/yomex.jpeg"
                      alt="Profile Picture"
                      fill
                      className="px-8 pt-4 rounded-t-3xl"
                    />
                  </div>
                </div>
              </div>

              {/* Description Text */}
              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a passionate Cloud DevOps Engineer with extensive
                  experience in designing, implementing, and maintaining robust
                  cloud infrastructure and automation pipelines. My expertise
                  lies in Kubernetes, Docker, AWS, Azure, and implementing CI/CD
                  workflows that enable seamless software delivery.
                </p>

                <p>
                  With a strong focus on Infrastructure as Code (IaC), I
                  leverage tools like Terraform, Ansible, and CloudFormation to
                  create scalable, reproducible, and secure environments. I'm
                  deeply committed to implementing DevSecOps practices that
                  embed security throughout the development lifecycle.
                </p>

                <p>
                  Beyond the technical aspects, I enjoy collaborating with
                  cross-functional teams to optimize development workflows and
                  enhance operational efficiency. I believe in continuous
                  learning and regularly contribute to open-source projects and
                  tech communities.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <button
                    onClick={() => router.push("/experience")}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Experience
                  </button>
                  <button
                    onClick={() => router.push("/skills")}
                    className="border border-blue-600 text-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Skills
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                🐳 Docker
              </span>
              <span className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold">
                ⚙️ Kubernetes
              </span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                ☁️ AWS
              </span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                🐍 Python
              </span>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold">
                ⚫ GitHub
              </span>
              <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                🔧 Jenkins
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                💻 Bash
              </span>
              <span className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                🏗️ Terraform
              </span>
            </div>
            <div className="flex justify-center mb-8">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                ☁️ Azure
              </span>
            </div>
            <div className="text-center">
              <button
                onClick={() => router.push("/skills")}
                className="border border-blue-600 text-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Skills & Certifications
              </button>
            </div>
          </div>

          {/* Community Involvement Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Community Involvement
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
              I'm passionate about giving back to the tech community through
              volunteering, mentorship, and knowledge sharing
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ALX Pathway Ambassador */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-1 bg-blue-500"></div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Users className="w-8 h-8 text-blue-400 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    ALX Pathway Ambassador
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Mentoring and guiding new students through the ALX Software
                    Engineering program, offering support and sharing resources.
                  </p>
                </div>
              </div>

              {/* AWS Community Day Volunteer */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-1 bg-blue-500"></div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Video className="w-8 h-8 text-blue-400 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    AWS Community Day Volunteer
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Served as a Hall Management volunteer at AWS Community Day,
                    ensuring smooth operations and helping attendees navigate
                    the event.
                  </p>
                </div>
              </div>

              {/* DevOps Dojo Community Builder */}

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-1 bg-blue-500"></div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Cloud className="w-8 h-8 text-blue-400 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    DevOps Dojo Community Builder
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Contributing to the DevOps Dojo community by organizing
                    workshops, creating learning resources, and fostering
                    knowledge exchange.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Speaking Engagements Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
              Speaking{" "}
              <span className="text-blue-400 dark:text-blue-400">
                Engagements
              </span>
            </h2>

            <div className="space-y-8">
              {/* Storytelling Workshop */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 dark:bg-blue-600 p-3 rounded-lg mt-1">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Storytelling Workshop
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Hosted a workshop on effective storytelling techniques for
                    university scholarship applications, helping students craft
                    compelling personal narratives.
                  </p>
                </div>
              </div>

              {/* DevOps Conclave X */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 dark:bg-blue-600 p-3 rounded-lg mt-1">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    DevOps Conclave X
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Leading Twitter Spaces discussions on DevOps best practices,
                    cost optimization strategies, and emerging technologies in
                    cloud-native development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </Layout>
  );
}
