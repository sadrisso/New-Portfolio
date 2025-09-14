import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";

interface ProjectDetailsPageProps {
  params: { id: string };
}

async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = params;
  const collection = await dbConnect("projects");
  const res = await collection.findOne({ _id: new ObjectId(id) });

  if (!res) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 py-12 px-6 flex justify-center">
      <div className="max-w-5xl w-full relative">
        {/* Back Button - Sticky on top */}
        <div className="sticky top-4 z-50">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition shadow-md"
          >
            <BsArrowLeft size={18} /> Back
          </Link>
        </div>

        {/* Project Card */}
        <div
          className="mt-6 p-8 sm:p-12 bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-800 flex flex-col gap-8"
        >
          {/* Project Name */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-400 mb-4 text-center">
            {res.projectName}
          </h1>

          {/* Project Image */}
          {res.projectImage && (
            <div className="w-full flex justify-center mb-6">
              <Image
                width={600}
                height={400}
                src={res.projectImage}
                alt={res.projectName}
                className="rounded-2xl shadow-xl border border-gray-800 object-contain max-h-96 hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center">
            {res.description}
          </p>

          {/* Tech Stack */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {res.mainTechnologyStack?.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-gray-800 hover:bg-gray-700 text-orange-400 px-4 py-2 rounded-full text-sm sm:text-base shadow-md transition cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges */}
          {res.challenges?.length > 0 && (
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Challenges Faced
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {res.challenges.map((challenge: string, idx: number) => (
                  <li key={idx} className="leading-relaxed">
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Future Plans */}
          {res.futurePlans?.length > 0 && (
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Future Plans
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {res.futurePlans.map((plan: string, idx: number) => (
                  <li key={idx} className="leading-relaxed">
                    {plan}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a
              href={res.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-lg transition text-center"
            >
              <FaExternalLinkAlt size={18} /> Live Demo
            </a>
            <a
              href={res.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium rounded-lg shadow-lg transition text-center"
            >
              <GiThunderBlade size={18} /> GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
