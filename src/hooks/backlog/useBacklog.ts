import {useCallback} from 'react'
import {atom, selector, useRecoilState, useRecoilValue} from 'recoil'
import {v4 as uuidv4} from 'uuid'
import {useFocus} from './useFocus'

const backlogStore = atom<BacklogItem[]>({
  key: 'backlogStore',
  default: []
})

const pgsStore = selector({
  key: 'pgsStore',
  get: ({get}) => get(backlogStore).filter((it) => it.itemType === 'PGI')
})

const sgsStore = selector({
  key: 'sgsStore',
  get: ({get}) => get(backlogStore).filter((it) => it.itemType === 'SGI')
})

const pblStore = selector({
  key: 'pblStore',
  get: ({get}) => get(backlogStore).filter((it) => it.itemType === 'PBI')
})

const sblStore = selector({
  key: 'sblStore',
  get: ({get}) => get(backlogStore).filter((it) => it.itemType === 'SBI')
})

const NEXT_STATE:Record<ItemState, ItemState> = {
  'ToDo': 'Doing',
  'Doing': 'Done',
  'Done': 'Done'
}

const newItem:BacklogItem = {
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
  const [backlog, setBacklog] = useRecoilState(backlogStore)
  const pgs = useRecoilValue(pgsStore)
  const sgs = useRecoilValue(sgsStore)
  const pbl = useRecoilValue(pblStore)
  const sbl = useRecoilValue(sblStore)
  const {focusLane, focusItemId} = useFocus()


  /** バックログアイテムを初期化する
   * 空の時のみ動作する
   */
  const initBaclkigItems = (items:BacklogItem[]) => {
    setBacklog((cur) => cur.length === 0 ? items : cur)
  } 

  /**
   * バックログアイテムの状態を次の状態へ変える
   * @param id 対象アイテムの ID
   */
  const changeNextState = useCallback((id:string) =>
    setBacklog((cur) => cur.map(it => it.id === id ? {...it, state: NEXT_STATE[it.state]} : it))
    , [setBacklog])

  /**
   * バックログアイテムの追加
   * @param itemType アイテムの種類
   */
  const addBacklogItem = useCallback((itemType:ItemType) => {
    let parentId:string | null = null
    if (itemType === 'SBI') { parentId = focusItemId['PBI'] }
    if (itemType === 'PBI') { parentId = focusItemId['SGI'] }
    if (itemType === 'SGI') { parentId = focusItemId['PGI'] }

    setBacklog((cur) => [...cur, {
      ...newItem,
      id: uuidv4(),
      itemType: itemType,
      parentId: parentId
    }])
  }, [setBacklog, focusItemId])

  /**
   * フォーカスアイテムの取得
   */
  const getFocusItem = useCallback(():BacklogItem | null => {
    if (focusLane === null) return null
    const result = backlog.filter(it => it.id === focusItemId[focusLane]).pop()
    return result ?? null
  }, [backlog, focusItemId, focusLane])


  /**
   * バックログアイテムの更新
   * @param item 置き換えるバックログアイテム
   */
  const updateBacklogItem = (item:BacklogItem):void => {
    setBacklog((cur) => cur.map(it => it.id === item.id ? item : it))
  }

  return {
    // バックログ管理
    pgs,
    sgs,
    pbl,
    sbl,
    changeNextState,
    addBacklogItem,
    getFocusItem,
    updateBacklogItem,
    initBaclkigItems
  }
}
