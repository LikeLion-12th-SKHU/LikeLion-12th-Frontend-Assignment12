import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTabs } from "./hooks/useTabs";
import useDebounce from "./hooks/useDebounce";

const content = [
  {
    tab: "Mountain Hiking",
    content: "I love fresh air and the challenge of climbing mountains!",
  },
  {
    tab: "Photography",
    content: "I love the art and science of capturing and creating images!",
  },
  {
    tab: "Coffee Brewing",
    content: "I love the process of extracting flavors from coffee grounds!",
  },
];

function Hobby() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { currentItem, changeItem } = useTabs(1, content);
  const [fadeKey, setFadeKey] = useState(0); // 애니메이션 트리거용 상태

  // 탭이 변경될 때마다 fadeKey를 업데이트하여 강제 재렌더링
  const handleTabClick = (index) => {
    changeItem(index);
    setFadeKey((prevKey) => prevKey + 1); // fadeKey 증가
  };

  const filteredContent = content.filter((section) =>
    section.tab.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Y2K 취미 소개 페이지</h1>
      <input
        type="text"
        placeholder="Search for a hobby"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
      />
      <div style={buttonContainerStyle}>
        {filteredContent.length === 0 ? (
          <p style={noResultsStyle}>결과 없음</p>
        ) : (
          filteredContent.map((section, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              style={
                index ===
                filteredContent.findIndex(
                  (item) => item.tab === currentItem.tab
                )
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
            >
              {section.tab}
            </button>
          ))
        )}
      </div>
      {filteredContent.length > 0 && (
        <ContentWithFade
          content={currentItem.content}
          key={fadeKey} // fadeKey를 key로 사용하여 매번 애니메이션 재실행
        />
      )}
      <Link to="/calendar" style={calendarLinkStyle}>
        캘린더 꾸미기
      </Link>
    </div>
  );
}

function ContentWithFade({ content }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false); // 콘텐츠가 변경될 때 보이지 않게 설정
    const timeout = setTimeout(() => setIsVisible(true), 10); // 약간의 지연 후에 보이도록 설정
    return () => clearTimeout(timeout); // 클린업
  }, [content]);

  return (
    <div
      style={{
        ...contentStyle,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s",
      }}
    >
      {content}
    </div>
  );
}

export default Hobby;

// 스타일 관련 코드
const containerStyle = {
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  background: "#e8d9ff",
  borderRadius: "20px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
};

const titleStyle = {
  fontSize: "36px",
  color: "#fff",
  textShadow: "0 0 10px #ff69b4",
};

const searchInputStyle = {
  padding: "12px",
  fontSize: "16px",
  width: "100%",
  maxWidth: "300px",
  marginBottom: "20px",
  margin: "20px auto",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.8)",
  border: "none",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginBottom: "20px",
  marginTop: "20px",
};

const noResultsStyle = {
  color: "#000",
};

const activeButtonStyle = {
  background: "linear-gradient(135deg, #ff69b4, #00bfff)",
  border: "none",
  color: "#fff",
  padding: "12px",
  cursor: "pointer",
  borderRadius: "20px",
  width: "150px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
};

const inactiveButtonStyle = {
  background: "transparent",
  border: "2px solid #ff69b4",
  padding: "12px",
  color: "#ff69b4",
  cursor: "pointer",
  borderRadius: "20px",
  width: "150px",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  border: "1px solid #ff69b4",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  padding: "30px",
  borderRadius: "20px",
  maxWidth: "600px",
  margin: "10px auto",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
};

const calendarLinkStyle = {
  marginTop: "20px",
  color: "#ff69b4",
  textDecoration: "none",
  fontSize: "18px",
  display: "block",
};
