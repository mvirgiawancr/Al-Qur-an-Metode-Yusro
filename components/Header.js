// components/Header.js

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-teal-800 text-white">
      <div className="flex items-center">
        {/* Logo */}
        <Image
          src="/logo_yusro 1.png"
          alt="Logo Metode Yusro"
          width={60}
          height={60}
          className="mr-2"
        />
        <h1 className="text-xl font-bold">MENGAJI AL-QUR'AN METODE YUSRO</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/login" className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-teal-700 transition">
          Login
        </Link>
        <Link href="/register" className="px-4 py-2 rounded-md bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition">
          Register
        </Link>
      </nav>
    </header>
  );
}