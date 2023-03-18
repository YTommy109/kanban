type ItemState = 'ToDo' | 'Doing' | 'Done'

interface BacklogItem {
  id: string;
  title: string;
  dod: string[];
  state: ItemState;
  order: number;
  created_at: string;
  parentId: string;
};

declare module '@/_data/*.json' {
  const data: BacklogItem[];

  export default data;
}
