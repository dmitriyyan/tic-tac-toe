import useBoardCell from './useBoardCell';

export type Props = {
  row: number;
  col: number;
};

function Cell({ row, col }: Props) {
  const { mark, isDisabled, handlePlayerMove } = useBoardCell({ row, col });

  const handleClick = () => {
    handlePlayerMove({ row, col });
  };

  return (
    <button
      style={{
        padding: '10px',
        margin: '5px',
        height: '40px',
        width: '40px',
        verticalAlign: 'middle',
      }}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={`tic-tac-toe-cell-${row}-${col}`}
    >
      {mark}
    </button>
  );
}

export default Cell;
