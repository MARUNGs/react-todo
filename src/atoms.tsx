import { atom, selector } from "recoil";

// interface
export interface ITodo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

// atom
export const todoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const list = get(todoState); // todoState atom을 바라보고, 새롭게 가공

    // ato에 저장한 list를 기준으로, 조건에 맞는 list를 각각 보관할 것.
    const resultList = [
      list.filter((data) => data.category === "TODO"),
      list.filter((data) => data.category === "DOING"),
      list.filter((data) => data.category === "DONE"),
    ];

    return resultList;
  },
});
