"use client";

import { usePathname } from "next/navigation";

import NavbarActions from "@/shared/components/navbar-parts/NavbarActions";
import NavbarLogo from "@/shared/components/navbar-parts/NavbarLogo";
import NavbarMenu from "@/shared/components/navbar-parts/NavbarMenu";
import NavbarOverlay from "@/shared/components/navbar-parts/NavbarOverlay";
import { useNavbarMenuIndicator } from "@/shared/components/navbar-parts/useNavbarMenuIndicator";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const {
    activeMenu,
    closeOverlay,
    indicator,
    menuRef,
    openMenu,
    overlayMenuRef,
    setActiveMenu,
  } = useNavbarMenuIndicator();

  const isLightHeader = isHomePage && !activeMenu;

  return (
    <>
      <header
        className={
          isHomePage && !activeMenu ? "" : "border-b border-black/10 bg-white"
        }
      >
        <nav className="relative flex min-h-12 w-full items-center justify-between">
          <NavbarLogo />

          {!activeMenu ? (
            <NavbarMenu
              activeMenu={activeMenu}
              indicator={indicator}
              isLightHeader={isLightHeader}
              menuRef={menuRef}
              onOpenMenu={openMenu}
              setActiveMenu={setActiveMenu}
            />
          ) : null}

          <NavbarActions isLightHeader={isLightHeader} />
        </nav>
      </header>

      {activeMenu ? (
        <NavbarOverlay
          activeMenu={activeMenu}
          closeOverlay={closeOverlay}
          indicator={indicator}
          onOpenMenu={openMenu}
          overlayMenuRef={overlayMenuRef}
          setActiveMenu={setActiveMenu}
        />
      ) : null}
    </>
  );
};

export default Navbar;
