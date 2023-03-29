import { atom, selector } from 'recoil'
import pgoal from '@/_data/productgoal.json'
import sgoal from '@/_data/sprintgoal.json'
import pbl from '@/_data/pbl.json'
import sbl from '@/_data/sbl.json'

export const backlogItemsAtom = atom<BacklogItem[]>({
  key: 'backlogItems',
  default: pgoal.concat(sgoal, pbl, sbl)
})

export const focusItemAtom = atom<Record<ItemType, string | null>>({
  key: 'focusItem',
  default: {
    'PGI': null,
    'SGI': null,
    'PBI': null,
    'SBI': null
  }
})

export const focusLaneAtom = atom<ItemType|null>({
  key: 'focusLane',
  default: null
})

export const pgItems = selector({
  key: 'productGoals',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'PGI')
})

export const sgItems = selector({
  key: 'sprintGoals',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'SGI')
})

export const pbItems = selector({
  key: 'productBacklogItems',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'PBI')
})

export const sbItems = selector({
  key: 'sprintBacklogItems',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'SBI')
})
