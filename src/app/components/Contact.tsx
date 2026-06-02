import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmaadzidann@gmail.com",
      href: "mailto:ahmaadzidann@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/ahmad-zidan-arifin-71426b316",
      href: "https://www.linkedin.com/in/ahmad-zidan-arifin-71426b316",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 821-1858-0994",
      href: "https://wa.me/6282118580994?text=Halo%20Ahmad%2C%20saya%20sempat%20melihat%20portofolio%20Anda.%20Karya-karya%20Anda%20terlihat%20menarik%20sekali.%20Jika%20berkenan%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20pengalaman%20Anda.",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bekasi, Indonesia",
      href: "#",
      color: "text-amber-600"
    }
  ];

  return (
    <section id="contact" className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Get In Touch</h2>
          <div className="w-16 md:w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          <p className="text-sm md:text-base text-slate-300 mt-2 md:mt-3 max-w-2xl mx-auto">
            Interested in collaborating or have any questions? Feel free to reach out!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-6 bg-slate-800/50 rounded-xl border-2 border-slate-700 hover:border-amber-500 transition-all hover:bg-slate-800"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 ${method.color}`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-slate-400 mb-0.5 md:mb-1">{method.label}</p>
                  <p className="font-medium text-white text-xs md:text-base truncate">{method.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}