import { FC } from 'react'
import { styled } from 'goober'
import { useUpdateOfSBI } from '@/hooks/useBacklogItem'

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

const STATE_VALUE = {
  'ToDo': 'Start',
  'Doing': 'Finish',
  'Done': null
}

const STATE_CHANGE = {
  'ToDo': { nextState: 'Doing', display: 'Start' },
  'Doing': { nextState: 'Done', display: 'Finish' },
  'Done': null
}

type Props2 = {
  item: BacklogItem;
  setFocusId?: (id: string) => void;
};

export const KanbanItem2: FC<Props2> = ({ item, setFocusId }) => {
  const { changeState } = useUpdateOfSBI()

  return <Li key={item.id} className="item">
    <span onClick={() => setFocusId ? setFocusId(item.id) : null}>{item.title}</span>
    {STATE_VALUE[item.state] && <span onClick={() => changeState(item.id, 'Done')}>{STATE_CHANGE[item.state]?.display}</span>}
  </Li>
}
