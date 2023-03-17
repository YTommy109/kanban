
interface BacklogItem {
  id: string;
  title: string;
  dod: string[];
  state: itemState;
  order: number;
  created_at: string;
  parentId: string;
};

declare module '@/_data/*.json' {
  const data: BacklogItem[];

  export default data;
}
