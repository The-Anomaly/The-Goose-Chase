import { Button } from "components/button";
import styles from "./styles.module.css";
import * as React from "react";
import { Cloud1, playCharacter1 } from "assets";

const Play = () => {
  const [error, setError] = React.useState(false);
  return (
    <div className={styles.container}>
      <Cloud1 className={styles.cloud}  />
      <img src={playCharacter1} alt="" className={styles.char1} />
      <Button text="PLAY" className={styles.btn} onClick={() => {}} />
      <div className={styles.moreBtnWrap}>
        <button>options</button>
        <button>credits</button>
      </div>
    </div>
  );
};

export { Play };
