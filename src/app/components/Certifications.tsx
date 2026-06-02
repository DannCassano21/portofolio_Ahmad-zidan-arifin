import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/app/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";
import { Award, Calendar, Building2, FolderOpen, FileCheck, X, ChevronDown, ChevronUp, Expand } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";
import { useState } from "react";

export function Certifications() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  const certifications = [
    {
      name: "Fundamental SQL Using FUNCTION and GROUP BY",
      provider: "DQLab",
      year: "2026",
      grade: "Sertifikat kelulusan Fundamental SQL",
      category: "Data Skills",
      color: "bg-teal-600",
      image: "https://i.imgur.com/LY0iO8C.png",
      documentation: "Telah menyelesaikan modul Fundamental SQL Using FUNCTION and GROUP BY. Sertifikat ini mencakup pemahaman dasar SQL dengan fokus pada penggunaan fungsi agregasi dan perintah GROUP BY untuk analisis data.",
      modules: [
        "Fungsi Agregasi: SUM, COUNT, AVG, MIN, MAX",
        "GROUP BY: Pengelompokan data untuk analisis",
        "Kombinasi Fungsi & GROUP BY: Interpretasi hasil query",
        "Praktik Query Dasar: SELECT, WHERE, ORDER BY"
      ],
      skills: ["SQL SELECT & WHERE", "Fungsi Agregasi (SUM, COUNT, AVG, MIN, MAX)", "GROUP BY", "ORDER BY", "Data Query & Interpretation"]
    },
    {
      name: "Master Data Analysis with Microsoft Excel & Power BI",
      provider: "Udemy",
      year: "2025",
      grade: "Certificate of Completion",
      category: "Data Analysis & Business Intelligence",
      color: "bg-blue-600",
      image: "https://i.imgur.com/9Ml2MKa.png",
      documentation: "Telah menyelesaikan kursus Master Data Analysis with Microsoft Excel & Power BI dengan total durasi 32,5 jam. Sertifikat ini mencakup keterampilan lanjutan dalam pengolahan data menggunakan Excel dan visualisasi data dengan Power BI.",
      duration: "32.5 hours",
      modules: [
        "Advanced Excel Functions: Lookup, PivotTable, Conditional Formatting",
        "Power BI: Data Modeling, DAX Functions, Interactive Dashboards",
        "Data Analysis: Cleaning, Transformation, Visualization, Interpretation"
      ],
      skills: ["Microsoft Excel", "Advanced Functions", "PivotTable", "Data Cleaning", "Power BI", "Data Modeling", "DAX", "Dashboard Design", "Data Visualization", "Reporting"]
    },
    {
      name: "Intermediate Excel",
      provider: "PT Learnbyte Edukarya Nusantara",
      year: "2025",
      grade: "Grade A",
      category: "Data Skills",
      color: "bg-amber-600",
      image: "https://i.imgur.com/95x2O5i.png",
      documentation: "Telah menyelesaikan proyek akhir Intermediate Excel dengan predikat Grade A. Sertifikat ini mencakup pelatihan lanjutan Excel dengan fokus pada fungsi lookup, PivotTable, dan analisis data.",
      modules: [
        "Fungsi Lookup Lanjutan: VLOOKUP, HLOOKUP, INDEX MATCH, dan kombinasi logika TRUE/FALSE",
        "PivotTable & Data Visualization: Slicer, Calculated Field, Timeline, Conditional Formatting",
        "Analisis Data: Show Value As, Lookup kiri-kanan, interpretasi hasil"
      ],
      skills: ["VLOOKUP", "HLOOKUP", "INDEX MATCH", "PivotTable", "Slicer", "Calculated Field", "Conditional Formatting", "Data Analysis"]
    },
    {
      name: "Data Visualization with Microsoft Excel",
      provider: "MySkill",
      year: "2025",
      category: "Data Visualization",
      color: "bg-orange-600",
      image: "https://i.imgur.com/GJ8MTDJ.png",
      documentation: "Pelatihan komprehensif tentang teknik visualisasi data menggunakan Excel, termasuk pembuatan dashboard interaktif, chart optimization, dan storytelling dengan data.",
      skills: ["Dashboard Creation", "Chart Design", "Data Storytelling", "Interactive Viz"]
    },
    {
      name: "English Conversation Program",
      provider: "LPIA",
      year: "2024",
      category: "Language",
      color: "bg-red-600",
      image: "https://i.imgur.com/2TO6BWr.png",
      documentation: "Program pelatihan bahasa Inggris untuk meningkatkan kemampuan komunikasi verbal dan tertulis dalam konteks profesional dan bisnis.",
      skills: ["Business Communication", "Presentation Skills", "Professional Writing"]
    }
  ];

  return (
    <section id="certifications" className="py-6 md:py-10 px-4 md:px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">Certifications</h2>
          <div className="w-16 md:w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-white border-2 border-amber-200">
            <TabsTrigger value="all" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Data Skills
            </TabsTrigger>
            <TabsTrigger value="viz" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Visualization
            </TabsTrigger>
            <TabsTrigger value="language" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Language
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {certifications.map((cert, index) => (
                  <CertCard key={index} cert={cert} />
                ))}
              </MobileCarousel>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:block">
              <div className="grid md:grid-cols-3 gap-6">
                {(showAllCerts ? certifications : certifications.slice(0, 3)).map((cert, index) => (
                  <CertCard key={index} cert={cert} />
                ))}
              </div>
              
              {/* Toggle Button */}
              {certifications.length > 3 && (
                <div className="flex justify-center mt-6">
                  <Button 
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    {showAllCerts ? (
                      <>
                        Tutup
                        <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Lihat {certifications.length - 3} Sertifikat Lainnya
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {certifications
                  .filter(cert => cert.category === "Data Skills")
                  .map((cert, index) => (
                    <CertCard key={index} cert={cert} />
                  ))}
              </MobileCarousel>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {certifications
                .filter(cert => cert.category === "Data Skills")
                .map((cert, index) => (
                  <CertCard key={index} cert={cert} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="viz" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {certifications
                  .filter(cert => cert.category === "Data Visualization")
                  .map((cert, index) => (
                    <CertCard key={index} cert={cert} />
                  ))}
              </MobileCarousel>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {certifications
                .filter(cert => cert.category === "Data Visualization")
                .map((cert, index) => (
                  <CertCard key={index} cert={cert} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="language" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {certifications
                  .filter(cert => cert.category === "Language")
                  .map((cert, index) => (
                    <CertCard key={index} cert={cert} />
                  ))}
              </MobileCarousel>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {certifications
                .filter(cert => cert.category === "Language")
                .map((cert, index) => (
                  <CertCard key={index} cert={cert} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: any }) {
  const [imageDialogOpen, setImageDialogOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl relative overflow-hidden bg-white cursor-pointer">
            <div className={`absolute top-0 left-0 right-0 h-2 ${cert.color}`}></div>
            
            <CardContent className="p-0">
              {/* Image Header */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-700" />
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className="absolute bottom-2 right-2 bg-white/90 text-slate-900 border border-slate-300 text-[10px] px-2 py-0.5"
                >
                  {cert.category}
                </Badge>
              </div>

              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                    {cert.name}
                  </h3>
                  
                  <div className="space-y-1.5 mb-3 text-xs">
                    <div className="flex items-center justify-center gap-2 text-slate-600">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{cert.provider}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-slate-600">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  {/* View Details Button - Visual Only */}
                  <div className="w-full text-center py-2 px-3 text-xs border-2 border-amber-300 text-amber-700 rounded-md bg-white hover:bg-amber-50 transition-colors flex items-center justify-center gap-1.5">
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span className="font-medium">View Documentation</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute top-4 right-4 rounded-full p-1 bg-white hover:bg-gray-100 border-2 border-gray-300 transition-colors z-50">
          <X className="w-5 h-5 text-gray-600" />
        </DialogClose>
        
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 pr-8">
            <Award className="w-5 h-5 text-amber-600" />
            {cert.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            Detail sertifikat dan informasi pelatihan
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {/* Clickable Image in Modal */}
          <div className="relative group">
            <div 
              onClick={() => setImageDialogOpen(true)}
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img 
                src={cert.image} 
                alt={cert.name}
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

          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Certificate Information</h4>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between">
                <span className="font-medium">Provider:</span>
                <span>{cert.provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Year:</span>
                <span>{cert.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Category:</span>
                <Badge className="bg-amber-100 text-amber-800 text-xs">{cert.category}</Badge>
              </div>
              {cert.duration && (
                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>{cert.duration}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Description</h4>
            <p className="text-slate-700 text-sm leading-relaxed">{cert.documentation}</p>
          </div>

          {/* Modules/Curriculum - if available */}
          {cert.modules && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Curriculum Highlights</h4>
              <ul className="space-y-2">
                {cert.modules.map((module: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-amber-50 p-2 rounded">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Grade - if available */}
          {cert.grade && (
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-green-700">Achievement:</span> {cert.grade}
              </p>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Skills Acquired</h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs border-amber-300 text-amber-700">
                  <FileCheck className="w-3 h-3 mr-1" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Full-size Image Dialog */}
        <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
          <DialogContent className="max-w-4xl p-2">
            <DialogHeader className="sr-only">
              <DialogTitle>{cert.name}</DialogTitle>
            </DialogHeader>
            <DialogClose className="absolute top-2 right-2 rounded-full p-1 bg-white hover:bg-gray-100 border-2 border-gray-300 transition-colors z-50">
              <X className="w-5 h-5 text-gray-600" />
            </DialogClose>
            <div className="relative">
              <img 
                src={cert.image} 
                alt={cert.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}