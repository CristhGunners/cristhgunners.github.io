import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const NotFound = () => (
  <Main
    meta={
      <Meta title="Pagina no encontrada" description="Pagina no encontrada" />
    }
  >
    <Content>
      <span className="mx-auto my-0 block text-center text-6xl font-bold text-cyan-600">
        404
      </span>
      <p className="mx-auto my-6 max-w-sm text-center">Pagina no encontrada</p>
    </Content>
  </Main>
);

export default NotFound;
