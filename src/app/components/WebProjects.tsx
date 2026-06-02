import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/app/components/ui/dialog";
import { Globe, FolderOpen, ExternalLink, Code, Calendar, X } from "lucide-react";

export function WebProjects() {
  const webProjects = [
    {
      name: "Website TK Balqis Cendekia 🎓",
      description: "Website berbasis React dengan desain ceria dan responsif, memudahkan orang tua mencari info dan mendaftarkan anak secara online. Fitur utama: form terintegrasi WhatsApp, tabel perbandingan program TK A & TK B, galeri prestasi interaktif (25+ pencapaian 2022–2025), serta floating WhatsApp button.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons", "React Router"],
      year: "2025",
      image: "https://i.imgur.com/QZtTB7P.png",
      highlights: [
        "Modern & Interactive: React + Tailwind CSS dengan desain ceria",
        "WhatsApp Integration: Form pendaftaran langsung ke WhatsApp",
        "Program Comparison: Tabel perbandingan TK A & TK B yang informatif",
        "Interactive Gallery: 25+ prestasi (2022–2025) dengan animasi Framer Motion",
        "Floating WhatsApp Button: Akses cepat untuk konsultasi",
        "Fully Responsive: Optimized untuk mobile & desktop"
      ],
      businessAnalysis: {
        title: "Business Analysis & Process Improvement",
        highlights: [
          "Identifikasi kebutuhan orang tua: akses info cepat, pendaftaran mudah, transparansi program",
          "Solusi strategis: WhatsApp integration untuk pendaftaran instan",
          "Interactive gallery dengan 25+ prestasi (2022-2025) untuk brand trust",
          "Otomatisasi komunikasi & pendaftaran mengurangi bottleneck administrasi"
        ],
        impact: "Prototipe digital transformasi bisnis pendidikan yang mengubah cara TK Balqis berinteraksi dengan orang tua. Mengurangi beban administrasi manual, meningkatkan engagement melalui website responsif & interaktif, serta memperkuat brand trust dengan visualisasi prestasi yang menarik.",
        documentation: "Website dirancang dengan pendekatan Business Analysis untuk menangkap pain points (administrasi rumit & kurang transparansi) dan merancang solusi value-driven berbasis teknologi. Implementasi comparison table TK A/B untuk transparansi program, WhatsApp integration untuk komunikasi instan, dan interactive gallery dengan Framer Motion untuk engagement. Platform ini bukan sekadar media informasi, tapi ecosystem digital yang mendukung efisiensi proses dan kepercayaan orang tua.",
        skills: [
          "Business Requirements Analysis",
          "Process Improvement & Automation",
          "User Experience Design",
          "Stakeholder Communication",
          "AI-Assisted Prototyping",
          "Value-Driven Solution Design"
        ],
        insights: [
          "User-Centric Growth: Website responsif & interaktif meningkatkan engagement orang tua",
          "Value-Driven Outcomes: Visualisasi prestasi memperkuat brand trust & transparansi",
          "Operational Efficiency: Otomatisasi pendaftaran mengurangi bottleneck administrasi",
          "Scalable Future: Potensi ekspansi ke reminder akademik, laporan anak, payment online"
        ]
      },
      color: "bg-green-600",
      links: {
        live: "https://tkbalqiscendekia.sch.id/",
      }
    },
  ];

  return (
    <section id="web-projects" className="py-6 md:py-10 px-4 md:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Website Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {webProjects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div>
                  <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl relative overflow-hidden bg-white cursor-pointer">
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${project.color}`}></div>
                    
                    <CardContent className="p-3">
                      {/* Compact Vertical Layout */}
                      <div className="flex flex-col items-center text-center">
                        {/* Small Image */}
                        <div className={`w-full h-20 overflow-hidden rounded-lg ${project.color === 'bg-green-600' ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gradient-to-br from-blue-50 to-indigo-50'} mb-2`}>
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className={`w-8 h-8 rounded-full ${project.color} flex items-center justify-center mb-2`}>
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                        
                        <h3 className="font-bold text-slate-900 text-xs mb-2 leading-tight line-clamp-2">
                          {project.name}
                        </h3>
                        
                        <div className="flex flex-wrap gap-1 justify-center mb-2">
                          {project.tech.slice(0, 2).map((tech: string, idx: number) => (
                            <Badge 
                              key={`${project.name}-${tech}-${idx}`} 
                              variant="secondary" 
                              className={`${project.color === 'bg-green-600' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} text-[10px] px-1.5 py-0`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* View Button - Visual Only */}
                        <div className="w-full text-center py-1.5 px-2 text-[10px] border-2 border-blue-300 text-blue-700 rounded-md bg-white hover:bg-blue-50 transition-colors flex items-center justify-center gap-1">
                          <FolderOpen className="w-3 h-3" />
                          <span className="font-medium">View</span>
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
                    <Globe className="w-6 h-6 text-blue-600" />
                    {project.name}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-slate-500">
                    Detail proyek website dan informasi teknis
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  {/* Project Image */}
                  <div className="rounded-lg overflow-hidden border-2 border-blue-200">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                    <div>
                      <span className="text-xs text-slate-600">Year</span>
                      <p className="font-semibold text-slate-900 text-sm">{project.year}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-600">Status</span>
                      <Badge className="bg-green-100 text-green-700">Live</Badge>
                    </div>
                  </div>

                  {/* Business Analysis Section */}
                  <div className="border-t-2 border-blue-200 pt-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      {project.businessAnalysis.title}
                    </h3>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Highlights</h4>
                    <ul className="space-y-1.5">
                      {project.businessAnalysis.highlights.map((highlight: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-blue-600 mt-0.5">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact & Results */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Impact & Results</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{project.businessAnalysis.impact}</p>
                  </div>

                  {/* Technical Documentation */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Technical Documentation</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{project.businessAnalysis.documentation}</p>
                  </div>

                  {/* Skills Applied */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.businessAnalysis.skills.map((skill: string, idx: number) => (
                        <Badge key={idx} className="bg-green-100 text-green-800 border-green-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Insights</h4>
                    <ul className="space-y-1.5">
                      {project.businessAnalysis.insights.map((insight: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-blue-600 mt-0.5">→</span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} className="bg-blue-100 text-blue-800 border-blue-300">
                          <Code className="w-3 h-3 mr-1" />
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Links</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(project.links).map(([key, value]: [string, any]) => (
                        <Button key={key} variant="outline" size="sm" className="text-xs" asChild>
                          <a href={value} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}