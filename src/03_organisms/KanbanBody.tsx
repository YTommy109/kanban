import { FC } from "react";
import { styled } from 'goober'
import { KanbanLane } from "@/02_molecules/KanbanLane";

const Details = styled('details')`
  summary {
    font-size:              1.5rem;
    line-height:            2rem;
  }
  .cols3 {
    display:                grid;
    grid-template-columns:  repeat(3, 1fr);
  }
`

type Props = {
  data: BacklogItem[];
  banner: string;
  setFocusId: (v: string) => void;
};

export const KanbanBody: FC<Props> = (
  { data, banner, setFocusId },
) => {
  return (
    <Details open>
      <summary>{banner}</summary>
      <div className="cols3">
        <KanbanLane
          title="ToDo"
          data={data.filter((it) => it.state === "ToDo").sort((it1, it2) =>
            it1.order - it2.order
          )}
          setFocusId={setFocusId}
        />
        <KanbanLane
          title="Doing"
          data={data.filter((it) => it.state === "Doing").sort((it1, it2) =>
            it1.order - it2.order
          )}
          setFocusId={setFocusId}
        />
        <KanbanLane
          title="Done"
          data={data.filter((it) => it.state === "Done").sort((it1, it2) =>
            it1.order - it2.order
          )}
          setFocusId={setFocusId}
        />
      </div>
    </Details>
  );
};
