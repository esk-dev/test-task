import { memo } from "react";
import { ITreeNode } from "../../../interfaces";
import "./Table.css";

type TableProps = {
  files: Array<ITreeNode>;
};

function Table({ files }: TableProps) {
  const arr = Array.isArray(files) ? files : [files];
  return (
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
      {arr.map((file) => (
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
      ))}
    </ul>
  );
}

export default memo(Table);
