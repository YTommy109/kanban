import { styled } from 'goober'
import { BiAddToQueue } from 'react-icons/bi'
import { KanbanItem2 } from '@/01_atoms/KanbanItem'
import { BacklogLane } from '@/04_templates/Lane'
import { useBacklogItems } from '@/hooks/useBacklogItem'

const Div = styled('div')`
  display:        grid;
  grid-row-gap:   0.25rem;

  ul {
    display:      grid;
    grid-row-gap: 0.25rem;
  }
`

type Props = {
  title: string;
  data: BacklogItem[];
  itemType: ItemType;
};

export function PlanningLane({ title, data, itemType }: Props) {
  const { addBacklogItem } = useBacklogItems()
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
        <BiAddToQueue
          onClick={() => addBacklogItem(itemType)}
          color="gray"
          title='Add new ticket'
        />
      </Div>
    </BacklogLane>
  </>
}
