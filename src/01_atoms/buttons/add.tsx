import { BiAddToQueue } from 'react-icons/bi'

type Props = {
  tips: string;
  handleClick: () => void;
  disabled?: boolean;
};

export function AddButton({ tips, handleClick, disabled = false }: Props) {
  return <>
    {disabled ?
      <BiAddToQueue
        color="silver"
        size="1rem"
      />
      :
      <BiAddToQueue
        onClick={handleClick}
        color="gray"
        title={tips}
        size="1rem"
      />
    }
  </>
}
