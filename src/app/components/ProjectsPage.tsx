"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

export interface Project {
  _id: string;
  projectName: string;
  projectImage: string;
  mainTechnologyStack: string[];
  description: string;
  liveLink: string;
  githubLink: string;
  challenges: string[];
  futurePlans: string[];
}

interface ProjectsPageProps {
  data: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const displayedProjects = showMore ? data : data.slice(0, 3);
  return (
    <section className="bg-gray-900 text-gray-200 min-h-screen px-6 md:px-12 py-20">
      {/* Back Button */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-orange-400 hover:text-white mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, idx) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.projectImage}
                alt={project.projectName}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">
                {project.projectName}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.mainTechnologyStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700/50 text-orange-400 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-orange-400 hover:text-white font-medium"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-orange-400 hover:text-white font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {!showMore && data.length > 3 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
