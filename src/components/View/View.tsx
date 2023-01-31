import { useContext, memo } from "react";
import { ITreeNode } from "../../interfaces/index";
import { FolderViewContext } from "../../services/fodlerViewContext";
import "./View.css";

// type ViewProps = {

// };
function View() {
  const { folderFiles } = useContext(FolderViewContext);
  
  // useEffect(() => {
  //   console.log(folderFiles);
  // }, [folderFiles]);
  
  function listFiles(node: ITreeNode[]) {
    return node.map((file) => (
      <li className="table-row" key={file.name}>
        <div className="col col-1" data-label="file-name">
          {file.name}
        </div>
        <div className="col col-2" data-label="size">
          {file.size}
        </div>
        <div className="col col-3" data-label="last-modification">
          {file.time}
        </div>
      </li>
    ));
  }
  function file(node: ITreeNode) {
    return (
      <li className="table-row">
        <div className="col col-1" data-label="file-name">
          {node.name}
        </div>
        <div className="col col-2" data-label="size">
          {node.size}
        </div>
        <div className="col col-3" data-label="last-modification">
          {node.time}
        </div>
      </li>
    );
  }
  return (
    <div className="view">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1" data-label="file-name">
            File name
          </div>
          <div className="col col-2" data-label="size">
            Size
          </div>
          <div className="col col-3" data-label="last-modification">
            Last modification
          </div>
        </li>
        {Array.isArray(folderFiles)
          ? listFiles(folderFiles)
          : file(folderFiles)}
      </ul>
    </div>
  );
}

export default memo(View);
