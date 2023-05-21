import React from "react";
import cn from "../../libs/class-name";
import { Component } from "../../types/component";

import Container from "../Container/Container";
import NavigationItem from "./NavigationItem";

export interface Props extends Component {}

const NavigationItems = ({ classNames = [] }: Props) => (
  <nav className={cn("NavigationItems", [], classNames)}>
    <Container>
      <ul className="NavigationItems__items">
        <NavigationItem item="Startseite" />
        <NavigationItem item="Rezepte" />
      </ul>
    </Container>
  </nav>
);

export default NavigationItems;
