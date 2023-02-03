import { useState, useEffect } from "react";
import TreeNode from "./TreeNode/TreeNode";
import { ITreeNode } from "../../interfaces/index";
import data from '../../store/db.json';
import "./TreeBrowser.css";

function TreeBrowser() {
  const [nodes, setNodes] = useState<Array<ITreeNode>>([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response: Response = await fetch(
    //     "https://mocki.io/v1/5a8e3313-5cf3-4962-8b77-f7ae79452367"
    //   );
    //   const data: Array<ITreeNode> = await response.json();
    //   setNodes(data);
    // };
    // fetchData().catch(console.error);
    const dataReq: Array<any> = JSON.parse(JSON.stringify(data));
    const directories: Array<ITreeNode> = dataReq.filter((el: any) => el.type === 'directory' || el.type === 'file');
    console.log(directories)
    setNodes(directories);
  }, []);

  return (
    <div className="tree-browser">
      {nodes ? (
        <TreeNode nodes={nodes} level={0}></TreeNode>
      ) : (
        "Loading files..."
      )}
    </div>
  );
}

export default TreeBrowser;
