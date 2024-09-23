import React, { useState, useEffect } from "react";

// content를 받아서 애니메이션 효과 적용
function FadeIn({ content }) {
  const [isVisible, setIsVisible] = useState(false); // content 상태를 관리할 변수

  // content가 변경될 때마다 실행되는 효과
  useEffect(() => {
    setIsVisible(false); // 처음에는 보이지 않도록 설정
    const timeout = setTimeout(() => setIsVisible(true), 10); // 약간의 지연 후 가시성 설정
    return () => clearTimeout(timeout);
  }, [content]); // content가 변경될 때마다 실행

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s",
      }}
    >
      {content}
    </div>
  );
}

export default FadeIn;
