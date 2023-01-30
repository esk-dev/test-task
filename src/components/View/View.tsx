import React, { useState, useContext } from "react";
import { ITreeNode } from "../../interfaces/index";
import { FolderViewContext } from "../../interfaces/fodlerViewContext";
import "./View.css";

// type ViewProps = {

// };
function View() {
  const { folderFiles } = useContext(FolderViewContext);
  // const [view, setFolderItems] = useState<any>(null);
  console.log(folderFiles);
  function listFiles(node: ITreeNode[]) {
    return node.map((file) => (
      <div className="tab-row" key={file.name}>
        <span>{file.size}</span>
        <span>{file.name}</span>
        <span>{file.type}</span>
      </div>
    ));
  }
  function file(node: ITreeNode) {
    return (
      <div className="tab-row">
        <span>{node.size}</span>
        <span>{node.name}</span>
        <span>{node.type}</span>
      </div>
    );
  }
  return (
    <div className="view">
      {Array.isArray(folderFiles) ? listFiles(folderFiles) : file(folderFiles)}
    </div>
  );
}

export default View;
