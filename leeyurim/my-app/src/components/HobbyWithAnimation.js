import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";

const HobbyWithAnimation = ({ hobby }) => {
  const fadeInEffect = useFadeIn(2); // 1초 동안 서서히 나타나는 애니메이션 적용

  return (
    <div {...fadeInEffect}>
      <h2>{hobby.title}</h2>
      <p>{hobby.content}</p>
    </div>
  );
};

export default HobbyWithAnimation;
