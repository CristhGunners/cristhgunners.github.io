import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content text-gray-700 dark:text-white">
    {props.children}

    <style jsx>
      {`
        .content :global(*) {
          @apply break-words;
        }

        .content :global(p) {
          @apply my-6;
        }

        .content :global(ul) {
          @apply my-6;
        }

        .content :global(h2) {
          @apply text-2xl font-semibold text-gray-700 my-4;
        }

        .content :global(h3) {
          @apply text-xl font-semibold text-gray-700 my-4;
        }

        .content :global(a) {
          @apply text-pink-600;
        }

        .content :global(a):hover {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { Content };
