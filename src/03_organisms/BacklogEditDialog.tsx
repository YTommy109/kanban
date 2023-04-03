import { useRef, useEffect } from 'react'
import { styled } from 'goober'
import { FaWindowClose } from 'react-icons/fa'
import { BacklogItemForm } from '@/03_organisms/forms/BacklogItem'
import { useDialog } from '@/hooks/useDialog'

const Div = styled('div')`
  width: 30rem;
`

// [ ] 保存&終了できる return キー

export function BacklogEditDialog() {
  const ref = useRef<HTMLDialogElement>(null)
  const { isOpen, close } = useDialog()

  useEffect(() => {
    isOpen === true
    ? ref.current?.showModal()
    : ref.current?.close()
  }, [isOpen])

  return <>
    <dialog ref = {ref}
      onKeyDown = {(e) => {
        e.key==='Escape' && close()
      }}
    >
      <FaWindowClose onClick={close} />
      <Div>
        {<BacklogItemForm isOpen={isOpen} handleClose={close} />}
      </Div>
    </dialog>
  </>
}