import { useState } from "react";
import ToDoList from "./ToDoList";
import CoinTracker from "./CoinTracker";

function App() {
  const [index, setIndex] = useState("default");

  const onChange = event => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <h1>Practice React App</h1>
      <select value={index} onChange={onChange}>
        <option value="default">Choose your app</option>
        <option value="0">ToDoList</option>
        <option value="1">Coin Tracker</option>
        <option value="2">Movie App</option>
      </select>
      <hr />
      {index === "0" ? <ToDoList /> : null}
      <CoinTracker />
    </div>
  );
}

export default App;
