import React, { useState, useEffect } from "react";
import { useTabs } from "../hooks/useTabs";
import { useDebounce } from "../hooks/useDebounce";
import HobbyWithAnimation from "./HobbyWithAnimation";

const hobbies = [
  {
    title: "공포라디오 듣기",
    content:
      "등하교 할 때, 알바하러 갈 때 '돌비의 공포라디오' 듣는 걸 좋아해요!",
  },
  {
    title: "산책하기",
    content: "요즘 날씨가 좋아져서 산책하기 딱 쥬아요",
  },
  {
    title: "술마시기",
    content: "허허허.",
  },
];

function SearchHobbies() {
  const { currentItem, changeItem } = useTabs(0, hobbies); // 탭 전환 로직
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 검색어 디바운스 처리, 500ms 대기 후 실행

  // 검색어에 따라 해당 취미를 자동으로 선택하는 기능
  useEffect(() => {
    const hobbyIndex = hobbies.findIndex((hobby) =>
      hobby.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    if (hobbyIndex !== -1) {
      // 검색어에 해당하는 취미가 있으면 그 탭을 선택
      changeItem(hobbyIndex);
    }
  }, [debouncedSearchTerm, changeItem]);

  return (
    <div style={styles.container}>
      {/* 제목 */}
      <h1 style={styles.title}>취미 소개 페이지</h1>

      {/* 검색창 */}
      <input
        type="text"
        placeholder="취미를 검색해 보세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBox}
      />

      {/* 검색어가 입력되었을 때 해당하는 취미가 없으면 "결과 없음" 메시지 출력 */}
      <div>
        {debouncedSearchTerm &&
          hobbies.findIndex((hobby) =>
            hobby.title
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase())
          ) === -1 && <p>결과 없음</p>}
      </div>

      {/* 취미 목록 */}
      <div style={styles.hobbyList}>
        {hobbies.map((hobby, index) => (
          <button
            key={hobby.title}
            onClick={() => changeItem(index)}
            style={{
              ...styles.hobbyButton,
              backgroundColor:
                currentItem.title === hobby.title ? "#FFD1DC" : "#fff",
            }}
          >
            {hobby.title}
          </button>
        ))}
      </div>

      {/* 선택된 취미 설명 */}
      <div style={styles.hobbyContent}>
        <HobbyWithAnimation hobby={currentItem} />
      </div>
    </div>
  );
}

// 스타일 정의
const styles = {
  container: {
    textAlign: "center", // 전체 컨텐츠 가운데 정렬
    backgroundColor: "#FBEFFB",
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    color: "#FF69B4",
    fontSize: "3em",
    marginBottom: "20px",
  },
  searchBox: {
    padding: "10px",
    fontSize: "1em",
    width: "80%",
    maxWidth: "400px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    color: "#aaa",
  },
  hobbyList: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  hobbyButton: {
    padding: "15px 20px",
    border: "1px solid #FF69B4",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1.2em",
    width: "150px",
    textAlign: "center",
    transition: "background-color 0.3s ease",
  },
  hobbyContent: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // 그림자 효과
  },
};

export default SearchHobbies;
