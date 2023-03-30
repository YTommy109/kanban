import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

const dialogStore = atom<boolean>({
  key: 'dialogStore',
  default: false
})

const focusLaneStore = atom<ItemType | null>({
  key: 'focusLaneStore',
  default: null
})

export const useDialog = () => {
  const [isOpen, setIsOpen] = useRecoilState(dialogStore)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    open,
    close
  }
}
