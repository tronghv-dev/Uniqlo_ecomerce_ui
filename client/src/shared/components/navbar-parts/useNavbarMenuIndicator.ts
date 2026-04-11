"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { defaultMenuKey } from "@/shared/components/navbar-parts/Navbar.data";

export type NavbarIndicator = {
  left: number;
  width: number;
  opacity: number;
};

export const useNavbarMenuIndicator = (disabled = false) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayMenuRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<NavbarIndicator>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const syncIndicator = useCallback((element: HTMLElement, parent: HTMLElement) => {
    const parentRect = parent.getBoundingClientRect();
    const elRect = element.getBoundingClientRect();

    setIndicator({
      left: elRect.left - parentRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }, []);

  const syncDefaultIndicator = useCallback(() => {
    const parent = menuRef.current;
    if (!parent) return;

    const defaultButton = parent.querySelector<HTMLButtonElement>(
      `button[data-menu-key="${defaultMenuKey}"]`,
    );

    if (!defaultButton) return;

    syncIndicator(defaultButton, parent);
  }, [syncIndicator]);

  const openMenu = useCallback(
    (element: HTMLElement, menuKey: string) => {
      const parent = menuRef.current;
      if (!parent) return;

      syncIndicator(element, parent);
      setActiveMenu(menuKey);
    },
    [syncIndicator],
  );

  const closeOverlay = useCallback(() => {
    setActiveMenu(null);
    window.requestAnimationFrame(syncDefaultIndicator);
  }, [syncDefaultIndicator]);

  useEffect(() => {
    if (disabled) return;

    syncDefaultIndicator();

    window.addEventListener("resize", syncDefaultIndicator);
    return () => window.removeEventListener("resize", syncDefaultIndicator);
  }, [disabled, syncDefaultIndicator]);

  useEffect(() => {
    if (!activeMenu) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMenu, closeOverlay]);

  useEffect(() => {
    if (!activeMenu) return;

    const parent = overlayMenuRef.current;
    if (!parent) return;

    const activeButton = parent.querySelector<HTMLButtonElement>(
      `button[data-menu-key="${activeMenu}"]`,
    );

    if (!activeButton) return;

    syncIndicator(activeButton, parent);
  }, [activeMenu, syncIndicator]);

  return {
    activeMenu,
    closeOverlay,
    indicator,
    menuRef,
    openMenu,
    overlayMenuRef,
    setActiveMenu,
  };
};
