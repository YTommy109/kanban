type ItemState = 'ToDo' | 'Doing' | 'Done'

interface BacklogItem {
  id: string;
  title: string;
  dod: string[];
  state: ItemState;
  order: number;
  created_at: string;
  parentId?: string;
};

declare module '@/_data/productgoal.json' {
  const data: BacklogItem[];
  export = data;
}

declare module '@/_data/sprintgoal.json' {
  const data: BacklogItem[];
  export = data;
}

declare module '@/_data/pbl.json' {
  const data: BacklogItem[];
  export = data;
}

declare module '@/_data/sbl.json' {
  const data: BacklogItem[];
  export = data;
}
