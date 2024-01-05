import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar flex flex-col items-center justify-center space-y-4 text-xl sm:flex-row sm:flex-wrap sm:justify-start sm:space-x-6 sm:space-y-0">
    {props.children}
  </ul>
);

export { Navbar };
