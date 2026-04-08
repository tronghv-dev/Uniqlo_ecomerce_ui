"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  Globe,
  Heart,
  Menu,
  RefreshCcw,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";

import Category from "@/features/category/Category";

const menuItems = [
  { key: "women", label: "NỮ" },
  { key: "men", label: "NAM" },
  { key: "kids", label: "TRẺ EM" },
  { key: "baby", label: "EM BÉ" },
] as const;

const textShadowClass = "drop-shadow-[0_1.5px_1px_rgba(0,0,0,0.55)]";
const menuShadowClass = "drop-shadow-[0_1.5px_0_rgba(0,0,0,0.55)]";
const defaultMenuKey = "women";

const Navbar = () => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayMenuRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const isHomePage = pathname === "/";
  const isMemberPage = pathname.startsWith("/member");
  const isLightHeader = isHomePage && !activeMenu;

  const syncIndicator = (element: HTMLElement, parent: HTMLElement) => {
    const parentRect = parent.getBoundingClientRect();
    const elRect = element.getBoundingClientRect();

    setIndicator({
      left: elRect.left - parentRect.left,
      width: elRect.width,
      opacity: 1,
    });
  };

  const openMenu = (element: HTMLElement, menuKey: string) => {
    const parent = menuRef.current;
    if (!parent) return;

    syncIndicator(element, parent);
    setActiveMenu(menuKey);
  };

  const syncDefaultIndicator = () => {
    const parent = menuRef.current;
    if (!parent) return;

    const defaultButton = parent.querySelector<HTMLButtonElement>(
      `button[data-menu-key="${defaultMenuKey}"]`,
    );

    if (!defaultButton) return;

    syncIndicator(defaultButton, parent);
  };

  const closeOverlay = () => {
    setActiveMenu(null);
    window.requestAnimationFrame(syncDefaultIndicator);
  };

  useEffect(() => {
    if (isMemberPage) return;

    syncDefaultIndicator();

    window.addEventListener("resize", syncDefaultIndicator);
    return () => window.removeEventListener("resize", syncDefaultIndicator);
  }, [isMemberPage]);

  useEffect(() => {
    if (!activeMenu) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMenu]);

  useEffect(() => {
    if (!activeMenu) return;

    const parent = overlayMenuRef.current;
    if (!parent) return;

    const activeButton = parent.querySelector<HTMLButtonElement>(
      `button[data-menu-key="${activeMenu}"]`,
    );

    if (!activeButton) return;

    syncIndicator(activeButton, parent);
  }, [activeMenu]);

  const renderActionGroup = (isOverlay: boolean) => (
    <div
      className={`flex items-center gap-6 ${
        isOverlay
          ? "text-gray-900"
          : isLightHeader
            ? `text-white ${textShadowClass}`
            : "text-gray-950"
      }`}
    >
      {isOverlay ? (
        <>
          <button
            type="button"
            aria-label="Ngôn ngữ"
            className="flex flex-col items-center gap-0.5 leading-none text-gray-900"
          >
            <Globe size={14} strokeWidth={1.7} />
            <span className="text-[10px] font-medium uppercase tracking-[0.04em]">
              VN-VI
            </span>
          </button>
          <button type="button" aria-label="Đóng menu" onClick={closeOverlay}>
            <X size={20} strokeWidth={1.6} />
          </button>
        </>
      ) : (
        <>
          <button aria-label="Tìm kiếm">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Yêu thích">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <Link href="/member" aria-label="Tài khoản">
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link href="/cart" className="relative" aria-label="Giỏ hàng">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              2
            </span>
          </Link>
          <button aria-label="Menu">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </>
      )}
    </div>
  );

  const renderMenu = (isOverlay: boolean) => {
    const parentRef = isOverlay ? overlayMenuRef : menuRef;

    return (
      <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div ref={parentRef} className="relative flex items-center gap-20">
          {menuItems.map((item) => (
            <button
              key={item.key}
              data-menu-key={item.key}
              type="button"
              className={`py-3 tracking-wide transition-colors ${
                isOverlay
                  ? activeMenu === item.key
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                  : isLightHeader
                    ? `text-white ${menuShadowClass}`
                    : "text-gray-900"
              }`}
              onMouseEnter={(event) =>
                isOverlay
                  ? setActiveMenu(item.key)
                  : openMenu(event.currentTarget, item.key)
              }
              onClick={(event) =>
                isOverlay
                  ? setActiveMenu(item.key)
                  : openMenu(event.currentTarget, item.key)
              }
              aria-expanded={activeMenu === item.key}
            >
              {item.label}
            </button>
          ))}

          <span
            className={`absolute bottom-2 h-px transition-all duration-300 ease-in-out ${
              isOverlay
                ? "bg-gray-900"
                : isLightHeader
                  ? `bg-white ${textShadowClass}`
                  : "bg-gray-900"
            }`}
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
        </div>
      </div>
    );
  };

  if (isMemberPage) {
    return (
      <header className="border-b border-black/10 bg-white">
        <nav className="mx-auto flex h-[62px] w-full max-w-[1180px] items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="uniqlo"
              width={75}
              height={35}
              className="h-14 w-auto"
            />
          </Link>

          <div className="flex items-center gap-8 text-black">
            <Link href="/member" aria-label="Tài khoản">
              <User size={18} strokeWidth={1.6} />
            </Link>
            <button
              type="button"
              aria-label="Làm mới"
              className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#34ddcf] text-white"
            >
              <RefreshCcw size={14} strokeWidth={2} />
            </button>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <>
      <header
        className={
          isHomePage && !activeMenu ? "" : "border-b border-black/10 bg-white"
        }
      >
        <nav className="relative flex min-h-12 w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="uniqlo"
              width={75}
              height={35}
              className="h-14 w-auto"
            />
          </Link>

          {!activeMenu ? renderMenu(false) : null}

          {renderActionGroup(false)}
        </nav>
      </header>

      {activeMenu ? (
        <div
          className="fixed top-0 left-0 right-0 z-[60] h-[80vh] overflow-hidden bg-white text-gray-900 shadow-2xl"
          onMouseLeave={closeOverlay}
        >
          <div className="flex h-full flex-col">
            <div className="px-4">
              <div className="mx-auto w-full xl:max-w-6xl">
                <nav className="relative flex min-h-12 w-full items-center justify-between">
                  <Link href="/" onClick={closeOverlay}>
                    <Image
                      src="/logo.png"
                      alt="uniqlo"
                      width={75}
                      height={35}
                      className="h-14 w-auto"
                    />
                  </Link>

                  {renderMenu(true)}

                  {renderActionGroup(true)}
                </nav>
              </div>
            </div>

            <div className="min-h-0 flex-1">
              <Category key={activeMenu} activeMenu={activeMenu} overlay />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
