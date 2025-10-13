import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import todos from "./todos.json";
export default function TodoList() {
  let c = 1;
  return (
    <>
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo) => {
          c += 1;
          return <TodoItem key={c} todo={todo} />;
        })}
      </ListGroup>
      <hr />
    </>
  );
}
