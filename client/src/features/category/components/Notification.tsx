import Link from "next/link";

import type { Notice } from "@/features/category/category.types";

type NotificationProps = {
  notices: Notice[];
};

const Notification = ({ notices }: NotificationProps) => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="mb-5 text-[22px] font-medium text-gray-900">Thông Báo</h3>
      <div className="space-y-5">
        {notices.map((notice) => (
          <Link
            key={notice.label}
            href={notice.href}
            className="block text-base leading-7 !text-[#0B63D1] hover:underline"
          >
            {notice.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notification;
