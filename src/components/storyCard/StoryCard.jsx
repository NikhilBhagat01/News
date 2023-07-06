import styles from "./Story.module.css";

const StoryCard = ({ data }) => {
  let imageLink = data?.["featured-image"];
  return (
    <div className={styles.storycard}>
      <a href={data?.link} rel="noreferrer" target="_blank">
        <img className={styles.cardimg} src={imageLink} alt={data?.title} />
      </a>
      <h3 className={styles.title}>
        <a href={data?.link} rel="noreferrer" target="_blank">
          {data?.title}
        </a>
      </h3>
    </div>
  );
};

export default StoryCard;
