import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = event => {
    setToDo(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();

    if (!toDo) return;

    setToDos(currentArray => [toDo, ...currentArray]); // 새 todos 배열을 생성해서 반환
    setToDo("");
  };

  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* react element로 된 array 반환 */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
