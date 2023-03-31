import { styled } from 'goober'

const Input = styled('input')`
  border:                 none;
  outline:                none;
  border-bottom:          2px solid gainsboro;
  width:                  20rem;
  &:focus {
    border-bottom-color:  gray;
  }
`

type Props = {
  value:string
  placeholder?:string
  handleChange:(_v:string)=>void
}

export function TextBox({value, placeholder, handleChange}:Props) {
  return <>
    <Input
      type        = "text"
      placeholder = {placeholder}
      value       = {value}
      onChange    = {(e) => handleChange(e.target.value)}
    />
  </>
}
