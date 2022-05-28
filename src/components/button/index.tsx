import { NotiLogo } from "assets";
import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`${styles.btn} ${className}`}
    >
      {text}
    </button>
  );
};

export { Button };
