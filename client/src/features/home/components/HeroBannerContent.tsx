import type { Banner } from "@/features/home/home.types";

type HeroBannerContentProps = {
  banner: Banner;
};

const HeroBannerContent = ({ banner }: HeroBannerContentProps) => {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[23%] left-8 z-20 md:px-16 xl:px-24">
      <div className="flex max-w-[38rem] flex-col gap-2 text-white drop-shadow-[0_1.5px_1px_rgba(0,0,0,0.55)]">
        {banner.tag ? (
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] !text-white/90 md:text-[11px]">
            {banner.tag}
          </p>
        ) : null}
        <h1 className="mb-2 text-[32px] font-normal leading-[1.08] text-white">
          {banner.title}
        </h1>
        <p className="text-[18px] leading-[1.4] !text-white/95">
          {banner.subtitle}
        </p>
        <p className="mt-1 text-[18px] leading-[1.4] !text-white/95">
          {banner.description}
        </p>
      </div>
    </div>
  );
};

export default HeroBannerContent;
