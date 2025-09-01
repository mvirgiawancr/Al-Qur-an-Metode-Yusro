// app/register/page.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Sederhana */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex flex-col items-center justify-center py-12 px-4 mt-20">
        {/* Kartu Form Registrasi */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-lg w-full">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-serif text-[#047857] mb-4" dir="rtl">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h2 className="text-3xl font-bold text-gray-800">Register</h2>
            <p className="text-gray-500 mt-2">
              Isi data di bawah untuk memulai belajar mengaji.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Username"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <div>
              <label
                htmlFor="hp"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                No Handphone
              </label>
              <input
                type="number"
                id="hp"
                name="hp"
                placeholder="628xxx"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Jenis Kelamin
              </label>
              <select
                id="gender"
                name="gender"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              >
                <option disabled>-- Pilih Jenis Kelamin --</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan password Anda"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Ulangi password Anda"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#059669] text-white font-bold py-3 px-4 rounded-md hover:bg-teal-700 transition duration-300"
            >
              Daftar
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-medium text-teal-600 hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
