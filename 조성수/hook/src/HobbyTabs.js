// src/HobbyTabs.js
import React, { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useFadeIn } from "./hooks/useFadeIn"; // useFadeIn 훅 불러오기
import styled from "styled-components";

const Background = styled.div`
  background: skyblue;
  text-align: center;
  margin: 30px;
  padding: 30px;
  border-radius: 30px;
`;

const Search = styled.input`
  border-radius: 30px;
  height: 30px;
`;

const Tabs = styled.div`
  border-radius: 30px;
  height: 30px;
  margin: 10px;
`;

const Tab = styled.button`
  margin: 10px;
  border-radius: 30px;
  padding: 10px;
  background: #8877ff;
`;

const hobbies = [
  {
    name: "독서",
    description: "책 읽는 것을 좋아해요.",
  },
  {
    name: "음악 감상",
    description: "음악 듣는 것을 좋아해요.",
  },
  {
    name: "클라이밍",
    description: "클라이밍 재밌어요.",
  },
];

function HobbyTabs() {
  const [search, setSearch] = useState("");
  const [selectedHobby, setSelectedHobby] = useState(hobbies[0]);
  const debouncedSearch = useDebounce(search, 500);
  const { ref: fadeInRef, triggerFadeIn } = useFadeIn(1); // useFadeIn 훅 사용

  useEffect(() => {
    const hobby = hobbies.find((hobby) =>
      hobby.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    if (hobby) {
      setSelectedHobby(hobby);
      triggerFadeIn(); // 탭 전환 시 애니메이션 실행
    } else {
      setSelectedHobby(null);
    }
  }, [debouncedSearch]);

  return (
    <Background>
      <Search
        type="text"
        placeholder="Search for a hobby"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Tabs className="tabs">
        {hobbies.map((hobby, index) => (
          <Tab
            key={index}
            onClick={() => {
              setSelectedHobby(hobby);
              triggerFadeIn(); // 탭 클릭 시 애니메이션 실행
            }}
          >
            {hobby.name}
          </Tab>
        ))}
      </Tabs>
      <div ref={fadeInRef} className="description">
        {debouncedSearch && !selectedHobby ? (
          <p>결과 없음</p>
        ) : (
          <p>{selectedHobby?.description}</p>
        )}
      </div>
    </Background>
  );
}

export default HobbyTabs;
