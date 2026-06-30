"use client";
import { ThreeDMarquee } from "../components/ui/3d-marquee";
import { mr1, mr2, mr3, mr4, mr5, mr6, mr7 } from "./images";

export function ThreeDMarqueeDemo() {
  const images = [
    mr1, mr2, mr3, mr4, mr5, mr6, mr7,
    mr1, mr2, mr3, mr4, mr5, mr6, mr7,
    mr1, mr2, mr3, mr4, mr5, mr6, mr7,
    mr1, mr2, mr3, mr4, mr5, mr6, mr7,
    mr1, mr2, mr3, mr4, mr5, mr6, mr7,
    mr1, mr2, mr3, mr4, mr5, mr6, mr7,
  ];
  return (
    <div className="mx-auto my-6 max-w-7xl rounded-3xl bg-Background p-2 ring-1 ring-grayLight">
      <ThreeDMarquee images={images} />
    </div>
  );
}
