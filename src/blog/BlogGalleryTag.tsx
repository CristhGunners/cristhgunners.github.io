import React from 'react';

import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import Link from 'next/link';

import {
  PaginationByTag,
  IPaginationByTagProps,
} from '../pagination/PaginationByTag';
import { PostItems } from '../utils/Content';

export type IBlogGalleryTagProps = {
  tag: string;
  posts: PostItems[];
  pagination: IPaginationByTagProps;
};

const BlogGalleryTag = (props: IBlogGalleryTagProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-12 flex flex-col items-start relative">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="text-black font-black z-20 hover:text-pink-600 dark:text-white dark:hover:text-pink-600">
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <h3 className="absolute -top-8 left-0 text-6xl font-black uppercase text-black opacity-5 z-10 select-none dark:text-white">
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

    <PaginationByTag
      previous={props.pagination.previous}
      next={props.pagination.next}
      tag={props.tag}
    />
  </>
);

export { BlogGalleryTag };
