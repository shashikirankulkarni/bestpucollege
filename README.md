# College Digital Platform

A digital platform for a Pre-University college — not a brochure site. The
public marketing pages are one surface; the system is designed around
admissions, notices, results, study materials, and separate portals for
students, parents, and staff.

**Status:** the public frontend is built, and the backend's shared library
modules are in place. The business services are specified and scaffolded but not
yet implemented — see [Roadmap](#roadmap). Nothing below overstates what runs.

## Repository layout

```
frontend/    React 19 + TypeScript + Vite — public site (built)
backend/     Spring Boot 3.3 / Java 21 multi-module Maven build (shared modules)
architecture.md            full system design
project_execution_plan.md  phased delivery plan
```

## Frontend

Nine public pages — Home, About, Academics, Admissions, Notices, Results,
Events, Facilities, Contact — behind a shared `PublicLayout`, with routes
declared in one place (`routes/index.tsx`) and page copy separated from
presentation (`features/home/content.ts`), so content edits don't touch
components.

TanStack Query and React Hook Form are wired in ahead of the API layer:
admissions enquiries and notice feeds are the first things to become live data,
and putting the fetching and form primitives in early avoids retrofitting them
across nine pages later.

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build
```

## Backend

Five shared Maven modules that the business services will build on:

| Module             | Responsibility                                              |
|--------------------|-------------------------------------------------------------|
| `common-dto`       | `ApiResponse<T>`, `ErrorResponse`, `PagedResponse<T>`        |
| `common-exception` | Global `@RestControllerAdvice` + typed domain exceptions     |
| `common-security`  | `JwtTokenProvider`, `JwtAuthenticationFilter`                |
| `common-events`    | `BaseEvent`, `UserCreatedEvent`, central `Topics` registry   |
| `common-audit`     | `Auditable` base entity — created/modified timestamps, actors |

Splitting these means a service depends only on what it needs: an event consumer
pulls `common-events` without dragging in the servlet stack.

```bash
cd backend
mvn install        # builds all five modules
```

Requires JDK 21+ and Maven 3.9+. See [`backend/README.md`](backend/README.md).

## Roadmap

Commented out in the parent POM until implemented:

- `config-server` — centralized configuration
- `discovery-server` — service registry
- `api-gateway` — edge routing, auth termination
- `auth-service` — identity, roles, token issuance

Then the domain services: admissions, notices/CMS, results, study materials, and
the student/parent portal. [`architecture.md`](architecture.md) covers the full
target design including notifications, analytics, and role-based access.

## Stack

**Frontend** React 19 · TypeScript · Vite · Tailwind CSS · React Router ·
TanStack Query · React Hook Form
**Backend** Java 21 · Spring Boot 3.3 · Spring Security (JWT) · Maven multi-module
