import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Acerca de Mi" description="Acerca de Mi" />}>
    <Content>
      <ul className="mx-auto my-6 max-w-sm text-left text-gray-700 sm:list-disc sm:marker:text-pink-600 dark:text-white">
        <li>🧑‍💻 Cristhofer Andana Alcaino</li>
        <li>🚀 Desarrollador de Software</li>
        <li>🇨🇱 Chile</li>
        <li>🏀 76ers</li>
        <li>⚽ Arsenal F.C.</li>
      </ul>
    </Content>
  </Main>
);

export default About;
