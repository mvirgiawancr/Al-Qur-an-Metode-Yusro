"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    nama: "",
    hp: "",
    gender: "male",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Validasi input
    const { email, nama, hp, password, confirmPassword } = formData;
    if (!email || !nama || !hp || !password || !confirmPassword) {
      setError("Semua kolom wajib diisi.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Jika berhasil, arahkan ke halaman login
        router.push("/login");
      } else {
        // Jika gagal, tampilkan pesan error dari server
        setError(data.error || "Terjadi kesalahan saat mendaftar.");
      }
    } catch (error) {
      setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-12 px-4 mt-20">
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
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <p>{error}</p>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama Lengkap"
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
                type="tel"
                id="hp"
                name="hp"
                value={formData.hp}
                onChange={handleChange}
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
                value={formData.gender}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              >
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
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Ulangi password Anda"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#059669] text-white font-bold py-3 px-4 rounded-md hover:bg-teal-700 transition duration-300 disabled:bg-emerald-300 cursor-pointer"
            >
              {isLoading ? "Memproses..." : "Daftar"}
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
