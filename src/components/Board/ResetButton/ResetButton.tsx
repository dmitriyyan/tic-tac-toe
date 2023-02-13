import { useAppDispatch, useAppSelector } from '@app/hooks';
import { resetGame, selectWinner } from '../board.slice';

function ResetButton() {
  const winner = useAppSelector(selectWinner);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetGame());
  };

  if (winner !== undefined) {
    return (
      <button onClick={handleClick} type="button">
        Reset game
      </button>
    );
  }

  return null;
}

export default ResetButton;
