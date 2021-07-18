import React from "react";
import MainPage from "./pages/Main";
import styled from "styled-components";
function App() {
  return (
    <>
      <Container>
        <MainPage />
      </Container>
    </>
  );
}

const Container = styled.div`
  border: 6px solid blue;
  padding: 20px;
`;

export default App;
