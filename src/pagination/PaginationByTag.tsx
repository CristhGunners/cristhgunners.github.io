import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHrefByTag } from '../utils/Pagination';

export type IPaginationByTagProps = {
  tag: string;
  previous?: string;
  next?: string;
};

const PaginationByTag = (props: IPaginationByTagProps) => (
  <div className="text-sm flex justify-between">
    {props.previous && (
      <div>
        <Link
          href={convertUrlToLinkHrefByTag(props.previous, props.tag)}
          as={props.previous}
        >
          <a className="hover:text-black dark:text-slate-400 dark:hover:text-white">
            ← Artículos Recientes
          </a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto">
        <Link
          href={convertUrlToLinkHrefByTag(props.next, props.tag)}
          as={props.next}
        >
          <a className="hover:text-black dark:text-slate-400 dark:hover:text-white">
            Artículos Pasados →
          </a>
        </Link>
      </div>
    )}
  </div>
);

export { PaginationByTag };
