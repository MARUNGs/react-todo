import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { toDoSelector } from "../atoms";
import Todo from "./Todo";

export default function TodoList() {
  /*
  interface FormData {
    email: string;
    name: string;
    pw: string;
    pwCheck: string;
    extraError?: string;
  }

  // useForm을 활용한 예시
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    // 기본값 설정 가능
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: FormData) => {
    // 직접 에러 설정 가능
    if (data.pw !== data.pwCheck) {
      setError(
        "pwCheck",
        { message: "비밀번호가 안 맞아요" },
        { shouldFocus: true } // pwCheck로 focus
      );
    }

    // 추가적인 에러를 발생시킬 경우, interface에 항목을 추가한 뒤 사용한다.
    // setError("extraError", { message: "서버가 갑자기 닫혔어..." });
  };

  console.log(errors);

  return (
    <>
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onValid)}
        >
          <input
            {...register("email", {
              required: "email required",
              validate: (value) =>
                value.includes("nico") ? "nico가 들어가면 안돼요" : true, // value: 항목의 값 // true: 통과, false: 통과불가
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "네이버 이메일만 허용합니다.",
              },
            })}
            type="text"
            placeholder="write email..."
          />
          <span>{errors?.email?.message}</span>
          <input
            {...register("name", {
              required: "name required",
              validate: {
                noNico: (value) =>
                  value.includes("nico") ? "nico가 들어가면 안돼요" : true,
                noNick: (value) =>
                  value.includes("nick") ? "nick가 들어가면 안돼요" : true,
              },
              minLength: {
                value: 5,
                message: "이름은 5자 이상이어야 합니다.",
              },
            })}
            type="text"
            placeholder="write name..."
          />
          <span>{errors?.name?.message}</span>
          <input
            {...register("pw", {
              required: "password required",
              minLength: {
                value: 3,
                message: "비밀번호는 3자 이상이어야 합니다.",
              },
            })}
            type="text"
            placeholder="write pw..."
          />
          <span>{errors?.pw?.message}</span>
          <input
            {...register("pwCheck", {
              required: "비밀번호 확인 required",
              minLength: {
                value: 3,
                message: "비밀번호 확인은 3자 이상이어야 합니다.",
              },
            })}
            type="text"
            placeholder="write pwCheck..."
          />
          <span>{errors?.pwCheck?.message}</span>
          <button>add</button>
          <span>{errors?.extraError?.message}</span>
        </form>
      </div>
    </>
  );
  */

  // 기존 작업물은 주석처리 하자. (useForm을 사용하기 전.)
  // 고쳐보도록 하자. (useForm 사용) + recoil
  // const todoList = useRecoilValue(todoState);

  // selector 호출(useRecoilValue로 호출이 가능하다.)
  const [toDos, doing, done] = useRecoilValue(toDoSelector);

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <hr />

        <CreateTodo />

        <h2>Todo List</h2>
        <ul>
          {toDos?.map((todo) => (
            // 같은 모양의 타입이면 배열 요소를 담아줄 수 있다.
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>

        <hr />
        <h2>Doing List</h2>
        <ul>
          {doing?.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>

        <hr />
        <h2>Done List</h2>
        <ul>
          {done?.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </>
  );
}
