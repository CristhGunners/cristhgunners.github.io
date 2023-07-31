import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Acerca de Mi" description="Acerca de Mi" />}>
    <Content>
      <ul className="mx-auto my-6 max-w-sm text-left text-gray-700 space-y-2 list-none dark:text-white">
        <li className="flex items-center justify-start space-x-2">
          <img
            src={`/assets/images/about/me.svg`}
            alt="Cristhofer Andana Alcaino"
            className="w-6 h-6"
          />{' '}
          <span>Cristhofer Andana Alcaino</span>
        </li>
        <li className="flex items-center justify-start space-x-2">
          <img
            src={`/assets/images/about/rocket.svg`}
            alt="Desarrollador de Software"
            className="w-6 h-6"
          />{' '}
          <span>Desarrollador de Software</span>
        </li>
        <li className="flex items-center justify-start space-x-2">
          <img
            src={`/assets/images/about/chile.svg`}
            alt="Chile"
            className="w-6 h-6"
          />{' '}
          <span>Chile</span>
        </li>
        <li className="flex items-center justify-start space-x-2">
          <img
            src={`/assets/images/about/basketball.svg`}
            alt="76ers"
            className="w-6 h-6"
          />{' '}
          <span>76ers</span>
        </li>
        <li className="flex items-center justify-start space-x-2">
          <img
            src={`/assets/images/about/soccer.svg`}
            alt="Arsenal F.C."
            className="w-6 h-6"
          />{' '}
          <span>Arsenal F.C.</span>
        </li>
      </ul>
    </Content>
  </Main>
);

export default About;
