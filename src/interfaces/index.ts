type StructureType = "file" | "directory";

export interface ITreeNode {
  type: StructureType;
  name: string;
  size?: string;
  time?: string;
  contents?: Array<ITreeNode>;
}
