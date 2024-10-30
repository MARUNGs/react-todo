import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodoList = useSetRecoilState(todoState);

  // function
  const onClick = (newCategory: ITodo["category"]) => {
    console.log(`새로운 카테고리: ${newCategory}`);

    setTodoList((currentArr) => {
      // step 1. find target
      const targetIdx = currentArr.findIndex((toDo) => toDo.id === id);
      // step 2. make newTodo
      const newTodo = {
        id,
        text,
        category: newCategory,
      };
      // step 3. setTodoList
      const front = currentArr.slice(0, targetIdx);
      const back = currentArr.slice(targetIdx + 1);
      const newDotoList = [...front, newTodo, ...back];

      return newDotoList;
    });
  };

  return (
    <>
      <li>
        {text}
        {category !== "TODO" && (
          <button onClick={() => onClick("TODO")}>Todo</button>
        )}
        {category !== "DOING" && (
          <button onClick={() => onClick("DOING")}>Doing</button>
        )}
        {category !== "DONE" && (
          <button onClick={() => onClick("DONE")}>Done</button>
        )}
      </li>
    </>
  );
};

export default Todo;
