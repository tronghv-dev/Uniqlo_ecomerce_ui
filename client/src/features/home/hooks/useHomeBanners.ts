"use client";

import { useEffect, useState } from "react";

import { getHomeBanners } from "@/features/home/api/getHomeBanners";
import type { Banner } from "@/features/home/home.types";

export const useHomeBanners = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    let cancelled = false;

    const loadBanners = async () => {
      const nextBanners = await getHomeBanners();
      if (!cancelled) {
        setBanners(nextBanners);
      }
    };

    loadBanners();

    return () => {
      cancelled = true;
    };
  }, []);

  return { banners };
};
