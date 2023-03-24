import pgoal from '@/_data/productgoal.json'
import sgoal from '@/_data/sprintgoal.json'
import pbl from '@/_data/pbl.json'
import sbl from '@/_data/sbl.json'
import { atom, selector, useSetRecoilState, useRecoilValue } from 'recoil'

const backlogItems = atom<BacklogItem[]>({
  key: 'backlogItems',
  default: pgoal.concat(sgoal, pbl, sbl)
})

const productGoals = selector({
  key: 'productGoals',
  get: ({ get }) => get(backlogItems).filter((it) => it.itemType === 'PGI')
})

const sprintGoals = selector({
  key: 'sprintGoals',
  get: ({ get }) => get(backlogItems).filter((it) => it.itemType === 'SGI')
})

const productBacklogItems = selector({
  key: 'productBacklogItems',
  get: ({ get }) => get(backlogItems).filter((it) => it.itemType === 'PBI')
})

const sprintBacklogItems = selector({
  key: 'sprintBacklogItems',
  get: ({ get }) => get(backlogItems).filter((it) => it.itemType === 'SBI')
})

const NEXT_STATE:Record<ItemState, ItemState> = {
  'ToDo': 'Doing',
  'Doing': 'Done',
  'Done': 'Done'
}

export const useBacklogItems = () => {
  const pgs = useRecoilValue(productGoals)
  const sgs = useRecoilValue(sprintGoals)
  const pbl = useRecoilValue(productBacklogItems)
  const sbl = useRecoilValue(sprintBacklogItems)

  const setBacklogItems = useSetRecoilState(backlogItems)

  const changeNextState = (id: string) =>
    setBacklogItems((cur) => cur.map(it => it.id === id ? { ...it, state: NEXT_STATE[it.state] } : it))

  return {pgs, sgs, pbl, sbl, changeNextState}
}
