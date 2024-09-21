import React from "react";
import MyPage from "./MyPage";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

function App() {
  return (
    <Container>
      <MyPage />
    </Container>
  );
}

export default App;
