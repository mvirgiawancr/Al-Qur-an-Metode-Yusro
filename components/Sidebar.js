// components/Sidebar.js
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Sidebar() {
  const pathname = usePathname(); // Hook untuk mendapatkan path URL saat ini

  return (
    <aside className="bg-white text-gray-700 w-64 p-6 flex flex-col justify-between h-screen fixed top-0 left-0 shadow-md">
      <div>
        {/* Logo dan Nama Aplikasi */}
        <div className="flex items-center mb-10">
          <Image
            src="/logo_yusro 1.png" // Pastikan jalur ini benar
            alt="Logo Metode Yusro"
            width={32} // Sesuaikan ukuran
            height={32} // Sesuaikan ukuran
            className="mr-3"
          />
          <h2 className="text-lg font-bold">
            MENGAJI AL-QUR'AN
            <br />
            METODE YUSRO
          </h2>
        </div>
        {/* Navigasi */}
        <nav className="space-y-2">
          {" "}
          {/* Mengurangi space-y untuk kepadatan */}
          <Link
            href="/dashboard"
            className={`flex items-center p-3 rounded-md ${
              pathname === "/dashboard"
                ? "bg-green-100 text-teal-700 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="mr-3">
              {/* Icon Dashboard - Menggunakan 'squares-2x2' dari Heroicons */}
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75A2.25 2.25 0 0115.75 13.5H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z"
                />
              </svg>
            </div>
            Dashboard
          </Link>
          <Link
            href="/modul"
            className={`flex items-center p-3 rounded-md ${
              pathname === "/modul"
                ? "bg-green-100 text-teal-700 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="mr-3">
              {/* Icon Modul - Diperbarui menggunakan 'book-open' solid dari Heroicons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
            </div>
            Modul
          </Link>
          <Link
            href="/profil"
            className={`flex items-center p-3 rounded-md ${
              pathname === "/profil"
                ? "bg-green-100 text-teal-700 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="mr-3">
              {/* Icon Profil - Diperbarui menggunakan 'user' solid dari Heroicons */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            Profil
          </Link>
        </nav>
      </div>
      {/* Tombol Keluar */}
      <Link
        href="/keluar"
        className="flex items-center p-3 rounded-md hover:bg-gray-100"
      >
        <div className="mr-3">
          {/* Icon Keluar */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 1a9 9 0 019 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 019-9zm-1 9a1 1 0 00-1-1H5a1 1 0 000 2h3a1 1 0 001-1zm5 0a1 1 0 00-1-1h-3a1 1 0 000 2h3a1 1 0 001-1z"></path>
          </svg>
        </div>
        Keluar
      </Link>
    </aside>
  );
}
