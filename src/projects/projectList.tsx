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
        className={`relative block w-full rounded p-4 transition-colors hover:bg-neutral-900`}
      >
        <div>
          <div className="flex items-center justify-start space-x-2">
            <img
              src={`/assets/images/projects/${project.logo}`}
              alt={project.title}
              className="h-10 w-10"
            />
            <div>
              <h2 className="text-left text-base font-bold text-white">
                {project.title}
              </h2>
              <p className="text-balance text-sm text-neutral-400">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
);

export { ProjectList };
