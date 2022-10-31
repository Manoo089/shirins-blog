import React from "react";
import Link from "next/link";

import NavbarBackground from "./NavbarBackground";
import Container from "../Container/Container";

const Navigation = () => {
  return (
    <NavbarBackground>
      <nav className="NavbarBackground__navigation">
        <Container>
          <div className="NavbarBackground__navigation--links">
            <ul>
              <li>
                <Link href="#">Startseite</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Rezepte</Link>
              </li>
              <li>
                <Link href="#">Wissenswertes</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </NavbarBackground>
  );
};

export default Navigation;
