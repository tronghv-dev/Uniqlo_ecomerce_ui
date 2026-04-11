import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";

type NavbarLogoProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const NavbarLogo = ({ onClick }: NavbarLogoProps) => {
  return (
    <Link href="/" onClick={onClick}>
      <Image
        src="/logo.png"
        alt="uniqlo"
        width={75}
        height={35}
        className="h-14 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;
