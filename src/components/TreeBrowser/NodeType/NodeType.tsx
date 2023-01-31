import React from "react";
import "./NodeType.css";
import { ITreeNode } from "../../../interfaces/index";
import { MdInsertDriveFile, MdFolderOpen, MdFolder } from "react-icons/md";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

type Props = {
  node: ITreeNode;
  isExpanded: boolean;
};

function NodeType({ node, isExpanded }: Props) {
  return (
    <div className="type">
      {node.type === "file" ? (
        <MdInsertDriveFile />
      ) : isExpanded ? (
        <>
          <HiMinusSm /> <MdFolderOpen />
        </>
      ) : (
        <>
          <HiPlusSm /> <MdFolder />
        </>
      )}
    </div>
  );
}
export default NodeType;
