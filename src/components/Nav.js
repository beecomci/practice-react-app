import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <ul className={styles.menu_area}>
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/todolist">Todo List</Link>
      </li>
      <li className={styles.item}>
        <Link to="/cointracker">Coin Tracker</Link>
      </li>
      <li className={styles.item}>
        <Link to="/movieapp">Movie App</Link>
      </li>
    </ul>
  );
}

export default Nav;
