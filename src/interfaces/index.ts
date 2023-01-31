type StructureType = "file" | "directory";
// mock server https://mocki.io/fake-json-api
export interface ITreeNode {
  type: StructureType;
  name: string;
  size?: string;
  time?: string;
  contents?: Array<ITreeNode>;
}
