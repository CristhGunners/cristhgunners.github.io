import React from 'react';

import { ProjectItem } from '../utils/Content';

export type IProjectListProps = {
  projects: ProjectItem[];
};

const ProjectList = (props: IProjectListProps) => (
  <div className="space-y-4">
    {props.projects.map((project) => (
      <a
        key={project.title}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`relative block w-full rounded border border-neutral-200 bg-white p-4 transition-colors dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600`}
      >
        <div>
          <div className="mb-4 flex items-center justify-start space-x-2">
            <img
              src={`/assets/images/projects/${project.logo}`}
              alt={project.title}
              className="h-6 w-6"
            />
            <h2 className="text-left text-2xl font-bold text-black dark:text-white">
              {project.title}
            </h2>
          </div>
          <p className="text-base text-black dark:text-white">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-col items-start justify-start sm:flex-row sm:items-center sm:space-x-2">
            <li className="flex items-center justify-start">
              <span className="text-base text-black dark:text-neutral-400">
                {project.company}
              </span>
            </li>
            <li className="flex items-center justify-start">
              <span className="text-base text-black dark:text-neutral-400">
                {project.role}
              </span>
            </li>
          </ul>
        </div>
        <span className="absolute right-2 top-2 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
        </span>
      </a>
    ))}
  </div>
);

export { ProjectList };
