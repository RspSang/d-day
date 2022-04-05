import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { doState } from "../atoms";
import { useEffect } from "react";

const FormContainer = styled.form``;

const Do = styled.input`
  height: 4rem;
  width: 30rem;
  border: 2px solid black;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 0 1.2rem;
  :focus {
    outline: none;
    border-color: #9147ff;
  }
`;

const Day = styled.input`
  margin-left: 0.5rem;
  height: 4rem;
  width: 10rem;
  border: 2px solid black;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0 0.6rem;
  :focus {
    outline: none;
    border-color: #9147ff;
  }
`;

const Btn = styled.button`
  margin-left: 0.5rem;
  padding: 0.8em 3em;
  height: 4rem;
  background-color: #9147ff;
  border-radius: 1rem;
  font-size: 1rem;
  :active {
    transform: translateY(5px);
  }
`;

interface IForm {
  Do: string;
  When: Date;
}

function Form() {
  const [dos, setDos] = useRecoilState(doState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    setDos((oldToDos) => [
      { text: data.Do, when: data.When, id: Date.now() },
      ...oldToDos,
    ]);
    setValue("Do", "");
    // setValue("When", new Date());
  };
  useEffect(() => {
    localStorage.setItem("Do", JSON.stringify(dos));
  }, [dos]);

  return (
    <FormContainer onSubmit={handleSubmit(handleValid)}>
      <Do
        id="Do"
        required={true}
        {...register("Do")}
        placeholder="Write a to do"
      ></Do>
      <Day type="date" required={true} {...register("When")}></Day>
      <Btn>입력</Btn>
    </FormContainer>
  );
}

export default Form;
