import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Acerca de Mi" description="Acerca de Mi" />}>
    <Content>
      <p className="mx-auto my-6 max-w-sm text-center">
        Hola me llamo Cristhofer Andana y soy un Desarrollador de Software{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        que actualmente vive en Chile{' '}
        <span role="img" aria-label="chile">
          🇨🇱
        </span>{' '}
        .
      </p>
    </Content>
  </Main>
);

export default About;
