import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/app/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";
import { BarChart3, Database, TrendingUp, FolderOpen, ExternalLink, Calendar, X, ChevronDown, ChevronUp } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";
import { useState } from "react";

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      icon: TrendingUp,
      name: "Business Process Redesign & Optimization (DPMPTSP 02.01.01)",
      type: "Academic & Government Project",
      tools: ["Visual Paradigm Enterprise", "Google Forms", "Microsoft Word", "Gemini AI"],
      primaryTool: "bpmn",
      year: "2026",
      duration: "Selesai ✓",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjBvcHRpbWl6YXRpb258ZW58MHx8fHwxNzAzMjUwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      organization: "Tugas Besar Rekayasa Proses Bisnis (RPB) – Telkom University",
      department: "Process Excellence & System Analysis",
      location: "Bekasi / Bandung, Indonesia",
      highlights: [
        "Cross-Sector Modeling: Memetakan interaksi 5 aktor lintas sektor (DPMPTSP, Diskominfo, Bagian PBJ) dengan BPMN 2.0",
        "Bottleneck Identification: Mengidentifikasi bottleneck koordinasi lintas OPD dan pengujian sistem yang masih manual",
        "Process Simulation: Menyusun parameter simulasi berbasis biaya operasional dan kapasitas sumber daya",
        "To-Be Redesign: Mengusulkan SLA koordinasi lintas OPD, skema rapat hybrid, dan Automated Cloud Testing"
      ],
      description: [
        "Proyek ini berfokus pada analisis dan redesign proses bisnis Pengolahan, Penyajian, dan Pemanfaatan Data Informasi Perizinan di DPMPTSP Kota Bekasi. Menggunakan pemodelan BPMN As-Is/To-Be dan simulasi laboratorium, proyek ini mengidentifikasi bottleneck utama pada koordinasi lintas OPD (DPMPTSP, Diskominfo, Bagian PBJ) serta pengujian sistem yang masih manual, lalu menyusun usulan perbaikan berupa SLA koordinasi lintas OPD, skema rapat hybrid, dan modul Automated Cloud Testing untuk mengoptimalkan proses pengadaan dan pengembangan sistem informasi perizinan.",
        "Business Impact: Menghasilkan usulan redesign proses yang berpotensi menurunkan biaya proses hingga ±50% (dari Rp2.350.000 menjadi ±Rp850.000 per instance), mempercepat waktu penyelesaian proyek 4-8 hari kerja, serta mempercepat SLA penanganan bug vendor dari 7 hari menjadi 2-4 hari kerja — tanpa mengubah struktur regulasi yang mengikat urutan proses."
      ],
      impact: "Menghasilkan usulan redesign proses yang berpotensi menurunkan biaya proses hingga ±50% (dari Rp2.350.000 menjadi ±Rp850.000 per instance), mempercepat waktu penyelesaian proyek 4-8 hari kerja, serta mempercepat SLA penanganan bug vendor dari 7 hari menjadi 2-4 hari kerja.",
      technicalSkills: [
        "Business Process Mapping (BPMN 2.0)",
        "As-Is / To-Be Analysis",
        "Process Simulation",
        "Stakeholder Requirement Gathering",
        "Cross-OPD Coordination Analysis"
      ],
      albumEmbed: "https://imgur.com/a/xPZ4voV/embed?pub=true",
      color: "bg-orange-600",
      links: {
        "Laporan Akhir": "https://telkomuniversityofficial-my.sharepoint.com/:w:/g/personal/rizalfatihulihsan_student_telkomuniversity_ac_id/IQCNl6AglNScRq7J9eaxNDUrAdimBcfeBq9KnNmQAdD9NU8",
        "Link Documentation": "https://drive.google.com/drive/folders/1pdj7IsjDeGxYz90f4Y4biXkUNzZo2ZDq?usp=sharing"
      }
    },
    {
      icon: Database,
      name: "Aspect-Based Sentiment Analysis on Smartphone Brand Tweets",
      type: "Academic Data Science Project",
      tools: ["Python", "Scikit-Learn", "Pandas", "TF-IDF Vectorizer", "LinearSVC", "GridSearchCV", "Streamlit"],
      primaryTool: "dataanalysis",
      year: "2026",
      duration: "Selesai — Best Kelompok 🏆",
      image: "https://i.imgur.com/6t3eDD7.jpeg",
      organization: "Tugas Besar Penambangan Data — Universitas Telkom 2026",
      department: "Data Science & Machine Learning",
      location: "Bandung, Indonesia",
      architectureImage: "https://i.imgur.com/6t3eDD7.jpeg",
      highlights: [
        "Business Understanding: Menetapkan tujuan — memahami sentimen publik per aspek produk smartphone untuk mendukung monitoring reputasi brand",
        "Data Collection: Mengumpulkan sekitar 1 juta tweet mentah terkait brand smartphone",
        "Data Preparation: Cleaning, dedup (735.548 baris), handling missing values (29,97%), Text-Aspect Fusion + TF-IDF feature engineering",
        "Modeling: Membangun pipeline LinearSVC, tuning via GridSearchCV, validasi Stratified 5-Fold CV",
        "Evaluation: Uji akurasi & ROC-AUC pada data test (skema 70:30)",
        "Deployment & Reporting: Rilis dashboard Streamlit real-time + laporan akhir"
      ],
      highlightsLabel: "Analysis Lifecycle",
      description: [
        "Menerjemahkan hampir 1 juta tweet mentah menjadi insight sentimen per-aspek produk yang actionable untuk kebutuhan bisnis seperti monitoring reputasi brand.",
        "Merancang pipeline pembersihan data skala besar dan fitur Text-Aspect Fusion agar model bisa membedakan sentimen per aspek secara akurat, lalu mendeploy hasilnya sebagai dashboard real-time — meraih predikat Best Kelompok."
      ],
      impact: "Mereduksi data mentah sekitar 1 juta baris menjadi 264.451 baris bersih tanpa kehilangan konteks sentimen, menghasilkan model berakurasi 99,99% (ROC-AUC 1.0000) yang siap pakai sebagai dasar monitoring reputasi brand via dashboard interaktif.",
      achievements: [
        "Dashboard prediksi sentimen real-time (Streamlit)"
      ],
      achievementsLabel: "Output",
      technicalSkills: [
        "Data & Requirements Analysis",
        "Data Cleaning & Feature Engineering",
        "Insight Reporting",
        "Dashboard/Tool Deployment",
        "Data-Driven Decision Support"
      ],
      color: "bg-indigo-600",
      links: {}
    },
    {
      icon: Database,
      name: "MANG OLIN: Transformasi Layanan Konsultasi Online Kepegawaian",
      type: "System Analysis & UI/UX Design",
      tools: ["Figma", "Visual Paradigm", "Google Forms"],
      primaryTool: "bpmn",
      year: "2025",
      duration: "September - Desember 2025",
      image: "https://images.unsplash.com/photo-1619243142206-381c5aeda31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwZGlnaXRhbCUyMHNlcnZpY2UlMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NzI2OTg0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Perancangan sistem informasi layanan digital terpadu (SIOLIN) untuk mengotomatisasi verifikasi data, routing tiket, dan pengelolaan konsultasi ASN di lingkungan Kanreg III BKN Bandung guna mendukung tata kelola lembaga yang akuntabel (SDG 16).",
      subtitle: "Space untuk scrapbook akan ditambahkan di sini",
      highlights: [
        "End-to-End System Modeling: Merancang arsitektur sistem komprehensif melalui Use Case, 3 Activity Diagram, dan 3 Sequence Diagram untuk alur fungsional kritis (pengajuan jadwal, rating, dan unggah berkas)",
        "High-Fidelity UI/UX Development: Mendesain antarmuka publik Landing Page (Beranda, Statistik, Validator, Bank Permasalahan), alur Autentikasi, serta fungsionalitas penuh untuk Dashboard Konselor"
      ],
      impact: "Menghasilkan dokumen cetak biru (blueprint) perancangan sistem informasi yang memodernisasi workflow verifikasi data kepegawaian untuk ±300 instansi. Desain sistem berhasil memangkas birokrasi manual lewat fitur otomatisasi notifikasi multi-saluran (WhatsApp/Email API) dan validasi terdesentralisasi. Pengujian awal via System Usability Scale (SUS) menunjukkan tingkat kepuasan yang tinggi dari kacamata fungsionalitas dan kemudahan penggunaan.",
      documentation: "Dokumentasi teknis menyeluruh yang mentransformasikan proses bisnis berjalan menjadi sistem digital terintegrasi. Kontribusi mencakup pemodelan logika interaksi sistem server-side (Express.js Service Gateway & CMS) untuk trigger event pengingat otomatis Google Calendar. Desain antarmuka memprioritaskan arsitektur informasi user-centric melalui implementasi dropdown list pada Bank Permasalahan dan visualisasi data performa layanan pada komponen dashboard.",
      technicalSkills: [
        "Object-Oriented Analysis & Design (OOAD)",
        "Unified Modeling Language (UML)",
        "System Architecture Design (Three-Tier)",
        "High-Fidelity Prototyping",
        "Requirement Elicitation",
        "Usability Evaluation"
      ],
      keyInsights: [
        "Architectural Alignment: Sinkronisasi yang ketat antara diagram perilaku (behavioral diagrams) dan desain antarmuka secara drastis mengurangi potensi logic-gap pada tahap implementasi coding backend",
        "Multi-Channel Strategy: Integrasi repositori data lokal (SIDIGI) dengan gateway pesan eksternal menjadi solusi krusial untuk mengatasi hambatan keterlambatan komunikasi antar-PIC instansi",
        "Targeted UX: Penggunaan tema visual hijau tua yang segar dipadukan dengan tata letak minimalis terbukti mampu menjembatani kebutuhan aksesibilitas pengguna lintas generasi (pelajar hingga pensiunan ASN)"
      ],
      color: "bg-teal-600",
      links: {
        documentation: "https://youtu.be/b8WFEXJAEww?si=XXnVjq8ZCbccdjoD"
      }
    },
    {
      icon: Database,
      name: "Beasiswa Tracker Spreadsheet",
      type: "Excel Tool",
      tools: ["Excel", "Google Sheets", "Spreadsheet"],
      primaryTool: "dataanalysis",
      year: "2025",
      duration: "1 month",
      image: "https://i.imgur.com/v51DQoY.png",
      architectureImage: "https://i.imgur.com/v51DQoY.png",
      description: "Template spreadsheet beasiswa terstruktur yang membantu pelajar/mahasiswa memonitor proses pendaftaran beasiswa secara end-to-end dari pencatatan hingga reminder deadline.",
      highlights: [
        "Kolom lengkap: Nama Beasiswa, Link, Deadline, Status, Catatan",
        "Pantauan progres real-time dengan tanggal seleksi & pengumuman",
        "Dilengkapi panduan penggunaan untuk user-friendly",
        "Database Beasiswa untuk menyimpan informasi lengkap"
      ],
      impact: "Memberikan solusi praktis untuk membantu pengguna lebih fokus, konsisten, dan strategis dalam berburu beasiswa tanpa melewatkan deadline penting.",
      documentation: "All-in-One Tool untuk scholarship hunting dengan fitur tracking komprehensif. Template mencakup system reminder otomatis, status monitoring, dan database beasiswa yang dapat difilter dan dicari dengan mudah.",
      technicalSkills: [
        "Excel Template Design",
        "Data Organization",
        "Conditional Formatting",
        "Date & Reminder System",
        "User Interface Design",
        "Documentation Writing"
      ],
      color: "bg-purple-600",
      links: {
        template: "#",
        guide: "#"
      }
    },
    {
      icon: TrendingUp,
      name: "Analisis Kinerja Stockbit 2024",
      type: "Financial Analysis Project",
      tools: ["Power BI", "Power Query", "DAX"],
      primaryTool: "dataviz",
      year: "2024",
      duration: "1 month",
      image: "https://i.imgur.com/jVineTK.png",
      architectureImage: "https://i.imgur.com/jVineTK.png",
      description: [
        "Mengintegrasikan data keuangan, pertumbuhan nasabah, dan SDM ke dalam dashboard interaktif Power BI untuk mengungkap gap laba bersih perusahaan.",
        "Mengeksekusi data modeling (transposing & unpivoting) serta menerapkan fungsi DAX tingkat lanjut (MAXX, VALUE, SUBSTITUTE) untuk pembersihan data.",
        "Mengidentifikasi root cause gap laba bersih 38,4% akibat lonjakan biaya operasional 3x lipat, sekaligus memvalidasi korelasi stabilitas tenaga kerja muda terhadap pertumbuhan nasabah."
      ],
      highlights: [
        "Data Modeling: Transpose data keuangan & unpivot data demografi multi-tahun",
        "DAX Lanjutan: Konversi data teks/persen ke numerik (MAXX, VALUE, SUBSTITUTE)",
        "Gap Analysis: Selisih laba bersih 38,4% di bawah target",
        "HR Analytics: Analisis turnover rate tenaga kerja Gen Z/Milenial"
      ],
      impact: "Menemukan anomali biaya operasional 3x lipat sebagai penyebab utama gap laba bersih meskipun revenue melampaui target. Membuktikan efektivitas stabilitas SDM muda dalam mendukung akselerasi pertumbuhan nasabah.",
      documentation: "Dashboard 3 fokus: Financial Performance (variance analysis), Customer Growth (time-series), dan HR Demographics. Advanced Power Query: Transpose dan unpivot untuk normalisasi data time-series.",
      technicalSkills: [
        "Financial & Variance Analysis",
        "Data Modeling",
        "Time-Series Analysis"
      ],
      keyInsights: [
        "Financial: Laba bersih turun 38,4% karena lonjakan biaya operasional",
        "Growth: Pertumbuhan nasabah akseleratif year-over-year",
        "HR: Workforce didominasi Gen Z/Milenial dengan turnover rate rendah"
      ],
      color: "bg-blue-600",
      links: {
        portfolio: "https://drive.google.com/drive/u/0/folders/1j3mhPm9xWPVEF0FoeCKCWFJAlUc7rsRv"
      }
    },
    {
      icon: BarChart3,
      name: "Korelasi Korupsi, Pengangguran, & Kekayaan",
      type: "Data Visualization",
      tools: ["Tableau", "Data Analysis"],
      primaryTool: "dataviz",
      year: "2024",
      duration: "1 month",
      image: "https://i.imgur.com/NT4U4Wi.png",
      architectureImage: "https://i.imgur.com/NT4U4Wi.png",
      description: "Menyajikan korelasi antara tiga metrik ekonomi dan tata kelola (Korupsi, Pengangguran, dan Kekayaan/GDP) di tingkat global menggunakan Tableau Public.",
      highlights: [
        "Three-Way Correlation dengan Bubble Chart (3 dimensi)",
        "Custom Ranking menggunakan RANK_UNIQUE untuk top 3 negara terkorup",
        "KPI Cards dengan Measure Names/Values untuk statistik",
        "Interactive global data visualization"
      ],
      impact: "Mengungkap korelasi positif antara kekayaan negara dan tata kelola yang baik. Negara dengan GDP Per Capita tinggi konsisten berada di area korupsi & pengangguran rendah.",
      documentation: "Dashboard Tableau dengan Three-Way Correlation Analysis menggunakan Bubble Chart multi-dimensi. Implementasi Calculated Fields untuk dynamic ranking (highlight top 3 negara terkorup dengan warna merah). Teknik advanced: Measure Names/Values untuk KPI summary cards yang menampilkan Average (59.20) dan Max Corruption Index (89).",
      technicalSkills: [
        "Tableau Public",
        "Bubble Chart (Multi-dimensional)",
        "Calculated Fields & RANK_UNIQUE",
        "Measure Names/Values",
        "Conditional Formatting",
        "KPI Design"
      ],
      keyInsights: [
        "Korelasi Kekayaan-Korupsi: GDP Per Capita tinggi = korupsi & pengangguran rendah",
        "Max Corruption Index: 89 (jauh di atas rata-rata global 59.20)",
        "Visual outliers untuk anomali yang perlu analisis lanjutan"
      ],
      color: "bg-amber-600",
      links: {
        tableau: "https://public.tableau.com/app/profile/ahmad.zidan8536/viz/analisiscorruption/Dashboard1?publish=yes",
        linkedin: "https://www.linkedin.com/in/ahmad-zidan-arifin-71426b316"
      }
    },
    {
      icon: BarChart3,
      name: "B2B Executive Analytics Dashboard: Marketing & Sales Optimization",
      type: "Business Intelligence / Data Analyst",
      tools: ["Google Data Studio", "Looker Studio"],
      primaryTool: "dataviz",
      year: "2025",
      duration: "1 month",
      image: "https://i.imgur.com/wFVdKZ3.png",
      architectureImage: "https://i.imgur.com/wFVdKZ3.png",
      description: [
        "Proyek ini merupakan simulasi Business Intelligence yang berfokus pada analisis data portofolio klien B2B (BAU BAU Corp). Tujuan utamanya adalah merancang executive dashboard interaktif untuk membantu level manajemen mengevaluasi efisiensi anggaran pemasaran (marketing spend) dan memitigasi risiko pada status kontrak pelanggan.",
        "Proyek ini menjembatani data teknis dengan strategi bisnis yang dapat langsung ditindaklanjuti (actionable insights)."
      ],
      highlights: [
        "Executive Dashboard: Merancang dashboard interaktif untuk evaluasi marketing spend dan risiko kontrak pelanggan",
        "Actionable Insights: Menerjemahkan data teknis menjadi panduan taktis yang siap digunakan manajemen",
        "Cost-Efficiency Focus: Mengidentifikasi peluang penekanan biaya operasional (cost-efficiency)",
        "Churn Prevention: Memitigasi risiko kehilangan pelanggan melalui analisis status kontrak"
      ],
      impact: "Menghasilkan instrumen visual yang menyederhanakan data kompleks menjadi panduan taktis, memungkinkan manajemen membuat keputusan data-driven untuk menekan biaya operasional (cost-efficiency) dan mencegah kehilangan pelanggan (churn rate).",
      technicalSkills: [
        "Business Intelligence",
        "Executive Dashboard Design",
        "Data Visualization",
        "Marketing Analytics",
        "Actionable Insights Reporting"
      ],
      color: "bg-cyan-600",
      links: {
        documentation: "https://datastudio.google.com/u/0/reporting/ccfae570-d789-460f-9eab-0cfc8e5ab304/page/4cw5F"
      }
    }
  ];

  return (
    <section id="projects" className="py-6 md:py-10 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">Projects</h2>
          <div className="w-16 md:w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-amber-50 border-2 border-amber-200">
            <TabsTrigger value="all" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-xs md:text-sm">
              All
            </TabsTrigger>
            <TabsTrigger value="dataviz" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-xs md:text-sm">
              Data Visualization
            </TabsTrigger>
            <TabsTrigger value="dataanalysis" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-xs md:text-sm">
              Data Analysis
            </TabsTrigger>
            <TabsTrigger value="bpmn" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-xs md:text-sm">
              Business Process
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </MobileCarousel>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:block">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
              
              {/* Toggle Button */}
              {projects.length > 3 && (
                <div className="flex justify-center mt-6">
                  <Button 
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    {showAllProjects ? (
                      <>
                        Tutup
                        <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Lihat {projects.length - 3} Project Lainnya
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="dataviz" className="space-y-6">
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {projects.filter(p => p.primaryTool === "dataviz").map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </MobileCarousel>
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.primaryTool === "dataviz").map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dataanalysis" className="space-y-6">
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {projects.filter(p => p.primaryTool === "dataanalysis").map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </MobileCarousel>
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.primaryTool === "dataanalysis").map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bpmn" className="space-y-6">
            <div className="md:hidden">
              <MobileCarousel slidesToShow={1.2}>
                {projects.filter(p => p.primaryTool === "bpmn").map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </MobileCarousel>
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.primaryTool === "bpmn").map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const Icon = project.icon;
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl relative overflow-hidden bg-white cursor-pointer">
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${project.color}`}></div>
            
            <CardContent className="p-4">
              <div className="flex flex-col">
                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${project.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight mb-1">
                      {project.name}
                    </h3>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] px-2 py-0.5">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                {/* Year */}
                <div className="flex items-center gap-2 text-xs text-slate-600 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.year} • {project.duration}</span>
                </div>

                {/* View Details Button - Visual Only */}
                <div className="w-full text-center py-2 px-3 text-xs border-2 border-amber-300 text-amber-700 rounded-md bg-white hover:bg-amber-50 transition-colors flex items-center justify-center gap-1.5">
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span className="font-medium">View Documentation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute top-4 right-4 rounded-full p-1 bg-white hover:bg-gray-100 border-2 border-gray-300 transition-colors z-50">
          <X className="w-5 h-5 text-gray-600" />
        </DialogClose>
        
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 pr-8">
            <Icon className="w-6 h-6 text-amber-600" />
            {project.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {/* Scrapbook iframe for MANG OLIN */}
          {project.subtitle && (
            <div className="rounded-lg overflow-hidden border-2 border-teal-200">
              <iframe
                allowFullScreen
                allow="clipboard-write"
                scrolling="no"
                className="w-full h-[400px]"
                style={{ border: '1px solid lightgray' }}
                src="https://heyzine.com/flip-book/abc3e6faa9.html"
                title="MANG OLIN Scrapbook"
              />
            </div>
          )}

          {/* Imgur album embed */}
          {project.albumEmbed && (
            <div className="rounded-lg overflow-hidden border-2 border-orange-200">
              <iframe
                src={project.albumEmbed}
                className="w-full"
                style={{ height: "420px", border: "none" }}
                allowFullScreen
                title="Foto Dokumentasi Proyek"
              />
              <p className="text-xs text-center text-slate-500 bg-orange-50 py-2">Foto Dokumentasi Proyek</p>
            </div>
          )}

          {/* Architecture/Scrapbook image for projects that have one */}
          {project.architectureImage && (
            <div className="rounded-lg overflow-hidden border-2 border-amber-200">
              <img
                src={project.architectureImage}
                alt="Project Preview"
                className="w-full object-cover"
              />
              <p className="text-xs text-center text-slate-500 bg-amber-50 py-2">Tampilan & Dokumentasi Proyek</p>
            </div>
          )}

          {/* Scrapbook Placeholder for projects still in progress */}
          {project.hasScrapbook && !project.architectureImage && (
            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg">
              <p className="text-sm text-center text-orange-700 font-medium italic">📊 Space untuk Laporan Proyek</p>
              <p className="text-xs text-center text-slate-500 mt-1">Dokumentasi laporan akan ditambahkan di sini</p>
            </div>
          )}

          {/* Project Info */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-amber-50 rounded-lg">
            {project.organization && (
              <div className="col-span-2">
                <span className="text-xs text-slate-600">Organization</span>
                <p className="font-semibold text-slate-900 text-sm">{project.organization}</p>
              </div>
            )}
            {project.department && (
              <div className="col-span-2">
                <span className="text-xs text-slate-600">Department</span>
                <p className="font-semibold text-slate-900 text-sm">{project.department}</p>
              </div>
            )}
            <div>
              <span className="text-xs text-slate-600">Type</span>
              <p className="font-semibold text-slate-900">{project.type}</p>
            </div>
            <div>
              <span className="text-xs text-slate-600">Year</span>
              <p className="font-semibold text-slate-900">{project.year}</p>
            </div>
            {project.location && (
              <div className="col-span-2">
                <span className="text-xs text-slate-600">Location</span>
                <p className="font-semibold text-slate-900 text-sm">{project.location}</p>
              </div>
            )}
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">{project.highlightsLabel || "Key Highlights"}</h4>
            <ul className="space-y-1.5">
              {project.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-amber-600 mt-0.5">★</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities - if available */}
          {project.description && Array.isArray(project.description) && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Responsibilities</h4>
              <ul className="space-y-1.5">
                {project.description.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-amber-600 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Impact & Results</h4>
            <p className="text-slate-700 text-sm leading-relaxed bg-green-50 border-l-4 border-green-500 p-3 rounded">
              {project.impact}
            </p>
          </div>

          {/* Key Achievements - if available */}
          {project.achievements && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">{project.achievementsLabel || "Key Achievements"}</h4>
              <div className="space-y-2">
                {project.achievements.map((achievement: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-sm bg-green-50 border-l-4 border-green-500 p-3 rounded">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.documentation && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Technical Documentation</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{project.documentation}</p>
            </div>
          )}

          {project.tools && project.tools.length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool: string, toolIndex: number) => (
                  <Badge key={toolIndex} className="bg-amber-100 text-amber-800 border-amber-300">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Technical Skills - if available */}
          {project.technicalSkills && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Technical Skills Applied</h4>
              <div className="flex flex-wrap gap-2">
                {project.technicalSkills.map((skill: string, skillIndex: number) => (
                  <Badge key={skillIndex} className="bg-blue-100 text-blue-800 border-blue-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Key Insights - if available */}
          {project.keyInsights && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Key Insights</h4>
              <div className="space-y-2">
                {project.keyInsights.map((insight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-sm bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-slate-700">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.links && Object.keys(project.links).length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Links & Resources</h4>
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}