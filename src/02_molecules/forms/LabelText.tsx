import { useId } from 'react'
import { TextBox } from '@/01_atoms/forms'

type Props = {
  title:string;
  value:string;
  handleChange:(e:string)=>void;
}

export function LabelText({ title, value, handleChange }: Props) {
  const id = useId()

  return <>
    <h2>
      <label htmlFor={id}>{title}</label>
    </h2>
    <TextBox
      value={value}
      handleChange={handleChange}
    />
  </>
}
