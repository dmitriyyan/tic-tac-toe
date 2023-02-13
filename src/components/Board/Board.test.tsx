import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@utils/testUtils';

import type { BoardState } from '@components/Board/board.slice';
import { initialState as boardInitialState } from '@components/Board/board.slice';

import Board from './Board';

const getAllCells = () => {
  return screen.getAllByLabelText(/tic-tac-toe-cell-\d-\d/);
};

describe('Board', () => {
  it('Should have all cells disabled after winner move in first row', async () => {
    const boardState: BoardState = {
      ...boardInitialState,
      board: [
        ['X', 'X', ''],
        ['O', 'O', ''],
        ['', '', ''],
      ],
      playerTurn: 'X',
    };
    renderWithProviders(<Board />, {
      preloadedState: { board: boardState },
    });

    const boardCells = getAllCells();
    await userEvent.click(boardCells[2]);

    boardCells.forEach((cell) => {
      expect(cell).toBeDisabled();
    });
  });

  it('Should have all cells disabled after winner move in first column', async () => {
    const boardState: BoardState = {
      ...boardInitialState,
      board: [
        ['X', 'O', ''],
        ['X', 'O', ''],
        ['', '', ''],
      ],
      playerTurn: 'X',
    };
    renderWithProviders(<Board />, {
      preloadedState: { board: boardState },
    });

    const boardCells = getAllCells();
    await userEvent.click(boardCells[6]);

    boardCells.forEach((cell) => {
      expect(cell).toBeDisabled();
    });
  });

  it('Should have all cells disabled after winner move in left-to-right diagonal', async () => {
    const boardState: BoardState = {
      ...boardInitialState,
      board: [
        ['X', 'O', ''],
        ['O', 'X', ''],
        ['', '', ''],
      ],
      playerTurn: 'X',
    };
    renderWithProviders(<Board />, {
      preloadedState: { board: boardState },
    });

    const boardCells = getAllCells();
    await userEvent.click(boardCells[8]);

    boardCells.forEach((cell) => {
      expect(cell).toBeDisabled();
    });
  });

  it('Should have all cells enabled after clicking reset button', async () => {
    const boardState: BoardState = {
      ...boardInitialState,
      board: [
        ['X', 'X', 'X'],
        ['O', 'O', ''],
        ['', '', ''],
      ],
      playerTurn: 'O',
      winner: 'X',
    };
    renderWithProviders(<Board />, {
      preloadedState: { board: boardState },
    });

    const boardCells = getAllCells();
    const resetBtn = screen.getByText('Reset game');
    await userEvent.click(resetBtn);

    boardCells.forEach((cell) => {
      expect(cell).toBeEnabled();
    });
  });

  it('Should have all cells empty after clicking reset button', async () => {
    const boardState: BoardState = {
      ...boardInitialState,
      board: [
        ['X', 'X', 'X'],
        ['O', 'O', ''],
        ['', '', ''],
      ],
      playerTurn: 'O',
      winner: 'X',
    };
    renderWithProviders(<Board />, {
      preloadedState: { board: boardState },
    });

    const boardCells = getAllCells();
    const resetBtn = screen.getByText('Reset game');
    await userEvent.click(resetBtn);

    boardCells.forEach((cell) => {
      expect(cell).toBeEmptyDOMElement();
    });
  });
});
