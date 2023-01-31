import React from "react";
import Button from "../Layout/Button/Button";
import { HiX } from "react-icons/hi";
import "./Sidebar.css";

type SidebarProps = {
  children: React.ReactNode;
  isOpen: boolean;
  ToggleSidebar: Function;
};

function Sidebar({ isOpen, ToggleSidebar, children }: SidebarProps) {
  return (
    <>
      <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
        <div className="sd-header">
          <h2>Directories</h2>
          <Button type={"icon"} onClick={ToggleSidebar}>
            {<HiX />}
          </Button>
        </div>
        <div className="sd-body">{children}</div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={() => ToggleSidebar()}
      ></div>
    </>
  );
}

export default Sidebar;
