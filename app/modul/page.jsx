// app/modul/page.js
'use client';

import Sidebar from '../../components/Sidebar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const modules = [
  { id: 1, title: 'Huruf Hijaiyah Terputus', progress: 2, totalParts: 3, status: 'in-progress' },
  { id: 2, title: 'Huruf Hijaiyah Bersambung', progress: 0, totalParts: 0, status: 'not-started' },
  // Anda bisa menambahkan modul lain di sini
];

export default function ModulListPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Link href="/dashboard" className="flex items-center text-sm text-gray-500 hover:text-gray-800 mb-2">
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Modul Pembelajaran</h1>
          </div>
          <div className="w-10 h-10 bg-teal-800 text-white flex items-center justify-center rounded-full font-bold">B</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((modul) => (
            <Link key={modul.id} href={`/modul/${modul.id}`}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-teal-600">Modul {modul.id}</p>
                  <h2 className="text-xl font-bold text-gray-800 mt-1">{modul.title}</h2>
                </div>
                
                {/* === KODE PROGRESS BAR DIMULAI DI SINI === */}
                <div className="mt-6">
                  {modul.status === 'in-progress' ? (
                    <>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-teal-500 h-2 rounded-full"
                          style={{ width: `${(modul.progress / modul.totalParts) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {modul.progress} dari {modul.totalParts} bagian selesai
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="w-full bg-gray-200 rounded-full h-2"></div>
                      <p className="text-xs text-gray-500 mt-2">Belum dimulai</p>
                    </>
                  )}
                </div>
                {/* === KODE PROGRESS BAR SELESAI DI SINI === */}

              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}