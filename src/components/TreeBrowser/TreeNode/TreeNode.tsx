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

  function setToExpandedFolder(node: ITreeNode): void {
    const arr = expandedFolder.slice(0);
    arr.push(node);
    expandFolder(arr);
  }

  function unsetFromExpandedFolder(node: ITreeNode): void {
    const idx = expandedFolder.indexOf(node);
    const arr = expandedFolder.slice(0);
    arr.splice(idx, 1);
    expandFolder(arr);
  }
  // Попытка в кэширование
  // useEffect(() => {
  //   const workTree = window.localStorage.getItem("workTree");
  //   workTree && expandFolder(JSON.parse(workTree));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.clear();
  //   window.localStorage.setItem("workTree", JSON.stringify(expandedFolder));
  // }, [expandedFolder]);

  function nodeClicked(node: ITreeNode): void {
    if (!isExpanded(node)) {
      setToExpandedFolder(node);
    } else {
      unsetFromExpandedFolder(node);
    }
  }

  function viewFilesFromFolder(node: ITreeNode): void {
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
                onClick={() => viewFilesFromFolder(node)}
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
