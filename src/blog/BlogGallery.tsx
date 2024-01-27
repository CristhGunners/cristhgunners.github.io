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
        <li key={elt.slug}>
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="relative mb-4 flex flex-col items-start justify-between space-y-2 rounded p-4 transition-colors hover:bg-neutral-900 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <div className="space-y-2">
                {elt.is_project === 'true' ? (
                  <div className="flex items-center justify-start space-x-2">
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

                <h2 className="text-balance text-base font-normal text-white">
                  {elt.title}
                </h2>

                <div className="text-xs font-bold uppercase text-neutral-400">
                  {format(new Date(elt.date), 'LLLL dd, yyyy', {
                    locale: esLocale,
                  })}
                </div>
              </div>

              <h3 className="rounded bg-neutral-800 px-4 py-2 text-xs font-black uppercase text-neutral-400">
                {elt.tags}
              </h3>
            </a>
          </Link>
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
