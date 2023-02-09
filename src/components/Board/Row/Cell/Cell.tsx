import { useState } from 'react';
import useBoardCell from './useBoardCell';

export type Props = {
  row: number;
  col: number;
};

function Cell({ row, col }: Props) {
  const [mark, setMark] = useState('');
  const { playerTurn, isDisabled, handlePlayerMove } = useBoardCell({ row, col });

  const handleClick = () => {
    setMark(playerTurn);
    handlePlayerMove({ row, col });
  };

  return (
    <button
      style={{ padding: '10px', margin: '5px' }}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {mark}
    </button>
  );
}

export default Cell;
