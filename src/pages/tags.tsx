import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { ITagListProps, TagList } from '../tags/tagList';
import { Main } from '../templates/Main';
import { getAllTags } from '../utils/Content';

const Tags = (props: ITagListProps) => (
  <Main meta={<Meta title="Tags" description="Tags" />}>
    <TagList tags={props.tags} />
  </Main>
);

export const getStaticProps: GetStaticProps<ITagListProps> = async () => {
  const allTags = getAllTags();

  return {
    props: {
      tags: allTags,
    },
  };
};

export default Tags;
