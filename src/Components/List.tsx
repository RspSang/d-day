import { useRecoilValue } from "recoil";
import { doState } from "../atoms";

function List() {
  const lists = useRecoilValue(doState);
  return (
    <div>
      {lists?.map((list) => (
        <div>
          {list.text}
          {list.when}
        </div>
      ))}
    </div>
  );
}

export default List;
