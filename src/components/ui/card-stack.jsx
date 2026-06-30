"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-32 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-surface p-8 rounded-2xl shadow-elevated border border-grayLight flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal">{card.content}</div>
        </motion.div>
      ))}
    </div>
  );
};
