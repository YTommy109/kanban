import { useEffect, useState } from 'react'
import { styled } from 'goober'
import { LabelTextArea, LabelText } from '@/02_molecules/forms'
import { useBacklog } from '@/hooks/backlog'
import { ListEditor } from './forms/ListEditor'

const Form = styled('form')`
  width:          100%;
  legend {
    text-align:   right;
  }
  fieldset > div {
    display:      grid;
    grid-row-gap: 1rem;
  }
`

// [ ] 保存ボタン
// [ ] Recoilに吐き出す保存ボタンのクリック処理

type Props = {
  isOpen: boolean
}
export function BacklogItemForm({ isOpen }: Props) {
  const [item, setItem] = useState<BacklogItem | null>(null)
  const { getFocusItem } = useBacklog()

  const updateDod = (index: number, value: string) => {
    setItem((cur) => cur && ({
      ...cur,
      dod: cur.dod.map((it, idx) => idx === index
        ? value
        : it
      )
    }))
  }

  useEffect(() => {
    isOpen === true && setItem(() => getFocusItem())
  }, [getFocusItem, isOpen])

  return <>
    <Form>
      <fieldset>
        <legend>Backlog Item</legend>
        <div>
          <LabelText
            title="タイトル"
            value={item?.title ?? ''}
            handleChange={(value) => setItem((cur) => cur && ({ ...cur, title: value }))}
          />
          <ListEditor
            title             = '成果物 (完了状態)'
            dod               = {item?.dod ?? []}
            handleChangeList  = {updateDod}
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
