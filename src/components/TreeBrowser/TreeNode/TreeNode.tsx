import React, { useState, useContext } from "react";
import { FolderViewContext } from "../../../services/fodlerViewContext";
import { ITreeNode } from "../../../interfaces/index";
import NodeType from "../NodeType/NodeType";
import "./TreeNode.css";

type Props = {
  nodes: Array<ITreeNode>;
  level: number;
};

function TreeNode({ nodes, level }: Props) {
  const [expandedFolder, setToExpandedFolder] = useState<Array<ITreeNode>>([]);
  const { setFolder } = useContext(FolderViewContext);

  // useEffect(() => {
  //   const workTree = window.localStorage.getItem("workTree");
  //   workTree && setToExpandedFolder(JSON.parse(workTree));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.clear();
  //   window.localStorage.setItem("workTree", JSON.stringify(expandedFolder));
  // }, [expandedFolder]);

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

  function viewFilesInFolder(node: ITreeNode): void {
    const folder = node.type === "directory" ? node.contents : node;
    setFolder(folder);
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
            <div className="node-item">
              <div onClick={() => nodeClicked(node)}>
                <NodeType node={node} isExpanded={isExpanded(node)}></NodeType>
              </div>
              <div
                className="node-name"
                onClick={() => viewFilesInFolder(node)}
              >
                {node.name}
              </div>
            </div>
            {isExpanded(node) && node.contents && (
              <TreeNode nodes={node.contents} level={level + 1} />
            )}
          </div>
        ))}
    </>
  );
}
export default TreeNode;
