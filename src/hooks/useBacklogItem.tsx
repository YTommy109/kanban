import { useCallback } from 'react'
import { atom, selector, useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import pgoal from '@/_data/productgoal.json'
import sgoal from '@/_data/sprintgoal.json'
import pbl from '@/_data/pbl.json'
import sbl from '@/_data/sbl.json'

const backlogItemsAtom = atom<BacklogItem[]>({
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

const focusLaneAtom = atom<ItemType|null>({
  key: 'focusLane',
  default: null
})

const productGoals = selector({
  key: 'productGoals',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'PGI')
})

const sprintGoals = selector({
  key: 'sprintGoals',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'SGI')
})

const productBacklogItems = selector({
  key: 'productBacklogItems',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'PBI')
})

const sprintBacklogItems = selector({
  key: 'sprintBacklogItems',
  get: ({ get }) => get(backlogItemsAtom).filter((it) => it.itemType === 'SBI')
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
  const [focusLane, setFocusLane] = useRecoilState(focusLaneAtom)

  const setBacklogItems = useSetRecoilState(backlogItemsAtom)

  const changeNextState = (id: string) =>
    setBacklogItems((cur) => cur.map(it => it.id === id ? { ...it, state: NEXT_STATE[it.state] } : it))

  const addBacklogItem = useCallback((itemType: ItemType) => {
    let parentId: string | null = null
    if (itemType === 'SBI') { parentId = focusItem['PBI'] }
    if (itemType === 'PBI') { parentId = focusItem['SGI'] }
    if (itemType === 'SGI') { parentId = focusItem['PGI'] }
    setBacklogItems((cur) => [...cur, { ...newItem, id: uuidv4(), itemType: itemType, parentId: parentId }])
  }, [setBacklogItems, focusItem])

  const changeFocusItem = useCallback((id:string|null, itemType:ItemType)=>{
    setFocusItem((cur) => ({ ...cur, [itemType]: id }))
    if (id !== null) setFocusLane(() => itemType)
  }, [setFocusItem, setFocusLane])
  return {
    // バックログ管理
    pgs,
    sgs,
    pbl,
    sbl,
    changeNextState,
    addBacklogItem,
    // フォーカスアイテム管理
    focusItem,
    changeFocusItem,
    focusPGI: focusItem['PGI'],
    focusSGI: focusItem['SGI'],
    focusPBI: focusItem['PBI'],
    focusSBI: focusItem['SBI'],
    // フォーカスレーン管理
    focusLane
  }
}
