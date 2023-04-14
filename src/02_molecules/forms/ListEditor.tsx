import {TextBox} from '@/01_atoms/forms'

/**
 * 配列の個々の編集
 * @param title           見出し
 * @param items           文字列配列
 * @param handleChangeAt  変更時に呼び出す関数
 * @param placeholder     入力内容の説明
 */
type Props = {
  title:string
  items:string[]
  handleChangeAt:(_i:number, _v:string) => void
  placeholder?:string
}
export function ListEditor({title, items, handleChangeAt, placeholder}:Props) {
  return <>
    <h2>{title}</h2>
    <ul>
      {items.map((it, idx) =>
        <li key={idx}>
          <TextBox
            value         = {it}
            placeholder   = {placeholder}
            handleChange  = {(v) => handleChangeAt(idx, v)}
          />
      </li>
      )}
    </ul>
  </>
}
