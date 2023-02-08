import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@utils/testUtils';
import Cell from './Cell';

const getCell = () => {
  return screen.getByRole('button');
};

describe('Cell', () => {
  it('Should render X inside after a click', async () => {
    renderWithProviders(<Cell />);
    const cell = getCell();
    await userEvent.click(cell);
    expect(cell).toHaveTextContent('X');
  });

  it('Should render O indise after a click', async () => {
    renderWithProviders(<Cell />, { preloadedState: { board: { playerTurn: 'O' } } });
    const cell = getCell();
    await userEvent.click(cell);
    expect(cell).toHaveTextContent('O');
  });

  it('Should be disabled after a click', async () => {
    renderWithProviders(<Cell />);
    const cell = getCell();
    await userEvent.click(cell);
    expect(cell).toBeDisabled();
  });

  it('Should not change text content after double click', async () => {
    renderWithProviders(<Cell />);
    const cell = getCell();
    await userEvent.dblClick(cell);
    expect(cell).toHaveTextContent('X');
  });
});
