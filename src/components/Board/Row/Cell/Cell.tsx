import { useState } from 'react';
import useBoard from '@components/Board/hooks/useBoard';

function Cell() {
  const [mark, setMark] = useState('');
  const [playerTurn, handleChangeTurn] = useBoard();

  const handleClick = () => {
    setMark(playerTurn);
    handleChangeTurn();
  };

  return (
    <button
      style={{ padding: '10px', margin: '5px' }}
      type="button"
      onClick={handleClick}
      disabled={mark !== ''}
    >
      {mark}
    </button>
  );
}

export default Cell;
