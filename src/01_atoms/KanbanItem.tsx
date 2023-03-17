import { FC } from "react";

type Props = {
  article: BacklogItem;
  handleClick: () => void;
};

export const KanbanItem: FC<Props> = ({ article, handleClick }) =>
  <>
    <li key={article.id} className="item" onClick={handleClick}>{article.title}</li>
    <style jsx>{`
      .item {
        border-width: 1px;
        border-color: rgb(59 130 246);
        color: black;
        padding: 0.25rem;
        background-color: rgb(254 249 195);
      }
    `}</style>
  </>
