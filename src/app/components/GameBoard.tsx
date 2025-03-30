"use client";

import React, { useState } from "react";
import Card from "./Card";

const initialCards = [
  { id: 1, emoji: "🐶" },
  { id: 2, emoji: "🐶" },
  { id: 3, emoji: "🐱" },
  { id: 4, emoji: "🐱" },
  { id: 5, emoji: "🦊" },
  { id: 6, emoji: "🦊" },
  { id: 7, emoji: "🐼" },
  { id: 8, emoji: "🐼" },
];

const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const GameBoard: React.FC = () => {
  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || gameOver) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, cards[first].emoji]);
      }
      setTimeout(() => {
        setFlipped([]);
        if (matched.length + 1 === initialCards.length / 2) {
          setGameOver(true); // 🎉 Set game over when all matches found
        }
      }, 1000);
    }
  };

  const restartGame = () => {
    setCards(shuffleArray([...initialCards]));
    setFlipped([]);
    setMatched([]);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-4 p-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onClick={() => handleCardClick(index)}
            isFlipped={flipped.includes(index) || matched.includes(card.emoji)}
            isMatched={matched.includes(card.emoji)}
          />
        ))}
      </div>

      {gameOver && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-green-500 animate-bounce">
            🎉 You Won the Game! 🎉
          </h2>
          <button
            onClick={restartGame}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
            🔄 Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
