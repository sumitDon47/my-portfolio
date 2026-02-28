// src/components/TypingEffect.jsx
import { useState, useEffect } from "react";

export default function TypingEffect({ words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span>
      {text}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--purple-light)",
          marginLeft: "2px",
          animation: "blink 1s step-end infinite",
          verticalAlign: "text-bottom",
        }}
      />
    </span>
  );
}
