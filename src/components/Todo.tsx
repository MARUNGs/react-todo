import { ITodo } from "../atoms";

const Todo = ({ text }: ITodo) => {
  return (
    <>
      <li>
        {text}
        <button>Todo</button>
        <button>Doing</button>
        <button>Done</button>
      </li>
    </>
  );
};

export default Todo;
