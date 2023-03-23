import { styled } from 'goober'
import { KanbanItem2 } from '@/01_atoms/KanbanItem'

const Section = styled('section')`
  border:             solid 1px rgb(209 213 219);

  h2 {
    padding:          0.5rem;
    background-color: rgb(99 102 241);
    color:            rgb(255 255 255);
  }

  ul {
    padding:          0.25rem;
    display:          grid;
    grid-row-gap:     0.25rem;
  }
`

type Props = {
  title: string;
  data: BacklogItem[];
  setFocusId?: (v: string) => void;
};

export function KanbanLane({ title, data, setFocusId }: Props) {
  return <>
    <Section>
      <h2>{title}</h2>
      <ul>
        {data.map((item) => (
          <KanbanItem2
            key={item.id}
            item={item}
            setFocusId={setFocusId}
          />
        ))}
      </ul>
    </Section>
  </>
}
