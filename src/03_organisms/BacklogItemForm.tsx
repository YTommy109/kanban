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

// [ ] チェックボックス三つで構成されたdod
// [ ] 保存ボタン
// [ ] Recoilに吐き出す保存ボタンのクリック処理

type Props2 = {
  title: string
  dod: string[]
  handleChangeDoD: (_i: number, _v: string) => void;
}

export function ListOfDoD({ title, dod, handleChangeDoD }: Props2) {
  return <div>
    <span>{title}</span>
    <ul>
      <li>
        <input type="checkbox" placeholder="短くて分かりやすい名前" />
        <input
          type="text"
          value={dod[0]}
          onChange={(e) => handleChangeDoD(0, e.target.value)}
        />
      </li>
      <li>
        <input type="checkbox" />
        <input type="text"
          value={dod[1]}
          onChange={(e) => handleChangeDoD(1, e.target.value)}
        />
      </li>
      <li>
        <input type="checkbox" />
        <input type="text"
          value={dod[2]}
          onChange={(e) => handleChangeDoD(2, e.target.value)}
        />
      </li>
    </ul>
  </div>
}

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
        <legend>Add New Backlog Item</legend>

        <p>{isOpen ? '開' : '閉'}</p>
        <div>
          <LabelText
            title="タイトル"
            value={item?.title ?? ''}
            handleChange={(e) => setItem((cur) => cur && ({ ...cur, title: e.target.value }))}
          />
          <ListOfDoD
            title='成果物 (完了状態)'
            dod={item?.dod ?? []}
            handleChangeDoD={updateDod} />
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
