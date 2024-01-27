import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { BlogGalleryTag } from '../../../blog/BlogGalleryTag';
import { Meta } from '../../../layout/Meta';
import { IPaginationByTagProps } from '../../../pagination/PaginationByTag';
import { Main } from '../../../templates/Main';
import { AppConfig } from '../../../utils/AppConfig';
import {
  getAllTags,
  getPostsByTag,
  getTagBySlug,
  PostItems,
} from '../../../utils/Content';

type ITagUrl = {
  slug: string;
};

type ITagProps = {
  tag: string;
  count: number;
  posts: PostItems[];
  pagination: IPaginationByTagProps;
};

const DisplayTag = (props: ITagProps) => {
  const tagTitle = props.tag.charAt(0).toUpperCase() + props.tag.slice(1);

  return (
    <Main meta={<Meta title={tagTitle} description={tagTitle} />}>
      <div className="mb-16 flex flex-col items-center justify-center space-y-2">
        <h1 className="text-center text-2xl font-black uppercase text-white">
          {props.tag}
        </h1>
        <h2 className="mx-auto p-2 text-center text-sm font-black uppercase text-neutral-400">
          {props.count}
        </h2>
      </div>

      <BlogGalleryTag
        tag={props.tag}
        posts={props.posts}
        pagination={props.pagination}
      />
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths<ITagUrl> = async () => {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        slug: tag.tag,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ITagProps, ITagUrl> = async ({
  params,
}) => {
  const tag = getTagBySlug(params!.slug);

  if (!tag) {
    return {
      notFound: true,
    };
  }

  const posts = getPostsByTag(tag.tag, [
    'title',
    'date',
    'slug',
    'subtitle',
    'tags',
    'is_project',
  ]);

  const pagination: IPaginationByTagProps = { tag: tag.tag };

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = `/tags/${tag.tag}/page2`;
  }

  return {
    props: {
      tag: tag.tag,
      count: tag.count,
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default DisplayTag;
