import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <Navbar />

      {/* Konten Utama: Kartu Login di Tengah */}
      <main className="min-h-screen flex flex-col items-center justify-center pt-40 sm:pt-24 px-4 bg-white">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Bagian Header */}
          <div className="text-center">
            <h1 className="font-scheherazade text-4xl font-bold text-[#047857]">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-800">Login</h2>
            <p className="mt-2 text-gray-600">
              Silakan masuk untuk belajar mengaji.
            </p>
          </div>

          {/* Form Login */}
          <form className="space-y-6">
            {/* Input Username */}
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Masukkan username Anda"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-black"
              />
            </div>

            {/* Input Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Kata Sandi
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-[#059669] hover:underline"
                >
                  Lupa kata sandi?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Masukkan kata sandi Anda"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-black"
              />
            </div>

            {/* Tombol Submit */}
            <div>
              <Button label="Masuk" />
            </div>
          </form>

          {/* Link Daftar */}
          <p className="text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="font-medium text-[#059669] hover:underline"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
