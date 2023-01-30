import React, { useState } from "react";
import "./Sidebar.css";

type SidebarProps = {
  children: React.ReactNode;
  isOpen: boolean;
  ToggleSidebar: Function;
};

function Sidebar(props: SidebarProps) {
  const { isOpen, ToggleSidebar } = props;
  // const [isOpen, setIsopen] = useState(false);

  // const ToggleSidebar = () => {
  //   isOpen === true ? setIsopen(false) : setIsopen(true);
  // };
  return (
    <>
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h4>Sidebar Header</h4>
          <button onClick={() => ToggleSidebar()}>close</button>
        </div>
        <div className="sd-body">{props.children}</div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={() => ToggleSidebar()}
      ></div>
    </>
  );
}

export default Sidebar;
