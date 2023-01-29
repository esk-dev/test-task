import React, { useState, useEffect } from "react";
import TreeNode from "./TreeNode/TreeNode";
import { ITreeNode } from "../../interfaces/index";
import "./TreeBrowser.css";
function TreeBrowser() {
  const [nodes, setNodes] = useState<Array<ITreeNode>>();

  useEffect(() => {
    const fetchData = async () => {
      const response: Response = await fetch(
        "https://mocki.io/v1/5a8e3313-5cf3-4962-8b77-f7ae79452367"
      );
      const data = await response.json();
      setNodes(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="tree--wrapper">
      {nodes && <TreeNode nodes={nodes} level={0}></TreeNode>}
    </div>
  );
}

export default TreeBrowser;
