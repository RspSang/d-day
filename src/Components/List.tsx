import { useRecoilValue } from "recoil";
import { doState } from "../atoms";

const countDayFN = (toDate: Date) => {
  const now = new Date();
  const inputDate = new Date(toDate);
  let amount = inputDate.getTime() - now.getTime();

  amount = Math.floor(amount / 1000);

  const days = Math.floor(amount / 86400) + 1;

  return {
    days,
  };
};

function List() {
  const lists = useRecoilValue(doState);
  return (
    <div>
      {lists?.map((list) => (
        <div key={list.id}>
          {list.text}
          {countDayFN(list.when).days}일
        </div>
      ))}
    </div>
  );
}

export default List;
