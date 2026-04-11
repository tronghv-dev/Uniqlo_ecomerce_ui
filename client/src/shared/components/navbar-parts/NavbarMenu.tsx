import type { Dispatch, RefObject, SetStateAction } from "react";

import { menuItems } from "@/shared/components/navbar-parts/Navbar.data";
import type { NavbarIndicator } from "@/shared/components/navbar-parts/useNavbarMenuIndicator";

type NavbarMenuProps = {
  activeMenu: string | null;
  indicator: NavbarIndicator;
  isLightHeader?: boolean;
  isOverlay?: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  onOpenMenu: (element: HTMLElement, menuKey: string) => void;
  setActiveMenu: Dispatch<SetStateAction<string | null>>;
};

const NavbarMenu = ({
  activeMenu,
  indicator,
  isLightHeader = false,
  isOverlay = false,
  menuRef,
  onOpenMenu,
  setActiveMenu,
}: NavbarMenuProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
      <div ref={menuRef} className="relative flex items-center gap-20">
        {menuItems.map((item) => (
          <button
            key={item.key}
            data-menu-key={item.key}
            type="button"
            className={`py-3 text-lg tracking-wide transition-colors ${
              isOverlay
                ? activeMenu === item.key
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
                : isLightHeader
                  ? "text-white drop-shadow-ui-on-media"
                  : "text-gray-900"
            }`}
            onMouseEnter={(event) =>
              isOverlay
                ? setActiveMenu(item.key)
                : onOpenMenu(event.currentTarget, item.key)
            }
            onClick={(event) =>
              isOverlay
                ? setActiveMenu(item.key)
                : onOpenMenu(event.currentTarget, item.key)
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
                ? "bg-white drop-shadow-text-on-media"
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

export default NavbarMenu;
