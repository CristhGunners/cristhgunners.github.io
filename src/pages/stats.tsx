import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { IStatsListProps, StatsList } from '../stats/statsList';
import { Main } from '../templates/Main';
import { getAllPosts, getAllProjects, getAllTags } from '../utils/Content';

const Stats = (props: IStatsListProps) => (
  <Main meta={<Meta title="Estadísticas" description="Estadísticas" />}>
    <StatsList
      postsCount={props.postsCount}
      tagsCount={props.tagsCount}
      projectsCount={props.projectsCount}
    />
  </Main>
);

export const getStaticProps: GetStaticProps<IStatsListProps> = async () => {
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  const allProjects = getAllProjects();

  return {
    props: {
      postsCount: allPosts.length,
      tagsCount: allTags.length,
      projectsCount: allProjects.length,
    },
  };
};

export default Stats;
