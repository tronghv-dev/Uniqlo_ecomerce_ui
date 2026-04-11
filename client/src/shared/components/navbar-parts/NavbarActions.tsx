import Link from "next/link";
import { Globe, X } from "lucide-react";

import {
  navActionIconSize,
  navActionIconStrokeWidth,
  navActionItems,
  type NavActionItem,
} from "@/shared/components/navbar-parts/Navbar.data";

type NavbarActionsProps = {
  isLightHeader?: boolean;
  isOverlay?: boolean;
  onCloseOverlay?: () => void;
};

const renderNavActionItem = ({
  key,
  label,
  icon: Icon,
  href,
  badge,
}: NavActionItem) => {
  const content = (
    <>
      <Icon size={navActionIconSize} strokeWidth={navActionIconStrokeWidth} />
      {badge ? (
        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
          {badge}
        </span>
      ) : null}
    </>
  );

  return href ? (
    <Link key={key} href={href} className="relative" aria-label={label}>
      {content}
    </Link>
  ) : (
    <button key={key} type="button" className="relative" aria-label={label}>
      {content}
    </button>
  );
};

const NavbarActions = ({
  isLightHeader = false,
  isOverlay = false,
  onCloseOverlay,
}: NavbarActionsProps) => {
  const actionClassName = isOverlay
    ? "text-gray-900"
    : isLightHeader
      ? "text-white drop-shadow-ui-on-media"
      : "text-gray-950";

  return (
    <div className={`flex items-center gap-6 ${actionClassName}`}>
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
          <button type="button" aria-label="Đóng menu" onClick={onCloseOverlay}>
            <X size={20} strokeWidth={1.6} />
          </button>
        </>
      ) : (
        <>{navActionItems.map(renderNavActionItem)}</>
      )}
    </div>
  );
};

export default NavbarActions;
