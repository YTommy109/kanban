import { useEffect, useState } from 'react'
import { styled } from 'goober'
import { LabelTextArea, LabelText } from '@/02_molecules/form'
import { useBacklog } from '@/hooks/backlog'

const Form = styled('form')`
fieldset > div > div {
  display:                grid;
  grid-template-columns:  10rem 1fr;
}
`

type Props = {
  isOpen: boolean
}
export function BacklogItemForm({ isOpen }: Props) {
  const [item, setItem] = useState<BacklogItem | null>(null)
  const { getFocusItem } = useBacklog()

  useEffect(() => {
    isOpen === true && setItem(() => getFocusItem())
  }, [getFocusItem, isOpen])

  return <>
    <Form>
      <fieldset>
        <legend>Add New Backlog Item</legend>

        <p>{isOpen ? '開' : '閉'}</p>
        <div className="editor">
          <LabelText
            title="タイトル"
            value={item?.title ?? ''}
            handleChange={(e) => setItem((cur) => cur && ({ ...cur, title: e.target.value }))}
          />
          <LabelTextArea
            title="成果物 (完了状態)"
            value={item?.dod.join('\n') ?? ''}
            rows={10}
            handleChange={(e) => setItem((cur) => cur && ({ ...cur, description: e.target.value }))}
          />
          <LabelTextArea
            title="説明"
            value={item?.description ?? ''}
            rows={10}
            handleChange={(e) => setItem((cur) => cur && ({ ...cur, description: e.target.value }))}
          />
        </div>
      </fieldset>
    </Form>
  </>
}
