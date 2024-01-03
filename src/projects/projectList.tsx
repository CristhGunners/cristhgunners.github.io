import React from 'react';

import { ProjectItem } from '../utils/Content';

export type IProjectListProps = {
  projects: ProjectItem[];
};

const ProjectList = (props: IProjectListProps) => (
  <div className="space-y-8">
    {props.projects.map((project) => (
      <div
        key={project.title}
        className={`w-full rounded border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800`}
      >
        <div className="">
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
          <ul className="mt-8">
            <li className="mb-2 flex items-center justify-start">
              <span className="w-28 text-base font-bold text-black dark:text-white">
                Website:{' '}
              </span>{' '}
              <span className="break-all text-base text-black dark:text-white">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-cyan-600"
                >
                  {project.title}
                </a>
              </span>
            </li>
            <li className="mb-2 flex items-center justify-start">
              <span className="w-28 text-base font-bold text-black dark:text-white">
                Compañía:{' '}
              </span>{' '}
              <span className="text-base text-black dark:text-white">
                {project.company}
              </span>
            </li>
            <li className="flex items-center justify-start">
              <span className="w-28 text-base font-bold text-black dark:text-white">
                Rol:{' '}
              </span>{' '}
              <span className="text-base text-black dark:text-white">
                {project.role}
              </span>
            </li>
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export { ProjectList };
