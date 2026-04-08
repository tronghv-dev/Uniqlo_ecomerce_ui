"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Notification from "@/features/category/components/Notification";
import SearchBar from "@/features/category/components/SearchBar";
import { useCategoryContent } from "@/features/category/hooks/useCategoryContent";
import type {
  CategoryMenuKey,
  CategoryProps,
} from "@/features/category/category.types";

const Category = ({ activeMenu, overlay = false }: CategoryProps) => {
  if (!activeMenu) {
    return null;
  }
  const { items, notices } = useCategoryContent(activeMenu as CategoryMenuKey);
  const columnCount = 4;
  const itemsPerColumn = Math.ceil(items.length / columnCount);
  const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
    items.slice(
      columnIndex * itemsPerColumn,
      (columnIndex + 1) * itemsPerColumn,
    ),
  );

  const content = (
    <>
      <div className="mx-auto w-full max-w-[976px] px-8 pt-8">
        <SearchBar />
      </div>
      <div
        className={
          overlay
            ? "mt-6 min-h-0 flex-1 overflow-y-auto"
            : "mt-6 max-h-[calc(80vh-7rem)] overflow-y-auto"
        }
      >
        <div className="mx-auto w-full max-w-[976px] px-8 pb-8 pr-10">
          <div className="animate-category-panel">
            <div className="grid grid-cols-4">
              {columns.map((columnItems, columnIndex) => (
                <div
                  key={`${activeMenu}-column-${columnIndex}`}
                  className="flex flex-col gap-2"
                >
                  {columnItems.map((item, itemIndex) => {
                    const absoluteIndex =
                      columnIndex * itemsPerColumn + itemIndex;

                    return (
                      <Link
                        key={`${activeMenu}-${item.href}-${absoluteIndex}`}
                        href={item.href}
                        className="group flex min-h-[72px] items-center gap-4"
                      >
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                          {item.image ? (
                            <div className="relative h-16 w-16">
                              <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          ) : item.icon === "calendar" ? (
                            <CalendarDays
                              size={34}
                              strokeWidth={1.8}
                              className="text-gray-900"
                            />
                          ) : (
                            <div className={item.badgeClassName}>
                              {item.badge}
                            </div>
                          )}
                        </div>
                        <span className="text-[14px] font-normal uppercase leading-6 tracking-[0.01em] text-gray-900">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <Notification notices={notices} />
        </div>
      </div>
    </>
  );

  if (overlay) {
    return (
      <div className="flex h-full min-h-0 flex-col text-gray-900">
        {content}
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 mt-2 h-auto max-h-[80vh] w-screen -translate-x-1/2 overflow-hidden border border-white/50 bg-white/95 text-gray-900 shadow-2xl backdrop-blur-xl">
      {content}
    </div>
  );
};

export default Category;
