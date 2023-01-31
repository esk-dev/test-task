import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import TreeBrowser from "../TreeBrowser/TreeBrowser";
import View from "../View/View";
import Header from "./Header/Header";
import "./Layout.css";



function Layout() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <Header ToggleSidebar={ToggleSidebar} />
      <main className="main">
          <Sidebar ToggleSidebar={ToggleSidebar} isOpen={isOpen}>
            <TreeBrowser />
          </Sidebar>
          <View />
      </main>
    </>
  );
}

export default Layout;
