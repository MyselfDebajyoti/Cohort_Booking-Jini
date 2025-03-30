"use client";

import { useState, useEffect } from "react";

const TypewriterSequence = ({
  words = ["# LinkedIn", "# Instagram", "# Facebook"],
  className = "text-black font-semibold text-lg py-1",
  typeSpeed = 100,
  deleteSpeed = 30,
  delayBeforeDelete = 1000,
  delayBeforeNextWord = 300,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    // Get the current word we're working with
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // If we're deleting
      if (displayText.length > 0) {
        // Continue deleting if there are characters left
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        // When fully deleted, prepare to type the next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        timer = setTimeout(() => {}, delayBeforeNextWord);
      }
    } else {
      // If we're typing
      if (displayText.length < currentWord.length) {
        // Continue typing if we haven't finished the word
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord[displayText.length]);
        }, typeSpeed);
      } else {
        // When fully typed, prepare to delete after delay
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBeforeDelete,
    delayBeforeNextWord,
  ]);

  return (
    <p className={`${className} relative`}>
      {displayText}
      <span className="inline-block w-[2.5px] h-5 bg-black ml-0.5 animate-pulse"></span>
    </p>
  );
};

export default TypewriterSequence;
