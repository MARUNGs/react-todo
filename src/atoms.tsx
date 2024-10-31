import { atom, selector } from "recoil";

// enum
// 일련의 숫자를 문자로 표현해준다.
export enum Categories {
  "TODO", //0
  "DOING", //1
  "DONE", // 2

  // 숫자가 아니라 문자열로 하고 싶다면?
  /*
  'TODO' = 'TODO',
  'DOING' = 'DOING',
  'DONE' = 'DONE'
  */
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

export const todoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
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
