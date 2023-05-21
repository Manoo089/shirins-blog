import React from "react";
import cn from "../../libs/class-name";
import { Component } from "../../types/component";
import NavigationItems from "./NavigationItems";

export interface Props extends Component {}

const Navigation = ({ classNames = [] }: Props) => (
  <div className={cn("Navigation", [], classNames)}>
    <NavigationItems />
  </div>
);

export default Navigation;
