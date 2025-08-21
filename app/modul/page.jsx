"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, Play } from "lucide-react";
import Sidebar from "../..//components/Sidebar";
import Link from "next/link";

export default function ModulPage({ params = { slug: "1" } }) {
  return (
    <div className="bg-gray-100 antialiased">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col lg:ml-64">
          <header className="bg-white border-b border-gray-200 h-[85px] flex-shrink-0 flex items-center justify-between px-4 sm:px-6">
            <div>
              <Link
                href="/dashboard"
                className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:underline"
              >
                <ChevronLeft size={16} />
                Kembali ke Dashboard
              </Link>
              <h1 className="text-xl font-bold text-gray-800 mt-1">
                Modul {params.slug}: Huruf Hijaiyah Terputus
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-lg">
                B
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 md:p-8">
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
}

const MainContent = () => {
  const letterData = [
    { letter: "فَ", audioSrc: "/Audio/Halaman_1/fa.mp3" },
    { letter: "مَ", audioSrc: "/Audio/Halaman_1/ma.mp3" },
    { letter: "بَ", audioSrc: "/Audio/Halaman_1/fa.mp3" },
  ];

  const [playedLetters, setPlayedLetters] = useState(new Set());

  const handleCardPlay = (letter) => {
    setPlayedLetters((prev) => new Set(prev).add(letter));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
          Bagian A
        </span>
        <h2 className="text-2xl font-bold text-gray-800 mt-3">
          Simak Pelafalan Huruf
        </h2>
        <p className="text-gray-600 mt-2">
          Klik pada setiap huruf untuk mendengarkan pelafalannya dengan harakat
          Fathah ( ﹷ ), Kasrah ( ﹻ ), dan Dammah ( ﹹ ).
        </p>
      </div>
      {/* Progress bar sekarang diperbarui berdasarkan jumlah huruf yang sudah diputar */}
      <ProgressBar current={playedLetters.size} total={letterData.length} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {letterData.map((data) => (
          <LetterCard
            key={data.letter}
            letter={data.letter}
            audioSrc={data.audioSrc}
            active={playedLetters.has(data.letter)}
            onPlay={() => handleCardPlay(data.letter)}
          />
        ))}
      </div>
      <NavigationButtons />
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ current, total }) => {
  const progressPercentage = total > 0 ? (current / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-emerald-700">
          Progres Bagian A
        </span>
        <span className="text-sm font-medium text-emerald-700">
          {current} dari {total} huruf
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Letter Card Component (Updated with audio logic)
const LetterCard = ({ letter, active = false, audioSrc, onPlay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioSrc) {
      audioRef.current = new Audio(audioSrc);
    }
  }, [audioSrc]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      onPlay();
    }
  };

  const baseClasses =
    "aspect-square rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 group";
  const activeClasses = "bg-emerald-50 border-2 border-emerald-300 shadow-lg";
  const inactiveClasses = "bg-white border-2 border-gray-200";

  return (
    <div
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      <span className="text-8xl font-normal text-black mb-4">{letter}</span>
      <button
        onClick={handlePlay}
        className="w-12 h-11 bg-emerald-500 rounded-lg flex cursor-pointer items-center justify-center text-white shadow-md group-hover:bg-emerald-600 transition-colors"
      >
        <Play size={24} fill="white" />
      </button>
    </div>
  );
};

// Navigation Buttons Component
const NavigationButtons = () => {
  return (
    <div className="border-t border-gray-200 mt-8 pt-6 flex justify-between items-center">
      <button
        className="bg-gray-200 text-gray-500 font-bold py-3 px-6 rounded-lg flex items-center gap-2 cursor-not-allowed opacity-50"
        disabled
      >
        <ChevronLeft size={20} />
        Sebelumnya
      </button>
      <button className="cursor-pointer bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
        Lanjut ke Latihan ›
      </button>
    </div>
  );
};
