"use client";

import { useState } from "react";
import ProjectList from "@/features/projects/Projectlist";
import { PROJECTS} from "@/app/constants/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesType = filter === "all" || project.title.toLowerCase().replace(" ", "_") === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="p-6">
      <h1 className=" text-2xl text-center font-bold p-5">Projects</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg w-full mb-4"
      />
      <div className="flex gap-4 mb-6">
        {[
          { label: "All", value: "all" },
          { label: "Websites", value: "website" },
          { label: "Web App", value: "web_app" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-4 py-2 rounded-lg border ${
              filter === btn.value
                ? "bg-blue-500 text-white font-bold"
                : "bg-white text-black"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

