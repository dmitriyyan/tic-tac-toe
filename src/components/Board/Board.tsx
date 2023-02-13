import { ResetButton } from './ResetButton';
import { Row } from './Row';

function Board() {
  return (
    <>
      <div>
        <Row row={0} />
        <Row row={1} />
        <Row row={2} />
      </div>
      <div>
        <ResetButton />
      </div>
    </>
  );
}

export default Board;
