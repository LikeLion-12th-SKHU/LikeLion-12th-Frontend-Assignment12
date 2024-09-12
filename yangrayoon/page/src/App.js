import { useTabs } from "./use";
import useDebounce from "./useDebounce";
import { useFadeIn } from "./useFadIn";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "./component/Calendar";

const content = [
  {
    tab: "사람 구경하기",
    content: "👀👀👀👀👀👀👀",
  },
  {
    tab: "music is 마랖...",
    content: "🎶🎵🎶🎶🎶🎵🎵",
  },
  {
    tab: "하하하",
    content: "하하하ㅏ핳",
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  const fadeInContent = useFadeIn(1, 2);

  const [query, setQuery] = useState("");
  const [apiResult, setApiResult] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      const foundIndex = content.findIndex((item) =>
        item.tab.includes(debouncedQuery)
      );
      if (foundIndex !== -1) {
        changeItem(foundIndex);
      } else {
        setApiResult("결과 없음");
      }
    }
  }, [debouncedQuery, changeItem]);

  return (
    <Content>
      <div>
        <h1>취미 소개 페이지</h1>
        <Search
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <p>{apiResult}</p>
        {content.map((section, index) => (
          <BtnSt onClick={() => changeItem(index)}>{section.tab}</BtnSt>
        ))}
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
`;

const Search = styled.input`
  border-radius: 20px;
  border: 1px solid #bababa;
  width: 300px;
  padding: 10px;
`;

const BtnSt = styled.button`
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
  width: 140px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  color: #63ac67;

  &:hover {
    border: none;
    background-color: #63ac67;
    color: white;
    font-weight: bold;
    font-size: 15px;
  }
`;
