import { useAppDispatch, useAppSelector } from '@app/hooks';
import {
  playerMove,
  Move,
  selectIsCellDisabled,
  selectWinner,
  selectPlayerTurn,
} from '@components/Board/board.slice';

import type { Props as CellProps } from './Cell';

const useBoardCell = (coordinates: CellProps) => {
  const dispatch = useAppDispatch();
  const mark = useAppSelector((state) => selectIsCellDisabled(state, coordinates));
  const winner = useAppSelector(selectWinner);
  const playerTurn = useAppSelector(selectPlayerTurn);
  const isDisabled = mark !== '' || winner !== undefined;

  const handlePlayerMove = (move: Move) => {
    dispatch(playerMove(move));
  };

  return { mark, playerTurn, isDisabled, handlePlayerMove } as const;
};

export default useBoardCell;
