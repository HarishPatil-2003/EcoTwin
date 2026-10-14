# EcoTwin — AI-Powered Digital Product Passport & Lifecycle Intelligence

EcoTwin is a software-first lifecycle platform for consumer electronics. It creates a persistent Digital Product Passport and combines purchase evidence, warranty, ownership, device identity, historical snapshots, anomaly detection, lifecycle analysis, sustainability estimates and an AI decision engine.

## Architecture
- Frontend: React + TypeScript + Vite + Tailwind CSS v4 + Lucide + Recharts-ready architecture
- Backend: Spring Boot + REST + JPA/Hibernate + Spring Security + JWT dependencies
- Database: PostgreSQL
- OCR/AI integration points: Tesseract/OpenCV, Python/scikit-learn, Ollama
- Deployment: Docker Compose + Nginx

## Direct demo (works without installing Node/Maven)
This environment cannot resolve external package registries and has no Docker daemon, so the included zero-dependency demo is provided for immediate execution. It mirrors the production UI and key workflows using browser localStorage.

```bash
cd demo
node server.mjs
```
Open `http://127.0.0.1:4173`.

## Production stack
```bash
cd frontend
npm install
npm run build

cd ../backend
mvn spring-boot:run
```
Or from the project root:
```bash
docker compose up --build
```

### API
- `GET /api/dashboard`
- `GET /api/devices`
- `POST /api/devices` `{ "name": "Dell XPS 14", "type": "Laptop", "purchaseDate": "2026-09-01" }`
- `DELETE /api/devices/{id}`
- `GET /api/documents`
- `POST /api/documents` `{ "filename": "invoice.pdf", "type": "INVOICE" }`
- `GET /actuator/health`

## Core product modules
1. Dashboard
2. Digital Product Passport
3. Device identity & historical snapshots
4. Warranty and ownership
5. Hardware-change evidence
6. Lifecycle intelligence (ELI)
7. Sustainability assessment (ESS)
8. Trust assessment (ETS)
9. Eco Decision Engine
10. Documents/OCR integration point
11. AI Assistant integration point
12. Resource-conservation analytics

## SIH alignment
For the SIH 2026 PDF supplied in this conversation, the selected direction is **SIH26201 — Student Innovation, Smart Resource Conservation**. The supplied PDF lists SIH26201 under AICTE Student Innovation and the Smart Resource Conservation theme.

## Important scope note
No custom IoT or physical sensors are required for the EcoTwin MVP. Device telemetry can be collected from existing OS/firmware interfaces by a future desktop agent; the current demo is software/data driven.
