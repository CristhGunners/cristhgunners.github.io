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
        <li
          key={elt.slug}
          className="mb-6 flex flex-col items-start sm:flex-row justify-between sm:items-center"
        >
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="hover:text-black mb-2 sm:mb-0">
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div className="w-auto text-right uppercase font-bold bg-pink-600 p-2 text-white rounded text-xs">
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
