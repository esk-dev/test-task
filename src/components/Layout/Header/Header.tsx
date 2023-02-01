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
      <div>
        <Button name={'Open or close sidebar'} type={"icon"} onClick={ToggleSidebar}>
          {<HiMenuAlt1 />}
        </Button>
      </div>
      <h1>File Explorer</h1>
    </header>
  );
}

export default Header;
