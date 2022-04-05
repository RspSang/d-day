import Form from "./Components/Form";
import List from "./Components/List";
import styled from "styled-components";

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Form />
      <List />
    </Container>
  );
}

export default App;
