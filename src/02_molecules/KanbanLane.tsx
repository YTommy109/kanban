import {styled} from 'goober'
import {KanbanItem2} from '@/01_atoms/KanbanItem'
import {BacklogLane} from '@/04_templates/Lane'

const Ul = styled('ul')`
    display:          grid;
    grid-row-gap:     0.25rem;
`

type Props = {
  title:string;
  data:BacklogItem[];
};

export function KanbanLane({title, data}:Props) {
  return <>
    <BacklogLane title={title}>
      <Ul>
        {data.map((item) => (
          <KanbanItem2
            key={item.id}
            item={item}
          />
        ))}
      </Ul>
    </BacklogLane>
  </>
}
