/*
import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  // useFadeIn 훅을 정의하고, 기본적으로 duration(지속 시간)과 delay(지연 시간)를 인수로 받음.
  // 기본값은 각각 1초와 0초로 설정.

  const element = useRef();
  // useRef 훅을 사용해 DOM 요소에 직접 접근할 수 있는 ref 객체 element를 생성.

  useEffect(() => {
    if (element.current) {
      // element.current가 존재할 때 (즉, 해당 DOM 요소가 존재할 때) 실행.
      const { current } = element;
      // element.current를 current라는 상수에 할당.

      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      // DOM 요소의 transition 속성에 지속 시간과 지연 시간을 반영한 트랜지션을 설정.
      // style.transition은 해당 요소의 스타일 변화가 애니메이션처럼 부드럽게 진행되도록 설정하는 것입니다.

      current.style.opacity = 1;
      // 요소의 opacity(불투명도)를 1로 설정해 서서히 보이게 함.
    }
  }, [duration, delay]);
  // duration과 delay 값이 변경될 때마다 이 effect가 다시 실행됨.

  return { ref: element, style: { opacity: 0 } };
  // 이 훅은 ref 속성에 element와 초기 opacity 값을 0으로 설정한 스타일 객체를 반환.
};
*/

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
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 650);
    }
  };

  return { ref: element, triggerFadeIn };
}
