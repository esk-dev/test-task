import { useContext, memo } from "react";
import { FolderViewContext } from "../../services/fodlerViewContext";
import Table from "./Table/Table";
import "./View.css";
type ViewProps = {
  isOpen: boolean;
}
function View({isOpen }: ViewProps) {
  const { folderFiles } = useContext(FolderViewContext);

  return (
    <div className={`view ${isOpen === true ? "active-sidebar" : ""}`}>
      <Table files={folderFiles} />
    </div>
  );
}

export default memo(View);
