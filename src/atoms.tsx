import { atom } from "recoil";

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
