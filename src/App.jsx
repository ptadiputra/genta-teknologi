import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">
      
      {/* --- TOMBOL WHATSAPP MELAYANG --- */}
      <a 
        href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp Anda
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] group flex items-center gap-3"
      >
        {/* Label yang muncul saat hover */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl font-bold text-sm border border-slate-100">
          Chat&nbsp;with&nbsp;us
        </span>
        
        {/* Lingkaran Tombol */}
        <div className="relative">
          {/* Efek Berdenyut (Pulse) */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>
          
          <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-200 group-hover:scale-110 group-hover:bg-green-600 transition-all duration-300">
            {/* Icon WhatsApp SVG */}
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="white" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.782 11.782 0 001.584 5.917L0 24l6.117-1.605a11.782 11.782 0 005.925 1.585h.005c6.637 0 12.032-5.391 12.036-12.027a11.83 11.83 0 00-3.417-8.455z"/>
            </svg>
          </div>
        </div>
      </a>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-blue-900">Genta<span className="text-blue-600">Teknologi</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-200 transition">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-bold">
              🚀 Elevate Your Digital Presence
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Build, Scale, & <span className="text-blue-600">Design</span> Your Future.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Kami membantu bisnis bertransformasi secara digital melalui website berperforma tinggi, strategi iklan yang tepat sasaran, dan desain UI/UX yang memukau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition">
                Mulai Proyek Sekarang
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 aspect-square flex items-center justify-center shadow-2xl overflow-hidden">
               <div className="grid grid-cols-2 gap-4 z-10 w-full">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <div className="w-10 h-10 bg-white rounded-lg mb-4 flex items-center justify-center">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
                    </div>
                    <div className="h-2 w-full bg-white/30 rounded-full mb-2"></div>
                    <div className="h-2 w-2/3 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mt-8">
                    <div className="w-10 h-10 bg-blue-400 rounded-lg mb-4 flex items-center justify-center text-white font-bold">UX</div>
                    <div className="h-2 w-full bg-white/30 rounded-full mb-2"></div>
                    <div className="h-2 w-1/2 bg-white/30 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
            <p className="text-4xl font-extrabold text-slate-900">Solusi Lengkap untuk Pertumbuhan Bisnis Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Service: Web Dev */}
            <div className="group p-10 rounded-[2rem] bg-blue-50 border border-blue-100 hover:bg-blue-600 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:rotate-12 transition">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-white mb-4">Web Development</h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed">Website cepat, SEO-friendly, dan responsif menggunakan teknologi terbaru.</p>
            </div>

            {/* Service: Digital Ads */}
            <div className="group p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:bg-blue-600 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:rotate-12 transition">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-white mb-4">Digital Ads</h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed">Tingkatkan konversi melalui Google Ads, Meta Ads, dan strategi akurat.</p>
            </div>

            {/* Service: UI/UX */}
            <div className="group p-10 rounded-[2rem] bg-blue-50 border border-blue-100 hover:bg-blue-600 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:rotate-12 transition">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-white mb-4">UI/UX Design</h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed">Pengalaman pengguna intuitif dan desain visual modern untuk aplikasi Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-200 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
          <div className="text-slate-900 font-bold text-xl">Genta Teknologi Agency</div>
          <p className="text-sm">© 2024 Genta Teknologi Digital Agency. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;