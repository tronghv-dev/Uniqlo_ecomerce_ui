import type { Banner } from "@/features/home/home.types";

type HeroBannerIndicatorsProps = {
  banners: Banner[];
  activeIndex: number;
};

const HeroBannerIndicators = ({
  banners,
  activeIndex,
}: HeroBannerIndicatorsProps) => {
  return (
    <div className="pointer-events-none absolute top-1/2 right-3 z-30 flex -translate-y-1/2 flex-col items-center gap-1.5 md:right-6">
      {banners.map((banner, index) => {
        const isActive = index === activeIndex;

        return (
          <span
            key={banner.image}
            className={`rounded-full bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.12)] transition-all duration-500 ${
              isActive ? "h-6 w-1" : "h-1 w-1"
            }`}
          />
        );
      })}
    </div>
  );
};

export default HeroBannerIndicators;
