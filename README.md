# Portfolio Website - Ahmad Zidan Arifin

> Data Analyst & Business Analyst Portfolio  
> A modern, responsive single-page application built with React and Tailwind CSS

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript Ready](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

Portfolio website profesional untuk Ahmad Zidan Arifin yang menampilkan:

- **Pengalaman kerja** di bidang data analytics dan business process
- **Portfolio proyek** menggunakan Excel, Tableau, Power BI, dan BPMN
- **Sertifikasi profesional** dalam data skills dan visualization
- **Web development projects** dengan dokumentasi business analysis
- **Kontak informasi** dengan direct links ke professional networks

Website ini dirancang untuk mendukung pencarian kerja sebagai **Data Analyst** atau **Business Analyst** dengan menampilkan kompetensi, pengalaman nyata, dan hasil kerja yang terukur.

---

## ✨ Features

### Core Features

- **🎨 Modern UI/UX**: Clean, professional design dengan color scheme amber/orange
- **📱 Fully Responsive**: Mobile-first design yang optimal di semua devices
- **🔄 Smooth Navigation**: Fixed navbar dengan smooth scroll dan active section indicator
- **🎭 Interactive Modals**: Detailed view untuk experience, projects, dan certifications
- **🎠 Touch-Friendly Carousels**: Horizontal scroll untuk mobile dengan peek next item
- **🔍 Smart Filtering**: Category-based filtering untuk experience, projects, dan certifications
- **📊 Embedded Content**: Scrapbook flip-book integration via Heyzine iframe
- **🔗 External Integrations**: LinkedIn, WhatsApp, Google Drive, Tableau Public

### Sections

1. **Hero Section**
   - Professional greeting dan tagline
   - CTA buttons (LinkedIn, Contact)
   - Achievement statistics (3+ Certifications, 7+ Projects, 1 Internship)

2. **About Section**
   - Profile photo dan personal info
   - Professional biography
   - Highlight cards (Data-driven mindset, Analytical thinking)
   - Skills categorization (Data Skills, Business Skills, Tools)
   - Additional competencies badges

3. **Experience Section**
   - Work experience dan organizational involvement
   - Filter: All, Internship, Organization
   - Detailed modal dengan responsibilities, achievements, impact
   - External links (Instagram, Website)

4. **Projects Section**
   - Data analysis dan business process projects
   - Filter: All, Excel, Tableau, Power BI, BPMN
   - Scrapbook integration untuk major projects
   - Detailed documentation dengan highlights, impact, insights

5. **Web Projects Section**
   - Web development portfolio
   - Business analysis documentation
   - Live demo links

6. **Certifications Section**
   - Professional certifications
   - Filter: All, Data Skills, Visualization, Language
   - Curriculum details dan skills acquired
   - Credential links

7. **Contact Section**
   - Email (mailto link)
   - LinkedIn profile
   - WhatsApp dengan pre-filled message
   - Location info

---

## 🛠 Tech Stack

### Frontend Framework & Libraries

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.3.1 | UI framework |
| **Tailwind CSS** | v4.0 | Utility-first CSS |
| **Lucide React** | Latest | Icon library |
| **Embla Carousel React** | Latest | Mobile carousels |
| **Vite** | Latest | Build tool & dev server |

### UI Components

- Custom components based on **Shadcn/ui** architecture
- Reusable components: Card, Button, Badge, Dialog, Tabs
- Responsive utilities: MobileCarousel

### External Services

- **Imgur CDN**: Image hosting
- **Google Drive**: CV & Portfolio storage
- **Heyzine**: Flip-book scrapbook embedding
- **Tableau Public**: Dashboard integration
- **LinkedIn**: Professional networking
- **WhatsApp**: Direct messaging

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **pnpm**: v8.0.0 or higher (recommended) or npm/yarn

```bash
# Check Node.js version
node --version

# Check pnpm version
pnpm --version

# Install pnpm globally (if not installed)
npm install -g pnpm
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**

```bash
pnpm install
```

This will install all required packages listed in `package.json`.

### Development

Start the development server:

```bash
pnpm run dev
```

The application will open at `http://localhost:5173` (or next available port).

**Development Features:**
- Hot Module Replacement (HMR) enabled
- Fast refresh untuk React components
- Instant Tailwind CSS updates
- Error overlay in browser

### Build

Create a production build:

```bash
pnpm run build
```

**Build Output:**
- Directory: `dist/`
- Optimized bundles (minified JS/CSS)
- Image assets
- Source maps (for debugging)

**Preview Production Build:**

```bash
pnpm run preview
```

Opens production build at `http://localhost:4173`.

---

## 📁 Project Structure

```
portfolio-website/
├── public/                      # Static assets
│   └── (empty - using CDN)
├── src/
│   ├── app/
│   │   ├── components/          # React components
│   │   │   ├── ui/              # Reusable UI components
│   │   │   │   ├── card.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   └── tabs.tsx
│   │   │   ├── About.tsx        # About section
│   │   │   ├── Certifications.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MobileCarousel.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── WebProjects.tsx
│   │   └── App.tsx              # Main application component
│   ├── styles/
│   │   ├── fonts.css            # Font imports
│   │   ├── theme.css            # Tailwind theme tokens
│   │   └── index.css            # Global styles
│   └── lib/
│       └── utils.ts             # Utility functions
├── docs/                        # Documentation
│   ├── SRS.md                   # Software Requirements Specification
│   ├── TECHNICAL_DOCUMENTATION.md
│   ├── FSD.md                   # Functional Specification Document
│   └── CHANGELOG.md             # Version history
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### Key Directories

**`src/app/components/`**
- All React components organized by section
- Each section is a separate component file
- UI components in `ui/` subfolder

**`src/styles/`**
- `fonts.css`: Font-face declarations
- `theme.css`: Tailwind v4 custom tokens (colors, spacing)
- `index.css`: Global styles dan Tailwind directives

**`docs/`**
- Comprehensive technical documentation
- Requirements specifications
- Version control history

---

## ⚙️ Configuration

### Tailwind CSS v4 Configuration

Theme tokens defined in `src/styles/theme.css`:

```css
@theme {
  /* Colors */
  --color-primary: #D97706;     /* amber-600 */
  --color-secondary: #EA580C;   /* orange-600 */
  --color-accent: #0D9488;      /* teal-600 */
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

### Vite Configuration

Key settings in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### Environment Variables

Create `.env.local` for local overrides (optional):

```env
# Not currently used, but reserved for future features
VITE_ANALYTICS_ID=
VITE_API_URL=
```

---

## 🌐 Deployment

### Deployment to Vercel (Recommended)

1. **Install Vercel CLI**

```bash
pnpm add -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

**Auto-Deployment dari Git:**
1. Push code ke GitHub repository
2. Connect repository di Vercel dashboard
3. Auto-deploy on every push to main branch

### Deployment to Netlify

1. **Build command**: `pnpm run build`
2. **Publish directory**: `dist`
3. **Node version**: 18

**netlify.toml** (optional):

```toml
[build]
  command = "pnpm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deployment to GitHub Pages

1. **Install gh-pages**

```bash
pnpm add -D gh-pages
```

2. **Add deploy script** to `package.json`:

```json
{
  "scripts": {
    "deploy": "pnpm run build && gh-pages -d dist"
  }
}
```

3. **Deploy**

```bash
pnpm run deploy
```

### Custom Domain Setup

**Vercel:**
1. Go to Project Settings → Domains
2. Add custom domain
3. Configure DNS records as instructed

**DNS Records Example:**
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

---

## 📚 Documentation

Comprehensive documentation available in `docs/` directory:

| Document | Description |
|----------|-------------|
| **SRS.md** | Software Requirements Specification - Formal system requirements |
| **TECHNICAL_DOCUMENTATION.md** | System architecture, data flow, integrations |
| **FSD.md** | Functional Specification - Detailed feature behaviors |
| **CHANGELOG.md** | Version history dan release notes |

**External Documentation:**
- [React Documentation](https://react.dev)
- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🔧 Development Guidelines

### Code Style

**JavaScript/JSX:**
- Use functional components dengan hooks
- Prefer const over let
- Use arrow functions
- Destructure props
- Use meaningful variable names

**Tailwind CSS:**
- Mobile-first approach (default styles untuk mobile)
- Use responsive prefixes (md:, lg:) untuk larger screens
- Avoid inline styles (prefer Tailwind utilities)
- Group utilities logically (layout → spacing → typography → colors)

**Component Structure:**
```jsx
// Imports
import { Component } from 'library';

// Component definition
export function MyComponent({ prop1, prop2 }) {
  // State & hooks
  const [state, setState] = useState(initial);
  
  // Derived state
  const computed = useMemo(() => ..., [deps]);
  
  // Event handlers
  const handleClick = () => { ... };
  
  // Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

### Content Updates

**Adding New Experience:**
1. Open `src/app/components/Experience.tsx`
2. Add object to `experiences` array at index 0 (chronological order)
3. Upload image to Imgur, copy URL
4. Update Hero section stats if needed

**Adding New Project:**
1. Open `src/app/components/Projects.tsx`
2. Add object to `projects` array at index 0
3. For scrapbook: Upload to Heyzine, add `scrapbookUrl`
4. Update Hero section stats if needed

**Adding New Certification:**
1. Open `src/app/components/Certifications.tsx`
2. Add object to `certifications` array at index 0
3. Upload certificate image to Imgur
4. Update Hero section stats if needed

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/add-new-project

# Make changes
# ...

# Commit dengan meaningful message
git add .
git commit -m "feat: Add new data mining project with scrapbook"

# Push to remote
git push origin feature/add-new-project

# Create Pull Request on GitHub
```

**Commit Message Convention:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation update
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Test updates
- `chore:` Build process, dependencies

---

## 🧪 Testing

### Manual Testing Checklist

**Navigation:**
- [ ] All nav links scroll to correct sections
- [ ] Active indicator updates on scroll
- [ ] Mobile menu opens/closes properly

**Filtering:**
- [ ] All filters show correct subset
- [ ] "All" filter shows everything
- [ ] Zero-result filters show empty state

**Modals:**
- [ ] Open on card click
- [ ] Close on backdrop click
- [ ] Close on Escape key
- [ ] Scroll works inside modal

**External Links:**
- [ ] LinkedIn opens correct profile
- [ ] WhatsApp opens with pre-filled message
- [ ] Email opens mail client
- [ ] Google Drive opens correct folder

**Responsive:**
- [ ] Mobile (375px): All content usable
- [ ] Tablet (768px): Layout transitions
- [ ] Desktop (1440px): Optimal layout

### Performance Testing

**Lighthouse Audit:**
```bash
# Run Lighthouse in Chrome DevTools
# Target scores:
# Performance: >= 90
# Accessibility: >= 90
# Best Practices: >= 90
# SEO: >= 80
```

**WebPageTest:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3s

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'feat: Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

**Contribution Guidelines:**
- Follow existing code style
- Write meaningful commit messages
- Update documentation if needed
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Ahmad Zidan Arifin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📧 Contact

**Ahmad Zidan Arifin**

- **Email**: ahmaadzidann@gmail.com
- **LinkedIn**: [www.linkedin.com/in/ahmad-zidan-arifin-71426b316](https://www.linkedin.com/in/ahmad-zidan-arifin-71426b316)
- **WhatsApp**: +62 812-8502-4321
- **Location**: Bekasi, Indonesia

**Project Links:**
- **Portfolio Website**: [Live Demo URL]
- **GitHub Repository**: [Repository URL]
- **CV**: [Google Drive](https://drive.google.com/file/d/1QtppdTqZjWDxQD6fvoJCTYtIAUr8fpxz/preview)
- **Portfolio**: [Google Drive](https://drive.google.com/file/d/1LBCD0b0M2wA2LuGbAVutiEKmvJnZs-DH/preview)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind Labs** - For Tailwind CSS
- **Vercel** - For hosting platform
- **Imgur** - For image CDN services
- **Heyzine** - For flip-book embedding
- **Lucide** - For beautiful icons

---

## 📈 Roadmap

**Version 1.1 (Q3 2026)**
- [ ] Add dark mode toggle
- [ ] Implement contact form
- [ ] Add blog section
- [ ] SEO optimization (meta tags, structured data)

**Version 1.2 (Q4 2026)**
- [ ] CMS integration (Sanity.io)
- [ ] Multi-language support (EN/ID)
- [ ] Newsletter subscription
- [ ] Analytics dashboard

**Version 2.0 (Q1 2027)**
- [ ] Backend API (Node.js + Express)
- [ ] Authentication system
- [ ] Admin panel untuk content management
- [ ] Project comments system

---

<div align="center">

**Made with ❤️ by Ahmad Zidan Arifin**

[⬆ Back to Top](#portfolio-website---ahmad-zidan-arifin)

</div>
