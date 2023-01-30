import React, { useState } from "react";
import "./Sidebar.css";

type SidebarProps = {
  children: React.ReactNode;
  isOpen: boolean;
  ToggleSidebar: Function;
};

function Sidebar({isOpen, ToggleSidebar, children}: SidebarProps) {
  return (
    <>
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h5>Sidebar Header</h5>
          <button onClick={() => ToggleSidebar()}>close</button>
        </div>
        <div className="sd-body">{children}</div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={() => ToggleSidebar()}
      ></div>
    </>
  );
}

export default Sidebar;
