import styles from "./Title.module.css";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <button>
        पुढे वाचा <LiaGreaterThanSolid />
      </button>
    </div>
  );
};

export default Title;
