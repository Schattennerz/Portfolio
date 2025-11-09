# Portfolio

Eine persönliche Portfolio-Website, erstellt mit Vite + React. Dieses Repository enthält den Quellcode für die Website, die auf modernen Frontend-Bauwerkzeugen basiert und für einfache Entwicklung und Bereitstellung optimiert ist.

## Inhalt dieser README

- Kurzbeschreibung
- Features
- Tech-Stack
- Installation & Entwicklung (inkl. PowerShell-Befehle)
- Build & Deployment
- Projektstruktur
- Anpassung & Beitrag
- Kontakt

## Kurzbeschreibung

Dieses Projekt ist ein schlankes Portfolio, mit dem persönliche Projekte und Informationen ansprechend präsentiert werden können. Es ist als Single-Page-App (SPA) aufgebaut und nutzt Vite für schnelles Development und Build.

## Features

- Schneller Entwicklungsserver mit Hot Module Replacement (HMR)
- Produktionstauglicher Build mit Vite
- Einfach anpassbare Komponenten und Styles

## Tech-Stack

- React
- Vite
- Plain CSS (oder Tailwind/PostCSS, falls ergänzt)
- Node.js / npm

## Voraussetzungen

- Node.js (empfohlen: LTS-Version)
- npm (oder pnpm/yarn falls gewünscht)

## Installation & Entwicklung

Folge diesen Schritten, um das Projekt lokal zu starten (PowerShell / Windows):

```powershell
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffne danach http://localhost:5173 (Standardport von Vite) in deinem Browser.

## Build & Vorschau

Für einen Produktions-Build und lokale Vorschau:

```powershell
# Produktion bauen
npm run build

# Lokale Vorschau des Builds
npm run preview
```

Die fertigen Dateien liegen dann im `dist/`-Ordner und können auf jedem statischen Host bereitgestellt werden.

## Deployment (kurz)

Beliebte Optionen zum Hosten:

- GitHub Pages: `dist/` veröffentlichen (ggf. mit gh-pages oder GitHub Actions)
- Vercel: Repo verbinden, automatische Deploys bei Push
- Netlify: Repo verbinden oder `dist/` hochladen

Wenn du möchtest, kann ich eine Beispiel-GitHub-Actions-Workflow-Datei hinzufügen, die automatisch auf Push zu `master`/`main` deployed.

## Projektstruktur (Auszug)

```
d:/Portfolio/Portfolio
├─ public/           # statische Assets
├─ src/
│  ├─ assets/        # Bilder, Icons
│  ├─ App.jsx        # Hauptkomponente
│  ├─ main.jsx       # Einstiegspunkt
│  ├─ index.css      # globale Styles
│  └─ ...
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

Passe diese Struktur an, falls du zusätzliche Seiten, Routen oder Backend-Integration benötigst.

## Anpassung & Beitrag

- Um Titel, Inhalte und Links zu ändern, bearbeite die entsprechenden Komponenten in `src/`.
- Für größere Änderungen: erst einen Feature-Branch erstellen und einen PR öffnen.

Wenn du möchtest, übernehme ich gern folgende Erweiterungen:

- Einbindung von Meta-Tags / OpenGraph für bessere SEO
- Automatische Deploy-Pipeline (GitHub Actions)
- Einfache Formular-Integration für Kontakt-Nachrichten

## Lizenz

Aktuell ist keine Lizenzdatei vorhanden. Wenn du möchtest, kann ich eine MIT-Lizenz (`LICENSE`) hinzufügen oder eine andere Lizenz deiner Wahl.

## Kontakt

Repository: https://github.com/Schattennerz/Portfolio

Bei Fragen oder wenn du Hilfe beim Deployment willst, sag kurz Bescheid — ich helfe gerne beim nächsten Schritt.

---

Hinweis: Wenn du Screenshots, ein Favicon oder persönliche Texte/Bilder einfügst, ergänze sie im `public/` bzw. `src/assets/` Ordner und aktualisiere die entsprechenden Komponenten.

