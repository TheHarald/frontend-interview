export type TFile = {
  id: number;
  name: string;
  type: "folder" | "file";
  parentId?: number;
};

export const data: TFile[] = [
  { id: 1, name: "Root", type: "folder", parentId: undefined },
  { id: 2, name: "Documents", type: "folder", parentId: 1 },
  { id: 3, name: "Pictures", type: "folder", parentId: 1 },
  { id: 4, name: "report.pdf", type: "file", parentId: 2 },
  { id: 5, name: "invoice.xlsx", type: "file", parentId: 2 },
  { id: 6, name: "vacation.jpg", type: "file", parentId: 3 },
  { id: 7, name: "profile.png", type: "file", parentId: 3 },
  { id: 8, name: "Subfolder", type: "folder", parentId: 3 },
  { id: 9, name: "nested.txt", type: "file", parentId: 8 },
  { id: 10, name: "System", type: "folder", parentId: undefined },
  { id: 11, name: "config.ini", type: "file", parentId: 10 },
];
