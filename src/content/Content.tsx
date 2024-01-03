import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content text-neutral-400 dark:text-white">
    {props.children}

    <style jsx>
      {`
        .content :global(*) {
          @apply break-words text-neutral-400;
        }

        .content :global(p) {
          @apply my-6;
        }

        .content :global(ul) {
          @apply my-6;
        }

        .content :global(h2) {
          @apply text-2xl font-semibold text-neutral-400 my-4;
        }

        .content :global(h3) {
          @apply text-xl font-semibold text-neutral-400 my-4;
        }

        .content :global(a) {
          @apply text-cyan-600;
        }

        .content :global(a):hover {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { Content };
