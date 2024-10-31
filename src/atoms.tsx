import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// enum
// 계속해서 사용해야 할 값을 저장해주는 도구. 일련의 숫자를 문자로 표현해준다.
export enum Categories {
  "TODO", //0
  "DOING", //1
  "DONE", // 2
  "DELETE",

  // 숫자가 아니라 문자열로 하고 싶다면?
  // 'TODO' = 'TODO',
  // 'DOING' = 'DOING',
  // 'DONE' = 'DONE'
}

// interface
export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

// atom
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

/**
 * [1]
 * todo list를 지속적으로 관리하는 방법 : Atom Effects / recoilPersist
 * 1. Atom Effects를 직접 구현하여 atom을 관리할 수 있다.
 * 2. recoil에서 제공하는 recoilPersist 기능을 활용하여 처리할 수 있다.
 */
const localStorageEffect =
  (key: string) =>
  ({ onSet, setSelf }: any) => {
    // localStorage에 저장된 값 호출
    const savedArr = localStorage.getItem(key);

    // setSelf(): 연결된 atom의 값을 초기화해주는 함수
    if (savedArr !== null) setSelf(JSON.parse(savedArr));

    // onSet(): 해당하는 atom의 값이 변경되었을 때 실행되는 함수
    onSet((newArr: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newArr));
    });
  };

/**
 * [2]
 * recoil-persist 패키지를 활용한 로컬 저장
 */
const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

export const todoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
  // effects: [localStorageEffect("toDo")], // [1]
  effects_UNSTABLE: [persistAtom], // [2]
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const list = get(todoState); // todoState atom을 바라보고, 새롭게 가공
    const category = get(categoryState);
    // atom에 저장한 list를 기준으로, 조건에 맞는 list를 각각 보관할 것.
    const resultList = list.filter((todo) => todo.category === category);
    return resultList;
  },
});
