import { FC } from 'react'
import { styled } from 'goober'

const Li = styled('li')`
  color:          black;
  padding:          0.5rem;
  background-color: lightgoldenrodyellow;
`

type Props = {
  item: BacklogItem;
  handleClick?: () => void;
};

export const KanbanItem: FC<Props> = ({ item, handleClick }) =>
  <Li key={item.id} className="item" onClick={handleClick}>{item.title}</Li>

type Props2 = {
  item: BacklogItem;
  setFocusId?: (id: string) => void;
  changeState?: (id: string) => void;
};

export const KanbanItem2: FC<Props2> = ({ item, setFocusId, changeState }) =>
  <Li key={item.id} className="item">
    <span onClick={() => setFocusId ? setFocusId(item.id) : null}>{item.title}</span>
    <span onClick={() => changeState ? changeState(item.id) : null}>Doing</span>
  </Li>
