import { styled } from 'goober'
import { FormButton } from '@/01_atoms/buttons'

const Div = styled('div')`
  display:                grid;
  width:                  100%;
  grid-template-columns:  5rem 5rem;
  grid-column-gap:        2rem;
  justify-content:        end;
`

type Props = {
  ok?:ButtonProps
  cancel?:ButtonProps
}

export function YesNoButtons({ok, cancel}:Props) {
  return <Div>
    <FormButton
      label     = {cancel?.label ?? 'Cancel'}
      fn        = {cancel?.fn}
    />
    <FormButton
      label     = {ok?.label ?? 'OK'}
      fn        = {ok?.fn}
      isPrimary = {true}
    />
  </Div>
}
