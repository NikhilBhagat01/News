import styles from "./vertical.module.css";

const VerticalCard = ({ data }) => {
  let imageLink = data?.["featured-image"];
  return (
    <div className={styles.vertical_card}>
      <a href={data?.link} rel="noreferrer" target="_blank">
        <img src={imageLink} alt={data?.title} />
      </a>

      <h3>
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
      </h3>
    </div>
  );
};

export default VerticalCard;
