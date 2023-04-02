import { TextBox } from '@/01_atoms/forms'

/**
 * 配列の個々の編集
 * @param title             見出し
 * @param dod               文字列配列
 * @param handleChangeList  変更時に呼び出す関数
 */
type Props = {
  title: string
  dod: string[]
  handleChangeList: (_i: number, _v: string) => void;
}
export function ListEditor({ title, dod, handleChangeList }: Props) {
  return <>
    <h2>{title}</h2>
    <ul>
      {dod.map((it, idx) =>
        <li key={idx}>
          <TextBox
            value         = {it}
            placeholder   = "成果物 / 完了状態"
            handleChange  = {(v) => handleChangeList(idx, v)}
          />
      </li>
      )}
    </ul>
  </>
}
