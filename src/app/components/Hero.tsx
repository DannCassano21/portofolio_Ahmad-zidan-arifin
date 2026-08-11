import { Button } from "@/app/components/ui/button";
import { Linkedin, MessageCircle } from "lucide-react";
import CSSLanyard from "./CSSLanyard";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* CSS Lanyard - Hidden on mobile */}
      <div className="hidden lg:block">
        <CSSLanyard />
      </div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* LEFT SIDE - Perkenalan */}
          <div className="space-y-4 md:space-y-6 text-left">
            <div className="space-y-2 md:space-y-3">
              <p className="text-amber-700 font-medium tracking-wide text-sm md:text-base">Hello, I'm</p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 whitespace-nowrap">
                Ahmad Zidan Arifin
              </h1>
              <h2 className="text-base md:text-xl lg:text-2xl text-amber-800 font-light">
                Business & Data Analyst
              </h2>
            </div>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-lg">
              Mahasiswa S1 Sistem Informasi Telkom University dengan ketertarikan di bidang data dan bisnis. Terbiasa memproses data mentah, memetakan proses bisnis, dan menerjemahkannya melalui <span className="font-semibold text-amber-800">visualisasi serta data storytelling</span> untuk mendukung pengambilan keputusan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button
                size="default"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-sm md:text-base w-full sm:w-auto"
                onClick={() => window.open('https://www.linkedin.com/in/ahmad-zidan-arifin-71426b316', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Connect on LinkedIn
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 shadow-lg text-sm md:text-base w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/6282118580994?text=Halo%20Ahmad%2C%20saya%20sempat%20melihat%20portofolio%20Anda.%20Karya-karya%20Anda%20terlihat%20menarik%20sekali.%20Jika%20berkenan%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20pengalaman%20Anda.', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-amber-200">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-amber-600">3+</div>
                <div className="text-xs md:text-sm text-slate-600">Certifications</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-green-600">7+</div>
                <div className="text-xs md:text-sm text-slate-600">Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600">1</div>
                <div className="text-xs md:text-sm text-slate-600">Internship</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Reserved for Lanyard */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Placeholder for lanyard - actual lanyard is positioned absolutely */}
          </div>

        </div>
      </div>
    </section>
  );
}