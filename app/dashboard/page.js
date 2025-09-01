// app/dashboard/page.js
"use client";

import Sidebar from "../../components/Sidebar";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Komponen untuk tampilan loading
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <p className="text-xl font-semibold text-gray-700">Memuat...</p>
      <p className="text-gray-500">Silakan tunggu sebentar.</p>
    </div>
  </div>
);

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Jika status bukan loading dan sesi tidak ada (unauthenticated),
    // alihkan ke halaman login.
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Tampilkan komponen Loading saat status masih 'loading'
  if (status === "loading") {
    return <Loading />;
  }

  // Tampilkan dashboard jika pengguna sudah terautentikasi
  if (status === "authenticated") {
    return (
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          {" "}
          {/* ml-64 agar tidak tertutup sidebar */}
          {/* Bagian Atas */}
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Assalamualaikum, {session.user.name}!
              </h1>
              <p className="text-gray-600">
                Teruslah bersemangat dalam belajar Al-Qur'an.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-800 text-white flex items-center justify-center rounded-full font-bold">
                {session.user.name?.[0]}
              </div>
              {/* <button
                
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Keluar
              </button> */}
            </div>
          </header>
          {/* Konten Utama (2 Kolom) */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Kolom Kiri */}
            <div className="flex-1 space-y-8">
              {/* Lanjutkan Belajar Card */}
              <div className="bg-teal-600 text-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-2">
                  Lanjutkan Belajar
                </h2>
                <p className="text-sm opacity-90 mb-4">
                  Modul 1: Huruf Hijaiyah Terputus
                </p>
                <div className="w-full bg-teal-600 rounded-full h-2.5 mb-4">
                  <div className="bg-green-400 h-2.5 rounded-full w-2/3"></div>
                </div>
                <button className="bg-white text-teal-700 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition">
                  Mulai Belajar
                </button>
              </div>
              {/* Semua Modul Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Semua Modul
                </h2>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 text-teal-700 flex items-center justify-center rounded-md font-bold mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          Huruf Hijaiyah Terputus
                        </h3>
                        <p className="text-sm text-gray-500">
                          Mengenal bentuk dan suara dasar.
                        </p>
                      </div>
                    </div>
                    <div className="text-green-500 font-semibold">
                      Sedang dipelajari
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="w-full md:w-1/3 space-y-8">
              {/* Progres Belajar Card */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Progres Belajar
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between items-center">
                    <span>Modul Selesai</span>
                    <span className="font-semibold">0 dari 20</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Latihan Dikerjakan</span>
                    <span className="font-semibold text-teal-700">
                      3 Latihan
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Waktu Belajar</span>
                    <span className="font-semibold">1 jam 20 menit</span>
                  </li>
                </ul>
              </div>
              {/* Tantangan Harian Card */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Tantangan Harian
                </h2>
                <p className="text-gray-700 mb-4">
                  Selesaikan latihan cepat untuk menguji pemahamanmu hari ini!
                </p>
                <button className="bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full hover:bg-teal-700 transition">
                  Mulai Latihan Cepat
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
