"use client";

import { useState } from "react";
import { hackathons } from "../../data/hackthons";
import { CalendarDays } from "lucide-react";

export default function HackathonSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleHackathons = showAll ? hackathons : hackathons.slice(0, 3);

  return (
    <section className="px-4 py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Achievements & Hackathons</h2>
        <p className="text-center text-gray-400 mb-10">
          I enjoy the thrill of turning ideas into prototypes during hackathons.
        </p>

        <div className="space-y-6">
          {visibleHackathons.map((hack, i) => (
            <div
              key={i}
              className="p-6 bg-[#111] border border-gray-800 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-start">
                  <span className="text-xl">{hack.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{hack.name}</h3>
                    <p className="text-gray-400">{hack.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <CalendarDays size={16} />
                  {hack.date}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {hack.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-sm px-3 py-1 bg-gray-800 rounded-full text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-x-5">
                <a
                  href={hack.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 hover:bg-gray-700 text-white text-sm px-4 py-1 rounded-full"
                >
                  🔗 Visit Hackthon site
                </a>
                <a
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 hover:bg-gray-700 text-white text-sm px-4 py-1 rounded-full"
                >
                  🔗 View project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
