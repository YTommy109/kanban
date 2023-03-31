import { useId, ChangeEvent } from 'react'

type Props = {
  title: string;
  value: string;
  /* eslint no-unused-vars: 0 */
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function LabelText({ title, value, handleChange }: Props) {
  const id = useId()

  return <>
    <div>
      <label htmlFor={id}>{title}</label>
      <input type="text" id={id} value={value} onChange={handleChange} />
    </div>
  </>
}
