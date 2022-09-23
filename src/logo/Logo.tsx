import React, { useEffect } from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Logo = () => {
  const title = `${AppConfig.title} - Desarrollador - de - Software -`;

  useEffect(() => {
    const text = document.querySelector('#text h1');

    if (text) {
      text.innerHTML = title
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${
              i * 7.5
            }deg);position: absolute;left: 50%;font-size: 0.75em;transform-origin: 0 100px;">${char}</span>`
        )
        .join('');
    }
  }, [title]);

  return (
    <Link href={'/'} passHref>
      <div
        id="circle"
        className="relative rounded-full bg-white flex justify-center items-center cursor-pointer group"
      >
        <div id="logo" className="absolute rounded-full grayscale"></div>
        <div id="text" className="absolute w-full h-full">
          <h1 className="text-black uppercase font-extrabold group-hover:text-pink-600">
            ${title}
          </h1>
        </div>
        <style jsx>
          {`
            #circle {
              width: 200px;
              height: 200px;
            }

            #logo {
              width: 150px;
              height: 150px;
              background: url('/assets/images/profile.jpeg');
              background-size: cover;
              border-radius: 50%;
            }

            #text {
              animation: rotateText 10s linear infinite;
            }

            @keyframes rotateText {
              0% {
                transform: rotate(360deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export { Logo };
