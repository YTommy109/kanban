import {atom, useRecoilState} from 'recoil'

const dialogStore = atom<boolean>({
  key: 'dialogStore',
  default: false
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
