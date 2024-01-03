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
        <li
          key={elt.slug}
          className="relative mb-12 flex flex-col items-start space-y-3 px-0 py-0"
        >
          {elt.is_project === 'true' ? (
            <span className="absolute -top-6 left-0 rounded bg-cyan-600 px-2.5 py-0.5 text-xs font-bold text-white">
              Proyecto
            </span>
          ) : (
            ''
          )}
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="font-black text-black hover:text-cyan-600 dark:text-white dark:hover:text-cyan-600">
              <h2 className="sm:leading-none">
                {elt.title} {elt.project}
              </h2>
            </a>
          </Link>

          <Link href="/tags/[slug]" as={`/tags/${elt.tags}`}>
            <a className="rounded border border-neutral-200 bg-white p-2 text-xs font-black uppercase text-black transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:border-neutral-600">
              <h3>{elt.tags}</h3>
            </a>
          </Link>

          <div className="text-right text-xs font-bold uppercase text-neutral-400 dark:text-neutral-400">
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
