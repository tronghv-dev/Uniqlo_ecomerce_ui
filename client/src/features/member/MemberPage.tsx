import Link from "next/link";
import { ExternalLink } from "lucide-react";

const memberSections = [
  {
    title: "Tư cách thành viên",
    items: [
      { label: "Lịch sử mua hàng", active: true },
      { label: "Phiếu giảm giá" },
      { label: "Yêu thích" },
      { label: "Đánh giá đã đăng" },
      { label: "Khảo sát dịch vụ đặt hàng online" },
    ],
  },
  {
    title: "Cài đặt hồ sơ",
    items: [
      { label: "Hồ sơ" },
      { label: "Sổ địa chỉ" },
      { label: "Thay đổi mật khẩu" },
      { label: "Thẻ của tôi" },
      { label: "Cài đặt tùy chọn" },
      { label: "Gỡ liên kết thành viên khỏi ứng dụng" },
      { label: "Hủy bỏ thành viên" },
    ],
  },
];

const orderTabs = [
  { label: "Đặt hàng trực tuyến", active: true },
  { label: "Mua hàng tại cửa hàng" },
  { label: "Lịch sử mua hàng" },
];

const MemberPage = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 pt-28 pb-20 lg:px-6">
        <div className="grid gap-14 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="space-y-10 text-black">
            {memberSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[2rem] font-normal tracking-[-0.03em]">
                  {section.title}
                </h2>
                <ul className="mt-6 space-y-4 text-[1.05rem] leading-7">
                  {section.items.map((item) => (
                    <li
                      key={item.label}
                      className={item.active ? "font-medium text-black" : "text-black/85"}
                    >
                      <Link href="/member" className="transition-opacity hover:opacity-70">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <div className="max-w-[860px] text-black">
            <h1 className="text-[clamp(2.75rem,5vw,4rem)] font-normal tracking-[-0.05em]">
              Lịch sử mua hàng
            </h1>

            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-b border-black/15 text-[1.05rem]">
              {orderTabs.map((tab) => (
                <button
                  key={tab.label}
                  type="button"
                  className={`border-b pb-4 transition-colors ${
                    tab.active
                      ? "border-black text-black"
                      : "border-transparent text-black/60 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="max-w-[820px] pt-6 text-[1.05rem] leading-8">
              <p>
                Bạn có thể hủy đơn hàng trong vòng 30 phút sau khi đặt hàng. Tuy nhiên,
                bạn không được phép thay đổi thông tin chi tiết đơn hàng.
              </p>

              <div className="mt-6 flex flex-col gap-4 text-[#0b57d0]">
                <Link
                  href="/member"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
                >
                  Về đổi / trả
                  <ExternalLink size={15} strokeWidth={1.8} />
                </Link>
                <Link href="/member" className="transition-opacity hover:opacity-75">
                  Kiểm tra đơn hàng trước khi xuất hóa đơn
                </Link>
              </div>
            </div>

            <div className="mt-7 max-w-[820px] border-t border-black/15 pt-7 text-[1.05rem] leading-8">
              <p>Chúng tôi không có đơn hàng nào cho tài khoản này.</p>
              <p className="mt-3">
                Sau khi đặt hàng, bạn có thể kiểm tra trạng thái đơn hàng và yêu cầu
                trả hàng tại đây.
              </p>
            </div>

            <Link
              href="/member"
              className="mt-10 inline-flex min-h-14 w-full items-center justify-center rounded-full border border-black px-8 text-sm tracking-[0.04em] text-black transition-colors hover:bg-black hover:text-white sm:w-auto sm:min-w-[430px]"
            >
              TRỞ LẠI TRANG THÀNH VIÊN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberPage;
