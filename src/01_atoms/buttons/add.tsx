import { styled } from 'goober'
import { BiAddToQueue } from 'react-icons/bi'

type Props = {
  tips: string;
  handleClick: () => void;
  disabled: boolean;
};

export function AddButton({ tips, handleClick, disabled = false }: Props) {
  return <>
    {disabled ?
      <BiAddToQueue
        color="silver"
      />
      :
      <BiAddToQueue
        onClick={handleClick}
        color="gray"
        title={tips}
      />
    }
  </>
}
