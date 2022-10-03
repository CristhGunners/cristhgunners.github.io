import React from 'react';

import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-12 flex flex-col items-start relative">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="text-black font-black z-20 hover:text-pink-600 dark:text-white dark:hover:text-pink-600">
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <h3 className="absolute -top-8 left-0 text-6xl font-black uppercase text-black opacity-5 z-10 dark:text-white">
            {elt.subtitle}
          </h3>

          <div className="text-right uppercase font-bold mt-4 text-black opacity-50 text-xs z-20 dark:text-white">
            {format(new Date(elt.date), 'LLLL dd, yyyy', {
              locale: esLocale,
            })}
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
