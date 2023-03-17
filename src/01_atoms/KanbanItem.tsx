import { FC } from "react";
import { styled } from 'goober'

const Li = styled('li')`
  color:          black;
  padding:          0.5rem;
  background-color: lightgoldenrodyellow;
`

type Props = {
  article:BacklogItem;
  handleClick?:() => void;
};

export const KanbanItem: FC<Props> = ({ article, handleClick }) =>
  <Li key={article.id} className="item" onClick={handleClick}>{article.title}</Li>
