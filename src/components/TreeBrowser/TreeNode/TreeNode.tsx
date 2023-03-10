import { useState, useContext } from "react";
import { FolderViewContext } from "../../../services/fodlerViewContext";
import { ITreeNode } from "../../../interfaces/index";
import NodeType from "../NodeType/NodeType";
import "./TreeNode.css";

type Props = {
  nodes: Array<ITreeNode>;
  level: number;
};

function TreeNode({ nodes, level }: Props) {
  const [expandedFolder, expandFolder] = useState<Array<ITreeNode>>([]);
  const { setFolder } = useContext(FolderViewContext);

  const setToExpandedFolder = (node: ITreeNode): void => {
    const array = expandedFolder.slice(0);
    array.push(node);
    expandFolder(array);
  }

  const unsetFromExpandedFolder = (node: ITreeNode): void => {
    const idx = expandedFolder.indexOf(node);
    const array = expandedFolder.slice(0);
    array.splice(idx, 1);
    expandFolder(array);
  }

  const nodeClicked = (node: ITreeNode): void => {
    if (!isExpanded(node)) {
      setToExpandedFolder(node);
    } else {
      unsetFromExpandedFolder(node);
    }
  }

  const viewFilesFromFolder = (node: ITreeNode): void => {
    const folder = node.type === "directory" ? node.contents : node;
    setFolder(folder);
  }

  const isExpanded = (node: ITreeNode): boolean => {
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
                onClick={() => viewFilesFromFolder(node)}
              >
                {node.name}
              </div>
            </div>
            {isExpanded(node) && node.contents && (
              <TreeNode key={node.name} nodes={node.contents} level={level + 1} />
            )}
          </div>
        ))}
    </>
  );
}
export default TreeNode;
