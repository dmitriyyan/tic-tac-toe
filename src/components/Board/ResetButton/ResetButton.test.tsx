import { screen } from '@testing-library/react';

import { renderWithProviders } from '@utils/testUtils';

import { initialState } from '@components/Board/board.slice';

import ResetButton from './ResetButton';

describe('Reset Button', () => {
  it('Should not render when game is not finished', () => {
    renderWithProviders(<ResetButton />);
    expect(screen.queryByText('Reset game')).toBeNull();
  });

  it('Should render when game is finished', () => {
    renderWithProviders(<ResetButton />, {
      preloadedState: { board: { ...initialState, winner: 'X' } },
    });
    expect(screen.getByText('Reset game')).toBeInTheDocument();
  });
});
