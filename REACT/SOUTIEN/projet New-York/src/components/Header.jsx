import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img src="/img/seal-ny.png" alt="Blason de New York" />
      <h1>New York City</h1>
      <img src="img/new-york.jpg" alt="Vue de New York depuis l'océan" />
      <nav>
        <ol>
          <li>
            <a href="#symboles">Symboles</a>
          </li>
          <li>
            <a href="#geographie">Géographie</a>
          </li>
          <li>
            <a href="#demographie">Démographie</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
