import React, { PropsWithChildren } from "react";

type NavbarTypes = PropsWithChildren<{}>;

const NavbarBackground = ({ children }: NavbarTypes) => {
  return <div className="NavbarBackground">{children}</div>;
};

export default NavbarBackground;
