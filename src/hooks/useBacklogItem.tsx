import { useCallback } from 'react'
import { atom, selector, useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import pgoal from '@/_data/productgoal.json'
import sgoal from '@/_data/sprintgoal.json'
import pbl from '@/_data/pbl.json'
import sbl from '@/_data/sbl.json'

const backlogItems = atom<BacklogItem[]>({
  key: 'backlogItems',
  default: pgoal.concat(sgoal, pbl, sbl)
})

const focusItemAtom = atom<Record<ItemType, string | null>>({
  key: 'focusItem',
  default: {
    'PGI': null,
    'SGI': null,
    'PBI': null,
    'SBI': null
  }
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

const NEXT_STATE: Record<ItemState, ItemState> = {
  'ToDo': 'Doing',
  'Doing': 'Done',
  'Done': 'Done'
}

const newItem: BacklogItem = {
  'id': '',
  'itemType': 'PBI',
  'title': '名称未設定',
  'dod': [],
  'state': 'ToDo',
  'order': 1,
  'created_at': '2022-06-17T00:00:00.000Z',
  'parentId': 'c9bfe4fc-b542-42fe-98bb-5b9a9ca36637'
}

export const useBacklogItems = () => {
  const pgs = useRecoilValue(productGoals)
  const sgs = useRecoilValue(sprintGoals)
  const pbl = useRecoilValue(productBacklogItems)
  const sbl = useRecoilValue(sprintBacklogItems)
  const [focusItem, setFocusItem] = useRecoilState(focusItemAtom)

  const setBacklogItems = useSetRecoilState(backlogItems)

  const changeNextState = (id: string) =>
    setBacklogItems((cur) => cur.map(it => it.id === id ? { ...it, state: NEXT_STATE[it.state] } : it))

  const addBacklogItem = useCallback((itemType: ItemType) =>
    setBacklogItems((cur) => [...cur, { ...newItem, itemType: itemType }]), [setBacklogItems])

  // PGI フォーカス変更
  const setFocusPGI = useCallback((id: string | null) => {
    setFocusItem((cur) => ({ ...cur, 'PGI': id }))
  }, [setFocusItem])

  // SGI フォーカス変更
  const setFocusSGI = useCallback((id: string | null) => {
    setFocusItem((cur) => ({ ...cur, 'SGI': id }))
  }, [setFocusItem])

  // PBI フォーカス変更
  const setFocusPBI = useCallback((id: string | null) => {
    setFocusItem((cur) => ({ ...cur, 'PBI': id }))
  }, [setFocusItem])

  // SBI フォーカス変更
  const setFocusSBI = useCallback((id: string | null) => {
    setFocusItem((cur) => ({ ...cur, 'SBI': id }))
  }, [setFocusItem])

  return {
    // バックログ管理
    pgs,
    sgs,
    pbl,
    sbl,
    changeNextState,
    addBacklogItem,
    // フォーカス管理
    focusItem,
    setFocusItem,
    focusPGI: focusItem['PGI'],
    focusSGI: focusItem['SGI'],
    focusPBI: focusItem['PBI'],
    focusSBI: focusItem['SBI'],
    setFocusPGI,
    setFocusSGI,
    setFocusPBI,
    setFocusSBI
  }
}