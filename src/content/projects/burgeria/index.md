---
title: Burgeria
summary: Bestell- und Reservierungs-Website für ein Burger-Restaurant, gebaut mit Ruby on Rails.
logo: ./logo.svg
screenshots:
  - src: ./screenshots/homepage.png
    caption: Startseite mit Empfehlungen und „Über uns“-Bereich.
  - src: ./screenshots/menu.png
    caption: Speisekarte mit Kategorien wie Burgers, Fries, Drinks, Salads, Pastas und Desserts.
  - src: ./screenshots/warenkorb.png
    caption: Warenkorb mit Mengenänderung, Gesamtsumme und Weiter zum Checkout.
  - src: ./screenshots/reservierung.png
    caption: Reservierung mit Datum, Uhrzeit und Tischauswahl über einen Raumplan.
url: https://eppic.github.io/burgeria-public
github: https://github.com/eppic/burgeria-public
tech:
  - Ruby on Rails
  - Ruby
  - PostgreSQL
  - SCSS
date: 2025-02-05
collaborators:
  - name: Luca T.
role: Inhalte, Datenbank und Reservierungsprozess
---

**Burgeria** ist die Website eines fiktiven Burger-Restaurants, bei der man Essen bestellen und einen Tisch reservieren kann. Entstanden ist sie als Projekt an der **FH Salzburg** zusammen mit Luca T. und ist mit **Ruby on Rails** umgesetzt.

Ich habe die Daten eingepflegt, mich um die Felder gekümmert und die „Datenbank“ mit allen Einträgen aufgebaut, also den größten Teil in diesem Bereich. Außerdem habe ich den Reservierungsprozess entworfen und war für die meisten direkten Inhalte der Seite verantwortlich. Den Look & Feel hat Luca gestaltet, dabei habe ich ausgeholfen.

## Disclaimer

Leider fehlen der verlinkten Github Pages Seite die Reservierungsseite und der Warenkorb. Ruby on Rails auf Github Pages zum laufen zu bekommen ist schwer möglich. Die Seite ist somit nicht repräsentativ für das finale Produkt. In den Screenshots weiter unten kann man diese Funktionen betrachten. 

## Funktionen

- **Speisekarte:** Gerichte sind in Kategorien wie Burgers, Fries, Drinks, Salads, Pastas, Desserts und Soups gegliedert, inklusive Zutaten und Allergenen.
- **Warenkorb & Bestellung:** Gerichte lassen sich in den Warenkorb legen, Mengen ändern oder entfernen. Beim Checkout werden Name, E-Mail und Adresse abgefragt, danach gibt es eine Bestätigungs-E-Mail.
- **Tischreservierung:** Man wählt Datum und Uhrzeit und sucht den Tisch auf einem Raumplan aus. Die Tische sind nach Personenzahl gruppiert.
- **Plausibilitätsprüfung:** Reservierungen in der Vergangenheit oder auf einen bereits belegten Tisch werden abgelehnt. Auch dafür gibt es eine Bestätigungs-E-Mail.
- **Aufräumen:** Ein Hintergrund-Job löscht alte Reservierungen automatisch.
