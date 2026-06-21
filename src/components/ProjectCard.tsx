import type { Project } from "../types";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 p-6 gap-4 hover:shadow-lg transition-shadow bg-white">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={15} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ExternalLink size={15} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
