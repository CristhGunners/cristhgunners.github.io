import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navbar } from '../navigation/Navbar';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // const html = document.querySelector('html') as unknown as HTMLElement;

    // html.classList.toggle('overflow-hidden');
  };

  const router = useRouter();

  return (
    <div>
      <button
        aria-label="Toggle Menu"
        title="Toggle Menu"
        onClick={toggleMenu}
        className={`z-40 p-2 ${
          isMenuOpen ? 'fixed left-4' : 'absolute left-0'
        } top-4 rounded text-neutral-400  hover:text-white sm:hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } fixed z-30 w-full m-auto inset-0 h-screen flex flex-col items-center justify-center bg-neutral-950 sm:flex-row sm:h-auto sm:bg-transparent sm:static sm:inset-auto sm:m-0 sm:items-center sm:justify-between sm:pt-6 sm:flex`}
      >
        <Navbar>
          <li>
            <Link href="/">
              <a
                className={`font-normal text-xl sm:text-sm p-2 rounded block transition-colors hover:text-white ${
                  router.pathname === '/' ? 'text-white ' : 'text-neutral-400 '
                }`}
              >
                Inicio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about/">
              <a
                className={`font-normal text-xl sm:text-sm p-2 rounded block transition-colors hover:text-white ${
                  router.pathname === '/about'
                    ? 'text-white'
                    : 'text-neutral-400'
                }`}
              >
                Acerca
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects/">
              <a
                className={`font-normal text-xl sm:text-sm p-2 rounded block transition-colors hover:text-white ${
                  router.pathname === '/projects'
                    ? 'text-white'
                    : 'text-neutral-400'
                }`}
              >
                Proyectos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tags/">
              <a
                className={`font-normal text-xl sm:text-sm p-2 rounded block transition-colors hover:text-white ${
                  router.pathname === '/tags'
                    ? 'text-white'
                    : 'text-neutral-400'
                }`}
              >
                Tags
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stats/">
              <a
                className={`font-normal text-xl sm:text-sm p-2 rounded block transition-colors hover:text-white ${
                  router.pathname === '/stats'
                    ? 'text-white'
                    : 'text-neutral-400'
                }`}
              >
                Estadísticas
              </a>
            </Link>
          </li>
        </Navbar>
      </div>
    </div>
  );
};

export { Menu };
