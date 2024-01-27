import React from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Profile = () => {
  const title = `${AppConfig.title} - ${AppConfig.description}`;

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={'/'} passHref>
        <div className="group relative mb-4 flex w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full">
          <img
            src={`/assets/images/profile.jpg`}
            alt={title}
            className="w-24 grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
      </Link>
      <Link href={'/'} passHref>
        <h2 className="cursor-pointer text-white">{AppConfig.site_name}</h2>
      </Link>
      <p className="text-neutral-400">{AppConfig.description}</p>
    </div>
  );
};

export { Profile };
