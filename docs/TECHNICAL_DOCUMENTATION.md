# Technical Documentation
## Portfolio Website - System Design Document

**Version:** 1.0  
**Date:** June 4, 2026  
**Project:** Ahmad Zidan Arifin Portfolio Website

---

## 1. System Architecture

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│          Client Browser (User Device)           │
│  ┌───────────────────────────────────────────┐  │
│  │         React Application (SPA)           │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │       Component Tree                │  │  │
│  │  │  - App                              │  │  │
│  │  │    - Navbar                         │  │  │
│  │  │    - Hero (CSSLanyard)              │  │  │
│  │  │    - About                          │  │  │
│  │  │    - Experience                     │  │  │
│  │  │    - Projects                       │  │  │
│  │  │    - WebProjects                    │  │  │
│  │  │    - Certifications                 │  │  │
│  │  │    - Contact                        │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
           │                        │
           ▼                        ▼
    ┌──────────────┐      ┌──────────────────┐
    │   CDN/Host   │      │ External Services │
    │   (Vercel)   │      │ - Google Drive    │
    │              │      │ - Imgur CDN       │
    └──────────────┘      │ - Heyzine         │
                          │ - LinkedIn        │
                          │ - WhatsApp        │
                          │ - Tableau Public  │
                          └──────────────────┘
```

### 1.2 Technology Stack

#### Frontend
- **Framework**: React 18.3+
- **Language**: JavaScript (TypeScript ready)
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Custom Shadcn/ui components
- **Icons**: Lucide React
- **Carousel**: Embla Carousel React
- **Build Tool**: Vite 5+

#### External Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.xxx.x",
  "embla-carousel-react": "^8.x.x"
}
```

---

## 2. Component Architecture

### 2.1 Component Hierarchy

```
App.tsx (Root)
├── Navbar.tsx (Fixed navigation)
├── Hero.tsx
│   └── CSSLanyard.tsx (Desktop only)
├── About.tsx
│   ├── Card (Profile card)
│   ├── Badge (Skills/Competencies)
│   └── MobileCarousel (Skills)
├── Experience.tsx
│   ├── Tabs (Filter system)
│   ├── ExperienceCard (Reusable)
│   ├── Dialog (Modal for details)
│   └── MobileCarousel
├── Projects.tsx
│   ├── Tabs (Filter: All/Excel/Tableau/PowerBI/BPMN)
│   ├── ProjectCard (Reusable)
│   ├── Dialog (Documentation modal)
│   └── MobileCarousel
├── WebProjects.tsx
│   ├── ProjectCard (Web-specific)
│   └── Dialog (Business Analysis docs)
├── Certifications.tsx
│   ├── Tabs (Filter: All/Data/Viz/Language)
│   ├── CertCard (Reusable)
│   ├── Dialog (Certificate details)
│   └── MobileCarousel
└── Contact.tsx
    └── Contact method cards
```

### 2.2 Shared Components

#### UI Components (`/src/app/components/ui/`)
- **card.tsx**: Base card component dengan variants
- **badge.tsx**: Status/category badges
- **button.tsx**: CTA buttons dengan variants
- **dialog.tsx**: Modal system (trigger, content, header, close)
- **tabs.tsx**: Tab navigation system (list, trigger, content)

#### Utility Components
- **MobileCarousel.tsx**: Embla carousel wrapper untuk mobile view
- **CSSLanyard.tsx**: Animated ID card dengan 3D transform

---

## 3. Data Flow & State Management

### 3.1 Data Structure

#### Experience Data Model
```typescript
interface Experience {
  role: string;
  organization: string;
  department: string;
  program?: string;
  type: 'internship' | 'organization' | 'social';
  period: string;
  duration: string;
  location: string;
  image: string;
  subtitle?: string;
  highlights?: string[];
  description: string[];
  achievements: string[];
  impact?: string;
  technicalDoc?: string[];
  tools?: string[];
  skills: string[];
  insights?: string[];
  links?: {
    web?: string;
    instagram?: string;
  };
  color: string; // Tailwind class
}
```

#### Project Data Model
```typescript
interface Project {
  icon: LucideIcon;
  name: string;
  type: string;
  tools: string[];
  primaryTool: 'excel' | 'tableau' | 'powerbi' | 'visualparadigm';
  year: string;
  duration: string;
  image: string;
  organization?: string;
  department?: string;
  location?: string;
  subtitle?: string; // For scrapbook (MANG OLIN)
  hasScrapbook?: boolean; // For report placeholder (DPMPTSP, Data Mining)
  highlights: string[];
  description: string | string[];
  impact: string;
  achievements?: string[];
  documentation: string;
  technicalSkills: string[];
  keyInsights: string[];
  color: string;
  links: Record<string, string>;
}
```

#### Certification Data Model
```typescript
interface Certification {
  name: string;
  provider: string;
  year: string;
  grade?: string;
  category: 'Data Skills' | 'Data Visualization' | 'Language' | 'Data Analysis & Business Intelligence';
  color: string;
  image: string;
  documentation: string;
  duration?: string;
  modules?: string[];
  skills: string[];
}
```

### 3.2 State Management Strategy

**Local Component State (useState)**
- Modal open/close state
- Show/Hide toggle states (e.g., "Show All Projects")
- Image dialog state
- Active tab selection

**No Global State Needed**
- Static content (no dynamic data fetching)
- No user authentication
- No complex shared state

---

## 4. Styling System

### 4.1 Tailwind CSS Configuration

**Theme Extension** (`tailwind.config.js`)
```javascript
theme: {
  extend: {
    colors: {
      amber: { ... },
      orange: { ... },
      teal: { ... },
      // Extended palette
    },
    borderRadius: {
      'xl': '1rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    }
  }
}
```

**Custom CSS** (`/src/styles/theme.css`)
```css
:root {
  --color-primary: #D97706; /* Amber-600 */
  --color-secondary: #0D9488; /* Teal-600 */
  /* Custom properties */
}
```

### 4.2 Responsive Breakpoints

```css
/* Mobile-first approach */
@media (min-width: 768px)  { /* md: Tablet */ }
@media (min-width: 1024px) { /* lg: Desktop */ }
@media (min-width: 1280px) { /* xl: Large Desktop */ }
```

**Pattern:**
- Default styles: Mobile (< 768px)
- `md:` prefix: Tablet & up
- `lg:` prefix: Desktop & up

### 4.3 Color Coding System

**Experience Types:**
- Internship: `bg-blue-600`
- Social Project: `bg-teal-600`
- Organization: `bg-green-600` / `bg-purple-600`

**Project Types:**
- Excel: `bg-purple-600` / `bg-orange-600`
- Tableau: `bg-amber-600`
- Power BI: `bg-blue-600` / `bg-indigo-600`
- BPMN/Process: `bg-orange-600` / `bg-teal-600`

---

## 5. Integrations & External Services

### 5.1 Google Drive Integration
**Purpose**: CV & Portfolio document storage and preview

**Implementation:**
```typescript
const CV_URL = "https://drive.google.com/file/d/1QtppdTqZjWDxQD6fvoJCTYtIAUr8fpxz/preview";
const PORTFOLIO_URL = "https://drive.google.com/file/d/1LBCD0b0M2wA2LuGbAVutiEKmvJnZs-DH/preview";

// View CV Button
onClick={() => window.open(CV_URL, '_blank')}

// View Portfolio Button
onClick={() => window.open(PORTFOLIO_URL, '_blank')}
```

### 5.2 WhatsApp Integration
**Purpose**: Direct messaging dengan pre-filled text

**Implementation:**
```typescript
const WHATSAPP_URL = "https://wa.me/6282118580994?text=Halo%20Ahmad%2C%20saya%20sempat%20melihat%20portofolio%20Anda.%20Karya-karya%20Anda%20terlihat%20menarik%20sekali.%20Jika%20berkenan%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20pengalaman%20Anda.";
```

### 5.3 LinkedIn Integration
**Purpose**: Professional profile link

**URL:**
```
https://www.linkedin.com/in/ahmad-zidan-arifin-71426b316
```

### 5.4 Imgur CDN
**Purpose**: Image hosting untuk photos & screenshots

**Pattern:**
```
https://i.imgur.com/{image-id}.{ext}
```

**Images:**
- Profile photo: `MeWK8H5.png`
- Experience images: BKN, JBC, UKM Search, CAKRA
- Project screenshots: Tableau, Power BI, Excel templates
- Certification images

### 5.5 Heyzine Flip-book (MANG OLIN Scrapbook)
**Purpose**: Interactive report/scrapbook viewer

**Implementation:**
```html
<iframe
  allowFullScreen
  allow="clipboard-write"
  scrolling="no"
  className="w-full h-[400px]"
  src="https://heyzine.com/flip-book/abc3e6faa9.html"
  title="MANG OLIN Scrapbook"
/>
```

### 5.6 Tableau Public
**Purpose**: Live dashboard embedding

**URL Pattern:**
```
https://public.tableau.com/app/profile/{username}/viz/{viz-name}
```

---

## 6. Routing & Navigation

### 6.1 Single-Page Routing

**Implementation**: Hash-based anchor links (no React Router needed)

```typescript
// Smooth scroll to section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};
```

**Section IDs:**
- `#hero`
- `#about`
- `#experience`
- `#projects`
- `#web-projects`
- `#certifications`
- `#contact`

### 6.2 Navigation Behavior

**Fixed Navbar:**
- Position: `fixed top-0`
- Z-index: `z-50`
- Background: Semi-transparent with backdrop blur

**Active Section Highlight** (Optional enhancement):
- Use Intersection Observer API
- Add active class pada nav link saat section in view

---

## 7. Performance Optimization

### 7.1 Image Optimization
- **Format**: WebP dengan PNG fallback
- **Lazy Loading**: Native `loading="lazy"` attribute
- **CDN**: Imgur untuk fast delivery
- **Responsive Images**: `srcset` untuk multiple sizes (future)

### 7.2 Code Splitting
- **Component-based**: Auto code-splitting per route (jika pakai React Router)
- **Dynamic Imports**: Lazy load heavy components (future)

### 7.3 Build Optimization
**Vite Production Build:**
```bash
npm run build
# Output: /dist folder with optimized assets
```

**Optimizations:**
- Minification (Terser)
- Tree-shaking (unused code removal)
- CSS purging (Tailwind)
- Asset hashing untuk cache busting

### 7.4 Caching Strategy
**Static Assets:**
- Cache-Control headers (hosting level)
- Long-term caching untuk hashed assets
- Short cache untuk HTML entry point

---

## 8. Security Considerations

### 8.1 Content Security Policy (CSP)
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://s.imgur.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://i.imgur.com https://images.unsplash.com data:;
  frame-src https://heyzine.com https://public.tableau.com;
  connect-src 'self' https://api.github.com;
```

### 8.2 External Link Security
```html
<a
  href="..."
  target="_blank"
  rel="noopener noreferrer"
>
```

### 8.3 No Sensitive Data
- No API keys in client code
- No user authentication required
- No PII collection (email/phone displayed publicly)

---

## 9. Deployment Architecture

### 9.1 Hosting Options

**Recommended: Vercel**
- Zero-config React deployment
- Automatic HTTPS
- CDN distribution
- GitHub integration

**Alternative: Netlify, GitHub Pages**

### 9.2 Build Pipeline

```
┌─────────────┐
│ Source Code │
│   (GitHub)  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   CI/CD     │
│  (Vercel)   │
└──────┬──────┘
       │
       ├─ npm install
       ├─ npm run build (Vite)
       ├─ Optimize assets
       └─ Deploy to CDN
       │
       ▼
┌─────────────┐
│  Production │
│   Website   │
└─────────────┘
```

### 9.3 Environment Variables
```bash
# Future: If needed
VITE_API_URL=...
VITE_ANALYTICS_ID=...
```

---

## 10. Monitoring & Analytics

### 10.1 Performance Monitoring
- **Lighthouse CI**: Automated performance audits
- **Web Vitals**: LCP, FID, CLS tracking
- **Vercel Analytics**: Built-in (if using Vercel)

### 10.2 User Analytics (Optional)
- **Google Analytics 4**: Page views, events
- **Plausible**: Privacy-friendly alternative
- **Vercel Insights**: Traffic metrics

---

## 11. Maintenance & Updates

### 11.1 Content Update Process
1. Edit data arrays dalam component files:
   - `Experience.tsx` → `experiences` array
   - `Projects.tsx` → `projects` array
   - `Certifications.tsx` → `certifications` array
2. Commit changes ke Git
3. Push ke GitHub
4. Auto-deploy via CI/CD

### 11.2 Dependency Updates
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Major version updates (manual review)
npm install react@latest
```

### 11.3 Breaking Changes Prevention
- Lock file: `package-lock.json`
- Semantic versioning: `^` vs `~`
- Changelog tracking (see CHANGELOG.md)

---

## 12. Testing Strategy

### 12.1 Manual Testing Checklist
- [ ] All navigation links work
- [ ] Modal dialogs open/close correctly
- [ ] Mobile carousel swipe functional
- [ ] Filter tabs switch correctly
- [ ] External links open in new tab
- [ ] Responsive on mobile/tablet/desktop
- [ ] Images load correctly
- [ ] No console errors

### 12.2 Browser Compatibility Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest - iOS & macOS)
- Edge (latest)

### 12.3 Automated Testing (Future)
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright / Cypress
- **Visual Regression**: Percy / Chromatic

---

## 13. Troubleshooting Guide

### 13.1 Common Issues

**Issue: Modal tidak close**
- Check DialogClose button rendering
- Verify backdrop click handler

**Issue: Images tidak load**
- Check Imgur URL validity
- Verify CDN availability
- Check browser console for CORS errors

**Issue: Carousel tidak swipe**
- Verify Embla Carousel initialization
- Check touch event handlers
- Test on actual mobile device (not just DevTools)

**Issue: WhatsApp link tidak work**
- Check URL encoding (`%20` for spaces)
- Verify phone number format (+62...)
- Test on mobile device (WhatsApp app installed)

### 13.2 Performance Issues

**Slow initial load:**
- Check network tab untuk large assets
- Optimize images (compress, WebP)
- Enable CDN caching

**Janky scroll:**
- Reduce JavaScript execution on scroll
- Use `will-change` CSS property sparingly
- Check for layout thrashing

---

## Appendix A: File Structure

```
/workspaces/default/code/
├── public/               # Static assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/      # Shadcn components
│   │   │   │   ├── card.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   └── tabs.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CSSLanyard.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MobileCarousel.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── WebProjects.tsx
│   │   └── App.tsx
│   ├── styles/
│   │   ├── fonts.css
│   │   └── theme.css
│   ├── lib/
│   │   └── utils.ts
│   └── main.tsx
├── docs/
│   ├── SRS.md
│   ├── TECHNICAL_DOCUMENTATION.md
│   ├── README.md
│   ├── CHANGELOG.md
│   └── FSD.md
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

**Document Control:**
- **Version**: 1.0
- **Last Updated**: June 4, 2026
- **Author**: Ahmad Zidan Arifin
- **Status**: Active
