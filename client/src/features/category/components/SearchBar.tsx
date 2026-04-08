import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 rounded-full border border-gray-300 px-5 py-3 text-gray-400">
        <Search size={18} strokeWidth={1.75} className="text-gray-400" />
        <span className="text-base font-normal text-gray-500">
          Bạn đang tìm sản phẩm gì?
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
