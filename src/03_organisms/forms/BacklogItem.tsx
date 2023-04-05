import { Dispatch, SetStateAction } from 'react'
import { styled } from 'goober'
import { LabelTextArea, LabelText } from '@/02_molecules/forms'
import { ListEditor } from '../../02_molecules/forms/ListEditor'

const Form = styled('form')`
  width:          100%;
  fieldset {
    display:      grid;
    grid-row-gap: 1rem;
  }
  legend {
    text-align:   right;
  }
  fieldset > div {
    display:      grid;
    grid-row-gap: 1rem;
  }
`

/**
 * バックログアイテムの編集フォーム
 */
type Props = {
  item:BacklogItem
  setItem:Dispatch<SetStateAction<BacklogItem>>
}
export function BacklogItemForm({item, setItem}: Props) {
  /**
   * DoD リストを更新する
   * @param index 対象のインデックス
   * @param value 書き換える内容
   */
  const updateDod = (index: number, value: string) => {
    setItem((cur) => cur && ({
      ...cur,
      dod: cur.dod.map((it, idx) => idx === index
        ? value
        : it
      )
    }))
  }

  return <>
    <Form method="dialog">
      <fieldset>
        <legend>Backlog Item</legend>
        <div>
          <LabelText
            title           = "タイトル"
            value           = {item.title ?? ''}
            handleChange    = {(value) => setItem((cur) => cur && ({ ...cur, title: value }))}
          />
          <ListEditor
            title           = '成果物 (完了状態)'
            items           = {item.dod ?? []}
            handleChangeAt  = {updateDod}
            placeholder     = '成果物 / 完了状態'
          />
          <LabelTextArea
            title           = "説明"
            value           = {item.description ?? ''}
            rows            = {10}
            handleChange    = {(e) => setItem((cur) => cur && ({ ...cur, description: e.target.value }))}
          />
        </div>
      </fieldset>
    </Form>
  </>
}
