import React, { useState, useEffect } from "react";
import { useTabs } from "./hooks/useTabs";
import { useFadeIn } from "./hooks/useFadeIn";
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
  const [filteredHobbies, setFilteredHobbies] = useState(hobbies); // 필터링된 목록 상태
  const { currentItem, changeItem } = useTabs(0, filteredHobbies); // 현재 탭과 탭 변경 함수를 반환하는 useTabs
  const fadeInProps = useFadeIn(1); // 애니메이션 효과를 위한 속성 설정

  // 검색어가 변경될 때마다 실행
  useEffect(() => {
    // 검색어가 존재하면 필터링, 아닐 경우 전체 탭 표시
    const filtered = debouncedQuery
      ? hobbies.filter((hobby) =>
          hobby.tab.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      : hobbies;

    setFilteredHobbies(filtered); // 필터링된 취미 목록 업데이트

    // 필터링된 결과가 있을 경우 첫 번째 탭으로 초기화
    if (filtered.length > 0) changeItem(0);
  }, [debouncedQuery, changeItem]);

  return (
    <Container>
      <Title>취미 소개 페이지</Title>
      <SearchInput
        type="text"
        placeholder="Search for a hobby"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // 입력값이 변경될 때 query 상태 업데이트
      />
      <TabsContainer>
        {/* 필터링된 취미 목록으로 탭 버튼 생성 */}
        {filteredHobbies.map((hobby, index) => (
          <Button key={index} onClick={() => changeItem(index)}>
            {hobby.tab}
          </Button>
        ))}
      </TabsContainer>
      <Wrapper>
        <Content ref={fadeInProps.ref} style={fadeInProps.style}>
          {/* 필터링된 취미가 있을 경우 현재 탭의 내용 표시, 없으면 '결과 없음' 표시*/}
          {filteredHobbies.length > 0 ? (
            currentItem.content
          ) : (
            <NoResults>결과 없음</NoResults>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
}

export default MyPage;
