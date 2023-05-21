import React from "react";
import cn from "../../libs/class-name";
import { Component } from "../../types/component";

export interface Props extends Component {
  item: string;
}

const NavigationItem = ({ item, classNames = [] }: Props) => (
  <div className={cn("NavigationItem", [], classNames)}>
    <li className="NavigationItem__item">{item}</li>
  </div>
);

export default NavigationItem;
