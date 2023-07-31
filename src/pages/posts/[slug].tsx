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
    <div className="relative mb-8">
      <h1 className="text-center font-black text-3xl text-black relative z-20 dark:text-white">
        {props.title}
      </h1>
      <h2 className="absolute -top-6 left-0 right-0 text-center mx-auto text-6xl font-black uppercase text-black opacity-5 z-10 select-none dark:text-white">
        {props.subtitle}
      </h2>
    </div>

    <div className="text-center mb-8 uppercase font-bold text-black opacity-50 text-xs dark:text-white">
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
    },
  };
};

export default DisplayPost;
