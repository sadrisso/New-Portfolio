"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

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
      <div className="flex items-center gap-5 mb-8">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-orange-400 hover:text-white"
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

        <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <motion.div
            key={project?._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800/60 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20 
                 transition-all duration-300 flex flex-col"
          >
            {/* Project Image */}
            <div className="relative w-full h-56">
              <Image
                src={project.projectImage}
                alt={project.projectName}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-1">
                {project.projectName}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.mainTechnologyStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700/50 text-orange-400 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Details Button */}
              <div className="mt-auto">
                <Link
                  href={`/projects/${project?._id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                       bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium 
                       shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Details <BsArrowRight size={16} />
                </Link>
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
