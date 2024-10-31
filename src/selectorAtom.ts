import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "min",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const min = get(minuteState);
    return min / 60;
  },
  // set(): 원하는 state가 어떤 것이던지 그걸로 수정할 수 있게 하는 기능.
  set: ({ set }, newVal) => {
    // newVal: 새롭게 입력한 값을 set() 함수가 캐치하여 newVal 함수에 담아 여기로 보냄.
    const min = Number(newVal) * 60;
    // 사용법: set(수정할 atom, 수정값)
    set(minuteState, min);
  },
});
