"use client";

import React from "react";

interface CardProps {
  card: { id: number; emoji: string };
  onClick: () => void;
  isFlipped: boolean;
  isMatched: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, isFlipped, isMatched }) => {
  return (
    <div
      className={`w-24 h-32 flex justify-center items-center bg-blue-500 rounded-lg shadow-md cursor-pointer transition-transform duration-500 
        ${isFlipped ? "bg-white" : ""}
        ${isMatched ? "scale-125 bg-yellow-400 shadow-2xl" : ""}
      `}
      onClick={onClick}
    >
      {isFlipped ? <span className="text-3xl">{card.emoji}</span> : "❓"}
    </div>
  );
};

export default Card;
