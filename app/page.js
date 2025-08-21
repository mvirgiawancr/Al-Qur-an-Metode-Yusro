// app/page.js

import Header from '../components/Header';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      
      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO SECTION */}
      <section className="bg-teal-700 text-white text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-arabic leading-relaxed mb-4">
          خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
        </h2>
        <p className="text-lg md:text-xl">
          "Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya."
        </p>
        <p className="mt-2 text-sm italic">- (HR. Bukhari no. 5027)</p>
      </section>

      {/* 3. BAGIAN "APA ITU METODE YUSRO?" */}
      <section className="container mx-auto py-16 px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Kolom Kiri - Gambar */}
          <div className="md:w-1/3">
            <Image
              src="/quran_ calligraphy.png" // Ganti dengan jalur gambar Anda
              alt="Kaligrafi Bismillah"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          {/* Kolom Kanan - Teks */}
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-black">Apa itu metode Yusro?</h2>
            <p className="mb-4 text-gray-700">
              Metode Yusro adalah metode pembelajaran membaca Al-Qur'an yang praktis dan cepat, dirancang agar
              anak-anak maupun orang dewasa dapat belajar membaca Al-Qur'an dengan mudah tanpa mengenal
              huruf satu per satu. Fokus utama metode ini adalah penggunaan teknik visual dan pengulangan untuk
              mempercepat proses pembelajaran.
            </p>
            <p className="mb-4 text-gray-700">
              Berbeda dengan metode tradisional, Metode Yusro tidak menggunakan sistem mengeja huruf satu per
              satu. Melainkan, peserta didik langsung diperkenalkan pada kata atau potongan ayat sehingga lebih
              kontekstual dan cepat memahami. Ini membantu siswa untuk langsung membaca tanpa terpaku pada
              identifikasi huruf tunggal, sehingga proses pembelajaran menjadi lebih efisien dan menyenangkan.
            </p>
            <p className="mb-4 text-gray-700">
              Metode ini dikembangkan dengan mempertimbangkan berbagai gaya belajar dan berusaha memenuhi
              kebutuhan beragam peserta didik, baik yang baru mengenal Al-Qur'an maupun yang ingin
              memperdalam bacaan mereka.
            </p>
            <p className="mb-4 text-gray-700">
              Pendekatan yang inovatif ini menjadikan Metode Yusro pilihan tepat bagi siapapun yang ingin
              menguasai membaca Al-Qur'an dengan efektif.
            </p>
          </div>
        </div>
      </section>


      {/* 4. BAGIAN "KEUNGGULAN METODE YUSRO" */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-8">

            {/* Kontainer untuk Lingkaran dan Kotak Samping */}
            <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full max-w-4xl gap-16 relative">

              {/* Kotak Kiri Atas */}
              <div className="bg-white p-6 rounded-md shadow-md text-left row-start-1 col-start-1">
                <h3 className="font-semibold text-lg mb-2 text-black">Teruji</h3>
                <p className="text-sm text-gray-700">Metode Yusro telah melewati uji coba pada berbagai kelompok usia dan latar belakang, terbukti efektif dalam membantu mempelajari Al-Qur'an secara cepat dan tepat.</p>
              </div>

              {/* Kotak Kiri Bawah */}
              <div className="bg-white p-6 rounded-md shadow-md text-left row-start-3 col-start-1">
                <h3 className="font-semibold text-lg mb-2 text-black">Menyenangkan</h3>
                <p className="text-sm text-gray-700">Proses belajar dirancang dengan metode yang interaktif dan bervariasi, membuat setiap sesi pembelajaran terasa menyenangkan dan memotivasi untuk terus mendalami Al-Qur'an.</p>
              </div>

              {/* Lingkaran Tengah */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-teal-800 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                Keunggulan<br />Metode Yusro
              </div>

              {/* Kotak Kanan Atas */}
              <div className="bg-white p-6 rounded-md shadow-md text-left row-start-1 col-start-3">
                <h3 className="font-semibold text-lg mb-2 text-black">Mudah Dipahami</h3>
                <p className="text-sm text-gray-700">Metode ini dirancang dengan alur yang logis dan sistematis, sehingga mudah diikuti oleh pemula sekalipun tanpa mengalami kesulitan dalam memahami dasar-dasar bacaan Al-Qur'an.</p>
              </div>

              {/* Kotak Kanan Bawah */}
              <div className="bg-white p-6 rounded-md shadow-md text-left row-start-3 col-start-3">
                <h3 className="font-semibold text-lg mb-2 text-black">Langsung Praktik</h3>
                <p className="text-sm text-gray-700">Lebih menekankan pada penerapan langsung, sehingga peserta didik dapat segera mempraktikkan cara membaca Al-Qur'an dengan benar sejak awal pembelajaran.</p>
              </div>
            </div>
            
            
            {/* Kontainer untuk Dua Kotak Bawah */}
            <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-4xl mt-8 md:mt-0">
              {/* Kotak Fleksibel */}
              <div className="bg-white p-6 rounded-md shadow-md text-center md:w-1/2">
                <h3 className="font-semibold text-lg mb-2 text-black">Fleksibel</h3>
                <p className="text-sm text-gray-700">Sistem pembelajaran yang fleksibel memungkinkan peserta didik untuk memilih berbagai tempo belajar dan disesuaikan dengan kebutuhan individu, cocok untuk berbagai jadwal dan gaya hidup.</p>
              </div>

              {/* Kotak Cepat & Efisien */}
              <div className="bg-white p-6 rounded-md shadow-md text-center md:w-1/2">
                <h3 className="font-semibold text-lg mb-2 text-black">Cepat & Efisien</h3>
                <p className="text-sm text-gray-700">Metode ini memungkinkan peserta didik untuk menguasai membaca Al-Qur'an dalam waktu yang relatif singkat tanpa mengorbankan kualitas bacaan dan pemahaman.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2023 Mengaji Al-Qur'an Metode Yusro. All rights reserved.</p>
      </footer>
    </div>
  );
}