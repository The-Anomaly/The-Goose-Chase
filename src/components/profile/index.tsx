import { Button } from "components/button";
import styles from "./styles.module.css";
import * as React from "react";

const Profile = () => {
  const [error, setError] = React.useState(false);
  return (
    <div className={styles.container}>
      <Button text="SKIP" className={styles.btn} onClick={() => {}} />
      <h1 className={styles.ttl}>ENTER YOUR DISCORD USERNAME</h1>
      <form>
        <input className={`${styles.input} ${error ? styles.error : ""}`} placeholder="username#9877" type="text" />
        {error ? <p className={styles.message}>please follow discord’s format</p> : ""}
      </form>
    </div>
  );
};

export { Profile };
