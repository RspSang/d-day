import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { doState } from "../atoms";

interface IForm {
  Do: string;
  When: string;
}

function Form() {
  const setDos = useSetRecoilState(doState);
  const aaa = useRecoilValue(doState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    setDos((oldToDos) => [
      { text: data.Do, when: data.When, id: Date.now() },
      ...oldToDos,
    ]);
    setValue("Do", "");
    setValue("When", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("Do", { required: "필수 항목입니다 입력해주세요" })}
          placeholder="Write a to do"
        ></input>
        <input
          type="date"
          {...register("When", { required: "필수 항목입니다 입력해주세요" })}
        ></input>
        <button>입력</button>
      </form>
    </div>
  );
}

export default Form;
