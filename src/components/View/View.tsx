import { useContext, memo } from "react";
import { FolderViewContext } from "../../services/fodlerViewContext";
import Table from "./Table/Table";
import "./View.css";

function View() {
  const { folderFiles } = useContext(FolderViewContext);
  
  return (
    <div className="view">
      <Table files={folderFiles} />
    </div>
  );
}

export default memo(View);
