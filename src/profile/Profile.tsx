import React from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Profile = () => {
  const title = `${AppConfig.title} - ${AppConfig.description}`;

  return (
    <Link href={'/'} passHref>
      <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-xl">
        <img
          src={`/assets/images/profile.jpg`}
          alt={title}
          className="w-52 grayscale transition-all duration-500 group-hover:scale-125 group-hover:grayscale-0"
        />
        <span className="absolute left-4 top-2 text-xs font-bold uppercase italic text-white opacity-50">
          Cristhofer & Mike
        </span>
      </div>
    </Link>
  );
};

export { Profile };
