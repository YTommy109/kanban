import { FC } from "react";
import { KanbanItem } from "@/01_atoms/KanbanItem";

type Props = {
  title: string;
  data: BacklogItem[];
  setFocusId: (v: string) => void;
};

export const KanbanLane: FC<Props> = ({ title, data, setFocusId }) =>
  <>
    <section className="lane">
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
    </section>
    <style jsx>{`
      .lane {
        border-width: 1px;
        border-color: rgb(209 213 219);
        h2 {
          background-color: rgb(99 102 241);
          color: rgb(255 255 255);
          padding: 0.25rem;
        }
      }
    `}
    </style>
  </>
