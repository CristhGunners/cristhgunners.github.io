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
        <span className="mx-auto block w-20 rounded bg-cyan-600 px-2.5 py-0.5 text-center text-xs font-bold text-white">
          Proyecto
        </span>
      ) : (
        ''
      )}
      <h1 className="text-center text-3xl font-black text-black dark:text-white">
        {props.title}
      </h1>
      <h2 className="rounded border border-neutral-200 bg-white p-2 text-center text-sm font-black uppercase text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
        {props.subtitle}
      </h2>
    </div>

    <div className="mb-8 text-center text-xs font-bold uppercase text-black opacity-50 dark:text-white">
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
