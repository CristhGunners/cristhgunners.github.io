import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const NotFound = () => (
  <Main
    meta={
      <Meta title="Pagina no encontrada" description="Pagina no encontrada" />
    }
  >
    <span className="mx-auto my-0 block text-center text-6xl font-bold text-white">
      404
    </span>
    <p className="mx-auto my-6 max-w-sm text-center text-neutral-400">
      Pagina no encontrada
    </p>
  </Main>
);

export default NotFound;
