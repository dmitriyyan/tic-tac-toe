import { screen } from '@testing-library/react';

import { renderWithProviders } from '@utils/testUtils';

import type { BoardState } from '@components/Board/board.slice';
import { initialState as boardInitialState } from '@components/Board/board.slice';

import WinMessage from './WinMessage';

describe('WinMessage', () => {
  it('Should not render if there is no winner and game is not finished', () => {
    renderWithProviders(<WinMessage />);

    expect(screen.queryByRole('heading', { level: 2 })).toBeNull();
  });

  it('Should print win message when there is a winner', () => {
    const boardState: BoardState = {
      ...boardInitialState,
      winner: 'X',
    };
    renderWithProviders(<WinMessage />, { preloadedState: { board: boardState } });
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Player X wins!');
  });

  it('Shoud print tie message when there is no winner and game is finished', () => {
    const boardState: BoardState = {
      ...boardInitialState,
      winner: false,
    };
    renderWithProviders(<WinMessage />, { preloadedState: { board: boardState } });
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("It's a tie!");
  });
});
