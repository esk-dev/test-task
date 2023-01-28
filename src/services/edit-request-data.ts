interface ServerResponse {
  data: Object,
  meta: Object,
}

type StructureType = 'file' | 'directory';

interface TreeNode {
  path: string;
  type: StructureType;
  isRoot: boolean;
  children: Array<string>;
}

export function mapFilesTree()  {}

export function toValidFormat() {}
