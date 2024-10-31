import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoState } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodoList = useSetRecoilState(todoState);

  // function
  const onClick = (newCategory: ITodo["category"]) => {
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

      return newCategory === Categories.DELETE
        ? [...front, ...back] // 해당 todo 삭제
        : [...front, newTodo, ...back]; // 상태 수정
    });
  };

  return (
    <>
      <li>
        {text}
        {category !== Categories.TODO && (
          <button onClick={() => onClick(Categories.TODO)}>Todo</button>
        )}
        {category !== Categories.DOING && (
          <button onClick={() => onClick(Categories.DOING)}>Doing</button>
        )}
        {category !== Categories.DONE && (
          <button onClick={() => onClick(Categories.DONE)}>Done</button>
        )}
        <button onClick={() => onClick(Categories.DELETE)}>❌</button>
      </li>
    </>
  );
};

export default Todo;
