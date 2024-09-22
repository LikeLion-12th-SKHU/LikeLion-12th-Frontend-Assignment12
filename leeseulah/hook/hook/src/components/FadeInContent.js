import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";

const FadeInContent = ({ description }) => {
  const fadeInProps = useFadeIn(1, 0.5); // 1초 지속, 0.5초 지연

  return (
    <div {...fadeInProps}>
      <p>{description}</p>
    </div>
  );
};

export default FadeInContent;
