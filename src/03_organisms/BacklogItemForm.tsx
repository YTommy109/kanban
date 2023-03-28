import { useState } from 'react'
import { styled } from 'goober'

const Form = styled('form')`
.editor div {
  display: grid;
  grid-template-columns: 10rem 1fr;
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
          <div>
            <label htmlFor="title">タイトル</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label htmlFor="result">成果物 or 完了状態</label>
            <textarea id="result" value={result} onChange={(e) => setResult(e.target.value)} />
          </div>

          <div>
            <label htmlFor="desc">説明</label>
            <textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>

      </fieldset>
    </Form>
  </>
}
