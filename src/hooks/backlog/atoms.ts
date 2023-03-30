import { atom, selector } from 'recoil'
import pgoal from '@/_data/productgoal.json'
import sgoal from '@/_data/sprintgoal.json'
import pbl from '@/_data/pbl.json'
import sbl from '@/_data/sbl.json'

export const backlogAtom = atom<BacklogItem[]>({
  key: 'backlogAtom',
  default: pgoal.concat(sgoal, pbl, sbl)
})

export const focusItemIdAtom = atom<Record<ItemType, string | null>>({
  key: 'focusItemId',
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
  key: 'pgItems',
  get: ({ get }) => get(backlogAtom).filter((it) => it.itemType === 'PGI')
})

export const sgItems = selector({
  key: 'sgItems',
  get: ({ get }) => get(backlogAtom).filter((it) => it.itemType === 'SGI')
})

export const pbItems = selector({
  key: 'pbItems',
  get: ({ get }) => get(backlogAtom).filter((it) => it.itemType === 'PBI')
})

export const sbItems = selector({
  key: 'sbItems',
  get: ({ get }) => get(backlogAtom).filter((it) => it.itemType === 'SBI')
})
