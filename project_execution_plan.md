# The Best Science & Commerce P.U. College, Jamkhandi — Project Execution Plan

## 1. Purpose

This document converts the high-level system architecture in [`architecture.md`](/Users/shashikirankulkarni/Documents/bestpucollege/architecture.md) and the launch priorities visible in [`poster.png`](/Users/shashikirankulkarni/Documents/bestpucollege/poster.png) into an executable delivery plan.

Institution name for this project:

- The Best Science & Commerce P.U. College, Jamkhandi

It answers four questions:

- What should be built first
- What must exist in the MVP
- How the platform should be structured technically
- How delivery should be phased to reduce risk and time to launch

The guiding principle is simple:

- `architecture.md` defines the engineering direction
- `poster.png` defines the launch-facing product priorities

This project should be built as a production-grade modular monolith, with a clear path to later extraction of services only if scale or complexity demands it.

---

## 2. Product Direction

The platform is not only a college website. It is a digital operating platform for marketing, admissions, academic communication, and student-facing services.

From the poster, the launch promise is centered around:

- Online admissions
- Study materials and notes
- Online tests and weekly scores
- Results and rankings
- AI chatbot in English and Kannada
- WhatsApp automation
- Attendance and academic updates
- Events and announcements
- QR-based discovery and conversion
- Social media and Google Business presence

That means the first release must prioritize:

- Lead generation and conversion
- Admin-controlled content publishing
- Admissions workflow
- Mobile-first access
- Bilingual readiness
- Communication automation

It should not begin by attempting to build a full ERP-grade academic platform in the first milestone.

---

## 3. Project Objectives

## 3.1 Business Objectives

- Increase admissions enquiries and completed applications
- Reduce manual follow-up work for staff
- Provide a single digital entry point for students, parents, and prospects
- Improve communication of updates, results, notices, and events
- Strengthen the college brand through a modern digital presence

## 3.2 Engineering Objectives

- Deliver quickly using a modular monolith
- Maintain production-grade quality from the first release
- Keep modules clean enough for future service extraction
- Protect student and admissions data with strong security controls
- Ensure that operational overhead remains low in early stages

---

## 4. Delivery Strategy

## 4.1 Recommended Approach

Use a phased release model:

1. Foundation
2. Public Website + CMS
3. Admissions
4. Academic Utility Modules
5. Student/Parent Portal
6. Notifications + Chatbot
7. Hardening and Production Readiness

## 4.2 Why This Sequence

- The poster creates public expectations around admissions and information access first.
- The college gets immediate business value from website, CMS, enquiries, and applications.
- Academic and portal complexity can be layered in after the public funnel is stable.
- This reduces delivery risk while keeping architecture aligned with the long-term platform vision.

---

## 5. Recommended MVP Scope

The MVP should be the smallest release that fulfills the public promise in a credible way and starts generating operational value.

## 5.1 MVP In Scope

- Public website
- Responsive landing pages
- About, courses, facilities, faculty, contact pages
- CMS for notices, events, announcements, toppers, highlights
- Online enquiry form
- Online admissions application form
- Application tracking for staff
- Admin portal with role-based access
- File/document uploads for admissions and CMS
- Email notifications
- WhatsApp integration hooks or first automation layer
- QR landing pages
- English-first with Kannada-ready content model
- Basic analytics and audit logs

## 5.2 MVP Out of Scope

These should be deferred unless they are required for launch:

- Full attendance management
- Full online test engine
- Complex result publishing workflows
- Parent portal depth
- Real-time leaderboard engine
- Kafka-based event streaming
- Multi-service deployment
- Advanced chatbot workflow orchestration

## 5.3 MVP Success Criteria

- A student can discover the college through QR/social/web and reach the site quickly on mobile.
- A prospect can submit an enquiry or application without staff assistance.
- Staff can review and manage applications through the admin portal.
- Admin users can publish notices and events without developer involvement.
- The platform can support real launch traffic with monitoring and logs in place.

---

## 6. Product Modules

## 6.1 Public Experience

- Homepage
- About the college
- Programs and streams
- Facilities and achievements
- Faculty overview
- Notices and announcements
- Events and highlights
- Toppers and results highlights
- Contact and enquiry
- Admissions landing pages
- QR campaign landing pages

## 6.2 Admin Experience

- Authentication
- Dashboard
- Content management
- Admissions review and status updates
- Media/file management
- User and role management
- Audit and reporting views

## 6.3 Academic Experience

Initial academic utility modules after MVP:

- Study materials repository
- Student result viewing
- Test schedules
- Weekly scores
- Attendance snapshots
- Rankings

## 6.4 Communication Experience

- Email notifications
- WhatsApp notifications
- Event announcements
- Application updates
- Reminder workflows

## 6.5 AI Experience

- Chatbot integration
- FAQ and admissions guidance
- English and Kannada support
- Escalation path to human contact

---

## 7. Technical Architecture

## 7.1 System Style

- Modular monolith
- One backend application
- One frontend application
- Shared database
- Shared cache
- Clean internal domain boundaries

## 7.2 Frontend

- React 18+
- TypeScript
- Vite
- React Router
- TanStack Query
- React Hook Form
- Tailwind CSS

Reason for choosing Tailwind over Material UI:

- Faster custom marketing page implementation
- Easier brand alignment from the poster design language
- Better fit for a content-heavy and campaign-oriented public site
- Lower visual rigidity for admin and public surfaces

## 7.3 Backend

- Java 21
- Spring Boot 3+
- Spring Security
- Spring Data JPA / Hibernate
- Maven
- REST APIs

## 7.4 Data and Storage

- PostgreSQL for primary relational data
- Redis for caching, OTPs, rate limiting, and temporary state
- S3-compatible object storage abstraction for file uploads

## 7.5 Infrastructure

Initial deployment:

- Docker Compose
- Nginx reverse proxy
- Single VM or VPS

Future evolution:

- Managed database and cache
- Container orchestration if needed

---

## 8. Target Repository Structure

```text
backend/
  src/main/java/com/college/
    config/
    common/
    security/
    auth/
    users/
    cms/
    admissions/
    students/
    attendance/
    exams/
    results/
    materials/
    notifications/
    chatbot/
    files/
    audit/
  src/main/resources/
    application.yml
    db/migration/

frontend/
  src/
    app/
    routes/
    pages/
    layouts/
    components/
    features/
    services/
    hooks/
    utils/
    types/

infra/
  docker/
  nginx/

docs/
  api/
  product/
  operations/

erd/
  college_platform_erd.json
```

---

## 9. Domain Modules and Responsibilities

## 9.1 Auth and User Management

Responsibilities:

- Login
- Refresh token flow
- Logout
- Password management
- Role assignment
- Account status management

Core roles:

- SUPER_ADMIN
- ADMIN
- STAFF
- TEACHER
- STUDENT
- PARENT

## 9.2 CMS

Responsibilities:

- Notices
- Events
- Toppers
- Announcements
- Home page sections
- Promotional banners
- Media attachment mapping

## 9.3 Admissions

Responsibilities:

- Enquiry capture
- Application creation
- Document upload
- Review status updates
- Internal notes
- Communication triggers

Possible application states:

- DRAFT
- SUBMITTED
- UNDER_REVIEW
- APPROVED
- REJECTED
- WAITLISTED
- ADMITTED

## 9.4 Students

Responsibilities:

- Student profile
- Guardian association
- Course/stream assignment
- Enrollment metadata

## 9.5 Materials

Responsibilities:

- Subject/category organization
- File uploads
- Access control by role or class
- Download/view tracking

## 9.6 Exams and Results

Responsibilities:

- Test schedules
- Marks entry
- Published results
- Rankings and highlights

## 9.7 Notifications

Responsibilities:

- Template management
- Email delivery
- WhatsApp delivery integration
- Triggered event notifications
- Reminder scheduling

## 9.8 Audit

Responsibilities:

- Sensitive action history
- Admin change traceability
- Entity-level activity logging

---

## 10. Non-Functional Requirements

## 10.1 Security

- JWT access and refresh tokens
- Token rotation
- Role-based access control
- Password hashing using BCrypt initially or Argon2 if operationally straightforward
- Secure headers
- CORS restrictions
- Rate limiting
- Account lockout for repeated failed attempts
- File type and size validation
- Audit trail for admin-sensitive operations
- HTTPS-only production deployment
- reCAPTCHA for public forms

## 10.2 Performance

- Fast mobile loading for public pages
- Pagination on admin listings
- Query indexing for common searches
- Cache for public content and high-read endpoints

## 10.3 Reliability

- Health checks
- Structured logging
- Error monitoring
- Database backups
- Migration-controlled schema evolution

## 10.4 Maintainability

- Clear module ownership
- Versioned APIs under `/api/v1`
- Consistent error structure
- OpenAPI documentation
- Domain-driven package separation inside the monolith

---

## 11. Language and Content Strategy

The poster explicitly mentions English and Kannada, especially for chatbot and public communication. That should influence design early.

## 11.1 Content Strategy

- Public content should be authored in English first
- CMS should be designed to support Kannada fields later without schema redesign
- Static labels in frontend should be internationalization-ready

## 11.2 Technical Recommendation

Do not attempt full bilingual rollout in the first sprint, but do prepare for it:

- Use translatable content models where needed
- Avoid hardcoding labels deeply inside components
- Keep chatbot interface ready for language selection

---

## 12. QR and Campaign Strategy

The poster depends on QR-led traffic. This is a product requirement, not just a marketing note.

The platform should support:

- Dedicated landing pages for QR scans
- Source attribution and campaign tracking
- Direct routing to admissions or enquiry pages
- Mobile-optimized landing experience

Suggested tracked sources:

- Poster QR
- Instagram
- Facebook
- Google Business
- Direct website traffic

---

## 13. API Standards

All backend APIs should follow:

- RESTful design
- Versioning under `/api/v1`
- Validation on all inputs
- Pagination for list endpoints
- Consistent error format
- OpenAPI documentation

Examples:

- `POST /api/v1/auth/login`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/admissions/applications`
- `GET /api/v1/public/notices`
- `GET /api/v1/public/events`
- `POST /api/v1/admin/materials/upload`
- `POST /api/v1/admin/results/publish`

Suggested standard error shape:

```json
{
  "timestamp": "2026-03-17T10:00:00Z",
  "status": 400,
  "code": "VALIDATION_ERROR",
  "message": "Request validation failed",
  "path": "/api/v1/admissions/applications",
  "errors": [
    {
      "field": "email",
      "message": "must be a valid email"
    }
  ]
}
```

---

## 14. Data Design Guidance

All core tables should follow the baseline described in the architecture:

- `id`
- `created_at`
- `created_by`
- `updated_at`
- `updated_by`
- `status`
- `is_deleted`
- `version`

Important domain groups:

- users and roles
- admissions
- student information
- attendance
- exams and scores
- results
- materials
- cms
- notifications
- audit

Initial indexing priorities:

- login identifiers
- application number and status
- notice publish date
- event date
- student enrollment identifiers
- file metadata lookup fields

---

## 15. Detailed Delivery Phases

## Phase 1: Foundation

Goal:

Set up the base engineering platform so feature work can proceed without structural rework.

Deliverables:

- Monorepo structure with `backend/` and `frontend/`
- Spring Boot bootstrap
- Vite React bootstrap
- Docker Compose with `postgres`, `redis`, `backend`, `frontend`
- Environment strategy for local, staging, production
- Flyway migration setup
- Base security configuration
- User, role, permission model
- Shared API response and error handling
- Logging and correlation ID support
- Health endpoints
- Initial CI pipeline

Exit criteria:

- Apps run locally through a single command flow
- Database migrations run cleanly
- Login-ready auth skeleton exists
- CI can build both frontend and backend

## Phase 2: Public Website + CMS

Goal:

Launch a strong public-facing digital presence controlled by staff through admin tools.

Deliverables:

- Public website pages
- Responsive homepage inspired by the poster message
- Course and facilities pages
- Notices listing and detail pages
- Events listing and detail pages
- Toppers/highlights section
- CMS admin for content CRUD
- Media upload handling
- SEO metadata and social sharing basics
- Google Business and social CTA placement

Exit criteria:

- Staff can publish and update content without code changes
- Public site is mobile-ready
- Public APIs are cacheable and stable

## Phase 3: Admissions

Goal:

Convert public traffic into trackable enquiries and applications.

Deliverables:

- Enquiry form
- Admissions application form
- Draft and submit flow
- Application number generation
- Document upload
- Staff review queue
- Status transitions
- Application detail view
- Email notification flow
- WhatsApp notification hooks
- QR landing page routing to admissions

Exit criteria:

- Prospective students can complete an application online
- Staff can review and act on submissions
- Communication events are triggered consistently

## Phase 4: Academic Utility Modules

Goal:

Deliver the student-facing academic features that the poster advertises next.

Deliverables:

- Study materials repository
- Subject/category filtering
- Test schedules
- Weekly score display
- Result publishing basics
- Rankings/highlights view
- Download tracking for materials

Exit criteria:

- Students can access core academic information digitally
- Admin/staff can publish materials and scores

## Phase 5: Student and Parent Portal

Goal:

Provide authenticated dashboards for ongoing student and parent engagement.

Deliverables:

- Student dashboard
- Parent-linked student view
- Profile and academic summary
- Result history
- Attendance summary
- Materials access
- Notifications inbox or recent updates panel

Exit criteria:

- Students and parents can securely access role-appropriate data

## Phase 6: Notifications and Chatbot

Goal:

Improve automation and reduce repetitive manual support.

Deliverables:

- Notification template engine
- Scheduled reminders
- WhatsApp integration completion
- Event/reminder messages
- AI chatbot integration
- FAQ and admissions assistance
- English/Kannada interaction support

Exit criteria:

- Routine outreach is automated
- Basic chatbot support is available and bounded

## Phase 7: Hardening and Production Readiness

Goal:

Prepare the platform for reliable long-term production operation.

Deliverables:

- Prometheus metrics
- Grafana dashboards
- Centralized logs
- Security review
- Backup and restore process
- Load testing
- Operational runbooks
- Deployment approvals and release process

Exit criteria:

- Platform is observable, recoverable, and supportable in production

---

## 16. Recommended Technical Decisions

These decisions should be locked early to avoid drift.

## 16.1 Chosen Recommendations

- Frontend styling: Tailwind CSS
- Database migrations: Flyway
- Password hashing: BCrypt initially, with optional move to Argon2 later
- Deployment model: Docker Compose on a single VM for first production release
- Messaging: no Kafka in MVP
- Frontend app model: one frontend codebase with route-based segmentation

## 16.2 Why

- Tailwind accelerates custom UI delivery for public pages and admin surfaces.
- Flyway is simpler and predictable for a greenfield Java application.
- BCrypt is operationally simpler and fully acceptable for an initial release.
- Kafka introduces complexity that is not justified at early scale.
- One frontend codebase is faster to ship and easier to maintain initially.

---

## 17. Immediate Build Plan

The first implementation milestone should focus on the platform skeleton and the minimum domains required for launch.

## 17.1 First Build Slice

- Initialize backend
- Initialize frontend
- Add Docker Compose
- Set up PostgreSQL and Redis
- Add Flyway baseline
- Implement auth and RBAC skeleton
- Implement CMS skeleton
- Implement admissions skeleton
- Add file storage abstraction
- Add public routing and layout shell
- Add admin routing shell

## 17.2 First Database Entities

- users
- roles
- user_roles
- notices
- events
- toppers
- enquiries
- admission_applications
- admission_documents
- audit_logs
- files

## 17.3 First Admin Screens

- Login
- Dashboard shell
- Notices management
- Events management
- Applications listing
- Application detail and status update

## 17.4 First Public Screens

- Homepage
- Admissions page
- Enquiry page
- Notices page
- Events page
- Contact page
- QR landing page

---

## 18. Risks and Mitigations

## 18.1 Scope Creep

Risk:

Trying to build full student ERP functionality in the MVP.

Mitigation:

Keep MVP limited to public site, CMS, admissions, admin, and first communication features.

## 18.2 Content Bottleneck

Risk:

Engineering completes pages but content is not ready.

Mitigation:

Design CMS early and allow placeholder-managed content from admins.

## 18.3 Messaging Integration Delays

Risk:

WhatsApp integration can be slowed by provider approvals or setup.

Mitigation:

Build notification abstraction with email first and plug WhatsApp into the same event layer.

## 18.4 Bilingual Complexity

Risk:

Late bilingual support forces schema or UI rewrites.

Mitigation:

Design content and component structure to be localization-ready from day one.

## 18.5 File Handling and Security

Risk:

Unsafe uploads or inconsistent storage strategy.

Mitigation:

Centralize upload validation and storage abstraction inside the backend.

---

## 19. Definition of Done

A module is considered done only when:

- Functionality is implemented
- Validation rules are enforced
- Role-based access is applied
- Error handling is consistent
- Tests cover critical behavior
- Audit logging is added where required
- API documentation is updated
- UI is responsive on mobile and desktop
- Deployment configuration is included if infrastructure changed

---

## 20. Recommended Next Action

The next practical step is not more planning. It is repository setup.

The implementation should begin with:

1. Create the project skeleton
2. Bootstrap Spring Boot backend
3. Bootstrap Vite React frontend
4. Add Docker Compose and local environment config
5. Create baseline migrations
6. Add auth, roles, and CMS/admissions module skeletons

Once that is in place, the team can execute the roadmap without revisiting core structural decisions repeatedly.
