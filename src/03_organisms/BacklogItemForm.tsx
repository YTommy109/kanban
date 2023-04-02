import { useEffect, useState } from 'react'
import { styled } from 'goober'
import { LabelTextArea, LabelText } from '@/02_molecules/forms'
import { YesNoButtons } from '@/02_molecules/forms/YesNoButton'
import { useBacklog } from '@/hooks/backlog'
import { ListEditor } from './forms/ListEditor'


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
  isOpen:boolean          // ダイアログ状態 (true:開, false:閉)
  handleClose:()=>void    // ダイアログを閉じるための関数
}
export function BacklogItemForm({ isOpen, handleClose }: Props) {
  const [item, setItem] = useState<BacklogItem | null>(null)
  const {getFocusItem, updateBacklogItem} = useBacklog()

  useEffect(() => {
    isOpen === true && setItem(() => getFocusItem())
  }, [getFocusItem, isOpen])

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

  /**
   * 編集終了
   */
  const finishEdit = () => {
    item && updateBacklogItem(item)
    handleClose()
  }

  return <>
    <Form method="dialog">
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
        <YesNoButtons
          ok      = {{fn:finishEdit}}
          cancel  = {{fn:handleClose}} />
      </fieldset>
    </Form>
  </>
}
