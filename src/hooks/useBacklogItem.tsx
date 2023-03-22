import pgoal from '@/_data/productgoal.json'
import sgoal from '@/_data/sprintgoal.json'
import pbl from '@/_data/pbl.json'
import sbl from '@/_data/sbl.json'
import { atom, selector, useSetRecoilState } from 'recoil'

export const gsProductGoal = atom({
  key: 'pgoal',
  default: pgoal
})

export const gsSprintGoal = atom({
  key: 'sgoal',
  default: sgoal
})

export const gsProductBacklog = atom({
  key: 'pbl',
  default: pbl
})

export const gsSprintBacklog = atom({
  key: 'sbl',
  default: sbl
})

export const selectToDoOfSBL = selector({
  key: 'selectToDoOfSBL',
  get: ({ get }) => get(gsSprintBacklog).filter((it) => it.state === 'ToDo')
})

export const selectDoingOfSBL = selector({
  key: 'selectDoingOfSBL',
  get: ({ get }) => get(gsSprintBacklog).filter((it) => it.state === 'Doing')
})

export const selectDoneOfSBL = selector({
  key: 'selectDoneOfSBL',
  get: ({ get }) => get(gsSprintBacklog).filter((it) => it.state === 'Done')
})

export const useUpdateOfSBI = () => {
  const setItems = useSetRecoilState(gsSprintBacklog)

  const changeState = (id:string, state:ItemState) => {
    setItems((cur) => cur.map(it => it.id===id ? {...it, state: state} : it))
  }

  return {changeState}
}
