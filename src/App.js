import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import ToDoList from "./routes/TodoList/ToDoList";
import CoinTracker from "./routes/CoinTracker/CoinTracker";
import Home from "./routes/Home/Home";
import MovieApp from "./routes/Movie/MovieApp";
import MovieDetail from "./routes/Movie/MovieDetail";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Practice React App</h1>
      <Router basename="/practice-react-app">
        <div className={styles.wrap}>
          <div className={styles.nav_area}>
            <Nav />
          </div>
          <div className={styles.contents_area}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todolist" component={ToDoList} />
              <Route path="/cointracker" component={CoinTracker} />
              <Route path="/movieapp/:id" component={MovieDetail} />
              <Route path="/movieapp" component={MovieApp} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
