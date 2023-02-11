import { useAppSelector } from '@app/hooks';
import { selectWinner } from '@components/Board/board.slice';

function WinMessage() {
  const winner = useAppSelector(selectWinner);

  if (winner === undefined) {
    return null;
  }

  if (winner === false) {
    return <h2>It&apos;s a tie!</h2>;
  }

  return <h2>Player {winner} wins!</h2>;
}

export default WinMessage;
