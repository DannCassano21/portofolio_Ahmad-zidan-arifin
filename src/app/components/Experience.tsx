import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/app/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";
import { Briefcase, Calendar, FolderOpen, X, ChevronDown, ChevronUp, Expand, ExternalLink, Instagram, Globe } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";
import { useState } from "react";

export function Experience() {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const experiences = [
    {
      role: "Data & Research Analyst",
      organization: "Proyek Sosial CAKRA",
      department: "Research & Data Analysis",
      program: "CAKRA: AI Literacy & Character Building",
      type: "social",
      period: "2026",
      duration: "8 weeks",
      location: "SMPK Kalam Kudus, Bandung",
      image: "https://i.imgur.com/PUoU2lj.jpeg",
      subtitle: "Ekosistem edukasi yang mengintegrasikan Generative AI dengan nilai Pancasila sebagai filter etika bagi siswa menengah di Bandung",
      highlights: [
        "Multidisciplinary Collaboration: Memimpin riset dalam tim lintas fungsi (8 orang) untuk menyelenggarakan workshop intensif bagi 50 siswa",
        "Data-Driven Strategy: Merancang instrumen evaluasi (pre/post-test) dan survei kepuasan yang terintegrasi dalam alur acara",
        "High Engagement: Mencapai partisipasi survei 100% melalui pendekatan komunikasi yang ringan dan teknik gamification",
        "Ethical Framework: Mengembangkan CAKRA Compass sebagai standar etika penggunaan AI bagi pelajar"
      ],
      description: [
        "Melakukan riset awal terkait literasi digital siswa SMA di Bandung",
        "Bertanggung jawab pada pengumpulan data survei dan evaluasi dampak proyek sosial edukasi",
        "Mengelola fase Persiapan (Minggu 1–2) dan Evaluasi & Serah Terima (Minggu 11–12)",
        "Mendukung implementasi proyek yang berfokus pada SDG 4 (Quality Education) dengan nilai-nilai Pancasila"
      ],
      achievements: [
        "Berhasil meningkatkan literasi digital dan pemahaman etika AI berbasis Pancasila pada 50 peserta",
        "Data menunjukkan 80%+ siswa mampu mengimplementasikan prinsip citing dan cross-check pada output AI",
        "Proyek menghasilkan komunitas aktif CAKRA Care untuk mentorship berkelanjutan"
      ],
      impact: "Berhasil meningkatkan literasi digital dan pemahaman etika AI berbasis Pancasila pada 50 peserta. Data menunjukkan 80%+ siswa mampu mengimplementasikan prinsip citing dan cross-check pada output AI. Proyek menghasilkan komunitas aktif CAKRA Care untuk mentorship berkelanjutan.",
      technicalDoc: [
        "Landing Page responsif (HTML/CSS/JS)",
        "E-Book Panduan interaktif",
        "Automated Feedback System (Google Forms)",
        "Komunitas Digital via WhatsApp/Telegram"
      ],
      tools: ["Google Forms", "Gemini AI", "NotebookLM", "Figma", "HTML/CSS/JS"],
      skills: ["Data & Research Analysis", "Survey Design", "Event Coordination", "Team Collaboration", "Stakeholder Engagement"],
      insights: [
        "User-Centric: Analogi nilai Pancasila terbukti lebih efektif dalam menanamkan etika digital pada remaja dibandingkan teori formal",
        "Productivity: Penggunaan prompting yang terarah meningkatkan efisiensi riset akademik siswa tanpa mengurangi integritas hasil karya"
      ],
      links: {
        web: "https://www.cakra-edu.site/",
        instagram: "https://www.instagram.com/cakraproject.id?igsh=dTBmZ2szNnFlbmJ6"
      },
      color: "bg-teal-600"
    },
    {
      role: "BKN Intern",
      organization: "BKN Pusat",
      department: "Direktorat PDPI",
      type: "internship",
      period: "Aug 2025 - Sep 2025",
      duration: "1 month",
      location: "Jakarta, Indonesia",
      image: "https://i.imgur.com/7qoUkjZ.png",
      description: [
        "Mengolah dan menganalisis data kependudukan dan ASN periode 2021–2024 dari 548 instansi pemerintah",
        "Menyusun dashboard visualisasi data menggunakan Excel dan tools BI untuk penyajian data yang informatif",
        "Mempelajari dan mendokumentasikan alur pemrosesan database ASN skala nasional",
        "Berkolaborasi dengan tim untuk memastikan akurasi dan konsistensi data"
      ],
      achievements: [
        "Berhasil memproses 548 dataset instansi dengan tingkat akurasi 99%",
        "Membuat 5+ dashboard interaktif untuk monitoring data ASN",
        "Mengurangi waktu processing data sebesar 30% melalui optimasi workflow"
      ],
      skills: ["Excel", "Data Processing", "Dashboard", "Data Visualization", "Government Data"],
      color: "bg-blue-600"
    },
    {
      role: "Fundraising PIC",
      organization: "UKM Search",
      department: "Fundraising",
      program: "Java Business Contest 2025",
      type: "organization",
      period: "Apr 2025 - Dec 2025",
      duration: "9 months",
      location: "Bandung, Indonesia",
      image: "https://i.imgur.com/7qgTAlR.png",
      description: [
        "Mengelola database perusahaan sponsor secara terstruktur dan terintegrasi",
        "Membuat dashboard monitoring fundraising untuk tracking progress real-time",
        "Berhasil memperoleh fresh money senilai Rp2.250.000 dari sponsor",
        "Melakukan koordinasi dengan tim internal dan komunikasi dengan perusahaan sponsor"
      ],
      achievements: [
        "Berhasil memperoleh fresh money senilai Rp2.250.000 dari sponsor",
        "Mengelola database 100+ perusahaan dengan zero data loss",
        "Meningkatkan response rate sponsor melalui systematic follow-up"
      ],
      skills: ["Database Management", "Excel", "Business Development", "Communication", "Project Management"],
      color: "bg-green-600"
    },
    {
      role: "Anggota",
      organization: "UKM Search Tel-U",
      department: "Study Club Essay",
      program: "Study Club Essay",
      type: "organization",
      period: "2024 - 2025",
      duration: "1 year",
      location: "Bandung, Indonesia",
      image: "https://i.imgur.com/NN6UTlP.png",
      description: [
        "Aktif mengikuti kegiatan pengembangan kompetensi menulis dan diskusi akademik",
        "Berkontribusi sebagai anggota tim fundraising dalam mendukung pendanaan lomba Java Business Contest (JBC) 2025",
        "Berpartisipasi dalam program pelatihan essay writing dan critical thinking",
        "Mendukung kegiatan organisasi melalui kontribusi aktif dalam event dan fundraising"
      ],
      achievements: [
        "Terlibat aktif dalam tim fundraising JBC 2025",
        "Mengembangkan kemampuan writing dan academic discussion",
        "Berkontribusi dalam mendukung event skala universitas"
      ],
      skills: ["Academic Writing", "Teamwork", "Fundraising", "Critical Thinking", "Communication"],
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-6 md:py-10 px-4 md:px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">Experience</h2>
          <div className="w-16 md:w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-white border-2 border-amber-200">
            <TabsTrigger value="all" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="internship" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Internship
            </TabsTrigger>
            <TabsTrigger value="organization" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Organization
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} />
                ))}
              </MobileCarousel>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:block">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllExperience ? experiences : experiences.slice(0, 3)).map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} />
                ))}
              </div>
              
              {/* Toggle Button */}
              {experiences.length > 3 && (
                <div className="flex justify-center mt-6">
                  <Button 
                    onClick={() => setShowAllExperience(!showAllExperience)}
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    {showAllExperience ? (
                      <>
                        Tutup
                        <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Lihat {experiences.length - 3} Program Lainnya
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="internship" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {experiences.filter(exp => exp.type === "internship").map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} />
                ))}
              </MobileCarousel>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.filter(exp => exp.type === "internship").map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="organization" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {experiences.filter(exp => exp.type === "organization").map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} />
                ))}
              </MobileCarousel>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.filter(exp => exp.type === "organization").map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }: { experience: any }) {
  const [imageDialogOpen, setImageDialogOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl relative overflow-hidden bg-white cursor-pointer">
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${experience.color}`}></div>
            
            <CardContent className="p-4">
              <div className="flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-full ${experience.color} flex items-center justify-center flex-shrink-0`}>
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight mb-1">
                      {experience.program || experience.organization}
                    </h3>
                    <p className="text-xs text-slate-600 mb-1.5">
                      {experience.role}
                    </p>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] px-2 py-0.5">
                      {experience.type === "internship" ? "Internship" : experience.type === "social" ? "Social Project" : "Organization"}
                    </Badge>
                  </div>
                </div>
                
                {/* Period & Location */}
                <div className="flex items-center gap-2 text-xs text-slate-600 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{experience.period} • {experience.duration}</span>
                </div>

                {/* View Details Button - Visual Only */}
                <div className="w-full text-center py-2 px-3 text-xs border-2 border-amber-300 text-amber-700 rounded-md bg-white hover:bg-amber-50 transition-colors flex items-center justify-center gap-1.5">
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span className="font-medium">View Details</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute top-4 right-4 rounded-full p-1 bg-white hover:bg-gray-100 border-2 border-gray-300 transition-colors z-50">
          <X className="w-5 h-5 text-gray-600" />
        </DialogClose>
        
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 pr-8">
            <Briefcase className="w-6 h-6 text-amber-600" />
            {experience.program || experience.role}
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            Detail pengalaman kerja saya di {experience.organization}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {/* Image Placeholder for Scrapbook */}
          <div className="relative group">
            <div
              onClick={() => setImageDialogOpen(true)}
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img
                src={experience.image}
                alt={experience.organization}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2">
                  <Expand className="w-5 h-5 text-slate-700" />
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-1">Klik gambar untuk melihat ukuran penuh</p>
          </div>

          {/* Subtitle - only for CAKRA */}
          {experience.subtitle && (
            <div className="p-4 bg-teal-50 border-l-4 border-teal-500 rounded">
              <p className="text-sm text-slate-700 italic">{experience.subtitle}</p>
            </div>
          )}

          {/* Experience Info */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-amber-50 rounded-lg">
            {experience.program && (
              <div className="col-span-2">
                <span className="text-xs text-slate-600">Program</span>
                <p className="font-semibold text-slate-900 text-sm">{experience.program}</p>
              </div>
            )}
            <div>
              <span className="text-xs text-slate-600">Organization</span>
              <p className="font-semibold text-slate-900 text-sm">{experience.organization}</p>
            </div>
            <div>
              <span className="text-xs text-slate-600">Department</span>
              <p className="font-semibold text-slate-900 text-sm">{experience.department}</p>
            </div>
            <div>
              <span className="text-xs text-slate-600">Period</span>
              <p className="font-semibold text-slate-900 text-sm">{experience.period}</p>
            </div>
            <div>
              <span className="text-xs text-slate-600">Duration</span>
              <p className="font-semibold text-slate-900 text-sm">{experience.duration}</p>
            </div>
            <div>
              <span className="text-xs text-slate-600">Location</span>
              <p className="font-semibold text-slate-900 text-sm">{experience.location}</p>
            </div>
            <div>
              <span className="text-xs text-slate-600">Type</span>
              <Badge className={experience.type === "internship" ? "bg-blue-100 text-blue-700" : experience.type === "social" ? "bg-teal-100 text-teal-700" : "bg-green-100 text-green-700"}>
                {experience.type === "internship" ? "Internship" : experience.type === "social" ? "Social Project" : "Organization"}
              </Badge>
            </div>
          </div>

          {/* Key Highlights - only for CAKRA */}
          {experience.highlights && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Key Highlights</h4>
              <div className="space-y-2">
                {experience.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-sm bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                    <span className="text-blue-600 font-bold">★</span>
                    <span className="text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Responsibilities</h4>
            <ul className="space-y-2">
              {experience.description.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact & Results - only for CAKRA */}
          {experience.impact && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Impact & Results</h4>
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-sm text-slate-700">{experience.impact}</p>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Key Achievements</h4>
            <div className="space-y-2">
              {experience.achievements.map((achievement: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-sm bg-green-50 border-l-4 border-green-500 p-3 rounded">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-slate-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Documentation - only for CAKRA */}
          {experience.technicalDoc && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Technical Documentation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {experience.technicalDoc.map((doc: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-sm bg-purple-50 border border-purple-200 p-3 rounded">
                    <span className="text-purple-600">({idx + 1})</span>
                    <span className="text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Skills Section - Enhanced for CAKRA */}
          {experience.tools && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {experience.tools.map((tool: string, toolIndex: number) => (
                  <Badge key={toolIndex} className="bg-orange-100 text-orange-800 border-orange-300">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">{experience.tools ? "Skills Developed" : "Skills Developed"}</h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill: string, skillIndex: number) => (
                <Badge key={skillIndex} className="bg-amber-100 text-amber-800 border-amber-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Insights - only for CAKRA */}
          {experience.insights && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Key Insights</h4>
              <div className="space-y-2">
                {experience.insights.map((insight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-sm bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                    <span className="text-yellow-600 font-bold">💡</span>
                    <span className="text-slate-700">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links & Resources - only for CAKRA */}
          {experience.links && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Links & Resources</h4>
              <div className="flex flex-wrap gap-3">
                {experience.links.web && (
                  <a
                    href={experience.links.web.startsWith('http') ? experience.links.web : `https://${experience.links.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {experience.links.instagram && (
                  <a
                    href={experience.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@cakraproject.id</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Full-size Image Dialog */}
        <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
          <DialogContent className="max-w-4xl p-2">
            <DialogHeader className="sr-only">
              <DialogTitle>{experience.organization}</DialogTitle>
            </DialogHeader>
            <DialogClose className="absolute top-2 right-2 rounded-full p-1 bg-white hover:bg-gray-100 border-2 border-gray-300 transition-colors z-50">
              <X className="w-5 h-5 text-gray-600" />
            </DialogClose>
            <div className="relative">
              <img
                src={experience.image}
                alt={experience.organization}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}