const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-[85px] flex-shrink-0 flex items-center justify-between px-4 sm:px-6">
      <div>
        <a
          href="#"
          className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <ChevronLeft size={16} />
          Kembali ke Dashboard
        </a>
        <h1 className="text-xl font-bold text-gray-800 mt-1">
          Modul 1: Huruf Hijaiyah Terputus
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-lg">
          B
        </div>
      </div>
    </header>
  );
};
