---
title: DreamRoom
summary: Design-Tool für Innengestaltung in Next.js
logo: ./logo.jpg
screenshots:
  - src: ./screenshots/1.png
    caption: Startseite von DreamRoom
  - src: ./screenshots/2.png
    caption: Geöffneter Editor mit Auswahl der Raumgröße
  - src: ./screenshots/3.png
    caption: Editor mit einem fertig eingerichteten Raum
  - src: ./screenshots/4.png
    caption: Derselbe Raum mit hervorgehobenem Glastisch, der über dem Teppich liegt (Ebenen-System)
url: https://eppic.github.io/dreamroom-public
github: https://github.com/eppic/dreamroom-public
tech:
  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
date: 2025-06-13
priority: 1
collaborators:
  - name: Lukas M.
role: Oberfläche (HTML & Tailwind), Design, alle Möbel-Grafiken als SVG und Mitarbeit am Grid-Editor
---

**DreamRoom** ist ein einfaches Einrichtungs-Tool im Browser, entstanden als Projekt an der **FH Salzburg** zusammen mit Lukas M. Man kann damit Möbel aus einer Bibliothek auswählen, auf einem Raster platzieren, verschieben und drehen, bis die Einrichtung passt.

Ich habe die komplette Oberfläche mit HTML und Tailwind CSS umgesetzt, das Design entworfen und alle Möbelstücke als SVG mit Figma entworfen. An der Raster-Logik habe ich mitgearbeitet, einen Großteil der Editor-Logik hat Lukas umgesetzt.

## Features

- **Raster-Editor:** Möbel rasten beim Platzieren am Raster ein, so lassen sie sich sauber ausrichten.
- **Möbel-Bibliothek:** Betten, Sofas, Tische, Stühle, Schränke, Teppiche, Lampen, Türen und Fenster in verschiedenen Größen.
- **Realistische Möbelgrößen:** Jedes Möbelstück ist eine eigene SVG-Grafik; wie groß es im Raster erscheint, ergibt sich aus Größen aus Metadaten, welche echten Möbelstücken nachempfunden sind.
- **Drehen & Verschieben:** Möbel lassen sich frei positionieren und rotieren.
- **Ebenen-System:** Möbel können über oder unter anderen liegen, z. B. ein Tisch auf einem Teppich.
