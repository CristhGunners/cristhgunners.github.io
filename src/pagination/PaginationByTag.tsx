import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHrefByTag } from '../utils/Pagination';

export type IPaginationByTagProps = {
  tag: string;
  previous?: string;
  next?: string;
};

const PaginationByTag = (props: IPaginationByTagProps) => (
  <div className="flex justify-between text-sm">
    {props.previous && (
      <div>
        <Link
          href={convertUrlToLinkHrefByTag(props.previous, props.tag)}
          as={props.previous}
        >
          <a className="block rounded border border-neutral-200 bg-white p-2 text-black transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:border-neutral-600">
            ← Artículos Recientes
          </a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="ml-auto text-right">
        <Link
          href={convertUrlToLinkHrefByTag(props.next, props.tag)}
          as={props.next}
        >
          <a className="block rounded border border-neutral-200 bg-white p-2 text-black transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:border-neutral-600">
            Artículos Pasados →
          </a>
        </Link>
      </div>
    )}
  </div>
);

export { PaginationByTag };
