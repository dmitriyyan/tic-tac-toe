import { useState } from 'react';

import useBoardCell from './useBoardCell';
import styles from './Cell.module.css';

export type Props = {
  row: number;
  col: number;
};

function Cell({ row, col }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const { mark, playerTurn, isDisabled, handlePlayerMove } = useBoardCell({ row, col });

  const handleClick = () => {
    setIsFocused(false);
    handlePlayerMove({ row, col });
  };

  const handleMouseEnter = () => {
    if (!isDisabled) {
      setIsFocused(true);
    }
  };

  const handleMouseLeave = () => {
    if (isFocused) {
      setIsFocused(false);
    }
  };

  const renderContent = () => {
    if (isDisabled || !isFocused) {
      return mark;
    }

    return playerTurn;
  };

  return (
    <button
      className={styles.cell}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={`tic-tac-toe-cell-${row}-${col}`}
    >
      {renderContent()}
    </button>
  );
}

export default Cell;
