import React from 'react';

export type IStatsListProps = {
  postsCount: number;
  tagsCount: number;
  projectsCount: number;
};

const StatsList = (props: IStatsListProps) => (
  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
    <div className="w-full rounded border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-neutral-800">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded dark:border dark:border-neutral-800 dark:bg-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-neutral-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
      </div>
      <h2 className="my-4 text-center font-bold text-black dark:text-white">
        Artículos
      </h2>
      <h3 className="text-center text-3xl font-bold text-neutral-400 dark:text-white">
        {props.postsCount}
      </h3>
    </div>
    <div className="w-full rounded border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-neutral-800">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded dark:border dark:border-neutral-800 dark:bg-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h6 w-6 text-neutral-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6z"
          />
        </svg>
      </div>
      <h2 className="my-4 text-center font-bold text-black dark:text-white">
        Tags
      </h2>
      <h3 className="text-center text-3xl font-bold text-neutral-400 dark:text-white">
        {props.tagsCount}
      </h3>
    </div>
    <div className="w-full rounded border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-700 dark:bg-neutral-800">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded dark:border dark:border-neutral-800 dark:bg-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-neutral-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </div>
      <h2 className="my-4 text-center font-bold text-black dark:text-white">
        Proyectos
      </h2>
      <h3 className="text-center text-3xl font-bold text-neutral-400 dark:text-white">
        {props.projectsCount}
      </h3>
    </div>
  </div>
);

export { StatsList };
