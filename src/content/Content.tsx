import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content text-neutral-400">
    {props.children}

    <style jsx>
      {`
        .content :global(*) {
          @apply break-words;
        }

        .content :global(p) {
          @apply my-6 text-neutral-400;
        }

        .content :global(ul) {
          @apply my-6 text-neutral-400;
        }

        .content :global(h2) {
          @apply text-2xl font-semibold text-neutral-400 my-4;
        }

        .content :global(h3) {
          @apply text-xl font-semibold text-neutral-400 my-4;
        }

        .content :global(a) {
          @apply text-green-600;
        }

        .content :global(a):hover {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { Content };
