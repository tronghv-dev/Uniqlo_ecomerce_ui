import { homeBanners } from "@/features/home/home.data";
import type { Banner } from "@/features/home/home.types";

export const getHomeBanners = async (): Promise<Banner[]> => {
  return homeBanners;
};
