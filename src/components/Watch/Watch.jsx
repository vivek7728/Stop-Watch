import { useEffect, useState } from "react";
import WatchButton from "../WatchButton/WatchButton";
import styles from "./Watch.module.css";

const Watch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    let interval;
    if ((isActive && isPause) === true) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPause]);

  const startBtnHandler = () => {
    setIsActive(true);
    setIsPause(true);
    setTimer(0);
  };
  const pauseBtnHandletr = () => {
    console.log("hshs");
    setIsPause(false);
  };
  const restartBtnHandler = () => {
    setIsActive(true);
    setIsPause(true);
  };
  const resetBtnHandler = () => {
    setIsActive(false);
    setIsPause(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };
  return (
    <>
      <div className={styles.watch}>
        <h1>Stop-Watch</h1>
        <h2>Timer:{timer}</h2>
        <p>{formatTime()}</p>
        <WatchButton
          startBtnHandler={startBtnHandler}
          pauseBtnHandletr={pauseBtnHandletr}
          restartBtnHandler={restartBtnHandler}
          resetBtnHandler={resetBtnHandler}
        />
      </div>
    </>
  );
};

export default Watch;
