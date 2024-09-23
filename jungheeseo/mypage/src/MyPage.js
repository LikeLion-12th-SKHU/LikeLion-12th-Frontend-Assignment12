import React, { useState } from "react";
import { useTabs } from "./hooks/useTabs";
import useDebounce from "./hooks/useDebounce";
import {
  Container,
  Title,
  SearchInput,
  Button,
  Content,
  NoResults,
  TabsContainer,
  Wrapper,
} from "./MyPageStyles";
import FadeIn from "./hooks/FadeIn";

const hobbies = [
  {
    tab: "야구보기",
    content: "⚾🦅",
  },
  {
    tab: "OTT",
    content: "Netflix, tving, wavve",
  },
  {
    tab: "멍...",
    content: "😶😶😶😶😶😶😶😶",
  },
];

function MyPage() {
  const [query, setQuery] = useState(""); // 사용자의 입력값을 저장
  const debouncedQuery = useDebounce(query, 500); // 검색어를 디바운스해 500ms 후에 업데이트
  const { currentItem, changeItem } = useTabs(0, hobbies); // 현재 탭과 탭 변경 함수를 반환하는 useTabs
  const [fadeKey, setFadeKey] = useState(0); // fade 키를 관리할 상태 변수

  // 탭 클릭 핸들러
  const handleTabClick = (index) => {
    changeItem(index); // 선택한 탭으로 변경
    setFadeKey((prevKey) => prevKey + 1); // fade 애니메이션에 키를 업데이트
  };

  // 입력한 검색어에 따라 필터링된 취미 목록
  const filteredHobbies = hobbies.filter((section) =>
    section.tab.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <Container>
      <Title>취미 소개 페이지</Title>
      <SearchInput
        type="text"
        placeholder="Search for a hobby"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TabsContainer>
        {filteredHobbies.map(
          (
            hobby,
            index // 필터링된 취미 목록을 탭으로 표시
          ) => (
            <Button
              key={index}
              onClick={
                () =>
                  handleTabClick(hobbies.findIndex((h) => h.tab === hobby.tab)) // 클릭한 탭을 찾아 핸들러 호출
              }
            >
              {hobby.tab}
            </Button>
          )
        )}
      </TabsContainer>
      <Wrapper>
        <Content key={fadeKey}>
          {" "}
          {/* fade 애니메이션을 위한 key */}
          {filteredHobbies.length > 0 ? (
            <FadeIn content={currentItem.content} /> // 클릭된 탭의 content를 FadeIn으로 표시
          ) : (
            <NoResults>결과 없음</NoResults> // 필터링된 결과가 없으면 '결과 없음' 표시
          )}
        </Content>
      </Wrapper>
    </Container>
  );
}

export default MyPage;
