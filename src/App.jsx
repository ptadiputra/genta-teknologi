import React from "react";
import { createWhatsAppLink } from "./utils/whatsapp";
import Portfolio from "./components/Portfolio";
import { portfolioTop, portfolioBottom } from "./data/portfolio";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">

      {/* --- CSS UNTUK ANIMASI BERJALAN --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* --- TOMBOL WHATSAPP MELAYANG --- */}
      <a
        href="https://wa.me/6281547193270"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] group flex items-center gap-3"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl font-bold text-sm border border-slate-100 whitespace-nowrap">
          Konsultasi Gratis
        </span>
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>
          <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.782 11.782 0 001.584 5.917L0 24l6.117-1.605a11.782 11.782 0 005.925 1.585h.005c6.637 0 12.032-5.391 12.036-12.027a11.83 11.83 0 00-3.417-8.455z" /></svg>
          </div>
        </div>
      </a>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center">
            {/* Logo */}
            <img
              src="/logo.webp"
              alt="Genta Teknologi"
              className="w-12 h-12 object-contain"
            />

            {/* Brand Name */}
            <span className="text-2xl font-bold tracking-tight text-blue-600 ">
              Genta<span className="text-blue-900">Teknologi</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </a>
            <a href="#about" >
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-200 transition">
                About Us
              </button>
            </a>
          </div>

        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="pt-32 pb-20 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">Solusi Digital <br /><span className="text-blue-600">Tanpa Ribet.</span></h1>
            <p className="text-lg text-slate-600 max-w-lg">Transparan, cepat, dan profesional. Pilih paket layanan yang sesuai dengan budget bisnis Anda.</p>
            <a href="#services" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition">Lihat Paket Harga</a>
          </div>
          <div className="hidden md:block bg-blue-600 rounded-[3rem] aspect-video relative shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/genta.webp" alt="Portfolio" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- HERO & PORTFOLIO SLIDER --- */}
      <section>
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Creative Showcase</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 italic">We build digital experiences.</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Lihat beberapa hasil kerja kami yang membantu klien mencapai kesuksesan digital.</p>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="space-y-10 py-10 bg-blue-900/5 overflow-hidden">

          {/* BARIS ATAS - JALAN KE KIRI */}
          <div className="flex w-[200%] gap-6 animate-marquee-left">
            {[...portfolioTop, ...portfolioTop].map((img, index) => (
              <div key={index} className="w-[350px] md:w-[450px] h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src={img} alt="Portfolio" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
              </div>
            ))}
          </div>

          {/* BARIS BAWAH - JALAN KE KANAN */}
          <div className="flex w-[200%] gap-6 animate-marquee-right">
            {[...portfolioBottom, ...portfolioBottom].map((img, index) => (
              <div key={index} className="w-[350px] md:w-[450px] h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src={img} alt="Portfolio" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- EXPERTISE & PRICING SECTION --- */}
      <section id="services" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Expertise & Pricing</h2>
            <p className="text-4xl font-extrabold text-slate-900">Paket Layanan Terbaik</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Paket 1: Web Dev */}
            <div className="group p-8 rounded-[2.5rem] bg-blue-50 border border-blue-100 hover:bg-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-white mb-2">Web Development</h3>
              <div className="mb-6">
                <span className="text-sm group-hover:text-blue-100 text-slate-500">Mulai dari</span>
                <p className="text-3xl font-black text-blue-600 group-hover:text-white leading-none mt-1">Rp 750.000</p>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 group-hover:text-blue-50 transition">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  Custom Design & Responsive
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  SEO Optimization Basic
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  Free Domain & Hosting (1th)
                </li>
              </ul>
              <a
                href={createWhatsAppLink("Web Development")}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  w-full py-4
                  bg-white text-blue-600
                  group-hover:bg-blue-900
                  group-hover:text-white
                  font-bold rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-1
                  active:scale-95
                  hover:shadow-lg
                  cursor-pointer
                "
              >
                Pilih Paket
                <span>→</span>
              </a>
            </div>

            {/* Paket 2: Digital Ads */}
            <div className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:rotate-6 transition">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-white mb-2">Digital Ads</h3>
              <div className="mb-6">
                <span className="text-sm group-hover:text-blue-100 text-slate-500">Mulai dari</span>
                <p className="text-3xl font-black text-blue-600 group-hover:text-white leading-none mt-1">Rp 250.000<span className="text-xs font-normal"></span></p>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 group-hover:text-blue-50 transition">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  Meta Ads & Google Ads Management
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  Daily Monitoring & Optimization
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  Laporan Performa Bulanan
                </li>
              </ul>
              <a
                href={createWhatsAppLink("Digital Ads")}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  w-full py-4
                  bg-blue-600 text-white
                  group-hover:bg-blue-900
                  font-bold rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-1
                  active:scale-95
                  hover:shadow-lg
                  cursor-pointer
                "
              >
                Pilih Paket
                <span>→</span>
              </a>
            </div>

            {/* Paket 3: UI/UX Design */}
            <div className="group p-8 rounded-[2.5rem] bg-blue-50 border border-blue-100 hover:bg-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-white mb-2">UI/UX Design</h3>
              <div className="mb-6">
                <span className="text-sm group-hover:text-blue-100 text-slate-500">Mulai dari</span>
                <p className="text-3xl font-black text-blue-600 group-hover:text-white leading-none mt-1">Rp 500.000</p>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 group-hover:text-blue-50 transition">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  User Research & Wireframing
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  High-Fidelity Prototype (Figma)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  3x Iterasi/Revisi Desain
                </li>
              </ul>
              <a
                href={createWhatsAppLink("UI/UX Design")}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  w-full py-4
                  bg-white text-blue-600
                  group-hover:bg-blue-900
                  group-hover:text-white
                  font-bold rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-1
                  active:scale-95
                  hover:shadow-lg
                  cursor-pointer
                "
              >
                Pilih Paket
                <span>→</span>
              </a>
            </div>

            {/* Paket 4: Logo */}
            <div className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:rotate-6 transition">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-white mb-2">Logo Design</h3>
              <div className="mb-6">
                <span className="text-sm group-hover:text-blue-100 text-slate-500">Mulai dari</span>
                <p className="text-3xl font-black text-blue-600 group-hover:text-white leading-none mt-1">Rp 250.000</p>
              </div>
              <ul className="space-y-4 mb-8 text-slate-600 group-hover:text-blue-50 transition">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  Unique & Professional Logo
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  3 Initial Design Concepts
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 group-hover:text-white"><path d="M20 6L9 17l-5-5" /></svg>
                  Source File Included (AI, SVG, PNG)
                </li>
              </ul>
              <a
                href={createWhatsAppLink("Logo Design")}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  w-full py-4
                  bg-blue-600 text-white
                  group-hover:bg-blue-900
                  font-bold rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-1
                  active:scale-95
                  hover:shadow-lg
                  cursor-pointer
                "
              >
                Pilih Paket
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* --- ABOUT US SECTION --- */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Kolom Kiri: Gambar (Tetap sama karena sudah keren) */}
            <div className="relative group">
              <div className="relative h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
                <img
                  src="/genta-white.webp"
                  alt="Founder WebPro"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>

            {/* Kolom Kanan: Info Profil (Diubah dari Contact menjadi About) */}
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 italic">
                  About Our Agency
                </h2>

                <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-tight md:leading-[0.9] italic uppercase tracking-tighter">
                  We are
                  <span className="block">
                    Digital <span className="text-blue-600">Visionaries.</span>
                  </span>
                </h3>

                <p className="mt-6 md:mt-8 text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto md:mx-2 p-2">
                  Kami percaya bahwa setiap bisnis memiliki potensi untuk berkembang lebih jauh melalui teknologi yang tepat. Dengan menggabungkan kreativitas, strategi, dan inovasi, kami menghadirkan solusi digital yang membantu bisnis tampil lebih profesional dan kompetitif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white border-t border-slate-200 text-center px-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Genta Teknologi. Paket harga dapat berubah sesuai kompleksitas proyek.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;