"use client";

import { useMemo } from "react";

import HeroBannerContent from "@/features/home/components/HeroBannerContent";
import HeroBannerIndicators from "@/features/home/components/HeroBannerIndicators";
import HeroBannerSlides from "@/features/home/components/HeroBannerSlides";
import { useHeroBannerCarousel, getLoopedIndex } from "@/features/home/hooks/useHeroBannerCarousel";
import { useHomeBanners } from "@/features/home/hooks/useHomeBanners";

const SLIDE_TRANSITION_MS = 1000;
const SLIDE_EASING = "cubic-bezier(0.22, 0.61, 0.36, 1)";

const HeroBanner = () => {
  const { banners } = useHomeBanners();
  const slideCount = banners.length;

  const {
    activeIndex,
    displayIndex,
    containerRef,
    sliderStyle,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
    handlePointerCancel,
    handleTransitionEnd,
    handleNativeDragStart,
    handleWheel,
  } = useHeroBannerCarousel({
    slideCount,
    transitionMs: SLIDE_TRANSITION_MS,
    transitionEasing: SLIDE_EASING,
  });

  const activeBanner = banners[displayIndex];

  const visibleSlides = useMemo(() => {
    if (slideCount === 0) {
      return [];
    }

    return [
      {
        banner: banners[getLoopedIndex(activeIndex - 1, slideCount)],
        position: -100,
        slot: "prev" as const,
      },
      {
        banner: banners[activeIndex],
        position: 0,
        slot: "current" as const,
      },
      {
        banner: banners[getLoopedIndex(activeIndex + 1, slideCount)],
        position: 100,
        slot: "next" as const,
      },
    ];
  }, [activeIndex, banners, slideCount]);

  if (slideCount === 0 || !activeBanner) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen min-h-screen w-full cursor-grab overflow-hidden select-none touch-none active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerCancel}
      onDragStart={handleNativeDragStart}
      onWheel={handleWheel}
    >
      <div
        className="absolute inset-0"
        style={sliderStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        <HeroBannerSlides visibleSlides={visibleSlides} />
      </div>

      <div className="media-banner_shadow pointer-events-none absolute top-0 left-0 right-0 z-10 h-32 md:h-44" />

      <HeroBannerContent banner={activeBanner} />
      <HeroBannerIndicators banners={banners} activeIndex={displayIndex} />
    </div>
  );
};

export default HeroBanner;
