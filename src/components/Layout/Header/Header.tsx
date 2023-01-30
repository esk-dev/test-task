import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { HiMenuAlt1 } from "react-icons/hi";
type HeaderProps = {
  ToggleSidebar: Function;
};
function Header({ ToggleSidebar }: HeaderProps) {
  return (
    <header className="header">
      <nav>
        <div>
          <Button type={"icon"} onClick={ToggleSidebar}>
            {<HiMenuAlt1 />}
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
