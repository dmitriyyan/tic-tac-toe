import { Cell } from './Cell';

type Props = {
  row: number;
};

function Row({ row }: Props) {
  return (
    <div>
      <Cell row={row} col={0} />
      <Cell row={row} col={1} />
      <Cell row={row} col={2} />
    </div>
  );
}

export default Row;
