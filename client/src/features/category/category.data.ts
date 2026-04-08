import type { CategoryItem, CategoryMenuKey, Notice } from "./category.types";

export const subCategories: Record<CategoryMenuKey, CategoryItem[]> = {
  women: [
    { label: "ÁO KHOÁC", image: "/categories/aokhoac.jpg", href: "/women/outerwear" },
    { label: "ÁO THUN, ÁO NỈ & ÁO BRA TOP", image: "/categories/aothun.jpg", href: "/women/tops" },
    { label: "ÁO LEN & ÁO DỆT KIM", image: "/categories/aolen.jpg", href: "/women/knitwear" },
    { label: "ÁO SƠ MI & ÁO KIỂU", image: "/products/6w.png", href: "/women/shirts" },
    { label: "QUẦN", image: "/categories/quan.jpg", href: "/women/bottoms" },
    { label: "CHÂN VÁY & ĐẦM", image: "/products/4w.png", href: "/women/dresses" },
    { label: "ĐỒ MẶC TRONG & ĐỒ LÓT", image: "/products/1p.png", href: "/women/innerwear" },
    { label: "ĐỒ MẶC NHÀ", image: "/categories/do-mac-nha.jpg", href: "/women/loungewear" },
    { label: "PHỤ KIỆN", image: "/categories/phu-kien.avif", href: "/women/accessories" },
    { label: "SẢN PHẨM CHỐNG TIA UV", image: "/products/5bl.png", href: "/women/uv-protection" },
    { label: "LINEN", image: "/products/8gr.png", href: "/women/linen" },
    { label: "HÀNG MỚI VỀ", image: "/products/7p.png", href: "/women/new-arrivals" },
    {
      label: "BỘ SƯU TẬP XUÂN/HÈ 2026",
      badge: "2026",
      href: "/women/spring-summer-2026",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center border-2 border-gray-900 text-xs font-bold text-gray-900",
    },
    {
      label: "UT: Áo Thun In Họa Tiết",
      badge: "UT",
      href: "/women/ut",
      badgeClassName: "text-5xl font-black text-red-600",
    },
    {
      label: "KHUYẾN MÃI CÓ HẠN",
      badge: "LIMITED",
      href: "/women/limited",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center bg-red-600 px-2 text-[10px] font-bold tracking-wide text-white",
    },
    {
      label: "GIÁ MỚI",
      badge: "SALE",
      href: "/women/sale",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center bg-red-600 text-lg font-black text-white",
    },
    {
      label: "GIÁ ĐIỀU CHỈNH",
      badge: "NEW\nPrice",
      href: "/women/new-price",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center border border-red-500 text-[11px] font-bold leading-none whitespace-pre text-red-500",
    },
    {
      label: "HÀNG MỚI VỀ",
      badge: "NEW",
      href: "/women/latest",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center border-2 border-gray-900 text-sm font-bold text-gray-900",
    },
    { label: "SẮP MỞ BÁN", href: "/women/coming-soon", icon: "calendar" },
    { label: "EXTRA SIZE", image: "/products/8b.png", href: "/women/extra-size" },
  ],
  men: [
    { label: "ÁO KHOÁC", image: "/categories/aokhoac.jpg", href: "/men/outerwear" },
    { label: "ÁO THUN & ÁO NỈ", image: "/categories/aothun.jpg", href: "/men/tops" },
    { label: "ÁO LEN & ÁO DỆT KIM", image: "/categories/aolen.jpg", href: "/men/knitwear" },
    { label: "ÁO SƠ MI & ÁO POLO", image: "/products/6g.png", href: "/men/shirts-polo" },
    { label: "QUẦN JEAN", image: "/categories/quan.jpg", href: "/men/jeans" },
    { label: "QUẦN TÂY", image: "/products/3gr.png", href: "/men/trousers" },
    { label: "SPORT UTILITY WEAR", image: "/products/7g.png", href: "/men/sport-utility" },
    { label: "AIRism", image: "/products/1g.png", href: "/men/airism" },
    { label: "HEATTECH", image: "/products/5r.png", href: "/men/heattech" },
    { label: "ĐỒ MẶC NHÀ", image: "/categories/do-mac-nha.jpg", href: "/men/loungewear" },
    { label: "PHỤ KIỆN", image: "/categories/phu-kien.avif", href: "/men/accessories" },
    { label: "HÀNG MỚI VỀ", image: "/products/8b.png", href: "/men/new-arrivals" },
    {
      label: "BỘ SƯU TẬP XUÂN/HÈ 2026",
      badge: "2026",
      href: "/men/spring-summer-2026",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center border-2 border-gray-900 text-xs font-bold text-gray-900",
    },
    {
      label: "UT: Áo Thun In Họa Tiết",
      badge: "UT",
      href: "/men/ut",
      badgeClassName: "text-5xl font-black text-red-600",
    },
    {
      label: "KHUYẾN MÃI CÓ HẠN",
      badge: "LIMITED",
      href: "/men/limited",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center bg-red-600 px-2 text-[10px] font-bold tracking-wide text-white",
    },
    {
      label: "GIÁ MỚI",
      badge: "SALE",
      href: "/men/sale",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center bg-red-600 text-lg font-black text-white",
    },
    {
      label: "GIÁ ĐIỀU CHỈNH",
      badge: "NEW\nPrice",
      href: "/men/new-price",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center border border-red-500 text-[11px] font-bold leading-none whitespace-pre text-red-500",
    },
    {
      label: "HÀNG MỚI VỀ",
      badge: "NEW",
      href: "/men/latest",
      badgeClassName:
        "flex h-12 w-12 items-center justify-center border-2 border-gray-900 text-sm font-bold text-gray-900",
    },
    { label: "SẮP MỞ BÁN", href: "/men/coming-soon", icon: "calendar" },
    { label: "EXTRA SIZE", image: "/products/8b.png", href: "/men/extra-size" },
  ],
  kids: [
    { label: "BÉ GÁI", image: "/banners/kid1.avif", href: "/kids/girls" },
    { label: "BÉ TRAI", image: "/banners/kid2.jpg", href: "/kids/boys" },
    { label: "ÁO KHOÁC", image: "/categories/aokhoac.jpg", href: "/kids/outerwear" },
    { label: "ÁO THUN", image: "/categories/aothun.jpg", href: "/kids/t-shirts" },
    { label: "ÁO LEN", image: "/categories/aolen.jpg", href: "/kids/knitwear" },
    { label: "QUẦN", image: "/categories/quan.jpg", href: "/kids/bottoms" },
    { label: "ĐẦM", image: "/products/4p.png", href: "/kids/dresses" },
    { label: "ĐỒ NGỦ", image: "/categories/do-mac-nha.jpg", href: "/kids/sleepwear" },
    { label: "ĐỒ ĐI HỌC", image: "/products/8gr.png", href: "/kids/schoolwear" },
    { label: "ĐỒ THỂ THAO", image: "/products/7p.png", href: "/kids/sportswear" },
    { label: "PHỤ KIỆN", image: "/categories/phu-kien.avif", href: "/kids/accessories" },
    { label: "HÀNG MỚI VỀ", image: "/products/2gr.png", href: "/kids/new-arrivals" },
  ],
  baby: [
    { label: "NEWBORN", image: "/banners/kittie.jpg", href: "/baby/newborn" },
    { label: "BỘ BODYSUIT", image: "/products/1gr.png", href: "/baby/bodysuits" },
    { label: "ÁO LEN", image: "/categories/aolen.jpg", href: "/baby/knitwear" },
    { label: "ÁO KHOÁC", image: "/categories/aokhoac.jpg", href: "/baby/outerwear" },
    { label: "QUẦN", image: "/categories/quan.jpg", href: "/baby/bottoms" },
    { label: "ĐỒ NGỦ", image: "/categories/do-mac-nha.jpg", href: "/baby/sleepwear" },
    { label: "BIB & KHĂN", image: "/products/5o.png", href: "/baby/bibs" },
    { label: "TẤT & PHỤ KIỆN", image: "/categories/phu-kien.avif", href: "/baby/accessories" },
    { label: "ĐỒ RA NGOÀI", image: "/products/2g.png", href: "/baby/outfits" },
    { label: "ĐỒ MẶC TRONG", image: "/products/6w.png", href: "/baby/innerwear" },
    { label: "ĐỒ CHƠI MỀM", image: "/banners/kittie2.jpg", href: "/baby/toys" },
    { label: "HÀNG MỚI VỀ", image: "/banners/kittie3.jpg", href: "/baby/new-arrivals" },
  ],
};

export const notices: Notice[] = [
  {
    label:
      "Vui lòng đặt lại mật khẩu khi đăng nhập do hệ thống vừa được nâng cấp. Tìm hiểu thêm!",
    href: "/notice/password-reset",
  },
  {
    label:
      "Hệ thống đã được nâng cấp để mang đến trải nghiệm tốt hơn cho bạn. Tìm hiểu thêm!",
    href: "/notice/system-upgrade",
  },
  {
    label:
      "Dịch vụ Click & Collect sẽ tạm dừng từ ngày 12/03 đến 01/04 để nâng cấp hệ thống. Bấm vào đây để biết thêm chi tiết!",
    href: "/notice/click-collect",
  },
];
