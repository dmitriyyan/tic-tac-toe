import { useAppDispatch, useAppSelector } from '@app/hooks';
import {
  playerMove,
  Move,
  selectIsCellDisabled,
  selectWinner,
} from '@components/Board/board.slice';

import type { Props as CellProps } from './Cell';

const useBoardCell = (coordinates: CellProps) => {
  const dispatch = useAppDispatch();
  const mark = useAppSelector((state) => selectIsCellDisabled(state, coordinates));
  const winner = useAppSelector(selectWinner);
  const isDisabled = mark !== '' || winner !== undefined;

  const handlePlayerMove = (move: Move) => {
    dispatch(playerMove(move));
  };

  return { mark, isDisabled, handlePlayerMove } as const;
};

export default useBoardCell;
