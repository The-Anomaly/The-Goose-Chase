import { Button } from "components/button";
import styles from "./styles.module.css";
import { angryBearBeanie, anomalyBeanie, Diamond, femiBeanie, playCharacter1, stanzBeanie } from "assets";

interface TeamProps {
  image: string;
  name: string;
  role: string;
  discord?: string;
  twitterHandle: string;
  color: "blue" | "yellow" | "green" | "purple";
}

const Team = ({ image, name, role, discord, twitterHandle, color }: TeamProps) => {
  return (
    <div className={`${styles.team} ${styles[color]}`}>
      <img className={styles.teamImg} src={image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
      {discord ? <p className={styles.discord}>{discord}</p> : ""}
      <a target={"_blank"} href={`https://twitter.com/${twitterHandle}`} className={styles.twitter}>
        @{twitterHandle}
      </a>
    </div>
  );
};

const Credit = () => {
  const TeamMembers: TeamProps[] = [
    {
      image: femiBeanie,
      name: "FEMI JOHNSN",
      role: "CREATIVE DIRECTOR",
      discord: "femijohnson#3138",
      twitterHandle: "femijohnsn",
      color: "blue",
    },
    {
      image: anomalyBeanie,
      name: "The ANOMALY",
      role: "FRONT-END DEV",
      discord: "theanomaly#1485",
      twitterHandle: "the_oddbod",
      color: "green",
    },
    {
      image: angryBearBeanie,
      name: "ANGRY BEAR",
      role: "DESIGNER",
      discord: "angrybear#5598",
      twitterHandle: "hedonistside",
      color: "purple",
    },
    {
      image: stanzBeanie,
      name: "MANLIKESTANZ",
      role: "FRONT-END DEV",
      twitterHandle: "callme5t4n5",
      color: "yellow",
    },
  ];
  return (
    <div className={styles.container}>
      <Button text="BACK" onClick={() => {}} className={styles.btn} />
      <img src={playCharacter1} alt="" className={styles.char1} />
      <div className={styles.teamContainer}>
        {TeamMembers.map((item, index) => (
          <Team {...item} key={index} />
        ))}
      </div>
      <div className={styles.text}>
        <Diamond />
        DO WE GET TO BE BALLERS<span>?</span>
      </div>
    </div>
  );
};

export { Credit };
