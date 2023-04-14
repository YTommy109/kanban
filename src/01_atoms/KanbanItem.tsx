import {FC, useMemo} from 'react'
import {styled} from 'goober'
import {useBacklog, useFocus} from '@/hooks/backlog'
import {useDialog} from '@/hooks/useDialog'
import {NextButton} from '@/01_atoms/buttons/state'

const Li = styled('li')`
  color:                black;
  padding:                0.5rem;
  background-color:     lightgoldenrodyellow;
  border:                 solid 2px lightgoldenrodyellow;
  display:                grid;
  grid-template-columns:  1fr 1rem;
  align-items:            end;

  &.pick {
    border:               solid 2px khaki;
  }
  &.focus {
    border:               solid 2px goldenrod;
  }
`

type Props = {
  item:BacklogItem;
  handleClick?:() => void;
};

export const KanbanItem:FC<Props> = ({item, handleClick}) =>
  <Li key={item.id} className="item" onClick={handleClick}>{item.title}</Li>

type Props2 = {
  item:BacklogItem;
};

export function KanbanItem2({item}:Props2) {
  const {changeNextState} = useBacklog()
  const {focusItemId, changeFocusItem, focusLane} = useFocus()
  const {open} = useDialog()
  const className = useMemo(() => {
    if (focusItemId[item.itemType] !== item.id) return 'item'
    return item.itemType === focusLane ? 'item focus' : 'item pick'
  }, [focusItemId, focusLane, item.id, item.itemType])

  return <Li
    key={item.id}
    className={className}
    onClick={() => changeFocusItem(item.id, item.itemType)}
    onDoubleClick={() => open()}
  >
    <span>{item.title}</span>
    <span>
      {['ToDo', 'Doing'].includes(item.state) &&
        <NextButton
          handleClick={() => changeNextState(item.id)}
          tips="change next status" />
      }
    </span>
  </Li>
}
