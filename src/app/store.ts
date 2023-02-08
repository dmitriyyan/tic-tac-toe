import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '@components/Board/board.slice';

export const store = configureStore({
  reducer: {
    board: boardSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
