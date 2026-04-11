import type { Dispatch, RefObject, SetStateAction } from "react";

import Category from "@/features/category/Category";
import NavbarActions from "@/shared/components/navbar-parts/NavbarActions";
import NavbarLogo from "@/shared/components/navbar-parts/NavbarLogo";
import NavbarMenu from "@/shared/components/navbar-parts/NavbarMenu";
import type { NavbarIndicator } from "@/shared/components/navbar-parts/useNavbarMenuIndicator";

type NavbarOverlayProps = {
  activeMenu: string;
  closeOverlay: () => void;
  indicator: NavbarIndicator;
  onOpenMenu: (element: HTMLElement, menuKey: string) => void;
  overlayMenuRef: RefObject<HTMLDivElement | null>;
  setActiveMenu: Dispatch<SetStateAction<string | null>>;
};

const NavbarOverlay = ({
  activeMenu,
  closeOverlay,
  indicator,
  onOpenMenu,
  overlayMenuRef,
  setActiveMenu,
}: NavbarOverlayProps) => {
  return (
    <div
      className="shadow-floating fixed top-0 left-0 right-0 z-[60] h-[80vh] overflow-hidden bg-white text-gray-900"
      onMouseLeave={closeOverlay}
    >
      <div className="flex h-full flex-col">
        <div className="px-4">
          <div className="mx-auto w-full xl:max-w-6xl">
            <nav className="relative flex min-h-12 w-full items-center justify-between">
              <NavbarLogo onClick={closeOverlay} />

              <NavbarMenu
                activeMenu={activeMenu}
                indicator={indicator}
                isOverlay
                menuRef={overlayMenuRef}
                onOpenMenu={onOpenMenu}
                setActiveMenu={setActiveMenu}
              />

              <NavbarActions isOverlay onCloseOverlay={closeOverlay} />
            </nav>
          </div>
        </div>

        <div className="min-h-0 flex-1">
          <Category key={activeMenu} activeMenu={activeMenu} overlay />
        </div>
      </div>
    </div>
  );
};

export default NavbarOverlay;
