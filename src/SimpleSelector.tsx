import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./selectorAtom";

function SimpleSelector() {
  const [min, setMin] = useRecoilState(minuteState);

  // select에 여러개의 property가 존재한ㄷ면 호출 할 때 배열요소에 각각 들어있다.
  // 현재 selector에는 get, set이 있으므로 0 index: get, 1 index: set이 존재한다.
  // 간혹, get | set의 타입을 찾지 못할 경우에는 atom의 타입을 선언해주어야 한다.
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMin(+e.currentTarget.value);
  };

  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };

  return (
    <>
      <input
        value={min}
        onChange={onMinChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </>
  );
}

export default SimpleSelector;
