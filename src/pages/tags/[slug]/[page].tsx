import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { BlogGalleryTag } from '../../../blog/BlogGalleryTag';
import { Meta } from '../../../layout/Meta';
import { IPaginationProps } from '../../../pagination/Pagination';
import { Main } from '../../../templates/Main';
import { AppConfig } from '../../../utils/AppConfig';
import {
  PostItems,
  getAllTags,
  getPostsByTag,
  getTagBySlug,
} from '../../../utils/Content';
import { convertTo2D } from '../../../utils/Pagination';

type IPageUrl = {
  slug: string;
  page: string;
};

type ITagProps = {
  tag: string;
  count: number;
  posts: PostItems[];
  pagination: IPaginationProps;
};

const PaginatePosts = (props: ITagProps) => {
  const tagTitle = props.tag.charAt(0).toUpperCase() + props.tag.slice(1);

  return (
    <Main meta={<Meta title={tagTitle} description={tagTitle} />}>
      <div className="relative mb-16">
        <h1 className="uppercase text-center font-black text-2xl text-black relative z-20 dark:text-white">
          {props.tag}
        </h1>
        <h2 className="absolute -top-8 left-0 right-0 text-center mx-auto text-6xl font-black uppercase text-black opacity-5 z-10 select-none dark:text-white">
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

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const tags = getAllTags();

  const paths: any[] = [];

  for (let index = 0; index < tags.length; index += 1) {
    const tag = tags[index];

    const posts = getPostsByTag(tag.tag, [
      'title',
      'date',
      'slug',
      'subtitle',
      'tags',
    ]);
    const pages = convertTo2D(posts, AppConfig.pagination_size);

    pages.slice(1).map((_, ind) =>
      paths.push({
        params: {
          // Ind starts from zero so we need to do ind + 1
          // slice(1) removes the first page so we do another ind + 1
          // the first page is implemented in tags/[slug]/index.tsx
          slug: tag.tag,
          page: `page${ind + 2}`,
        },
      })
    );
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ITagProps, IPageUrl> = async ({
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
  ]);

  const pages = convertTo2D(posts, AppConfig.pagination_size);
  const currentPage = Number(params!.page.replace('page', ''));
  const currentInd = currentPage - 1;

  const pagination: IPaginationProps = {};

  if (currentPage < pages.length) {
    pagination.next = `/tags/${tag.tag}/page${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = `/tags/${tag.tag}`;
  } else {
    pagination.previous = `/tags/${tag.tag}/page${currentPage - 1}`;
  }

  return {
    props: {
      tag: tag.tag,
      count: tag.count,
      posts: pages[currentInd],
      pagination,
    },
  };
};

export default PaginatePosts;
