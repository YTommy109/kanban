import { styled } from 'goober'
import { BiAddToQueue } from 'react-icons/bi'
import { KanbanItem2 } from '@/01_atoms/KanbanItem'
import { BacklogLane } from '@/04_templates/Lane'
import { useBacklogItems } from '@/hooks/useBacklogItem'

//TODO: 追加ボタン
//TODO: 入力フォーム

const Ul = styled('ul')`
    display:          grid;
    grid-row-gap:     0.25rem;
`

type Props = {
  title: string;
  data: BacklogItem[];
  setFocusId?: (v: string) => void;
  itemType: ItemType;
};

export function PlanningLane({ title, data, setFocusId, itemType }: Props) {
  const { addBacklogItem } = useBacklogItems()
  return <>
    <BacklogLane title={title}>
      <Ul>
        {data.map((item) => (
          <KanbanItem2
            key={item.id}
            item={item}
            setFocusId={setFocusId}
          />
        ))}
      </Ul>
      <BiAddToQueue
        onClick={() => addBacklogItem(itemType)}
        color="gray"
        title='Add new ticket'
        style={{'margin': '.25rem 0'}}
        />
    </BacklogLane>
  </>
}
