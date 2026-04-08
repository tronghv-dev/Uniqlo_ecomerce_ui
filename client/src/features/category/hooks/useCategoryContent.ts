"use client";

import { useEffect, useState } from "react";

import { getCategoryItems } from "@/features/category/api/getCategoryItems";
import { getCategoryNotices } from "@/features/category/api/getCategoryNotices";
import type {
  CategoryItem,
  CategoryMenuKey,
  Notice,
} from "@/features/category/category.types";

type UseCategoryContentReturn = {
  items: CategoryItem[];
  notices: Notice[];
};

export const useCategoryContent = (
  activeMenu: string | null,
): UseCategoryContentReturn => {
  const [items, setItems] = useState<CategoryItem[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    let cancelled = false;

    const loadNotices = async () => {
      const nextNotices = await getCategoryNotices();
      if (!cancelled) {
        setNotices(nextNotices);
      }
    };

    loadNotices();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (!activeMenu) {
      setItems([]);
      return () => {
        cancelled = true;
      };
    }

    const loadItems = async () => {
      const nextItems = await getCategoryItems(activeMenu as CategoryMenuKey);
      if (!cancelled) {
        setItems(nextItems);
      }
    };

    loadItems();

    return () => {
      cancelled = true;
    };
  }, [activeMenu]);

  return { items, notices };
};
