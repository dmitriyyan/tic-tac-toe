import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@app/store';

type PlayerTurn = 'O' | 'X';
type Board = string[][];

export type BoardState = {
  playerTurn: PlayerTurn;
  winner: PlayerTurn | undefined | false;
  board: Board;
};

export type Move = { row: number; col: number };

export const initialState: BoardState = {
  playerTurn: 'X',
  winner: undefined,
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

const isWinner = (board: Board, player: PlayerTurn) => {
  // check row
  const isWinByRow = board.some((row) => row.every((col) => col === player));

  // check col
  const isWinByCol = board.some(
    (_, idx, boardArr) =>
      boardArr[0][idx] === player && boardArr[1][idx] === player && boardArr[2][idx] === player
  );

  // check diagonals
  const isWinByDiagonalLeftToRight =
    board[0][0] === player && board[1][1] === player && board[2][2] === player;
  const isWinByDiagonalRightToLeft =
    board[0][2] === player && board[1][1] === player && board[2][0] === player;
  const isWinByDiagonal = isWinByDiagonalLeftToRight || isWinByDiagonalRightToLeft;

  return isWinByRow || isWinByCol || isWinByDiagonal;
};

const isTie = (board: Board) => {
  return board.every((row) => row.every((col) => col !== ''));
};

export const counterSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    playerMove: (state, action: PayloadAction<Move>) => {
      const { row, col } = action.payload;
      state.board[row][col] = state.playerTurn;

      if (isWinner(state.board, state.playerTurn)) {
        state.winner = state.playerTurn;
      } else if (isTie(state.board)) {
        state.winner = false;
      } else if (state.playerTurn === 'O') {
        state.playerTurn = 'X';
      } else {
        state.playerTurn = 'O';
      }
    },
    resetGame: (state) => {
      state.board = [...initialState.board];
      state.winner = undefined;
      state.playerTurn = 'X';
    },
  },
});

export const { playerMove, resetGame } = counterSlice.actions;

export const selectPlayerTurn = (state: RootState) => state.board.playerTurn;
export const selectWinner = (state: RootState) => state.board.winner;
export const selectIsCellDisabled = (state: RootState, coordinates: Move) => {
  const { row, col } = coordinates;
  return state.board.board[row][col];
};

export default counterSlice.reducer;
