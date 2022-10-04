import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="text-sm flex justify-between">
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a className="hover:text-black dark:text-slate-400 dark:hover:text-white">
            ← Artículos Recientes
          </a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a className="hover:text-black dark:text-slate-400 dark:hover:text-white">
            Artículos Pasados →
          </a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
