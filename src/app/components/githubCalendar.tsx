"use client";

import GitHubCalendar from "react-github-calendar";

export default function GitHubActivity() {
  return (
    <section className="mt-20 px-4 text-center">
      <h3 className="text-3xl font-bold mb-6 text-white">GitHub Activity</h3>
       <p className="text-gray-400 mb-8 text-sm">
        My open-source activity over the last year
      </p>
      <br></br>

      <div className="max-w-5xl mx-auto bg-[#0D1117] text-white p-6 rounded-xl shadow-md border border-gray-700">
        <h4 className="text-xl font-semibold mb-4 text-white">GitHub Contributions</h4>

        <GitHubCalendar
          username="abhishek-singh88" 
          blockSize={13}
          blockMargin={4}
          fontSize={14}
          colorScheme="dark"
        />

        <p className="mt-4 text-blue-400 underline text-sm">
          <a href="https://github.com/abhishek-singh88" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
