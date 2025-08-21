"use client";

import React from "react"; // Import React
import { ChevronLeft, Play } from "lucide-react";
import Sidebar from "../../../components/Sidebar";

// Main App Component
export default function App() {
  return (
    <div className="bg-gray-100 font-sans antialiased">
      <div className="flex min-h-screen">
        {/* Sidebar Component */}
        <Sidebar />
        <div className="flex-1 flex flex-col lg:ml-64">
          {/* Header Component */}
          <header className="bg-white border-b border-gray-200 h-[85px] flex-shrink-0 flex items-center justify-between px-4 sm:px-6">
            <div>
              <a
                href="#"
                className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:underline"
              >
                <ChevronLeft size={16} />
                Kembali ke Dashboard
              </a>
              <h1 className="text-xl font-bold text-gray-800 mt-1">
                Modul 1: Huruf Hijaiyah Terputus
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-lg">
                B
              </div>
            </div>
          </header>
          {/* Main Content Area */}
          <main className="flex-1 p-4 sm:p-6 md:p-8">
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
}

// --- Reusable Components ---

// Main Content Component
const MainContent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 w-full max-w-6xl mx-auto">
      {/* Section Header */}
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

      {/* Progress Bar */}
      <ProgressBar current={0} total={3} />

      {/* Letter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <LetterCard letter="فَ" />
        <LetterCard letter="مَ" />
        <LetterCard letter="بَ" />
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;
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
          className="bg-emerald-500 h-2.5 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Letter Card Component
const LetterCard = ({ letter, active = false }) => {
  const baseClasses =
    "aspect-square rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300";
  const activeClasses = "bg-emerald-50 border-2 border-emerald-300 shadow-lg";
  const inactiveClasses = "bg-white border-2 border-gray-200";

  return (
    <div
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      <span className="text-8xl font-normal text-black mb-4">{letter}</span>
      <button className="w-12 h-11 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-md  transition-colors">
        <Play size={24} fill="white" className="cursor-pointer" />
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
