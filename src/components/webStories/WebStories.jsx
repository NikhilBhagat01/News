import styles from "./web.module.css";

// COMPONENTS
import StoryCard from "../storyCard/StoryCard";
import Title from "../title/Title";

const WebStories = ({ news }) => {
  return (
    <>
      <Title title="वेब स्टोरीज" />
      <div className={styles.webstories}>
        {news[1]?.data.map((data) => (
          <StoryCard data={data} key={data.title} />
        ))}
      </div>
    </>
  );
};

export default WebStories;
