import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Acerca de Mi" description="Acerca de Mi" />}>
    <ul className="list-none space-y-4">
      <li className="group relative flex cursor-pointer items-center justify-start space-x-2 rounded p-4 transition-colors hover:bg-neutral-900">
        <img
          src={`/assets/images/about/chile.svg`}
          alt="Chile"
          className="w-10"
        />{' '}
        <div>
          <h2 className="text-left text-base font-bold text-white">Chile</h2>
          <p className="text-balance text-sm text-neutral-400">
            América del Sur.
          </p>
        </div>
        <img
          src={`/assets/images/about/chile.webp`}
          alt="Chile"
          className="absolute left-1/2 top-1/2 z-10 w-4/5 max-w-64 -translate-x-1/2 -translate-y-1/2 scale-0 transform rounded transition-all duration-500 group-hover:scale-100"
        />
      </li>
      <li className="group relative flex cursor-pointer items-center justify-start space-x-2 rounded p-4 transition-colors hover:bg-neutral-900">
        <img
          src={`/assets/images/about/basketball.svg`}
          alt="76ers"
          className="w-10"
        />{' '}
        <div>
          <h2 className="text-left text-base font-bold text-white">76ers</h2>
          <p className="text-balance text-sm text-neutral-400">
            Fan de Iverson, Simmons y Embiid.
          </p>
        </div>
        <img
          src={`/assets/images/about/iverson.webp`}
          alt="Iverson"
          className="absolute left-1/2 top-1/2 z-10 w-4/5 max-w-96 -translate-x-1/2 -translate-y-1/2 scale-0 transform rounded transition-all duration-500 group-hover:scale-100"
        />
      </li>
      <li className="group relative flex cursor-pointer items-center justify-start space-x-2 rounded p-4 transition-colors hover:bg-neutral-900">
        <img
          src={`/assets/images/about/soccer.svg`}
          alt="Arsenal F.C."
          className="w-10"
        />{' '}
        <div>
          <h2 className="text-left text-base font-bold text-white">
            Arsenal F.C.
          </h2>
          <p className="text-balance text-sm text-neutral-400">
            Fan de Henry, Özil y Alexis.
          </p>
        </div>
        <img
          src={`/assets/images/about/henry.webp`}
          alt="Henry"
          className="absolute left-1/2 top-1/2 z-10 w-4/5 max-w-64 -translate-x-1/2 -translate-y-1/2 scale-0 transform rounded transition-all duration-500 group-hover:scale-100"
        />
      </li>
    </ul>
  </Main>
);

export default About;
