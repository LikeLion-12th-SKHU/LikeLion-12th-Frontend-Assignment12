import { useState, useEffect, useRef } from "react";

export function useFadeIn(duration = 0.5, delay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = isVisible ? 1 : 0;
    }
  }, [isVisible, duration, delay]);

  const triggerFadeIn = () => {
    if (element.current) {
      // 매번 트리거 시 애니메이션 재실행
      setIsVisible(false); // 먼저 숨김 처리
      setTimeout(() => {
        setIsVisible(true); // 약간의 딜레이 후 나타나게 설정
      }, 650); // 150ms 딜레이 후 애니메이션 재실행
    }
  };

  return { ref: element, triggerFadeIn };
}
