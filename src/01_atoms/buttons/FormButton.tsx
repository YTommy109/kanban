import { styled } from 'goober'

const Button = styled('button')`
  background-color:   ghostwhite;

  &.primary {
    background-color: lightsteelblue;
  }
`

type Props = ButtonProps & {
  isPrimary?:boolean     // 最優先ボタン
}

export function FormButton({label, fn, isPrimary, ...props}:Props) {
  return <>
    {isPrimary
      ? <Button
          type      = "button"
          className = "primary"
          onClick   = {fn}
          {...props} >
            {label ?? 'OK'}
        </Button>
      : <Button
          type      = "button"
          onClick   = {fn}
          {...props} >
            {label ?? 'OK'}
        </Button>
    }
  </>
}
