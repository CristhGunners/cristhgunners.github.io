import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navbar } from '../navigation/Navbar';
import { ToggleTheme } from '../toggle-theme/Toggle-theme';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  return (
    <div>
      <button
        aria-label="Toggle Menu"
        title="Toggle Menu"
        onClick={toggleMenu}
        className="hidden p-2 absolute top-4 left-0 rounded text-black  hover:text-pink-600 dark:text-white dark:hover:text-pink-600"
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
      <div className="w-100 flex items-center justify-between pt-6">
        <Navbar>
          <li>
            <Link href="/">
              <a
                className={`font-semibold text-sm py-2 block hover:text-pink-600 dark:text-white dark:hover:text-pink-600 ${
                  router.pathname === '/'
                    ? 'text-pink-600 dark:text-pink-600'
                    : 'text-black dark:text-white'
                }`}
              >
                Inicio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about/">
              <a
                className={`font-semibold text-sm py-2 block hover:text-pink-600 dark:text-white dark:hover:text-pink-600 ${
                  router.pathname === '/about'
                    ? 'text-pink-600 dark:text-pink-600'
                    : 'text-black dark:text-white'
                }`}
              >
                Acerca
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tags/">
              <a
                className={`font-semibold text-sm py-2 block hover:text-pink-600 dark:text-white dark:hover:text-pink-600 ${
                  router.pathname === '/tags'
                    ? 'text-pink-600 dark:text-pink-600'
                    : 'text-black dark:text-white'
                }`}
              >
                Tags
              </a>
            </Link>
          </li>
        </Navbar>
        <ToggleTheme />
      </div>
    </div>
  );
};

export { Menu };