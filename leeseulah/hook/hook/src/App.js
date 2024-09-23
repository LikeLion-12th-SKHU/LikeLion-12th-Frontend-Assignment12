import React from "react";
import HobbyTabs from "./TabsWithSearch";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
`;

function App() {
  return (
    <h1 className="App">
      <HobbyTabs />
    </h1>
  );
}

export default App;
