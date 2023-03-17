import { FC } from "react";
import { KanbanItem } from "@/01_atoms/KanbanItem";
import { styled } from 'goober'

const Section = styled('section')`
  border: solid 1px rgb(209 213 219);

  h2 {
    padding:          0.5rem;
    background-color: rgb(99 102 241);
    color:            rgb(255 255 255);
  }
`

type Props = {
  title: string;
  data: BacklogItem[];
  setFocusId: (v: string) => void;
};

export const KanbanLane: FC<Props> = ({ title, data, setFocusId }) =>
  <>
    <Section>
      <h2>{title}</h2>
      <ul>
        {data.map((item) => (
          <KanbanItem
            key = {item.id}
            article={item}
            handleClick={() => setFocusId(item.id)}
          />
        ))}
      </ul>
    </Section>
  </>
