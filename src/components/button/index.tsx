import { NotiLogo } from "assets";
import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  action: () => void;
  className: string;
}

const Button = ({ text, className, action }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
      className={`${styles.btn} ${className}`}
    >
      {text}
    </button>
  );
};

export { Button };
