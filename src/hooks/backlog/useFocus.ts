import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { focusItemIdAtom, focusLaneAtom } from './atoms'

export const useFocus = () => {
  const [focusItem, setFocusItem] = useRecoilState(focusItemIdAtom)
  const [focusLane, setFocusLane] = useRecoilState(focusLaneAtom)

  const changeFocusItem = useCallback((id:string|null, itemType:ItemType) => {
    setFocusItem((cur) => ({ ...cur, [itemType]: id }))
    if (id !== null) setFocusLane(() => itemType)
  }, [setFocusItem, setFocusLane])

  return {
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
