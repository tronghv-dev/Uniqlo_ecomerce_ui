import type { Banner } from "@/features/home/home.types";

type HeroBannerContentProps = {
  banner: Banner;
};

const HeroBannerContent = ({ banner }: HeroBannerContentProps) => {
  return (
    <div className="absolute inset-x-0 bottom-[23%] left-8 z-20 md:px-16 xl:px-24">
      <div className="drop-shadow-text-on-media flex max-w-2xl flex-col gap-2 text-white">
        <h1 className="mb-2 text-3xl font-normal leading-[1.08] text-white">
          {banner.title}
        </h1>
        <p className="text-lg leading-[1.4] !text-white/95">
          {banner.subtitle}
        </p>
        <p className="mt-1 text-lg leading-[1.4] !text-white/95">
          {banner.description}
        </p>
      </div>
    </div>
  );
};

export default HeroBannerContent;
