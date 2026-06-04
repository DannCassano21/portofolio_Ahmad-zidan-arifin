import { TrendingUp, Target, BookOpen, Mail, MapPin, Calendar, Database, Wrench, FolderKanban } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { MobileCarousel } from "./MobileCarousel";

export function About() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Data-driven mindset",
      description: "Mengambil keputusan berdasarkan data dan insight yang terukur"
    },
    {
      icon: Target,
      title: "Analytical thinking",
      description: "Memecah masalah kompleks menjadi solusi yang actionable"
    }
  ];

  const personalInfo = [
    { icon: Mail, label: "Email", value: "ahmaadzidann@gmail.com" },
    { icon: Calendar, label: "Age", value: "20 Years Old" },
    { icon: MapPin, label: "Location", value: "Bekasi, Indonesia" },
  ];

  const skillCategories = [
    {
      icon: Database,
      title: "Data Skills",
      color: "bg-amber-100 text-amber-700 border-amber-200",
      skills: [
        "Microsoft Excel (Pivot Table, IF, SUMIFS, Data Cleaning)",
        "Data Reporting & Dashboard",
        "Spreadsheet Management",
        "Data Visualization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Skills",
      color: "bg-orange-100 text-orange-700 border-orange-200",
      skills: [
        "Business Analysis Basic",
        "Process Monitoring",
        "Data Documentation",
        "Stakeholder Management"
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technology",
      color: "bg-red-100 text-red-700 border-red-200",
      skills: [
        "Excel",
        "Google Sheets",
        "SAP (MM & FI - Basic)",
        "Tableau (Basic)",
        "Power BI (Basic)",
        "Visual Paradigm",
        "Figma",
        "Canva"
      ]
    }
  ];

  const additionalCompetencies = [
    "Critical Thinking & Problem Solving",
    "Data Governance & Documentation",
    "Communication & Presentation",
    "Team Collaboration",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section id="about" className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">About Me</h2>
          <div className="w-16 md:w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 mt-2 md:mt-4 max-w-2xl mx-auto">
            Get to know more about my background, passion, and what drives me in the world of data
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-8 items-start mb-6 md:mb-8">
          {/* Left - Photo */}
          <div className="md:col-span-2">
            <div className="md:sticky md:top-24">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl md:rounded-3xl p-1.5 md:p-2 max-w-full md:max-w-none mx-auto">
                <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-4">
                  {/* Square aspect ratio for full photo */}
                  <div className="aspect-square rounded-lg md:rounded-xl overflow-hidden mb-2 md:mb-4">
                    <img
                      src="https://i.imgur.com/MeWK8H5.png"
                      alt="Ahmad Zidan Arifin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">Ahmad Zidan Arifin</h3>
                    <p className="text-xs md:text-sm text-amber-700 font-medium">Data Enthusiast</p>
                  </div>

                  {/* Personal Info - Grid di mobile, Vertical di desktop */}
                  <div className="grid grid-cols-1 md:space-y-2 gap-1.5 md:gap-0 text-xs md:text-sm mb-3 md:mb-4">
                    {personalInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-center gap-1.5 md:gap-3 p-1.5 md:p-2 rounded-lg hover:bg-slate-50 transition-colors">
                          <Icon className="w-3.5 md:w-4 h-3.5 md:h-4 text-amber-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] md:text-xs text-slate-500">{info.label}</p>
                            <p className="text-slate-700 font-medium text-[10px] md:text-sm truncate">{info.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Buttons - Compact di mobile */}
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white text-xs md:text-sm py-2"
                      onClick={() => window.open('https://drive.google.com/file/d/1QtppdTqZjWDxQD6fvoJCTYtIAUr8fpxz/preview', '_blank')}
                    >
                      View CV
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-amber-600 text-amber-700 hover:bg-amber-50 text-xs md:text-sm py-2"
                      onClick={() => window.open('https://drive.google.com/file/d/1LBCD0b0M2wA2LuGbAVutiEKmvJnZs-DH/preview', '_blank')}
                    >
                      <FolderKanban className="w-3.5 md:w-4 h-3.5 md:h-4 mr-1.5 md:mr-2" />
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="md:col-span-3 space-y-4 md:space-y-6">
            <Card className="border-2 border-amber-200 bg-amber-50/50">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-4">Hello! 👋</h3>
                <div className="space-y-2 md:space-y-4 text-xs md:text-base text-slate-700 leading-relaxed">
                  <p>
                    Mahasiswa S1 Sistem Informasi di Telkom University yang <span className="font-semibold text-amber-800">detail-oriented dan analitis</span> dengan ketertarikan kuat pada bidang data analytics, business process redesign, dan database management.
                  </p>
                  <p>
                    Memiliki <span className="font-semibold text-amber-800">pengalaman nyata dalam pengolahan dan visualisasi data berskala besar</span> selama magang di Badan Kepegawaian Negara (BKN Pusat). Menguasai pemodelan alur kerja bisnis yang kompleks, perancangan database relasional, dan pengembangan aplikasi web responsif.
                  </p>
                  <p className="hidden md:block">
                    Siap berkontribusi aktif dan menerapkan <span className="font-semibold text-amber-800">pemecahan masalah strategis</span> untuk peran profesional sebagai data analyst maupun business analyst.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
                    <CardContent className="p-2 md:p-4 text-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-1.5 md:mb-3">
                        <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-0.5 md:mb-1 text-[10px] md:text-sm">{item.title}</h4>
                      <p className="text-[9px] md:text-xs text-slate-600 hidden md:block">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-4">Skills & Competencies</h3>
              
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <MobileCarousel slidesToShow={1.2}>
                  {skillCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <Card key={index} className={`border-2 ${category.color}`}>
                        <CardContent className="p-3">
                          <div className="flex items-center gap-1.5 mb-2">
                            <Icon className="w-4 h-4" />
                            <h4 className="font-bold text-xs">{category.title}</h4>
                          </div>
                          <ul className="space-y-1">
                            {category.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="text-[10px] text-slate-700 flex items-start gap-1">
                                <span className="text-amber-600 mt-0.5">•</span>
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </MobileCarousel>
              </div>
              
              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index} className={`border-2 ${category.color}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-5 h-5" />
                          <h4 className="font-bold text-sm">{category.title}</h4>
                        </div>
                        <ul className="space-y-1.5">
                          {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="text-xs text-slate-700 flex items-start gap-1.5">
                              <span className="text-amber-600 mt-0.5">•</span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Competencies */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-3 md:p-5">
                <h4 className="font-bold text-slate-900 mb-2 md:mb-3 text-sm md:text-base">Additional Competencies</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {additionalCompetencies.map((competency, index) => (
                    <Badge key={index} className="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] md:text-xs">
                      {competency}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mt-4 md:mt-8">
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all">
            <CardContent className="p-2 md:p-4 text-center">
              <div className="text-xl md:text-3xl font-bold text-amber-600 mb-0.5 md:mb-1">3+</div>
              <div className="text-[9px] md:text-xs text-slate-600">Certifications</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all">
            <CardContent className="p-2 md:p-4 text-center">
              <div className="text-xl md:text-3xl font-bold text-green-600 mb-0.5 md:mb-1">7+</div>
              <div className="text-[9px] md:text-xs text-slate-600">Projects</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all">
            <CardContent className="p-2 md:p-4 text-center">
              <div className="text-xl md:text-3xl font-bold text-blue-600 mb-0.5 md:mb-1">1</div>
              <div className="text-[9px] md:text-xs text-slate-600">Internship</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all">
            <CardContent className="p-2 md:p-4 text-center">
              <div className="text-xl md:text-3xl font-bold text-purple-600 mb-0.5 md:mb-1">1</div>
              <div className="text-[9px] md:text-xs text-slate-600">Organization</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}