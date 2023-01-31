import { useState, useMemo } from "react";
import { FolderViewContext } from "../services/fodlerViewContext";
import { ITreeNode } from "../interfaces/index";

type FolderProviderProps = {
  children: React.ReactNode;
};

function FolderViewProvider({ children }: FolderProviderProps) {
  const [folderFiles, setFolder] = useState<Array<ITreeNode>>([]);

  const ctxValue = useMemo(
    () => ({
      folderFiles,
      setFolder,
    }),
    [folderFiles]
  );
  return (
    <FolderViewContext.Provider value={ctxValue}>
      {children}
    </FolderViewContext.Provider>
  );
}

export default FolderViewProvider;
