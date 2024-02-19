import styles from "./WatchButton.module.css";
import { Button } from "react-bootstrap";

const WatchButton = ({
  startBtnHandler,
  pauseBtnHandletr,
  restartBtnHandler,
  resetBtnHandler,
}) => {
  return (
    <>
      <Button
        variant="primary"
        className={styles.btnControl}
        onClick={startBtnHandler}
      >
        Start
      </Button>
      <Button
        variant="success"
        className={styles.btnControl}
        onClick={pauseBtnHandletr}
      >
        Pause
      </Button>
      <Button
        variant="info"
        className={styles.btnControl}
        onClick={restartBtnHandler}
      >
        Restart
      </Button>
      <Button
        variant="danger"
        className={styles.btnControl}
        onClick={resetBtnHandler}
      >
        Reset
      </Button>
    </>
  );
};

export default WatchButton;
