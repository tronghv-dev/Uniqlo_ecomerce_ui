import { notices } from "@/features/category/category.data";
import type { Notice } from "@/features/category/category.types";

export const getCategoryNotices = async (): Promise<Notice[]> => {
  return notices;
};
