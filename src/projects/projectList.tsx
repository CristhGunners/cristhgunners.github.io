import React from 'react';

import { ProjectItem } from '../utils/Content';

export type IProjectListProps = {
  projects: ProjectItem[];
};

const ProjectList = (props: IProjectListProps) => (
  <div className="space-y-8">
    {props.projects.map((project) => (
      <div key={project.title} className={`w-full rounded`}>
        <div className="">
          <div className="flex items-center justify-start space-x-2 mb-4">
            <img
              src={`/assets/images/projects/${project.logo}`}
              alt={project.title}
              className="w-6 h-6 rounded"
            />
            <h2 className="font-bold text-black text-2xl text-left dark:text-white">
              {project.title}
            </h2>
          </div>
          <p className="text-base text-black dark:text-white">
            {project.description}
          </p>
          <ul className="mt-8">
            <li className="flex items-center justify-start mb-2">
              <span className="text-base text-black font-bold w-28 dark:text-white">
                Website:{' '}
              </span>{' '}
              <span className="text-base text-black break-all dark:text-white">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-pink-600"
                >
                  {project.title}
                </a>
              </span>
            </li>
            <li className="flex items-center justify-start mb-2">
              <span className="text-base text-black font-bold w-28 dark:text-white">
                Compañía:{' '}
              </span>{' '}
              <span className="text-base text-black dark:text-white">
                {project.company}
              </span>
            </li>
            <li className="flex items-center justify-start">
              <span className="text-base text-black font-bold w-28 dark:text-white">
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
