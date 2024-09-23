// src/App.js
import React from "react";
import HobbyTabs from "./HobbyTabs"; // 방금 구현한 탭 컴포넌트 경로를 맞춰주세요.
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
`;

function App() {
  return (
    <h1 className="App">
      <Title>취미 소개 페이지</Title>
      <HobbyTabs />
    </h1>
  );
}

export default App;
