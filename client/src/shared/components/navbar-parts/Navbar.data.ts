import {
  Heart,
  type LucideIcon,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export const menuItems = [
  { key: "women", label: "NỮ" },
  { key: "men", label: "NAM" },
  { key: "kids", label: "TRẺ EM" },
  { key: "baby", label: "EM BÉ" },
] as const;

export type MenuItemKey = (typeof menuItems)[number]["key"];

export type NavActionItem = {
  key: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  badge?: string;
};

export const navActionItems: NavActionItem[] = [
  { key: "search", label: "Tìm kiếm", icon: Search },
  { key: "wishlist", label: "Yêu thích", icon: Heart },
  { key: "account", label: "Tài khoản", icon: User, href: "/member" },
  {
    key: "cart",
    label: "Giỏ hàng",
    icon: ShoppingCart,
    href: "/cart",
    badge: "2",
  },
  { key: "menu", label: "Menu", icon: Menu },
];

export const defaultMenuKey: MenuItemKey = "women";
export const navActionIconSize = 20;
export const navActionIconStrokeWidth = 1.5;
