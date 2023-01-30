import React from "react";
import "./NodeType.css";
import { ITreeNode } from "../../../interfaces/index";
import { MdInsertDriveFile, MdFolderOpen, MdFolder } from "react-icons/md";

type Props = {
  node: ITreeNode;
  isExpanded: boolean;
};

function NodeType({ node, isExpanded }: Props) {
  return (
    <span className="type">
      {node.type === "file" ? (
        <MdInsertDriveFile />
      ) : isExpanded ? (
        <MdFolderOpen />
      ) : (
        <MdFolder />
      )}
    </span>
  );
}
export default NodeType;
