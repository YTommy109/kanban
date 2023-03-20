import { FC } from "react";
import { styled } from 'goober'

const Li = styled('li')`
  color:          black;
  padding:          0.5rem;
  background-color: lightgoldenrodyellow;
`

type Props = {
  item:BacklogItem;
  handleClick?:() => void;
};

export const KanbanItem: FC<Props> = ({ item, handleClick }) =>
  <Li key={item.id} className="item" onClick={handleClick}>{item.title}</Li>
