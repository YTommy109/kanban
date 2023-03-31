import { useId, ChangeEvent } from 'react'

type Props = {
  title: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export function LabelTextArea({ title, value, handleChange, rows = 5 }: Props) {
  const id = useId()

  return <>
    <div>
      <label htmlFor={id}>{title}</label>
      <textarea id={id} rows={rows} value={value} onChange={handleChange} />
    </div>
  </>
}
