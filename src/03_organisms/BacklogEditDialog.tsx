import {useRef, useEffect, useState} from 'react'
import {styled} from 'goober'
import {FaWindowClose} from 'react-icons/fa'
import {BacklogItemForm} from '@/03_organisms/forms/BacklogItem'
import {useDialog} from '@/hooks/useDialog'
import {useBacklog} from '@/hooks/backlog'
import {YesNoButtons} from '@/02_molecules/forms/YesNoButton'

const Div = styled('div')`
  width:        30rem;
  display:      grid;
  grid-row-gap: 1rem;
`

const dummyItem:BacklogItem = {
  'id':         '',
  'itemType':   'PBI',
  'title':      '',
  'dod':        [],
  'state':      'ToDo',
  'order':      1,
  'created_at': '2022-06-17T00:00:00.000Z',
  'parentId':   null
}

export function BacklogEditDialog() {
  const ref = useRef<HTMLDialogElement>(null)
  const {isOpen, close} = useDialog()
  const {getFocusItem, updateBacklogItem} = useBacklog()
  const [item, setItem] = useState<BacklogItem>(dummyItem)

  useEffect(() => {
    if (isOpen === true) {
      setItem(() => getFocusItem() ?? dummyItem)
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpen, getFocusItem])

  /**
   * 編集終了
   */
  const finishEdit = () => {
    updateBacklogItem(item)
    close()
  }

  return <>
    <dialog ref = {ref}
      onKeyDown = {(e) => {
        if (e.key==='Escape') close()
        if (e.key==='Enter') finishEdit()
      }}
    >
      <FaWindowClose onClick={close} />
      <Div>
        <BacklogItemForm
          item        = {item}
          setItem     = {setItem}
        />
        <YesNoButtons
          ok          = {{fn:finishEdit}}
          cancel      = {{fn:close}}
        />
      </Div>
    </dialog>
  </>
}
