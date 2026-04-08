import { subCategories } from "@/features/category/category.data";
import type { CategoryItem, CategoryMenuKey } from "@/features/category/category.types";

export const getCategoryItems = async (
  menuKey: CategoryMenuKey,
): Promise<CategoryItem[]> => {
  return subCategories[menuKey] ?? [];
};
