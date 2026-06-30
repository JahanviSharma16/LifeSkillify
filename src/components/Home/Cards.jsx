import { CardStack } from "../ui/card-stack";
import { cn } from "../../lib/utils";
import homeData from "../../data/home.json";

export function CardStackDemo() {
  const cards = homeData.tips.map((tip) => ({
    id: tip.id,
    content: (
      <p className="text-grayDark text-sm leading-relaxed">
        {tip.text.split(tip.highlight).map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <Highlight>{tip.highlight}</Highlight>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    ),
  }));

  return (
    <div className="flex items-center justify-center w-full">
      <CardStack items={cards} />
    </div>
  );
}

export const Highlight = ({ children, className }) => {
  return (
    <span className={cn("font-semibold text-accent", className)}>
      {children}
    </span>
  );
};
