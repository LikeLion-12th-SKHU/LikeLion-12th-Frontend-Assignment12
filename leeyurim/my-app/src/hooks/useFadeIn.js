import { useRef, useEffect } from "react";

export const useFadeIn = (duration = 1) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out`;
      current.style.opacity = 1;
    }
  }, [duration]);

  return { ref: element, style: { opacity: 0 } };
};
