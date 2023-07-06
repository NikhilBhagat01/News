import styles from "./Featured.module.css";

// COMPONENTS
import HorizontalCard from "../horizontalCard/HorizontalCard";
import VerticalCard from "../verticalCard.jsx/VerticalCard";
import { TransFormData } from "../../utils/utils";

const FeaturCard = ({ data }) => {
  let imageLink = data?.["featured-image"];
  return (
    <div className={styles.feature_card}>
      <h1>
        <a
          className={styles.category}
          href={data?.link}
          rel="noreferrer"
          target="_blank"
        >
          {data?.category} :
        </a>
        <a
          className={styles.title}
          href={data?.link}
          rel="noreferrer"
          target="_blank"
        >
          {data?.title}
        </a>
      </h1>
      <a href={data?.link} rel="noreferrer" target="_blank">
        <img
          src={imageLink}
          alt={data?.title}
          className={styles.feature_image}
        />
      </a>
    </div>
  );
};

const Featured = ({ news }) => {
  const horizontalData = TransFormData(news, 0, 1, 4);
  const verticalData = TransFormData(news, 0, 4, 7);
  const restData = TransFormData(news, 0, 7, news[0]?.data?.length);

  return (
    <section className={styles.featured_widget}>
      <div className={styles.featured_widget_container}>
        <div className={styles.featured_widget_left}>
          <FeaturCard data={news[0]?.data[0]} />
        </div>
        <div className={styles.featured_widget_right}>
          <div>
            {horizontalData?.map((data) => (
              <HorizontalCard data={data} key={data.link} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.scroll_container}>
        {verticalData?.map((data) => (
          <VerticalCard data={data} key={data.link} />
        ))}
      </div>
      <div>
        {restData?.map((data) => (
          <HorizontalCard data={data} key={data.link} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
