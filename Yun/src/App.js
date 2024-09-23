import React, { useState, useEffect } from "react";
import Calendar from "./component/Calendar";
import { useTabs } from "./hooks/useTabs";
import { useFadeIn } from "./hooks/useFadeIn";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

// content 배열 정의
const content = [
  {
    tab: "게임",
    content: "친구들과 게임하는 것을 좋아합니다.",
  },
  {
    tab: "축구",
    content: "친구들과 즐겁게 축구하는 것을 좋아합니다",
  },
  {
    tab: "독서",
    content: "마음의 양식을 쌓는 것이 취미입니다",
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(1, content);
  const fadeInDiv = useFadeIn(1, 2);

  const [query, setQuery] = useState(""); // 사용자의 입력값 상태
  const [apiResult, setApiResult] = useState(""); // API 응답값을 저장할 상태

  // 사용자의 입력값을 500ms 지연시키기 위해 useDebounce 훅 사용
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    // 디바운스된 query가 존재할 때만 검색 실행
    if (debouncedQuery) {
      searchTab(debouncedQuery);
    } else {
      setApiResult(""); // 검색어가 없을 때는 결과 초기화
    }
  }, [debouncedQuery]);

  // 검색어에 맞는 탭을 찾는 함수
  const searchTab = (searchQuery) => {
    const foundIndex = content.findIndex(
      (section) =>
        section.tab.includes(searchQuery) ||
        section.content.includes(searchQuery)
    );

    if (foundIndex !== -1) {
      changeItem(foundIndex); // 검색된 탭으로 변경
      setApiResult(""); // 검색결과가 있으면 결과 없음 메시지를 지움
    } else {
      setApiResult("검색결과 없음"); // 검색된 탭이 없으면 '검색결과 없음' 표시
    }
  };

  return (
    <div>
      <h2>실시간 검색</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <br />
      {/* 검색 결과가 없으면 결과 메시지 표시 */}
      {apiResult && <p>{apiResult}</p>}
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div {...fadeInDiv}>{currentItem.content}</div>

      <Calendar />
    </div>
  );
}

export default App;
