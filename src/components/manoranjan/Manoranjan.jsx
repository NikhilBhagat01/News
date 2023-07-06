import styles from "./Manoranjan.module.css";

// COMPONENTS
import HorizontalCard from "../horizontalCard/HorizontalCard";
import Title from "../title/Title";
import VerticalCard from "../verticalCard.jsx/VerticalCard";
import { TransFormData } from "../../utils/utils";

const Manoranjan = ({ news }) => {
  const scrollData = TransFormData(news, 2, 0, 3);
  const restData = TransFormData(news, 2, 3, news[2]?.data?.length);
  return (
    <>
      <Title title="मनोरंजन" />
      <div className={styles.manoranjan}>
        {scrollData?.map((data) => (
          <VerticalCard data={data} key={data.link} />
        ))}
      </div>
      <div>
        {restData?.map((data) => (
          <HorizontalCard data={data} />
        ))}
      </div>
    </>
  );
};

export default Manoranjan;
