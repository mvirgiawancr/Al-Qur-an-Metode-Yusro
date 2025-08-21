// components/Sidebar.js
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname

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
                        width={80} // Sesuaikan ukuran
                        height={80} // Sesuaikan ukuran
                        className="mr-3"
                    />
                    <h2 className="text-lg font-bold">MENGAJI AL-QUR'AN<br />METODE YUSRO</h2>
                </div>
                {/* Navigasi */}
                <nav className="space-y-2"> {/* Mengurangi space-y untuk kepadatan */}
                    <Link
                        href="/dashboard"
                        className={`flex items-center p-3 rounded-md ${pathname === '/dashboard' ? 'bg-green-100 text-teal-700 font-semibold' : 'hover:bg-gray-100'}`}
                    >
                        <div className="mr-3">
                            {/* Icon Dashboard */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 3a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2 5a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm-2 4a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                        Dashboard
                    </Link>
                    <Link
                        href="/modul"
                        className={`flex items-center p-3 rounded-md ${pathname === '/modul' ? 'bg-green-100 text-teal-700 font-semibold' : 'hover:bg-gray-100'}`}
                    >
                        <div className="mr-3">
                            {/* Icon Modul */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5zm2 2h8a1 1 0 010 2H6a1 1 0 010-2zm0 4h5a1 1 0 010 2H6a1 1 0 010-2z"></path></svg>
                        </div>
                        Modul
                    </Link>
                    <Link
                        href="/profil"
                        className={`flex items-center p-3 rounded-md ${pathname === '/profil' ? 'bg-green-100 text-teal-700 font-semibold' : 'hover:bg-gray-100'}`}
                    >
                        <div className="mr-3">
                            {/* Icon Profil */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zM2 17a8 8 0 1116 0H2z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                        Profil
                    </Link>
                </nav>
            </div>
            {/* Tombol Keluar */}
            <Link href="/keluar" className="flex items-center p-3 rounded-md hover:bg-gray-100">
                <div className="mr-3">
                    {/* Icon Keluar */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1a9 9 0 019 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 019-9zm-1 9a1 1 0 00-1-1H5a1 1 0 000 2h3a1 1 0 001-1zm5 0a1 1 0 00-1-1h-3a1 1 0 000 2h3a1 1 0 001-1z"></path></svg>
                </div>
                Keluar
            </Link>
        </aside>
    );
}
