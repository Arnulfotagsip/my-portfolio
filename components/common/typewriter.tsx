"use client";

import { Typewriter } from "react-simple-typewriter";

export default function MyTypewriter() {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-right">
      <Typewriter
        words={[
          "Hi! My name is Arnulfo Tagsip.",
          "I am a Creative Developer.",
          "I Love to Design.",
          "I Love to Develop."
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={120}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
}
