// app/profil/page.js
'use client'; // Diperlukan jika Sidebar Anda menggunakan hook seperti usePathname

import Sidebar from '../../components/Sidebar'; // Impor Sidebar

export default function ProfilePage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar /> {/* Tambahkan Sidebar di sini */}
      
      <main className="flex-1 ml-64 p-8"> {/* ml-64 agar konten tidak tertutup sidebar */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profil & Pengaturan Akun</h1>
            <p className="text-gray-600 mt-1">Kelola informasi akun dan preferensi Anda.</p>
          </div>

          {/* Profile Picture Section */}
          <div className="flex items-center gap-6 pb-8 border-b border-gray-200">
            <div className="w-24 h-24 bg-teal-500 text-white flex items-center justify-center rounded-full text-4xl font-bold">
              B
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Bayu</h2>
              <p className="text-gray-500">BayuWicaksono</p>
              <button className="text-teal-600 font-semibold mt-2 hover:underline">
                Ganti Foto Profil
              </button>
            </div>
          </div>

          {/* Form Section */}
          <form className="mt-8 space-y-8">
            {/* Informasi Pribadi */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Informasi Pribadi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    
                    className="text-black w-full px-4 py-2  border border-gray-300 rounded-md "
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    
                    className="text-black w-full px-4 py-2  border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Ubah Kata Sandi */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Ubah Kata Sandi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Kata Sandi Saat Ini
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    placeholder="********"
                    className="text-black  w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Kata Sandi Baru
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Minimal 8 karakter"
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            {/* Tombol Simpan */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#059669] text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}