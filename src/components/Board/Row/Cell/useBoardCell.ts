import { useAppDispatch, useAppSelector } from '@app/hooks';
import {
  selectPlayerTurn,
  playerMove,
  Move,
  selectIsCellDisabled,
} from '@components/Board/board.slice';

import type { Props as CellProps } from './Cell';

const useBoardCell = (coordinates: CellProps) => {
  const dispatch = useAppDispatch();
  const playerTurn = useAppSelector(selectPlayerTurn);
  const isDisabled = useAppSelector((state) => selectIsCellDisabled(state, coordinates));

  const handlePlayerMove = (move: Move) => {
    dispatch(playerMove(move));
  };

  return { playerTurn, isDisabled, handlePlayerMove } as const;
};

export default useBoardCell;
