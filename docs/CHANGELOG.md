# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-08-11

### Added
- **New Project: Aspect-Based Sentiment Analysis on Smartphone Brand Tweets**
  - Model LinearSVC + TF-IDF, Best Kelompok Tugas Besar Penambangan Data Universitas Telkom 2026
  - Akurasi 99,99% & ROC-AUC 1.0000, dataset ~1 juta tweet
  - Includes Analysis Lifecycle section (CRISP-DM 6 stages) & Streamlit deployment link
  - `architectureImage`: https://i.imgur.com/6t3eDD7.jpeg
  - File: `src/app/components/Projects.tsx`

- **New Project: B2B Executive Analytics Dashboard: Marketing & Sales Optimization**
  - Tools: Google Data Studio / Looker Studio
  - Image: https://i.imgur.com/wFVdKZ3.png
  - Link documentation: Looker Studio report
  - `primaryTool: "dataviz"`
  - File: `src/app/components/Projects.tsx`

- **Projects: `architectureImage` added to existing cards**
  - Stockbit: `https://i.imgur.com/jVineTK.png`
  - Korupsi: `https://i.imgur.com/NT4U4Wi.png`
  - Beasiswa Tracker: `https://i.imgur.com/v51DQoY.png`
  - Now all imgur-hosted projects display image at top of dialog

- **Projects: Imgur album embed support**
  - DPMPTSP card: album `https://imgur.com/a/xPZ4voV/embed` rendered as iframe in dialog
  - New field `albumEmbed` added to project data model
  - File: `src/app/components/Projects.tsx`

- **Experience (CAKRA): Second photo added**
  - `secondImage: "https://i.imgur.com/yKhl4UJ.jpeg"`
  - ExperienceCard updated: two photos displayed side-by-side (2-column grid) in dialog
  - File: `src/app/components/Experience.tsx`

- **About: Data Visualization & Storytelling added to Data Skills**
  - File: `src/app/components/About.tsx`

### Changed
- **Hero Section**
  - Subtitle: "Business Analyst & Data Enthusiast" → "Business & Data Analyst"
  - Description: shorter, more focused on data storytelling & decision-making
  - Font size reduced for name (`text-2xl md:text-4xl lg:text-5xl`) + `whitespace-nowrap`
  - File: `src/app/components/Hero.tsx`

- **About Section — Hello! 👋 card**
  - Bio rewritten: ketertarikan Business Analysis & Data Analytics, pengalaman BKN Pusat (Direktorat PDPI), BPMN 2.0, stakeholder communication
  - Font & spacing compacted (`text-xs md:text-sm`)
  - File: `src/app/components/About.tsx`

- **About Section — Skills**
  - Tools & Technology: added "Power BI, Tableau & Google Data Studio"; removed "Microsoft Excel & Google Sheets" (already in Data Skills)
  - Additional Competencies replaced with: Time & Priority Management, Data & Insights Communication, Stakeholder Interviewing & Requirement Elicitation, Detail-Oriented & Accuracy, Adaptability & Continuous Learning
  - File: `src/app/components/About.tsx`

- **About Section — Buttons**
  - View CV: `https://drive.google.com/file/d/14uSeP4_684XJsn8qTlta9p4oTgQXNpUV/preview`
  - View Portfolio: `https://www.canva.com/design/DAHRnQgVb2g/jjYxzFChoytgJKw3NMEEdg/view?utlId=h67b3067663#2` (migrated from Google Drive → Canva)
  - File: `src/app/components/About.tsx`

- **About Section — Statistics**
  - Organization count: 1 → 2
  - File: `src/app/components/About.tsx`

- **Projects — Filter tabs restructured**
  - Old: All, Python, Excel, Tableau, Power BI, BPMN (6 tabs)
  - New: All, Data Visualization, Data Analysis, Business Process (4 tabs)
  - `primaryTool` values updated: `dataviz` (Power BI, Tableau, Data Studio), `dataanalysis` (Python, Excel), `bpmn` (BPMN/Visual Paradigm)
  - File: `src/app/components/Projects.tsx`

- **Projects — DPMPTSP card**
  - `duration`: "On-Progress" → "Selesai ✓"
  - Description rewritten: fokus bottleneck koordinasi lintas OPD + business impact (biaya turun ±50%)
  - Links updated: Laporan Akhir (SharePoint) + Link Documentation (Drive)
  - Foto proyek embedded via `albumEmbed` (Imgur)
  - File: `src/app/components/Projects.tsx`

- **Projects — Stockbit card**
  - Description (Responsibilities) rewritten: 3 action-oriented bullets
  - Impact, highlights, technicalSkills, keyInsights updated
  - File: `src/app/components/Projects.tsx`

- **Projects — ABSA card**
  - `highlightsLabel: "Analysis Lifecycle"` — heading renamed
  - `achievementsLabel: "Output"` — section renamed
  - Responsibilities: 2 concise bullets
  - Removed: documentation, keyInsights, links
  - File: `src/app/components/Projects.tsx`

- **Experience — CAKRA card**
  - `role`: "Data & Research Analyst" → "Business Analyst & Research"
  - `duration`: "8 weeks" → "8 minggu"
  - Description, impact, skills rewritten (research-led, 100% participation, 80%+ SDG 4 outcome)
  - Removed: highlights, achievements, technicalDoc, tools, insights, links
  - `subtitle` updated: survei Turnitin 95% context
  - File: `src/app/components/Experience.tsx`

- **Experience — BKN card**
  - Responsibilities rewritten: Power BI & Tableau dashboards explicitly mentioned
  - Removed achievement: "Mengurangi waktu processing data sebesar 30%"
  - File: `src/app/components/Experience.tsx`

- **Certifications — card layout**
  - Provider & year now on one line: `"Udemy · 2025"` format
  - Removed Duration field from dialog Certificate Information
  - Removed "32,5 jam" from Udemy description
  - File: `src/app/components/Certifications.tsx`

- **Projects dialog — conditional rendering**
  - "Technical Documentation", "Tools & Technologies", "Links & Resources", "Key Achievements" sections now conditional (hidden if empty)
  - `highlightsLabel` and `achievementsLabel` fields supported for custom section headings
  - File: `src/app/components/Projects.tsx`

- **Experience dialog — conditional rendering**
  - "Key Achievements" section now conditional
  - File: `src/app/components/Experience.tsx`

---

## [1.0.1] - 2026-06-04

### Changed
- **Google Drive Links Updated**
  - Changed "View CV" button link from Google Drive folder to direct file preview
    - Old: `https://drive.google.com/drive/u/0/folders/1j3mhPm9xWPVEF0FoeCKCWFJAlUc7rsRv`
    - New: `https://drive.google.com/file/d/1QtppdTqZjWDxQD6fvoJCTYtIAUr8fpxz/preview`
  - Changed "View Portfolio" button link from Google Drive folder to direct file preview
    - Old: `https://drive.google.com/drive/u/0/folders/1j3mhPm9xWPVEF0FoeCKCWFJAlUc7rsRv`
    - New: `https://drive.google.com/file/d/1LBCD0b0M2wA2LuGbAVutiEKmvJnZs-DH/preview`
  - Updated `src/app/components/About.tsx` button onClick handlers
  - Benefits: Users can now preview CV and Portfolio directly without navigating folder structure

### Documentation
- Updated README.md contact section dengan separate CV dan Portfolio links
- Updated FSD.md About Section specifications dengan new URLs
- Updated TECHNICAL_DOCUMENTATION.md Google Drive Integration section dengan separate CV_URL dan PORTFOLIO_URL constants

---

## [1.0.0] - 2026-06-04

### Added - Initial Release

#### Core Features
- **Hero Section**
  - Professional greeting dengan nama dan role
  - Tagline: "Turning data into strategic decisions, processes into optimized solutions"
  - CTA buttons: "Connect on LinkedIn" dan "Contact Me"
  - Achievement statistics (3+ Certifications, 7+ Projects, 1 Internship)

- **About Section**
  - Profile photo (https://i.imgur.com/MeWK8H5.png)
  - Personal information: Email (ahmaadzidann@gmail.com), Age (20), Location (Bekasi, Indonesia)
  - Professional biography (3 paragraphs, responsive: 2 on mobile, 3 on desktop)
  - Highlight cards: Data-driven mindset, Analytical thinking
  - Skills categorization:
    - Data Skills (Excel, Data Reporting, Spreadsheet, Visualization)
    - Business Skills (Business Analysis, Process Monitoring, Documentation, Stakeholder Management)
    - Tools & Technology (Excel, Google Sheets, SAP, Tableau, Power BI, Visual Paradigm, Figma, Canva)
  - Additional competencies badges (6 competencies)
  - Statistics footer (Certifications, Projects, Internship, Organization)
  - CTA buttons: "View CV" dan "View Portfolio" linked to Google Drive

- **Experience Section**
  - 4 experiences: CAKRA (2026), BKN Internship (2025), Fundraising PIC (2025), UKM Search (2024-2025)
  - Filter system: All, Internship, Organization
  - Responsive layout: Desktop grid (2 columns), Mobile carousel (1.2 slides visible)
  - "Show All" toggle untuk desktop
  - Color-coded type badges (Internship: blue, Organization: purple, Social Project: green)
  - Modal dialog dengan detailed view (description, responsibilities, achievements, skills, impact)
  - External links: Instagram, Website

- **Projects Section**
  - 6 projects chronologically ordered (newest first)
  - MANG OLIN: System Analysis dengan scrapbook integration (Heyzine iframe)
  - DPMPTSP: Business Process Redesign dengan scrapbook placeholder
  - Data Mining: Massive Data Mining dengan scrapbook placeholder
  - Perlukah Menikah: Excel analysis
  - Deteksi Kebocoran Air: Excel analysis
  - BKN Analytics: Tableau dashboard
  - Filter system: All, Excel, Tableau, Power BI, BPMN
  - Responsive layout: Desktop grid (2 columns), Mobile carousel (1.2 slides visible)
  - Modal dialog dengan sections: Scrapbook, Highlights, Impact, Documentation, Skills, Insights
  - External links: Tableau Public, Google Drive

- **Web Projects Section**
  - 1 project: TK Balqis Cendekia
  - Business analysis documentation
  - Tech stack badges (HTML, CSS, JavaScript)
  - Live demo link (https://tkbalqiscendekia.site/)
  - 3-column responsive grid

- **Certifications Section**
  - 3+ certifications chronologically ordered
  - Fundamental SQL (MyEduSolve, 2026)
  - Tableau Desktop Specialist (2025)
  - English certifications (2024-2025)
  - Filter system: All, Data Skills, Visualization, Language
  - Responsive layout: Desktop grid (3 columns), Mobile carousel (1.2 slides visible)
  - Modal dialog dengan curriculum details dan skills acquired
  - Credential links
  - Removed captions untuk cleaner UI

- **Contact Section**
  - 4 contact cards: Email, LinkedIn, WhatsApp, Location
  - Email: ahmaadzidann@gmail.com (mailto link)
  - LinkedIn: www.linkedin.com/in/ahmad-zidan-arifin-71426b316
  - WhatsApp: +62 812-8502-4321 dengan pre-filled message
  - Location: Bekasi, Indonesia (static display)
  - Responsive grid: 4 columns desktop, 2 columns tablet, 1 column mobile

#### Technical Implementation
- **Framework**: React 18.3.1 dengan functional components dan hooks
- **Styling**: Tailwind CSS v4 dengan utility-first approach
- **Icons**: Lucide React library
- **Carousel**: Embla Carousel React untuk mobile touch-friendly navigation
- **UI Components**: Custom components based on Shadcn/ui (Card, Button, Badge, Dialog, Tabs)
- **Build Tool**: Vite untuk fast development dan optimized production builds
- **Responsive Design**: Mobile-first approach dengan breakpoints (md: 768px, lg: 1024px)

#### External Integrations
- **Imgur CDN**: Image hosting untuk profile photo, experience images, project images, certification images
- **Google Drive**: CV & Portfolio storage
- **Heyzine**: Flip-book scrapbook embedding (MANG OLIN project)
- **Tableau Public**: Dashboard integration (BKN Analytics project)
- **LinkedIn**: Direct profile link
- **WhatsApp**: Pre-filled message integration

#### Documentation
- **SRS.md**: Software Requirements Specification (272 lines)
  - Introduction, scope, definitions
  - Overall description dan product functions
  - Functional requirements (8 sections dengan 60+ requirements)
  - Non-functional requirements (Performance, Usability, Compatibility, Reliability, Security, Maintainability)
  - System features (filtering, modals, carousels, integrations)
  - External interface requirements
  - Appendices (color palette, typography, key metrics)

- **TECHNICAL_DOCUMENTATION.md**: System Design Document (600+ lines)
  - System architecture diagram (Client → CDN/Host → External Services)
  - Technology stack documentation
  - Component hierarchy dan data flow
  - Data models (Experience, Project, Certification)
  - Styling system dan responsive breakpoints
  - External service integrations
  - Performance optimization strategies
  - Security considerations (CSP, external link security)
  - Deployment architecture dan build pipeline
  - Troubleshooting guide
  - Complete file structure

- **FSD.md**: Functional Specification Document (1200+ lines)
  - Detailed functional behavior untuk setiap feature
  - User interaction flows dan expected results
  - Data models dan state management
  - Error handling dan edge cases
  - Performance specifications
  - Accessibility specifications (keyboard navigation, screen reader, WCAG AA)
  - Security specifications (external links, CSP, data privacy)
  - Testing specifications (manual, browser compatibility, accessibility)
  - Maintenance dan update procedures
  - Deployment specifications
  - Known limitations dan future enhancements roadmap

- **README.md**: Comprehensive project documentation (400+ lines)
  - Project overview dan features
  - Tech stack dan dependencies
  - Getting started guide (installation, development, build)
  - Project structure dan directory organization
  - Configuration details (Tailwind, Vite, environment variables)
  - Deployment guides (Vercel, Netlify, GitHub Pages)
  - Development guidelines (code style, content updates, git workflow)
  - Testing checklist
  - Contributing guidelines
  - License (MIT)
  - Contact information
  - Roadmap untuk future versions

- **CHANGELOG.md**: Version control history (this file)

### Changed
- Updated email dari ahmadzidanarifin@gmail.com → ahmaadzidann@gmail.com (multiple locations)
- Updated LinkedIn display dari preview URL → www.linkedin.com/in/ahmad-zidan-arifin-71426b316
- Updated profile photo dari old URL → https://i.imgur.com/MeWK8H5.png
- Changed highlights section dari 3 cards → 2 cards (removed "Continuous Learning")
- Changed button text "Download CV" → "View CV" dengan Google Drive link
- Changed button "View Portfolio" dari Download → View dengan same Google Drive link
- Updated About Me bio untuk emphasize detail-oriented dan analytical nature
- Removed caption text dari Certifications section untuk cleaner UI
- Removed "Continuous Learning" section dari bottom Certifications
- Reordered certifications chronologically (newest first: Fundamental SQL 2026, then 2025, then 2024)

### Removed
- Removed Playtopia experience card
- Removed List Sponsor Perusahaan JBC 2025 project card
- Removed Dashboard Monitoring Sponsorship project card
- Removed KontrakanKu web project card
- Removed "Download CV" button dari Hero section
- Removed duplicate BKN project card (replaced dengan MANG OLIN)
- Removed specific highlights dari MANG OLIN:
  - "Three-Tier Architecture Mapping: Menyusun Deployment Diagram berbasis struktur fisik Three-Tier Architecture (Client, Application dengan Laravel/Express.js, dan Database Layer MySQL)"
  - "Requirement Engineering: Merumuskan tabel spesifikasi kebutuhan fungsional dan non-fungsional sistem, termasuk enkripsi data AES-256 dan Role-Based Access Control (RBAC)"

### Fixed
- Fixed email inconsistency across all components (About, Contact)
- Fixed stats counter (updated Projects count setelah content changes)
- Fixed chronological ordering di Experience section (newest first)
- Fixed chronological ordering di Projects section (newest first)
- Fixed chronological ordering di Certifications section (newest first)
- Fixed grid layout di WebProjects (4 columns → 3 columns setelah removal)

### Security
- All external links menggunakan `rel="noopener noreferrer"` untuk security
- Content Security Policy headers support untuk iframe embedding
- No sensitive data exposure (only public contact information)
- Email menggunakan mailto: protocol (no direct exposure di HTML)

### Performance
- Image lazy loading implemented untuk all images below fold
- CDN usage (Imgur) untuk optimized image delivery
- Minified CSS/JS bundles via Vite production build
- Smooth scroll optimization (CSS scroll-behavior: smooth)

### Accessibility
- WCAG AA color contrast compliance
- Keyboard navigation support (Tab, Shift+Tab, Enter, Escape)
- Screen reader support dengan proper ARIA labels
- Focus states visible pada all interactive elements
- Alt text untuk all images

---

## [Unreleased]

### Planned for v1.1 (Q3 2026)
- Dark mode toggle
- Contact form dengan validation
- Blog section untuk content marketing
- SEO optimization (meta tags, Open Graph, structured data)
- Sitemap & robots.txt generation

### Planned for v1.2 (Q4 2026)
- CMS integration (Sanity.io atau Contentful)
- Multi-language support (English & Indonesian)
- Newsletter subscription
- Analytics dashboard (privacy-focused: Plausible atau Fathom)
- Project search functionality

### Planned for v2.0 (Q1 2027)
- Backend API (Node.js + Express)
- Authentication system untuk admin
- Admin panel untuk content management (no code changes needed)
- Project comments/feedback system
- Dynamic content loading (JSON files → CMS)

---

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR version** (X.0.0): Incompatible API changes, major redesigns
- **MINOR version** (0.X.0): New features, backward-compatible
- **PATCH version** (0.0.X): Bug fixes, backward-compatible

---

## Changelog Guidelines

### Categories
- **Added**: New features, components, sections
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features, components
- **Fixed**: Bug fixes, error corrections
- **Security**: Security improvements, vulnerability patches
- **Performance**: Performance optimizations
- **Accessibility**: Accessibility improvements

### How to Update
When making changes:
1. Add entry under `[Unreleased]` section
2. Use proper category (Added, Changed, etc.)
3. Write clear, descriptive entries
4. Include references to issues/PRs if applicable
5. When releasing, move `[Unreleased]` entries to new version section

### Example Entry Format
```markdown
### Added
- Feature description dengan detail implementation
- Reference ke file: `src/app/components/Feature.tsx`
- Link ke issue: #123
```

---

## Contact

For questions about this changelog or version history:

- **Email**: ahmaadzidann@gmail.com
- **LinkedIn**: [Ahmad Zidan Arifin](https://www.linkedin.com/in/ahmad-zidan-arifin-71426b316)

---

**Document Control:**
- **Version**: 1.0.0
- **Last Updated**: June 4, 2026
- **Next Review**: July 2026
- **Maintainer**: Ahmad Zidan Arifin
