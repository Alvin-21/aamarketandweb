import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Your Vision", "Our Design", "Digital Success"];

  return (
    <div className="flex justify-center items-center">
      <div className="text-2xl sm:text-3xl md:text-4xl mx-auto font-semibold">
        <FlipWords words={words} />
      </div>
    </div>
  );
}