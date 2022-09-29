import React from 'react';

import Link from 'next/link';

import { TagItem } from '../utils/Content';

export type ITagListProps = {
  tags: TagItem[];
};

const TagList = (props: ITagListProps) => (
  <div className="w-full sm:grid sm:overflow-hidden sm:grid-cols-2 sm:grid-rows-2 sm:gap-4">
    {props.tags.map((tag) => (
      <Link href={'/tags/[slug]'} as={`/tags/${tag.tag}`} key={tag.tag}>
        <a className="bg-gray-200 p-2 rounded inline-block w-full mb-4 hover:bg-gray-300 sm:mb-0">
          <span className="flex items-center space-x-2">
            <span className="bg-pink-600 flex items-center justify-center text-white font-extrabold rounded h-8 w-8 text-sm">
              {tag.count}
            </span>
            <span className="text-sm uppercase text-black font-bold">
              {tag.tag}
            </span>
          </span>
        </a>
      </Link>
    ))}
  </div>
);

export { TagList };
