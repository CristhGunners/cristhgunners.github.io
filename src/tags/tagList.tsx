import React from 'react';

import Link from 'next/link';

import { TagItem } from '../utils/Content';

export type ITagListProps = {
  tags: TagItem[];
};

const TagList = (props: ITagListProps) => (
  <div className="w-full sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-4">
    {props.tags.map((tag) => (
      <Link href={'/tags/[slug]'} as={`/tags/${tag.tag}`} key={tag.tag}>
        <a className="group mb-4 inline-block w-full rounded border border-neutral-200 bg-neutral-50 p-2 transition-all hover:border-neutral-300 sm:mb-0 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
          <span className="flex items-center space-x-2">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-cyan-400 bg-cyan-600 text-sm font-extrabold text-white">
              {tag.count}
            </span>
            <span className="text-sm font-bold uppercase text-black transition-all dark:text-white">
              {tag.tag}
            </span>
          </span>
        </a>
      </Link>
    ))}
  </div>
);

export { TagList };
