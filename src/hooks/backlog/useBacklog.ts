import { useCallback } from 'react'
import { atom, selector, useSetRecoilState, useRecoilValue } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import pgoal from '@/_data/productgoal.json'
import sgoal from '@/_data/sprintgoal.json'
import pbl from '@/_data/pbl.json'
import sbl from '@/_data/sbl.json'
import { useFocus } from './useFocus'

const backlogStore = atom<BacklogItem[]>({
  key: 'backlogStore',
  default: pgoal.concat(sgoal, pbl, sbl)
})

const pgsStore = selector({
  key: 'pgsStore',
  get: ({ get }) => get(backlogStore).filter((it) => it.itemType === 'PGI')
})

const sgsStore = selector({
  key: 'sgsStore',
  get: ({ get }) => get(backlogStore).filter((it) => it.itemType === 'SGI')
})

const pblStore = selector({
  key: 'pblStore',
  get: ({ get }) => get(backlogStore).filter((it) => it.itemType === 'PBI')
})

const sblStore = selector({
  key: 'sblStore',
  get: ({ get }) => get(backlogStore).filter((it) => it.itemType === 'SBI')
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

export const useBacklog = () => {
  const pgs = useRecoilValue(pgsStore)
  const sgs = useRecoilValue(sgsStore)
  const pbl = useRecoilValue(pblStore)
  const sbl = useRecoilValue(sblStore)
  const {focusItemId: focusItem} = useFocus()

  const setBacklog = useSetRecoilState(backlogStore)

  const changeNextState = useCallback((id: string) =>
    setBacklog((cur) => cur.map(it => it.id === id ? { ...it, state: NEXT_STATE[it.state] } : it))
  , [setBacklog])

  const addBacklogItem = useCallback((itemType: ItemType) => {
    let parentId: string | null = null
    if (itemType === 'SBI') { parentId = focusItem['PBI'] }
    if (itemType === 'PBI') { parentId = focusItem['SGI'] }
    if (itemType === 'SGI') { parentId = focusItem['PGI'] }

    setBacklog((cur) => [...cur, { ...newItem,
      id: uuidv4(),
      itemType: itemType,
      parentId: parentId
    }])
  }, [setBacklog, focusItem])

  return {
    // バックログ管理
    pgs,
    sgs,
    pbl,
    sbl,
    changeNextState,
    addBacklogItem
  }
}
