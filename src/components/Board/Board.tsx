import { ResetButton } from './ResetButton';
import { Row } from './Row';
import styles from './Board.module.css';

function Board() {
  return (
    <div className={styles.container}>
      <div>
        <Row row={0} />
        <Row row={1} />
        <Row row={2} />
        <div className={styles.btn_wrapper}>
          <ResetButton />
        </div>
      </div>
    </div>
  );
}

export default Board;
