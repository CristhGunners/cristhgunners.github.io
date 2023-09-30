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
          {elt.is_project === 'true' ? (
            <span className="bg-pink-600 text-white text-xs font-bold px-2.5 py-0.5 rounded absolute -top-6 left-0">
              Proyecto
            </span>
          ) : (
            ''
          )}
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="text-black font-black z-20 hover:text-pink-600 dark:text-white dark:hover:text-pink-600">
              <h2>
                {elt.title} {elt.project}
              </h2>
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

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
