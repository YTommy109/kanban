import {useCallback} from 'react'
import {atom, useRecoilState} from 'recoil'

// フォーカスされてるアイテムの管理
const focusItemIdStore = atom<Record<ItemType, string | null>>({
  key: 'focusItemIdStore',
  default: {
    'PGI': null,
    'SGI': null,
    'PBI': null,
    'SBI': null
  }
})

// フォーカスされてるレーンの管理
const focusLaneStore = atom<ItemType | null>({
  key: 'focusLaneStore',
  default: null
})

export const useFocus = () => {
  const [focusItemId, setFocusItemId] = useRecoilState(focusItemIdStore)
  const [focusLane, setFocusLane] = useRecoilState(focusLaneStore)

  const changeFocusItem = useCallback((id:string | null, itemType:ItemType) => {
    setFocusItemId((cur) => ({...cur, [itemType]: id}))
    if (id !== null) setFocusLane(() => itemType)
  }, [setFocusItemId, setFocusLane])

  return {
    // フォーカスアイテム管理
    focusItemId,
    changeFocusItem,
    focusPGId: focusItemId['PGI'],
    focusSGId: focusItemId['SGI'],
    focusPBId: focusItemId['PBI'],
    focusSBId: focusItemId['SBI'],
    // フォーカスレーン管理
    focusLane
  }
}
