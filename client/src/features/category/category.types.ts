export type CategoryMenuKey = "women" | "men" | "kids" | "baby";

export type CategoryProps = {
  activeMenu: string | null;
  overlay?: boolean;
};

export type CategoryItem = {
  label: string;
  href: string;
  image?: string;
  badge?: string;
  badgeClassName?: string;
  icon?: "calendar";
};

export type Notice = {
  label: string;
  href: string;
};
