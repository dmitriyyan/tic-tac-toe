import { Row } from './Row';

function Board() {
  return (
    <div>
      <Row row={0} />
      <Row row={1} />
      <Row row={2} />
    </div>
  );
}

export default Board;
