import { splashCharacter1, splashCharacter2, splashCharacter3 } from "assets";
import styles from "./styles.module.css";

const Splash = () => {
  return (
    <div className={styles.container}>
      <img className={styles.char1} src={splashCharacter1} alt="" />
      <img className={styles.char2} src={splashCharacter2} alt="" />
      <img className={styles.char3} src={splashCharacter3} alt="" />
      <h1 className={styles.ttl}>Goose Chase</h1>
    </div>
  );
};

export { Splash };
