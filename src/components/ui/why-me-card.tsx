import { AudioWaveform, Sparkle } from "lucide-react";
import React from "react";

function WhyMeCard() {
  return (
    <div className="bg-primary rounded-lg relative overflow-hidden p-8">
      <AudioWaveform className=" size-50 absolute opacity-10 top-10 left-1/2 transform -translate-x-1/2 " />
      <h3 className="text-6xl font-light">87+</h3>
      <div className="text-end">
        <p>Projects</p>
        <span className="mt-4">description s</span>
      </div>
    </div>
  );
}

export default WhyMeCard;
