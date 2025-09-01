"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message

    if (!email || !password) {
      setError("Email dan password tidak boleh kosong.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.ok) {
        router.push("/dashboard");
      } else {
        setError("Email atau password yang Anda masukkan salah.");
      }
    } catch (error) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center pt-40 sm:pt-24 px-4 bg-white">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="font-scheherazade text-4xl font-bold text-[#047857]">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-800">Login</h2>
            <p className="mt-2 text-gray-600">
              Silakan masuk untuk belajar mengaji.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Tampilkan pesan error jika ada */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <p>{error}</p>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-black"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password Anda"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-black"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-[#059669] hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out disabled:bg-emerald-300"
              >
                {isLoading ? "Memproses..." : "Masuk"}
              </button>
            </div>
          </form>
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
