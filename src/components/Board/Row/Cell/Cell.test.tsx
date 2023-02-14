import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@utils/testUtils';

import type { BoardState } from '@components/Board/board.slice';
import { initialState as boardInitialState } from '@components/Board/board.slice';

import Cell from './Cell';

const getCell = () => {
  return screen.getByLabelText(/tic-tac-toe-cell-\d-\d/);
};

describe('Cell', () => {
  it('Should render X inside after a click', async () => {
    renderWithProviders(<Cell row={0} col={0} />);
    const cell = getCell();
    await userEvent.click(cell);
    expect(cell).toHaveTextContent('X');
  });

  it('Should render O indise after a click', async () => {
    const boardState: BoardState = { ...boardInitialState, playerTurn: 'O' };
    renderWithProviders(<Cell row={0} col={0} />, {
      preloadedState: { board: boardState },
    });
    const cell = getCell();
    await userEvent.click(cell);
    expect(cell).toHaveTextContent('O');
  });

  it('Should be disabled after a click', async () => {
    renderWithProviders(<Cell row={0} col={0} />);
    const cell = getCell();
    await userEvent.click(cell);
    expect(cell).toBeDisabled();
    expect(cell).toHaveTextContent('X');
  });

  it('Should be disabled if there is a winner', async () => {
    const boardState: BoardState = { ...boardInitialState, playerTurn: 'O', winner: 'O' };

    renderWithProviders(<Cell row={0} col={0} />, {
      preloadedState: { board: boardState },
    });

    const cell = getCell();
    expect(cell).toBeDisabled();

    await userEvent.click(cell);
    expect(cell).toBeEmptyDOMElement();
  });

  it('Should render X inside when hovered', async () => {
    renderWithProviders(<Cell row={0} col={0} />);
    const cell = getCell();
    await userEvent.hover(cell);
    expect(cell).toHaveTextContent('X');
  });

  it('Should not render X inside when hovered if it is disabled', async () => {
    renderWithProviders(<Cell row={0} col={0} />);
    const cell = getCell();
    await userEvent.click(cell);
    await userEvent.hover(cell);
    expect(cell).toHaveTextContent('X');
  });
});
