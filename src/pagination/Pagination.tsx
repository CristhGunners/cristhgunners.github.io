import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="flex justify-between">
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a className="block rounded p-2 text-sm text-neutral-400 transition-colors hover:text-white">
            Artículos Recientes
          </a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="ml-auto text-right">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a className="block rounded p-2 text-sm text-neutral-400 transition-colors hover:text-white">
            Artículos Pasados
          </a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
