import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

const CreateTodo = () => {
  // interface
  interface IForm {
    toDo: string;
  }

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodoList = useSetRecoilState(todoState); // setter

  // function
  const onSubmit = ({ toDo }: IForm) => {
    setTodoList((currentArr) => [
      {
        id: Date.now(),
        text: toDo,
        category: "TODO",
      },
      ...currentArr,
    ]);

    setValue("toDo", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
        />
        <button>add</button>
      </form>
    </>
  );
};

export default CreateTodo;
