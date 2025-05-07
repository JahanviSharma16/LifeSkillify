"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "../../lib/utils";
export function CardStackDemo() {
  return (
    <div className="flex items-center justify-center  w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    <span
      className={cn(
        "font-bold darkshade/[0.2] text-primary px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    content: (
      <p>
        Consistency beats intensity. <Highlight>Build small habits</Highlight> and stick to them — that's how real growth happens over time.
      </p>
    ),
  },
  {
    id: 1,
    content: (
      <p>
        Communication isn’t just talking, it’s <Highlight>listening actively</Highlight>. Be present, and watch your relationships thrive.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p>
        Financial health starts with awareness. Track your spending and <Highlight>pay yourself first</Highlight> every month.
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p>
        Mental clarity comes from routine. <Highlight>Start your day intentionally</Highlight> with even 5 minutes of quiet or reflection.
      </p>
    ),
  },
  {
    id: 4,
    content: (
      <p>
        When you say “yes” to everything, you say “no” to your priorities. <Highlight>Learn to set boundaries</Highlight> without guilt.
      </p>
    ),
  },
];