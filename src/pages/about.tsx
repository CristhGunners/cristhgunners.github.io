import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Acerca de Mi" description="Acerca de Mi" />}>
    <Content>
      <ul className="mx-auto my-6 max-w-sm list-none space-y-2 text-left text-neutral-400 dark:text-white">
        <li className="flex items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
          <img
            src={`/assets/images/about/me.svg`}
            alt="Cristhofer Andana Alcaino"
            className="h-6 w-6"
          />{' '}
          <span>Cristhofer Andana Alcaino</span>
        </li>
        <li className="flex items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
          <img
            src={`/assets/images/about/rocket.svg`}
            alt="Desarrollador de Software"
            className="h-6 w-6"
          />{' '}
          <span>Desarrollador de Software</span>
        </li>
        <li className="flex items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
          <img
            src={`/assets/images/about/chile.svg`}
            alt="Chile"
            className="h-6 w-6"
          />{' '}
          <span>Chile</span>
        </li>
        <li className="flex items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
          <img
            src={`/assets/images/about/basketball.svg`}
            alt="76ers"
            className="h-6 w-6"
          />{' '}
          <span>76ers</span>
        </li>
        <li className="flex items-center justify-start space-x-2 rounded border border-neutral-200 bg-white p-2 text-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
          <img
            src={`/assets/images/about/soccer.svg`}
            alt="Arsenal F.C."
            className="h-6 w-6"
          />{' '}
          <span>Arsenal F.C.</span>
        </li>
      </ul>
    </Content>
  </Main>
);

export default About;
