import { useRecoilValue } from "recoil";
import { doState } from "../atoms";

const countDayFN = (toDate: Date) => {
  const now = new Date();
  const inputDate = new Date(toDate);
  let amount = inputDate.getTime() - now.getTime();

  // time is already past
  if (amount < 0) {
  }

  // 일, 시, 분, 초 를 모두 0으로 초기화시켜줍니다.

  amount = Math.floor(amount / 1000); // milliseconds 모두 지워줍니다.

  const days = Math.floor(amount / 86400) + 1;
  // 하루는 총 86400 초이기 때문에 86400 으로 나눈 값이 d-day와의 남은 일수를 나타내줍니다.
  // amount = amount % 86400;
  // // 나머지값만 받아와줍니다.

  // let hours = Math.floor(amount / 3600);
  // // 1시간은 총 3600 초이기 때문에 3600 으로 나눈 값이 d-day와의 남은 시간수를 나타내줍니다.
  // amount = amount % 3600;
  // // 나머지값만 받아와줍니다.

  // let mins = Math.floor(amount / 60);
  // // 1분은 총 60 초이기 때문에 60 으로 나눈 값이 d-day와의 남은 분 수를 나타내줍니다.
  // amount = amount % 60;
  // // 나머지값만 받아와줍니다.

  // let secs = Math.floor(amount);
  // // 나머지 값은 남은 초가 됩니다.

  return {
    days,
    // hours,
    // minutes: mins,
    // seconds: secs,
  };
  // day, hours, minutes, seconds 에 각각 대입해줍니다.
};

function List() {
  const lists = useRecoilValue(doState);
  return (
    <div>
      {lists?.map((list) => (
        <div>
          {list.text}
          {countDayFN(list.when).days}일
          {/* {countDayFN(list.when).hours}시간
          {countDayFN(list.when).minutes}분{countDayFN(list.when).seconds}초 */}
        </div>
      ))}
    </div>
  );
}

export default List;
