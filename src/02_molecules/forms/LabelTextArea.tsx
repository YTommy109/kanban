import { useId, ChangeEvent } from 'react'

type Props = {
  title:        string;
  value:        string;
  handleChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void;
  rows?:        number;
}

export function LabelTextArea({ title, value, handleChange, rows = 5 }: Props) {
  const id = useId()

  return <>
      <h2>
        <label htmlFor={id}>{title}</label>
      </h2>
      <textarea
        id        = {id}
        rows      = {rows}
        value     = {value}
        onChange  = {handleChange} />
  </>
}
