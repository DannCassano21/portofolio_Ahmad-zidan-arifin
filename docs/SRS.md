# Software Requirements Specification (SRS)
## Portfolio Website - Ahmad Zidan Arifin

**Version:** 1.0  
**Date:** June 4, 2026  
**Author:** Ahmad Zidan Arifin  
**Project:** Data Analyst & Business Analyst Portfolio Website

---

## 1. Introduction

### 1.1 Purpose
Dokumen ini mendefinisikan kebutuhan sistem untuk portfolio website Ahmad Zidan Arifin yang dirancang untuk menampilkan pengalaman, proyek, dan kompetensi dalam bidang Data Analysis dan Business Analysis.

### 1.2 Scope
Website portfolio berbasis React dengan Tailwind CSS yang menampilkan:
- Informasi profesional dan personal
- Pengalaman kerja dan organisasi
- Portfolio proyek (Data Analysis, Business Process, Web Development)
- Sertifikasi profesional
- Kontak dan social media links

### 1.3 Definitions, Acronyms, and Abbreviations
- **SPA**: Single Page Application
- **UI/UX**: User Interface / User Experience
- **CTA**: Call To Action
- **CV**: Curriculum Vitae
- **CDN**: Content Delivery Network

---

## 2. Overall Description

### 2.1 Product Perspective
Website portfolio ini adalah aplikasi standalone yang berfungsi sebagai CV digital interaktif dan showcase profesional untuk rekruter, hiring manager, dan stakeholder bisnis.

### 2.2 Product Functions
- **F1**: Menampilkan profil profesional dengan statistik achievement
- **F2**: Showcase pengalaman kerja dengan filter kategori (Internship, Organization, Social Project)
- **F3**: Menampilkan portfolio proyek dengan filter tools (Excel, Tableau, Power BI, BPMN)
- **F4**: Galeri website projects dengan business analysis documentation
- **F5**: Display sertifikasi dengan kategori (Data Skills, Visualization, Language)
- **F6**: Contact information dengan direct links ke WhatsApp, LinkedIn, Email
- **F7**: Responsive design untuk mobile dan desktop
- **F8**: Interactive carousel untuk mobile view

### 2.3 User Characteristics
**Target Users:**
- Rekruter dan HR Manager
- Hiring Manager untuk posisi Data Analyst / Business Analyst
- Potential clients untuk freelance projects
- Academic advisors dan profesional network

**User Expertise:**
- Non-technical users (rekruter, HR)
- Technical users (hiring managers, fellow analysts)

---

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 Navigation & Layout
- **FR-1.1**: Website harus memiliki fixed navigation bar dengan smooth scroll
- **FR-1.2**: Navigation harus highlight active section saat scroll
- **FR-1.3**: Mobile view harus memiliki hamburger menu
- **FR-1.4**: Semua section harus accessible via navigation menu

#### 3.1.2 Hero Section
- **FR-2.1**: Menampilkan nama, role, dan tagline profesional
- **FR-2.2**: CTA buttons untuk "Connect on LinkedIn" dan "Contact Me"
- **FR-2.3**: Display statistics (Certifications, Projects, Internships)
- **FR-2.4**: CSS Lanyard dengan ID card animation (desktop only)

#### 3.1.3 About Section
- **FR-3.1**: Profile photo dengan aspect ratio square
- **FR-3.2**: Personal info (Email, Age, Location)
- **FR-3.3**: Professional bio (3 paragraphs)
- **FR-3.4**: Highlight cards: Data-driven mindset, Analytical thinking
- **FR-3.5**: Skills categorized: Data Skills, Business Skills, Tools & Technology
- **FR-3.6**: Additional competencies badges
- **FR-3.7**: CTA: "View CV" dan "View Portfolio" buttons

#### 3.1.4 Experience Section
- **FR-4.1**: Filter tabs: All, Internship, Organization
- **FR-4.2**: Experience cards dengan info: Role, Organization, Period, Location
- **FR-4.3**: Modal dialog untuk detailed view
- **FR-4.4**: Color-coded badges per experience type
- **FR-4.5**: Mobile: Horizontal carousel (1.2 slides visible)
- **FR-4.6**: Desktop: Grid layout dengan toggle "Show All"

#### 3.1.5 Projects Section
- **FR-5.1**: Filter tabs: All, Excel, Tableau, Power BI, BPMN
- **FR-5.2**: Project cards dengan: Name, Type, Tools, Year
- **FR-5.3**: Modal dialog dengan detailed documentation
- **FR-5.4**: Display: Highlights, Impact, Documentation, Skills, Insights
- **FR-5.5**: Links ke external resources (Tableau Public, Google Drive)
- **FR-5.6**: Scrapbook/Report iframe untuk project tertentu (MANG OLIN)
- **FR-5.7**: Scrapbook placeholder untuk project on-progress (DPMPTSP, Data Mining)

#### 3.1.6 Web Projects Section
- **FR-6.1**: Display web development projects
- **FR-6.2**: Business Analysis documentation per project
- **FR-6.3**: Technical stack badges
- **FR-6.4**: Live demo links

#### 3.1.7 Certifications Section
- **FR-7.1**: Filter tabs: All, Data Skills, Visualization, Language
- **FR-7.2**: Certificate cards dengan image preview
- **FR-7.3**: Modal dialog dengan curriculum details
- **FR-7.4**: Skills acquired badges per certification
- **FR-7.5**: Provider dan year information

#### 3.1.8 Contact Section
- **FR-8.1**: Contact cards: Email, LinkedIn, WhatsApp, Location
- **FR-8.2**: Direct links untuk communication channels
- **FR-8.3**: WhatsApp dengan pre-filled professional message
- **FR-8.4**: LinkedIn direct profile link

### 3.2 Non-Functional Requirements

#### 3.2.1 Performance
- **NFR-1.1**: Initial page load < 3 seconds
- **NFR-1.2**: Smooth scroll animation 60fps
- **NFR-1.3**: Image optimization (WebP format, lazy loading)
- **NFR-1.4**: Modal dialog animation < 300ms

#### 3.2.2 Usability
- **NFR-2.1**: Mobile-first responsive design
- **NFR-2.2**: Touch-friendly tap targets (min 44x44px)
- **NFR-2.3**: Readable font sizes (mobile: 14px+, desktop: 16px+)
- **NFR-2.4**: Color contrast ratio WCAG AA compliant

#### 3.2.3 Compatibility
- **NFR-3.1**: Support browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **NFR-3.2**: Responsive breakpoints: Mobile (< 768px), Tablet (768px-1024px), Desktop (> 1024px)
- **NFR-3.3**: Cross-platform: iOS, Android, Windows, macOS

#### 3.2.4 Reliability
- **NFR-4.1**: 99.9% uptime (hosting dependent)
- **NFR-4.2**: Fallback images untuk broken links
- **NFR-4.3**: Error boundaries untuk graceful degradation

#### 3.2.5 Security
- **NFR-5.1**: HTTPS only
- **NFR-5.2**: No sensitive data exposure
- **NFR-5.3**: External links dengan rel="noopener noreferrer"
- **NFR-5.4**: Content Security Policy headers

#### 3.2.6 Maintainability
- **NFR-6.1**: Component-based architecture (React)
- **NFR-6.2**: Utility-first CSS (Tailwind)
- **NFR-6.3**: Type-safe development (TypeScript ready)
- **NFR-6.4**: Version control (Git)

---

## 4. System Features

### 4.1 Interactive Filtering System
**Description**: Users dapat filter konten berdasarkan kategori  
**Priority**: High  
**Functional Requirements**:
- FR-4.1, FR-5.1, FR-7.1
- Tab-based filtering dengan visual active state
- Instant filter tanpa page reload

### 4.2 Modal Documentation System
**Description**: Detailed view untuk setiap experience/project/certification  
**Priority**: High  
**Functional Requirements**:
- Fullscreen modal dengan scrollable content
- Close button dan backdrop click untuk dismiss
- Image zoom capability

### 4.3 Mobile Carousel Navigation
**Description**: Touch-friendly horizontal scroll untuk mobile  
**Priority**: High  
**Functional Requirements**:
- Embla Carousel React implementation
- Peek next item (1.2 slides visible)
- Smooth swipe gesture

### 4.4 External Integrations
**Description**: Links ke external platforms  
**Priority**: Medium  
**Functional Requirements**:
- Google Drive untuk CV & Portfolio
- LinkedIn direct profile
- WhatsApp dengan pre-filled message
- Tableau Public dashboard
- Instagram & Website links untuk projects

---

## 5. External Interface Requirements

### 5.1 User Interfaces
- Single-page application dengan 7 main sections
- Fixed navigation bar
- Smooth scroll behavior
- Modal dialogs untuk detailed views
- Responsive grid layouts
- Interactive carousels untuk mobile

### 5.2 Hardware Interfaces
- Standard web browser pada desktop/laptop
- Touch-enabled devices (smartphones, tablets)

### 5.3 Software Interfaces
- **Frontend Framework**: React 18+
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Carousel**: Embla Carousel React
- **UI Components**: Shadcn/ui (custom)

### 5.4 Communications Interfaces
- HTTPS protocol
- REST API calls (jika ada backend future)
- External links ke Google Drive, LinkedIn, WhatsApp, Tableau Public

---

## 6. Other Requirements

### 6.1 Data Requirements
- Static content (no database required)
- Images hosted pada Imgur CDN
- Scrapbook/Reports via iframe (Heyzine flip-book)

### 6.2 Legal Requirements
- Privacy policy untuk data collection (jika ada)
- Copyright notice untuk original content
- Attribution untuk third-party resources

### 6.3 Deployment Requirements
- Static hosting (Vercel, Netlify, GitHub Pages compatible)
- Build output optimized untuk production
- Environment variables untuk configuration

---

## 7. Appendices

### 7.1 Color Palette
- **Primary**: Amber (#D97706) / Orange (#EA580C)
- **Secondary**: Teal (#0D9488), Blue (#2563EB), Green (#16A34A)
- **Neutral**: Slate shades (#F8FAFC to #0F172A)
- **Accent**: Purple (#9333EA), Pink (#EC4899)

### 7.2 Typography
- **Font Family**: System font stack (sans-serif)
- **Heading**: Bold, 2xl-4xl
- **Body**: Regular/Medium, sm-base
- **Caption**: xs-sm

### 7.3 Key Metrics (Statistics)
- Certifications: 3+
- Projects: 7+
- Internship: 1
- Organization: 1

---

**Document Control:**  
- **Version**: 1.0  
- **Last Updated**: June 4, 2026  
- **Next Review**: July 2026  
- **Status**: Approved
