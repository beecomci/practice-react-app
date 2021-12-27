import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ToDoList from "./components/ToDoList";
import CoinTracker from "./components/CoinTracker";
import MovieApp from "./components/MovieApp";
import Home from "./components/Home";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Practice React App</h1>
      <Router>
        <div className={styles.wrap}>
          <div className={styles.nav_area}>
            <Nav />
          </div>
          <div className={styles.contents_area}>
            <Switch>
              <Route path="/todolist">
                <ToDoList />
              </Route>
              <Route path="/cointracker">
                <CoinTracker />
              </Route>
              <Route path="/movieapp">
                <MovieApp />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
