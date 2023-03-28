import { useState } from 'react'
import { styled } from 'goober'
import { LabelTextArea, LabelText } from '@/02_molecules/form'

const Form = styled('form')`
fieldset > div > div {
  display:                grid;
  grid-template-columns:  10rem 1fr;
}
`

export function BacklogItemForm() {
  const [title, setTitle] = useState('')
  const [result, setResult] = useState('')
  const [description, setDescription] = useState('')

  return <>
    <Form>
      <fieldset>
        <legend>Add New Backlog Item</legend>

        <div className="editor">
          <LabelText
            title = "タイトル"
            value = {title}
            handleChange = {(e) => setTitle(e.target.value)}
          />
          <LabelTextArea
            title = "成果物 (完了状態)"
            value = {result}
            rows  = {10}
            handleChange = {(e) => setResult(e.target.value)}
          />
          <LabelTextArea
            title = "説明"
            value = {description}
            rows  = {10}
            handleChange = {(e) => setDescription(e.target.value)}
          />
        </div>
      </fieldset>
    </Form>
  </>
}
