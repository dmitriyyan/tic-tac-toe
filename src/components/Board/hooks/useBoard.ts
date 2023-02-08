import { useAppDispatch, useAppSelector } from '@app/hooks';
import { selectPlayerTurn, changeTurn } from '../board.slice';

const useBoard = () => {
  const dispatch = useAppDispatch();
  const playerTurn = useAppSelector(selectPlayerTurn);

  const handleChangeTurn = () => {
    dispatch(changeTurn());
  };

  return [playerTurn, handleChangeTurn] as const;
};

export default useBoard;
