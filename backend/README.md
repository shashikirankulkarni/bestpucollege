# College Platform — Backend

Spring Boot 3.3 / Java 21 multi-module backend for the college digital platform.
This tree currently holds the **shared library modules** that the business
services build on; the services themselves are scaffolded in the parent POM but
not yet implemented.

## Modules

| Module             | Responsibility                                                     |
|--------------------|--------------------------------------------------------------------|
| `common-dto`       | `ApiResponse<T>`, `ErrorResponse`, `PagedResponse<T>` — one envelope shape across every service |
| `common-exception` | `@RestControllerAdvice` global handler + typed `ResourceNotFoundException` / `BadRequestException`, mapped to `ErrorResponse` |
| `common-security`  | `JwtTokenProvider` (issue/validate) and `JwtAuthenticationFilter` (per-request bearer auth) |
| `common-events`    | `BaseEvent`, `UserCreatedEvent`, and a central `Topics` registry for the event bus |
| `common-audit`     | `Auditable` base entity — created/modified timestamps and actors |

The point of the split is that a service depends only on what it needs: an
event consumer pulls `common-events` without dragging in the servlet stack.

## Build

```bash
cd backend
mvn install          # builds and installs all five modules
```

Requires JDK 21+ and Maven 3.9+. Verified green against Spring Boot 3.3.5.

## Not yet implemented

The parent POM lists these as commented-out modules, to be filled in as the
platform grows:

- `config-server` — centralized configuration
- `discovery-server` — service registry
- `api-gateway` — edge routing and auth termination
- `auth-service` — identity, roles, and token issuance

See [`../architecture.md`](../architecture.md) for the full system design and
[`../project_execution_plan.md`](../project_execution_plan.md) for sequencing.
