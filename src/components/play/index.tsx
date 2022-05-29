import { Button } from "components/button";
import styles from "./styles.module.css";
import { playCharacter1 } from "assets";

const Play = () => {
  return (
    <div className={styles.container}>
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
