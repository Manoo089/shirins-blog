import React, { PropsWithChildren } from "react";

type ContainerTypes = PropsWithChildren<{}>;

const Container = ({ children }: ContainerTypes) => {
  return <div className="Container">{children}</div>;
};

export default Container;
