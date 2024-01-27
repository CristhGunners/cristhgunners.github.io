import React from 'react';

import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
  subtitle: string;
  tags: string;
  is_project: string;
};

const DisplayPost = (props: IPostProps) => (
  <Main
    meta={
      <Meta
        title={props.title}
        description={props.description}
        keywords={props.tags}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}
      />
    }
  >
    <div className="mb-8 flex flex-col items-center justify-center space-y-2">
      {props.is_project === 'true' ? (
        <div className="flex items-center justify-center space-x-2">
          <span className="text-left text-xs font-black uppercase text-neutral-400">
            Proyecto
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
          </span>
        </div>
      ) : (
        ''
      )}
      <h1 className="text-balance text-center text-2xl font-bold text-white">
        {props.title}
      </h1>
      <h2 className="text-center text-sm font-black uppercase text-neutral-400">
        {props.subtitle}
      </h2>
    </div>

    <div className="mb-8 text-center text-xs font-bold uppercase text-neutral-400">
      {format(new Date(props.date), 'LLLL dd, yyyy', {
        locale: esLocale,
      })}
    </div>

    <Content>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Content>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
    'subtitle',
    'tags',
    'is_project',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      content,
      subtitle: post.subtitle,
      tags: post.tags,
      is_project: post.is_project,
    },
  };
};

export default DisplayPost;
