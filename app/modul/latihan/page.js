// app/modul/latihan/page.js
'use client'; // Client Component karena menggunakan usePathname dari Sidebar

import Link from 'next/link';
import Sidebar from '../../../components/Sidebar'; // Sesuaikan jalur import Sidebar

export default function LatihanPage() {
    // Definisi data huruf untuk memudahkan duplikasi dan manajemen
    const hurufHijaiyahPairs = [
        { id: 1, chars: ['فَ', 'مَ'] },
        { id: 2, chars: ['بَ', 'مَ'] },
        { id: 3, chars: ['مَ', 'بَ'] },
        { id: 4, chars: ['بَ', 'مَ'] },
        { id: 5, chars: ['مَ', 'بَ'] },
        { id: 6, chars: ['بَ', 'فَ'] },
        // Anda bisa menambahkan lebih banyak pasangan di sini
    ];

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8"> {/* ml-64 agar tidak tertutup sidebar */}
                {/* Header Latihan */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <Link href="/modul" className="text-teal-700 hover:underline text-sm mb-2 block">
                            &larr; Kembali ke Materi
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900">Latihan: Huruf Hijaiyah Terputus</h1>
                    </div>
                    {/* Lingkaran profil di kanan atas */}
                    <div className="w-10 h-10 bg-teal-800 text-white flex items-center justify-center rounded-full font-bold">B</div>
                </header>

                {/* Bagian Uji Pemahamanmu! */}
                <section className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">Uji Pemahamanmu!</h2>
                    <p className="text-gray-600 mb-8">Ulangi huruf yang sesuai dengan suara yang Anda dengar.</p>

                    {/* Grid Huruf Hijaiyah (Menampilkan pasangan kartu) */}
                    {/* grid-cols-1: 1 pasangan per baris (mobile) */}
                    {/* md:grid-cols-2: 2 pasangan per baris (tablet & desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {hurufHijaiyahPairs.map((pair) => (
                            <div key={pair.id} className="flex flex-col items-center">
                                {/* Kontainer untuk dua kartu berdampingan */}
                                {/* Border dan rounded-lg diterapkan pada kontainer ini */}
                                <div className="flex w-full mb-4 rounded-lg overflow-hidden border border-gray-200">
                                    {pair.chars.map((char, index) => (
                                        <>
                                            <div
                                                key={index}
                                                className={`bg-gray-50 p-4 flex flex-col items-center justify-center min-h-[150px] flex-1`}
                                                // Menghapus semua kelas border individual dari sini
                                            >
                                                <p className="text-6xl font-arabic text-teal-800">{char}</p>
                                            </div>
                                            {/* Tambahkan garis pemisah vertikal di antara kartu jika ada lebih dari satu */}
                                            {index === 0 && pair.chars.length > 1 && (
                                                <div className="w-px bg-gray-200 h-auto"></div>
                                            )}
                                        </>
                                    ))}
                                </div>
                                {/* Tombol Mikrofon dan Play di bawah pasangan kartu */}
                                <div className="flex space-x-2">
                                    <button className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                                        {/* Icon Mikrofon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
                                            <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition">
                                        {/* Icon Play */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tombol Lanjutkan */}
                    <div className="flex justify-end mt-8">
                        <button className="bg-teal-700 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition text-lg">
                            Lanjutkan
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
