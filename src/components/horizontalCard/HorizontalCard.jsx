import styles from "./HorizontalCard.module.css";

const HorizontalCard = ({ data }) => {
  let imageLink = data?.["featured-image"];
  return (
    <div className={styles.horizontal_card}>
      <div className={styles.left}>
        <a href={data?.link} rel="noreferrer" target="_blank">
          <img src={imageLink} alt={data.title} />
        </a>
      </div>
      <div className={styles.right}>
        <h2>
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
        </h2>
      </div>
    </div>
  );
};

export default HorizontalCard;
