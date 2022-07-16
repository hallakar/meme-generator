import React from "react";
import troll from "../images/trollface_PNG41.png";

export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="header--elements">
          <img src={troll} alt="Troll" className="logo" />
          <h1 className="header--title">Meme Generator))0</h1>
        </div>
      </header>
    </div>
  );
}
