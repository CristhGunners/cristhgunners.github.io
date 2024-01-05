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
        <li key={elt.slug}>
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="mb-4 flex flex-col items-start space-y-3 rounded border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
              {elt.is_project === 'true' ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 dark:text-neutral-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <span className="text-right text-xs font-black uppercase text-neutral-400">
                    Proyecto
                  </span>
                </div>
              ) : (
                ''
              )}

              <h2 className="text-base font-normal text-black dark:text-white">
                {elt.title}
              </h2>

              <h3 className="text-xs font-black uppercase text-neutral-400 dark:text-neutral-400">
                {elt.tags}
              </h3>

              <div className="text-right text-xs font-bold uppercase text-neutral-400 dark:text-neutral-400">
                {format(new Date(elt.date), 'LLLL dd, yyyy', {
                  locale: esLocale,
                })}
              </div>
            </a>
          </Link>
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
