import Image from "next/image";

import type { Banner } from "@/features/home/home.types";

type VisibleSlide = {
  banner: Banner;
  position: number;
  slot: "prev" | "current" | "next";
};

type HeroBannerSlidesProps = {
  visibleSlides: VisibleSlide[];
};

const HeroBannerSlides = ({ visibleSlides }: HeroBannerSlidesProps) => {
  return (
    <>
      {visibleSlides.map(({ banner, position, slot }) => (
        <div
          key={slot}
          className="absolute inset-x-0 h-full w-full"
          style={{ top: `${position}%` }}
        >
          <Image
            src={banner.image}
            alt={banner.alt}
            fill
            draggable={false}
            className="object-cover"
            style={{ objectPosition: banner.objectPosition ?? "center center" }}
            priority={slot === "current"}
          />
        </div>
      ))}
    </>
  );
};

export default HeroBannerSlides;
