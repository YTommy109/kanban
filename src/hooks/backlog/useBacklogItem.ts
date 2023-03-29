import { useCallback } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import {backlogItemsAtom, focusItemAtom, pgItems, sgItems, pbItems, sbItems} from './atoms'

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
  const pgs = useRecoilValue(pgItems)
  const sgs = useRecoilValue(sgItems)
  const pbl = useRecoilValue(pbItems)
  const sbl = useRecoilValue(sbItems)
  const focusItem = useRecoilValue(focusItemAtom)

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
