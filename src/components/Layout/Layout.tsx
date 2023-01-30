import React, { useState } from "react";
import { ITreeNode } from "../../interfaces";
import { FolderViewContext } from '../../interfaces/fodlerViewContext';
import Sidebar from "../Sidebar/Sidebar";
import TreeBrowser from "../TreeBrowser/TreeBrowser";
import View from "../View/View";
import Header from "./Header/Header";
import "./Layout.css";



function Layout() {
  const [isOpen, setIsopen] = useState(false);
  const [folderFiles, setFolder] = useState<Array<ITreeNode>>([]);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <Header ToggleSidebar={ToggleSidebar} />
      <main className="main">
        <FolderViewContext.Provider value={{folderFiles, setFolder}}>
          <Sidebar ToggleSidebar={ToggleSidebar} isOpen={isOpen}>
            <TreeBrowser />
          </Sidebar>
          <View />
        </FolderViewContext.Provider>
      </main>
    </>
  );
}

export default Layout;
