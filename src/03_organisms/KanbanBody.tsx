import { styled } from 'goober'
import { Lane3 } from '@/04_templates/Lane'
import { KanbanLane } from '@/02_molecules/KanbanLane'

const Details = styled('details')`
  summary {
    font-size:              1.5rem;
    line-height:            2rem;
  }
`

type Props = {
  data: BacklogItem[];
  banner: string;
  setFocusId: (v: string) => void;
};

export function KanbanBody({ data, banner, setFocusId }: Props) {
  return <Details open>
    <summary>{banner}</summary>
    <Lane3>
      <KanbanLane
        title="ToDo"
        data={data.filter((it) => it.state === 'ToDo').sort((it1, it2) =>
          it1.order - it2.order
        )}
        setFocusId={setFocusId}
      />
      <KanbanLane
        title="Doing"
        data={data.filter((it) => it.state === 'Doing').sort((it1, it2) =>
          it1.order - it2.order
        )}
        setFocusId={setFocusId}
      />
      <KanbanLane
        title="Done"
        data={data.filter((it) => it.state === 'Done').sort((it1, it2) =>
          it1.order - it2.order
        )}
        setFocusId={setFocusId}
      />
    </Lane3>
  </Details>
}
