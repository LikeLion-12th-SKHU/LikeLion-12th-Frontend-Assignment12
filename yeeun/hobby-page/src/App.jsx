import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar";
import { useTabs } from "./hooks/useTabs";
import useDebounce from "./hooks/useDebounce";
import { useFadeIn } from "./hooks/useFadeIn";

const hobbies = [
  { tab: "음악 듣기", content: "인디 음악 조아해요" },
  { tab: "독서", content: "하려고 노력 중..." },
  { tab: "잠 자기", content: "드르렁" },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, hobbies);
  const fadeInContent = useFadeIn(1, 2);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const filteredHobbies = useMemo(() => {
    return hobbies.filter((item) =>
      item.tab.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  return (
    <Content>
      <div>
        <h1>내 취미 소개</h1>
        <Search
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for a hobby'
        />
        <br />
        {filteredHobbies.length > 0 ? (
          filteredHobbies.map((section, index) => (
            <Button
              key={index}
              onClick={() => changeItem(index)}
              isActive={section.tab === currentItem.tab}>
              {section.tab}
            </Button>
          ))
        ) : (
          <p>검색 결과 없음</p>
        )}
        <div {...fadeInContent}>
          <h3>{currentItem.content}</h3>
        </div>
        <Calendar />
      </div>
    </Content>
  );
}

export default App;

const Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #f0f8ff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Search = styled.input`
  border-radius: 10px;
  border: 2px solid #7db5f4;
  padding: 10px;
  width: 280px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: ${({ isActive }) => (isActive ? "#63ac67" : "#f0f8ff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  border: ${({ isActive }) => (isActive ? "none" : "2px solid #7db5f4")};
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #63ac67;
    color: #fff;
  }
`;
