import React from "react";

export interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="Container">{children}</div>;
};

export default Container;
