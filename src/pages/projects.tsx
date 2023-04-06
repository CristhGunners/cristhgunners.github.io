import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { IProjectListProps, ProjectList } from '../projects/projectList';
import { Main } from '../templates/Main';
import { getAllProjects } from '../utils/Content';

const Projects = (props: IProjectListProps) => {
  return (
    <Main meta={<Meta title="Proyectos" description="Proyectos" />}>
      <ProjectList projects={props.projects} />
    </Main>
  );
};

export const getStaticProps: GetStaticProps<IProjectListProps> = async () => {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
};

export default Projects;
