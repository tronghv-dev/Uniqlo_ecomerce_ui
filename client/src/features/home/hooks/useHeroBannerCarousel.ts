"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type React from "react";

type Direction = "next" | "prev";

type UseHeroBannerCarouselOptions = {
  slideCount: number;
  transitionMs: number;
  transitionEasing: string;
  swipeThresholdRatio?: number;
};

export const getLoopedIndex = (index: number, length: number) =>
  ((index % length) + length) % length;

export const useHeroBannerCarousel = ({
  slideCount,
  transitionMs,
  transitionEasing,
  swipeThresholdRatio = 0.14,
}: UseHeroBannerCarouselOptions) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [trackShift, setTrackShift] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingDirection, setPendingDirection] = useState<Direction | null>(
    null,
  );

  const wheelLockedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayIndex =
    pendingDirection === "next"
      ? getLoopedIndex(activeIndex + 1, slideCount)
      : pendingDirection === "prev"
        ? getLoopedIndex(activeIndex - 1, slideCount)
        : activeIndex;

  const sliderStyle = useMemo(
    () => ({
      transform: `translateY(calc(${trackShift * 100}% + ${dragOffset}px))`,
      willChange: "transform" as const,
      transition:
        isDragging || !isTransitioning
          ? "none"
          : `transform ${transitionMs}ms ${transitionEasing}`,
    }),
    [dragOffset, isDragging, isTransitioning, trackShift, transitionEasing, transitionMs],
  );

  const animateToDirection = useCallback(
    (direction: Direction) => {
      if (isTransitioning) return;

      setPendingDirection(direction);
      setIsTransitioning(true);
      setTrackShift(direction === "next" ? -1 : 1);
      setDragOffset(0);
    },
    [isTransitioning],
  );

  const animateBackToCenter = useCallback(() => {
    if (isTransitioning || dragOffset === 0) return;

    setPendingDirection(null);
    setIsTransitioning(true);
    setTrackShift(0);
    setDragOffset(0);
  }, [dragOffset, isTransitioning]);

  const goNext = useCallback(() => {
    animateToDirection("next");
  }, [animateToDirection]);

  const goPrev = useCallback(() => {
    animateToDirection("prev");
  }, [animateToDirection]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isTransitioning) return;

      setIsDragging(true);
      setStartY(e.clientY);
      setDragOffset(0);
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [isTransitioning],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging || startY === null) return;
      setDragOffset(e.clientY - startY);
    },
    [isDragging, startY],
  );

  const handlePointerEnd = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (startY === null) return;

      const deltaY = e.clientY - startY;
      const threshold =
        (containerRef.current?.clientHeight ?? window.innerHeight) *
        swipeThresholdRatio;

      setIsDragging(false);
      setStartY(null);

      if (deltaY <= -threshold) {
        goNext();
        return;
      }

      if (deltaY >= threshold) {
        goPrev();
        return;
      }

      animateBackToCenter();
    },
    [animateBackToCenter, goNext, goPrev, startY, swipeThresholdRatio],
  );

  const handlePointerCancel = useCallback(() => {
    setIsDragging(false);
    setStartY(null);
    animateBackToCenter();
  }, [animateBackToCenter]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) return;

      if (pendingDirection === "next") {
        setActiveIndex((prev) => getLoopedIndex(prev + 1, slideCount));
      } else if (pendingDirection === "prev") {
        setActiveIndex((prev) => getLoopedIndex(prev - 1, slideCount));
      }

      setPendingDirection(null);
      setIsTransitioning(false);
      setTrackShift(0);
      setDragOffset(0);
    },
    [pendingDirection, slideCount],
  );

  const handleNativeDragStart = useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault();
    },
    [],
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (wheelLockedRef.current || isTransitioning || isDragging) return;
      if (Math.abs(e.deltaY) < 8) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        goNext();
      } else {
        goPrev();
      }

      wheelLockedRef.current = true;
      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, transitionMs);
    },
    [goNext, goPrev, isDragging, isTransitioning, transitionMs],
  );

  return {
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
  };
};
