import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { IProjectListProps, ProjectList } from '../projects/projectList';
import { Main } from '../templates/Main';
import { getAllProjects } from '../utils/Content';

const Projects = (props: IProjectListProps) => (
  <Main meta={<Meta title="Trabajos" description="Trabajos" />}>
    <ProjectList projects={props.projects} />
  </Main>
);

export const getStaticProps: GetStaticProps<IProjectListProps> = async () => {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
};

export default Projects;
