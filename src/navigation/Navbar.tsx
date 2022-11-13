import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:flex-wrap text-xl sm:space-x-6">
    {props.children}
  </ul>
);

export { Navbar };
