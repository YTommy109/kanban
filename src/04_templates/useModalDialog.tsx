import { FC, ReactNode, useCallback, useRef } from 'react'

export function useModalDialog() {
  const ref = useRef<HTMLDialogElement>(null)

  const open = useCallback(() => ref.current?.showModal(), [ref])
  const close = useCallback(() => ref.current?.close(), [ref])

  type Props = {
    children: ReactNode;
  };
    const ModalDialog:FC<Props> = ({children}) => {
    return <>
      <dialog ref={ref}>
        {children}
        <button onClick={close}>キャンセル</button>
      </dialog>
    </>
  }

  return {ModalDialog, open, close}
}
