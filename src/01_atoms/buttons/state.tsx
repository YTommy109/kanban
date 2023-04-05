import { GrCaretNext } from 'react-icons/gr'

type Props = {
  tips: string;
  handleClick: () => void;
  disabled?: boolean;
};

export function NextButton({ tips, handleClick, disabled = false }: Props) {
  return <>
    {disabled ?
      <GrCaretNext
        color="silver"
      />
      :
      <GrCaretNext
        onClick={handleClick}
        color="gray"
        title={tips}
      />
    }
  </>
}
