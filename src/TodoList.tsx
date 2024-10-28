import { useForm } from "react-hook-form";

export default function TodoList() {
  // useForm 사용
  // register: {name, onChange (), onBlur (), ref ()} 를 리턴함
  // watch: form 입력값들의 변화를 관찰하는 함수
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <>
      <div>
        <form>
          <input
            {...register("Email")}
            type="text"
            placeholder="write email..."
          />
          <button>add</button>
        </form>
      </div>
    </>
  );

  /*
  // 기존 작업물은 주석처리 하자. (useForm을 사용하기 전.)
  const [todo, setTodo] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={todo}
            onChange={onChange}
            placeholder="write a to do..."
          />
          <button>add</button>
        </form>
      </div>
    </>
  );
  */
}
