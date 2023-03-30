import { styled } from 'goober'
import { BacklogLane } from '@/04_templates/Lane'
import { KanbanItem2 } from '@/01_atoms/KanbanItem'
import { AddButton } from '@/01_atoms/buttons'
import { useBacklog, useFocus } from '@/hooks/backlog'

const Div = styled('div')`
  display:        grid;
  grid-row-gap:   0.25rem;

  ul {
    display:      grid;
    grid-row-gap: 0.25rem;
  }
`

const PARENT: Record<ItemType, ItemType> = {
  'SBI': 'PBI',
  'PBI': 'SGI',
  'SGI': 'PGI',
  'PGI': 'PGI',
}

type Props = {
  title: string;          // レーンタイトル
  data: BacklogItem[];    // バックログアイテムリスト
  itemType: ItemType;     // バックログアイテムの種類 & レーンの種類
};

export function PlanningLane({ title, data, itemType }: Props) {
  const { addBacklogItem } = useBacklog()
  const { focusItem } = useFocus()
  return <>
    <BacklogLane title={title}>
      <Div>
        <ul>
          {data.map((item) => (
            <KanbanItem2
              key={item.id}
              item={item}
            />
          ))}
        </ul>
        <AddButton
          disabled={itemType !== 'PGI' && focusItem[PARENT[itemType]] === null}
          handleClick={() => addBacklogItem(itemType)}
          tips='Add new ticket'
        />
      </Div>
    </BacklogLane>
  </>
}
