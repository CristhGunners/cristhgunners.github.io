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
        <a className="group mb-4 inline-block w-full rounded bg-neutral-900 p-2 transition-all sm:mb-0">
          <span className="flex items-center space-x-2">
            <span className="flex h-8 w-8 items-center justify-center rounded text-sm font-black uppercase text-neutral-400 transition-colors group-hover:text-white">
              {tag.count}
            </span>
            <span className="text-sm font-black uppercase text-neutral-400 transition-colors group-hover:text-white">
              {tag.tag}
            </span>
          </span>
        </a>
      </Link>
    ))}
  </div>
);

export { TagList };
