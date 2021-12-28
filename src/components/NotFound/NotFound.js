import styles from "./NotFound.module.scss";
import Title from "../Title/Title";

function NotFound() {
  return (
    <div className={styles.area}>
      <Title text="The Page doesn't exist." />
      <p>
        You may have entered the wrong link, or the page may have been deleted
        or moved.
      </p>
    </div>
  );
}

export default NotFound;
