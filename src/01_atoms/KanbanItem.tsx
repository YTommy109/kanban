import { FC } from 'react'
import { styled } from 'goober'
import { useBacklogItems } from '@/hooks/useBacklogItem'

const Li = styled('li')`
  color:            black;
  padding:          0.5rem;
  background-color: lightgoldenrodyellow;
  border:           solid 2px lightgoldenrodyellow;
  &.focus {
    border:         solid 2px goldenrod;
  }
`

type Props = {
  item: BacklogItem;
  handleClick?: () => void;
};

export const KanbanItem: FC<Props> = ({ item, handleClick }) =>
  <Li key={item.id} className="item" onClick={handleClick}>{item.title}</Li>

const STATE_VALUE = {
  'ToDo': 'Start',
  'Doing': 'Finish',
  'Done': null
}

type Props2 = {
  item: BacklogItem;
};

export const KanbanItem2: FC<Props2> = ({ item }) => {
  const { changeNextState, focusItem, setFocusItem } = useBacklogItems()

  return <Li
    key={item.id}
    className={focusItem[item.itemType] === item.id ? 'focus item' : 'item'}
    onClick={() => setFocusItem((cur) => ({ ...cur, [item.itemType]: item.id }))}
  >
    <span>{item.title}</span>
    {STATE_VALUE[item.state] && <span onClick={() => changeNextState(item.id)}>{STATE_VALUE[item.state]}</span>}
  </Li>
}
