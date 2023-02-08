import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@app/store';

type BoardState = {
  playerTurn: 'O' | 'X';
};

export const initialState: BoardState = {
  playerTurn: 'X',
};

export const counterSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeTurn: (state) => {
      if (state.playerTurn === 'O') {
        state.playerTurn = 'X';
      } else {
        state.playerTurn = 'O';
      }
    },
  },
});

export const { changeTurn } = counterSlice.actions;

export const selectPlayerTurn = (state: RootState) => state.board.playerTurn;

export default counterSlice.reducer;
