type ItemState = 'ToDo' | 'Doing' | 'Done'
type ItemType = 'PGI' | 'SGI' | 'PBI' | 'SBI'

interface BacklogItem {
  id: string;
  itemType: ItemType;       // アイテムの種類
  title: string;            // タイトル
  dod: string[];            // 完了条件
  description?: string;     // 説明
  state: ItemState;         // 状態
  order: number;            // 作業着手順序
  created_at: string;       // 作成日
  parentId: string | null;  // 親
}

declare module '@/_data/productgoal.json' {
  const data: BacklogItem[]
  export = data;
}

declare module '@/_data/sprintgoal.json' {
  const data: BacklogItem[]
  export = data;
}

declare module '@/_data/pbl.json' {
  const data: BacklogItem[]
  export = data;
}

declare module '@/_data/sbl.json' {
  const data: BacklogItem[]
  export = data;
}

type ButtonProps = {
  label?:string
  fn?:()=>void
}
