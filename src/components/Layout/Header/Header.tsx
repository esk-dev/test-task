import React from "react";
import "./Header.css";

type HeaderProps = {
  ToggleSidebar: Function;
};
function Header( { ToggleSidebar }: HeaderProps) {

  return (
    <header className="header">
        <nav>
        <button onClick={() => ToggleSidebar()}>open close sidebar</button>
        </nav>
    </header>
  );
}

export default Header;
