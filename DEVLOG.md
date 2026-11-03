# DEVLOG — Office Detector

Personal build log. Each entry = one session of real work.

---

## 2026-11-03 — v0.1 · Initial build

**Goal:** Browser-based PWA that detects office objects from a phone camera — no server needed.

**Decisions made:**
- Zero-dependency single HTML file (same pattern as NVRisk Pro) — works on any phone, no install
- Used COCO class names (`laptop`, `keyboard`, `mouse`, `cell phone`, `cup`, `tv`) because YOLOv8n already knows them — no custom training needed for the demo
- Demo/simulation mode when no model is loaded — UI is fully testable offline
- API bridge: if SiteGuard backend is running locally, the PWA connects via `#api=http://...` hash — same FastAPI `/detect/office` endpoint

**What's in v0.1:**
- Camera capture + photo upload
- Results grid with emoji + confidence per class
- Scan history (last 10)
- EN / RU / ҚАЗ language switcher
- PWA manifest + Service Worker (installable on iOS and Android)
- Dark navy design system (matches NVRisk Pro)

**What's missing / next:**
- Real in-browser YOLO inference (need to export `yolov8n.onnx` and load via ONNX Runtime Web)
- Bounding box overlay on the preview image
- Count-over-time chart (track inventory across sessions)
- Optional: sync history to SiteGuard PostgreSQL via API

---

## Planned — v0.2 · Real browser inference

- Export `yolov8n.onnx` from ultralytics
- Load via `ort` (ONNX Runtime Web, ~6 MB gzipped)
- Draw bounding boxes on canvas overlay
- Target: works fully offline, no API needed
- Stretch: custom-trained model for a specific office layout

---

## Planned — v0.3 · History & sync

- LocalStorage scan history with timestamps
- Optional POST to SiteGuard `/detect/office` for server-side storage
- Simple bar chart: which objects appear most often this week
