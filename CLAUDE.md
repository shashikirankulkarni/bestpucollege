# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Digital platform for **The Best Science & Commerce P.U. College, Jamkhandi** — a pre-university college in Bagalkot district, Karnataka offering Science (PCMB/PCMS/PCMC) and Commerce (BEBA/SEBA/CSBA) streams.

The project is a **modular monolith** with a React frontend (currently built) and a planned Java Spring Boot backend. See `architecture.md` for the full system design and `project_execution_plan.md` for phased delivery.

## Development Commands

### Frontend (from `frontend/` directory)

```bash
cd frontend
npm install       # Install dependencies (first time)
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # TypeScript check + Vite production build
npm run preview   # Preview production build locally
```

No test framework or linter configured yet.

### Backend (planned — not yet implemented)

```bash
cd backend
./mvnw spring-boot:run          # Run Spring Boot app
./mvnw test                     # Run all tests
./mvnw test -pl :module-name    # Run tests for a specific module
```

## Frontend Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **React Router** (`createBrowserRouter`) — all routes in `src/routes/index.tsx`
- **TanStack Query** — server state management (ready for backend integration)
- **React Hook Form** — form handling (used in admissions enquiry form)
- **Tailwind CSS 3** — utility-first styling

## Frontend Architecture

```
frontend/src/
├── main.tsx                    # Entry: QueryClientProvider + RouterProvider
├── routes/index.tsx            # All routes, nested under PublicLayout
├── layouts/PublicLayout.tsx     # Shell: top bar, sticky nav (with mobile menu), footer
├── pages/                      # One component per route
│   ├── HomePage.tsx            # Hero, stats, programs, services, testimonials, FAQ, CTA
│   ├── AboutPage.tsx           # Legacy, mission, vision, faculty, stats
│   ├── AcademicsPage.tsx       # Science & Commerce streams, subject combos, schedule
│   ├── FacilitiesPage.tsx      # Labs, library, smart classrooms, sports, safety
│   ├── ResultsPage.tsx         # Board results, toppers, year-wise performance table
│   ├── AdmissionsPage.tsx      # Steps, eligibility, documents, dates, enquiry form
│   ├── NoticesPage.tsx         # Dated notices with categories
│   ├── EventsPage.tsx          # Events grid + annual calendar
│   └── ContactPage.tsx         # Contact channels, office hours, directions
├── components/SectionHeading.tsx  # Reusable section header (eyebrow + title + desc)
├── features/home/content.ts    # ALL content data (stats, programs, notices, events, etc.)
└── styles/index.css            # Tailwind directives + base styles
```

**Path alias**: `@` → `frontend/src/` (configured in `vite.config.ts`)

**Content strategy**: All displayable text lives in `features/home/content.ts` as typed constants. Pages import and render this data. This makes content easy to find, update, and eventually replace with API calls.

## Design System

### Brand Colors (Tailwind classes)

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-navy` | `#12305f` | Primary headers, nav background, CTAs |
| `brand-blue` | `#1d5fbf` | Secondary actions, links, category labels |
| `brand-sky` | `#5fa8ff` | Accents, gradients |
| `brand-gold` | `#d89b1d` | Eyebrows, highlights, primary CTA buttons |
| `brand-ink` | `#172033` | Footer background, dark text |
| `brand-soft` | `#f5f8fc` | Page backgrounds, card backgrounds |
| `brand-mist` | `#e7eef8` | Subtle borders, light fills |
| `brand-slate` | `#5f6f86` | Body text, descriptions |
| `brand-panel` | `#ffffff` | Card surfaces |

### Typography

- **Display font**: `font-display` — Poppins (headings, stats)
- **Body font**: `font-body` — DM Sans (paragraphs, UI text)

### Design Patterns

- Cards: `rounded-2xl border border-slate-200 bg-white p-6 shadow-sm`
- Hero sections: `bg-hero-radial` (navy gradient) or `bg-brand-soft`
- CTA sections: `bg-brand-navy` with gold accent buttons
- Buttons: `rounded-lg` with `bg-brand-gold` (primary) or `bg-brand-navy` (secondary)

---

## Full-Stack Implementation Plan

### Phase 1: Backend Foundation (Next)

**Goal**: Set up the Spring Boot backend with core infrastructure.

```
backend/
  src/main/java/com/college/
    config/          # App config, CORS, Jackson, etc.
    security/        # JWT auth, filters, RBAC
    common/          # Shared base entities, DTOs, error handling
    auth/            # Login, refresh, logout, password management
    users/           # User + Role entities, user management
```

**Deliverables**:
- Spring Boot 3 + Java 21 project with Maven
- PostgreSQL connection + Flyway migration setup
- Redis for session/OTP caching
- JWT authentication (access + refresh tokens)
- RBAC with roles: SUPER_ADMIN, ADMIN, STAFF, TEACHER, STUDENT, PARENT
- Shared API response/error format under `/api/v1`
- Docker Compose: postgres, redis, backend, frontend, nginx
- Health endpoints + structured logging

### Phase 2: CMS + Public APIs

**Goal**: Backend-powered content management replacing static frontend data.

```
backend/.../cms/        # Notices, events, toppers, banners
backend/.../files/      # File upload/storage abstraction
```

**Deliverables**:
- CMS CRUD APIs for notices, events, toppers, announcements
- File upload service (S3-compatible abstraction)
- Public read APIs: `GET /api/v1/public/notices`, events, toppers
- Admin APIs for content management
- Frontend integration: replace `content.ts` data with TanStack Query API calls

### Phase 3: Admissions Module

**Goal**: Full digital admissions workflow.

```
backend/.../admissions/   # Enquiry, application, documents, status tracking
```

**Deliverables**:
- Enquiry capture API (connect existing frontend form)
- Application form with document upload
- Application states: DRAFT → SUBMITTED → UNDER_REVIEW → APPROVED/REJECTED/WAITLISTED → ADMITTED
- Staff review queue + status transitions
- Email notifications on status changes
- WhatsApp notification hooks

### Phase 4: Academic Modules

```
backend/.../students/     # Student profiles, enrollment
backend/.../materials/    # Study materials repository
backend/.../exams/        # Test schedules, marks entry
backend/.../results/      # Result publishing, rankings
backend/.../attendance/   # Attendance tracking
```

**Deliverables**:
- Student information management
- Study materials upload and access (by subject/class)
- Test schedule + marks entry + result publishing
- Attendance tracking and parent notifications
- Student portal frontend pages

### Phase 5: Communication & AI

```
backend/.../notifications/  # Email, WhatsApp, SMS templates
backend/.../chatbot/        # AI chatbot integration
```

**Deliverables**:
- Notification template engine
- Email + WhatsApp delivery integration
- Scheduled reminders (exam dates, fee reminders)
- AI chatbot for admissions FAQ (English + Kannada)

### Phase 6: Production Hardening

**Deliverables**:
- Prometheus metrics + Grafana dashboards
- Centralized logging (Loki or ELK)
- Security review + penetration testing
- Backup/restore procedures
- Load testing
- CI/CD pipeline (build → test → analyze → deploy)

---

## API Design Standards

- RESTful, versioned under `/api/v1`
- Pagination: `?page=0&size=20&sort=createdAt,desc`
- Standard error format:
  ```json
  {
    "timestamp": "...",
    "status": 400,
    "code": "VALIDATION_ERROR",
    "message": "...",
    "path": "/api/v1/...",
    "errors": [{ "field": "email", "message": "must be valid" }]
  }
  ```
- OpenAPI documentation

## Database Design

All tables include: `id`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`, `is_deleted` (soft delete), `version` (optimistic locking).

**Initial entities**: users, roles, user_roles, notices, events, toppers, enquiries, admission_applications, admission_documents, audit_logs, files.

## Infrastructure

- **Local**: Docker Compose (postgres, redis, backend, frontend, nginx)
- **Staging/Production**: Single VM with Docker Compose → future Kubernetes
- **Deployment**: Nginx reverse proxy, HTTPS-only
