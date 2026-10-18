---
title: kaeswurm.de
summary: Homepage von Line-Dance Tutorin Astrid Kaeswurm, gemacht in Astro.
logo: ./logo.jpg
screenshots:
  - src: ./screenshots/1.png
    caption: Startseite mit Hero-Bereich und Live Ticker (Desktop)
  - src: ./screenshots/2.png
    caption: Übersicht der Termine & Kurse mit aufklappbaren Details (Desktop)
  - src: ./screenshots/3.png
    caption: Startseite mit Burger-Menu (Mobile)
  - src: ./screenshots/4.png
    caption: Footer (Mobile)
  - src: ./screenshots/5.png
    caption: Englische Version der Seite mit Image-Slider (Mobile)
url: https://kaeswurm.de
github: https://github.com/eppic/kaeswurm-astro
tech:
  - Astro
  - HTML / CSS
  - TypeScript / JavaScript
date: 2025-12-08
priority: 1
collaborators:
  - name: Florentine Nagy
role: Komplette Umsetzung des vorgegebenen Designs in Astro
---

Die **Homepage** von **Astrid Kaeswurm**, umgesetzt nach dem Figma Design von Florentine Nagy mit dem Astro Framework.

Orignal habe ich die Seite vollständig in **Next.js** umgesetzt, allerdings stellte sich heraus, dass Next.js Probleme macht bei einem statischen Export, da wir keinen Zugriff auf einen vollständigen Server hatten, sondern einen simplen Webspace zur Verfügung haben. 

Ich entschied mich für Astro, da es besser geeignet für unseren Fall ist, und brachte es mir mit der Hilfe der offiziellen Dokumentation und Chatbots selbst bei. Die Seite habe ich dann (bis auf einzelne Teile wie den Live-Ticker) komplett neu geschrieben, da die originale Codebase des Next.js Projekts meiner Meinung nach wegen unaufgeräumten Code und zu großen Framework-Unterschieden nicht mehr zu gebrauchen war. 

-> Zum Stand vom *18. Oktober 2026* konzeptionieren wir zusammen mit Astrid einen richtigen Shop, einen Kalender für Termine, ein Anmeldeformular für Trainer und einem simplen Blogpost-System. 