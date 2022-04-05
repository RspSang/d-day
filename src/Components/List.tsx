import { useRecoilValue } from "recoil";
import { doState } from "../atoms";
import styled from "styled-components";
import { theme } from "../theme";
import React from "react";

const ListContainer = styled.div`
  width: 49rem;
  margin-top: 2rem;
`;

const List = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.white.lighter};
  background-color: #9147ff;
  border-radius: 0.8rem;
  margin-top: 1rem;
`;

const ListDelete = styled.div`
  position: absolute;
  margin-left: 50%;
  cursor: pointer;
`;

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

function Lists() {
  const lists = useRecoilValue(doState);
  const onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    console.log(event);
  };
  return (
    <ListContainer>
      {lists?.map((list: any) => (
        <List key={list.id}>
          {list.text}
          {list.when}일<ListDelete onClick={onClick}>x</ListDelete>
        </List>
      ))}
    </ListContainer>
  );
}

export default Lists;
