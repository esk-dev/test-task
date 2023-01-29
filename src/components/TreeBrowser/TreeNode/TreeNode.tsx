import React, { useState } from "react";
import { ITreeNode } from "../../../interfaces/index";
import "./TreeNode.css";
import NodeType from "./NodeType";

type Props = {
  nodes: Array<ITreeNode> | undefined;
  level: number;
};

function TreeNode({ nodes, level }: Props) {
  const [expandedFolder, setToExpandedFolder] = useState<Array<ITreeNode>>([]);

  function nodeClicked(node: ITreeNode): void {
    if (!isExpanded(node)) {
      setToExpandedFolder([...expandedFolder, node]);
    } else {
      const temporaryArray = [...expandedFolder];
      const idx = temporaryArray.indexOf(node);
      temporaryArray.splice(idx, 1);
      setToExpandedFolder(temporaryArray);
    }
  }

  function viewFilesInFolder(node: ITreeNode): ITreeNode[] | ITreeNode | undefined {
    console.log(node);
    return node.type === 'directory' ? node.contents : node;
  }


  function isExpanded(node: ITreeNode): boolean {
    return expandedFolder.indexOf(node) !== -1;
  }

  return (
    <>
      {nodes &&
        nodes.map((node) => (
          <div
            className="node"
            style={{ paddingLeft: level * 5 + "px" }}
            key={node.name}
          >
            <span onClick={() => nodeClicked(node)}>
              <NodeType node={node} isExpanded={isExpanded(node)}></NodeType>
            </span>
            <span onClick={() => viewFilesInFolder(node)}>{node.name}</span>
            {isExpanded(node) && node.contents && (
              <TreeNode nodes={node.contents} level={level + 1} />
            )}
          </div>
        ))}
    </>
  );
}
export default TreeNode;
