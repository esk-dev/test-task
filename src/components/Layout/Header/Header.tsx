import React from "react";
import "./Header.css";

type HeaderProps = {
  ToggleSidebar: Function;
};
function Header(props: HeaderProps) {
  const { ToggleSidebar } = props;
  return (
    <header className="header">
        <nav>
        <button onClick={() => ToggleSidebar()}>open close sidebar</button>
        </nav>
    </header>
  );
}

export default Header;
