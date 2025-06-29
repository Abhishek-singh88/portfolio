"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

 return (
  <section className="mt-20 text-center px-4 md:px-10">
    <h2 className="text-3xl font-bold mb-2">Check out my latest work</h2>
    <p className="text-gray-400 mb-10">
      I&apos;ve built various full-stack projects. Take a look at some of them.
    </p>

    <div className="flex flex-col gap-10">
      {visibleProjects.map((project, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center gap-6 bg-[#111111] rounded-lg p-4 sm:p-6 shadow-md border border-gray-800"
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-48 sm:h-64 md:h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-md object-cover object-center"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-5 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={() => setShowAll(!showAll)}
      className="mt-8 px-6 py-2 bg-white text-black rounded-full hover:opacity-90 transition"
    >
      {showAll ? "View Less" : "View More"}
    </button>
  </section>
);

}
