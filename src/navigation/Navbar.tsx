import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar flex flex-row items-center justify-start flex-wrap text-xl space-x-6">
    {props.children}
  </ul>
);

export { Navbar };
