import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <ul className={styles.menu_area}>
      <li className={styles.item}>
        <Link to="/practice-react-app">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/practice-react-app/todolist">Todo List</Link>
      </li>
      <li className={styles.item}>
        <Link to="/practice-react-app/cointracker">Coin Tracker</Link>
      </li>
      <li className={styles.item}>
        <Link to="/practice-react-app/movieapp">Movie App</Link>
      </li>
    </ul>
  );
}

export default Nav;
