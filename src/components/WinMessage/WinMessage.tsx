import { useAppSelector } from '@app/hooks';
import { selectWinner } from '@components/Board/board.slice';

function WinMessage() {
  const winner = useAppSelector(selectWinner);

  if (winner === undefined) {
    return null;
  }

  if (winner === false) {
    const tieMessage = "It's a tie!";
    return <h2>{tieMessage}</h2>;
  }

  const winMessage = `Player ${winner} wins!`;
  return <h2>{winMessage}</h2>;
}

export default WinMessage;
