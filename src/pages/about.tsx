import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Acerca de Mi" description="Acerca de Mi" />}>
    <ul className="mx-auto my-6 max-w-sm list-none space-y-2 text-left">
      <li className="group flex cursor-pointer items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-800">
        <img
          src={`/assets/images/about/chile.svg`}
          alt="Chile"
          className="h-6 w-6"
        />{' '}
        <span className="text-neutral-400 dark:text-white">Chile</span>
        <img
          src={`/assets/images/about/chile.webp`}
          alt="Chile"
          className="fixed m-auto w-4/5 max-w-64 scale-0 rounded transition-all duration-500 group-hover:scale-100"
        />
      </li>
      <li className="group flex cursor-pointer items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-800">
        <img
          src={`/assets/images/about/basketball.svg`}
          alt="76ers"
          className="h-6 w-6"
        />{' '}
        <span className="text-neutral-400 dark:text-white">76ers</span>
        <img
          src={`/assets/images/about/iverson.webp`}
          alt="Iverson"
          className="fixed m-auto w-4/5 max-w-96 scale-0 rounded transition-all duration-500 group-hover:scale-100"
        />
      </li>
      <li className="group flex cursor-pointer items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-800">
        <img
          src={`/assets/images/about/soccer.svg`}
          alt="Arsenal F.C."
          className="h-6 w-6"
        />{' '}
        <span className="text-neutral-400 dark:text-white">Arsenal F.C.</span>
        <img
          src={`/assets/images/about/henry.webp`}
          alt="Henry"
          className="fixed m-auto w-4/5 max-w-64 scale-0 rounded transition-all duration-500 group-hover:scale-100"
        />
      </li>
    </ul>
  </Main>
);

export default About;
