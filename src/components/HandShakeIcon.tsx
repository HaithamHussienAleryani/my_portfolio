"use client";
import HandAnimation from "../../public/animations/hand-shake.json";
import Lottie from "lottie-react";

function HandShakeIcon() {
  return (
    <div>
      <Lottie
        animationData={HandAnimation}
        loop
        className={"size-8 animate-bounce"}
      />
    </div>
  );
}

export default HandShakeIcon;
