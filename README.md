# Office Detector

A browser-based PWA that detects office objects — laptop, keyboard, mouse, phone, cup, monitor — from a phone camera or uploaded photo. No installation, no server required.

**[→ Open app](https://Timson974.github.io/office-detector/)**

---

## What it does

Point your phone camera at a desk. The app identifies objects in real time and shows a count with confidence scores. Useful as a lightweight asset inventory tool or as a demo of on-device computer vision.

| Object | COCO class | Emoji |
|---|---|---|
| Laptop | `laptop` | 💻 |
| Keyboard | `keyboard` | ⌨️ |
| Mouse | `mouse` | 🖱️ |
| Phone | `cell phone` | 📱 |
| Cup | `cup` | ☕ |
| Monitor / TV | `tv` | 🖥️ |

---

## Features

- 📷 **Camera or upload** — capture live from phone or load any photo
- 🌐 **EN / RU / ҚАЗ** — full trilingual UI
- 📊 **Results grid** — object counts with emoji and confidence
- 📋 **Scan history** — last 10 scans with thumbnails
- 🔗 **API bridge** — connects to [SiteGuard](https://github.com/Timson974/siteguard) backend when available
- 📱 **Installable PWA** — add to home screen on iOS and Android, works offline

---

## Install on phone

**iPhone (Safari):** Share button → "Add to Home Screen"

**Android (Chrome):** Menu (⋮) → "Add to Home Screen"

---

## Connect to SiteGuard backend

If you have [SiteGuard](https://github.com/Timson974/siteguard) running locally:

```
https://Timson974.github.io/office-detector/#api=http://localhost:8000
```

Detections will be saved to PostgreSQL and appear in the SiteGuard dashboard.

---

## Tech

- Vanilla HTML / CSS / JS — zero dependencies
- PWA: Web App Manifest + Service Worker (cache-first)
- Detection: COCO pre-trained classes via SiteGuard API, or simulated offline
- Planned v0.2: in-browser ONNX inference (`yolov8n.onnx` via ONNX Runtime Web)

---

## Related

- **[SiteGuard](https://github.com/Timson974/siteguard)** — FastAPI + YOLOv8 + PostgreSQL backend (PPE + office detection)
- **[NVRisk Pro](https://github.com/Timson974/nvr-pro)** — Noise & vibration risk calculator PWA

---

## Licence

MIT
