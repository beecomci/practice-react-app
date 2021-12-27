import { useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./TodoList.module.css";

function ToDoList() {
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
      <Title text={`My ToDos (${toDos.length})`} />
      <form onSubmit={onSubmit}>
        <input
          className={styles.input_todo}
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button className={styles.btn_add}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* react element로 된 array 반환 */}
        {toDos.map((item, index) => (
          <li key={index}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
