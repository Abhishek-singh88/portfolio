"use client";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "JWT"
      ],
    },
    {
      title: "Web3 / Blockchain",
      skills: [
        "Solidity","Rust" ,"Hardhat", "Ethers.js", "Web3.js", "Smart Contracts", "IPFS"
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify"
      ],
    },
    {
      title: "Other / Soft Skills",
      skills: [
        "Problem Solving", "Team Collaboration", "Open Source", "Hackathons"
      ],
    },
  ];

  return (
    <section className="mt-20 px-4 text-center">
      <h3 className="text-3xl font-bold mb-10 text-white">Skills</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {categories.map((category, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-xl w-full max-w-sm shadow-md border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">{category.title}</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 text-gray-100 rounded-full text-sm border border-gray-600 hover:bg-gray-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
