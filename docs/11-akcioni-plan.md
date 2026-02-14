---
title: Akcioni plan — Prvih 30 dana
description: Detaljan plan po danima za prvih 30 dana SaaS oglasavanja - od postavljanja infrastrukture do pokretanja i optimizacije kampanja.
---

Ovaj plan pretpostavlja da imaš sajt (landing stranicu) spreman za saobraćaj. Ako nemaš — to je korak nula.

---

## Nedelja 1: Postavljanje infrastrukture (Tracking & Analytics)

Ništa ne radi bez praćenja. Ova nedelja je posvećena tome da sve bude spremno za merenje.

### Dan 1-2: Google alati

- [ ] **Kreiraj Google Analytics 4 nalog**
  - analytics.google.com > Create Property
  - Postavi Data Stream za tvoj sajt
  - Instaliraj GA4 tag na sajt

- [ ] **Kreiraj Google Tag Manager nalog**
  - tagmanager.google.com > Create Account > Create Container (Web)
  - Instaliraj GTM container kod na sajt (`<head>` + `<body>`)
  - Prebaci GA4 tag u GTM (umesto direktne instalacije)

- [ ] **Postavi Google Search Console**
  - search.google.com/search-console
  - Dodaj property (URL prefix)
  - Verifikuj vlasništvo (DNS ili HTML tag)
  - Postavi sitemap (tvoj-sajt.com/sitemap.xml)

- [ ] **Kreiraj Google Ads nalog**
  - ads.google.com > Switch to Expert Mode > Create without campaign
  - Podesi valutu (EUR) i vremensku zonu
  - Dodaj payment metod

- [ ] **Poveži GA4 sa Google Ads**
  - GA4 > Admin > Product Links > Google Ads Links

### Dan 3-4: Meta alati

- [ ] **Kreiraj Meta Business Manager**
  - business.facebook.com > Create Account
  - Dodaj Facebook stranicu
  - Dodaj Instagram nalog

- [ ] **Kreiraj Ad Account u Business Manager**
  - Business Settings > Ad Accounts > Add > Create New
  - Podesi valutu i vremensku zonu
  - Dodaj payment metod

- [ ] **Instaliraj Meta Pixel**
  - Events Manager > Connect Data Source > Web > Meta Pixel
  - Instaliraj preko GTM-a (Custom HTML tag)
  - Verifikuj sa Meta Pixel Helper extension-om

- [ ] **Verifikuj domen**
  - Business Settings > Brand Safety > Domains > Add
  - DNS TXT verifikacija (preporučeno)

### Dan 5: Konverzije i eventi

- [ ] **Podesi Google Ads konverzije**
  - Tools > Conversions > New conversion action > Website
  - Kreiraj: "Free Trial Signup" (primarna konverzija)
  - Postavi tag na thank-you stranicu (preko GTM-a)

- [ ] **Podesi Meta standardne evente**
  - fbq('track', 'CompleteRegistration') — na thank-you stranici
  - fbq('track', 'StartTrial') — na trial aktivaciji
  - fbq('track', 'ViewContent') — na pricing stranici
  - Podesi sve kroz GTM

- [ ] **Podesi GA4 konverzije**
  - Označi relevantne evente kao konverzije u GA4
  - Kreiraj custom event za trial signup ako ga nema

- [ ] **Testiraj SVE tagove**
  - GTM Preview mode — prođi kroz ceo signup flow
  - Google Tag Assistant extension
  - Meta Pixel Helper extension
  - Napravi test konverziju i proveri da li se beleži na svim platformama

### Dan 6-7: Cookie consent i legal

- [ ] **Postavi Cookie Consent baner**
  - Izaberi CMP alat (Cookiebot ili CookieYes za početak)
  - Instaliraj na sajt
  - Podesi kategorije kolačića
  - Integriši sa Google Consent Mode v2

- [ ] **Proveri da sajt ima:**
  - Privacy Policy stranicu
  - Terms of Service stranicu
  - Cookie Policy stranicu
  - Kontakt informacije

---

## Nedelja 2: Keyword Research i priprema sadržaja

### Dan 8-10: Keyword Research

- [ ] **Brainstorming tema**
  - Napiši listu od 10-15 glavnih tema vezanih za tvoj proizvod
  - Za svaku temu napiši 5-10 podtema

- [ ] **Keyword research sa alatima**
  - Otvori Google Keyword Planner (u Google Ads nalogu)
  - Za svaku temu istraži ključne reči
  - Zabeleži: obim pretrage, difficulty, nameru

- [ ] **Napravi spreadsheet sa ključnim rečima**
  - Minimum 50 ključnih reči
  - Kategorizuj po nameri (informativna, komercijalna, transakciona)
  - Kategorizuj po fazi funnel-a (TOFU, MOFU, BOFU)
  - Prioritizuj: BOFU sa niskim difficulty-jem prvo

- [ ] **Mapiranje ključnih reči na stranice**
  - Svaka ključna reč → jedna stranica
  - Identifikuj koje stranice postoje a koje treba kreirati

### Dan 11-12: On-page SEO optimizacija

- [ ] **Optimizuj postojeće stranice**
  - Homepage: title tag, meta description, H1
  - Features stranica: title tag, meta description, heading struktura
  - Pricing stranica: title tag, meta description, FAQ sa schema markup-om

- [ ] **Kreiraj/optimizuj landing stranicu za trial signup**
  - Naslov sa primarnom ključnom reči
  - Podnaslov sa benefitom
  - CTA dugme iznad folda
  - Socijalni dokaz (logotipi, testimonijali)
  - Brzina < 3 sekunde
  - Mobile-friendly

### Dan 13-14: Sadržaj

- [ ] **Napiši 2-3 BOFU blog posta**
  - Primer 1: "TvojProizvod vs [Konkurent] — Detaljno poređenje"
  - Primer 2: "Top 5 [Konkurent] alternativa u 2026."
  - Primer 3: "[Tvoja kategorija] za [specifična industrija]"
  - Svaki: minimum 1500 reči, optimizovan za target ključnu reč

- [ ] **Postavi blog postove**
  - Optimizovani title tagovi
  - Meta descriptions
  - Interni linkovi ka landing stranici i između postova
  - FAQ sekcija sa schema markup-om

---

## Nedelja 3: Pokretanje plaćenih oglasa

### Dan 15-17: Google Search kampanja

- [ ] **Kreiraj prvu Search kampanju**
  - Cilj: Leads ili Sales
  - Budget: 15-25 EUR/dan
  - Bidding: Maximize Conversions (ako imaš tracking) ili Maximize Clicks
  - Mreže: SAMO Search (isključi Display i Search Partners)
  - Lokacija: tvoja ciljna zemlja/grad
  - Jezik: jezik ciljne grupe

- [ ] **Kreiraj 2-3 Ad grupe**
  - Svaka tematski uska
  - 5-10 ključnih reči po grupi (Phrase Match)
  - Primer Ad grupe: "CRM za mali biznis", "Upravljanje kontaktima"

- [ ] **Napiši oglase**
  - 15 naslova po Ad grupi (raznovrsnih)
  - 4 opisa po Ad grupi
  - Uključi ključnu reč u naslove 1-3

- [ ] **Dodaj Ad Extensions**
  - Sitelinks (minimum 4: Features, Pricing, Trial, Blog)
  - Callouts (minimum 4: "Besplatan trial", "24/7 Podrška", itd.)
  - Structured Snippets

- [ ] **Dodaj negativne ključne reči**
  - Početna lista: besplatno, posao, kurs, šta je, wiki, tutorial
  - Na nivou kampanje

### Dan 18-19: Meta Ads kampanja

- [ ] **Kreiraj prvu Sales kampanju**
  - Cilj: Sales > CompleteRegistration ili StartTrial
  - Budget: 15-20 EUR/dan po Ad Set-u

- [ ] **Kreiraj 2-3 Ad Set-a za testiranje kreativa**
  - Isti targeting na svim (Lookalike 1% ili Detailed Targeting)
  - Različit kreativ u svakom

- [ ] **Kreiraj 3-5 oglasa**
  - Minimum 1 video (15-30s)
  - Minimum 2 slike (različiti koncepti)
  - Svaki sa hook tekstom i CTA

- [ ] **Postavi Retargeting kampanju**
  - Kreiraj Custom Audience: Posetioci sajta 30 dana (exclude konvertovane)
  - Manji budget: 5-10 EUR/dan
  - Specifična poruka za retargeting

### Dan 20-21: Provera i praćenje

- [ ] **Proveri da SVE radi**
  - Oglasi su odobreni (approved) na oba kanala
  - Konverzije se pravilno beleže
  - Landing stranica se učitava brzo
  - UTM parametri su na svim Meta Ads linkovima

- [ ] **Postavi dnevno praćenje**
  - Bookmark-uj: Google Ads, Ads Manager, GA4
  - Proveri Search Terms na Google Ads (dnevno!)
  - Proveri CTR, CPC, konverzije

---

## Nedelja 4: Analiza i optimizacija

### Dan 22-24: Analiza podataka

- [ ] **Google Ads analiza**
  - Proveri Search Terms — dodaj negativne ključne reči za nebitne pretrage
  - Proveri Quality Score — ispod 5? Poboljšaj relevantnost
  - Proveri CTR — ispod 3%? Prepiši oglas
  - Proveri CPC — previše? Smanji bid ili poboljšaj QS
  - Proveri konverzije — koliki CPA?

- [ ] **Meta Ads analiza**
  - Koji kreativ ima najbolji CTR i najniži CPA?
  - Koji targeting radi? (Breakdown po uzrastu, polu, platformi)
  - Kolika je frequency? (Ako > 3, planiraj nove kreative)

- [ ] **GA4 analiza**
  - Odakle dolazi saobraćaj? (Acquisition report)
  - Koji kanal donosi konverzije? (Conversion report)
  - Kako se korisnici ponašaju na sajtu? (Engagement report)
  - Kakav je bounce rate na landing stranici?

### Dan 25-26: Optimizacija

- [ ] **Pauziraj ono što ne radi**
  - Google Ads: pauziraj ključne reči sa visokim troškom i 0 konverzija
  - Meta Ads: pauziraj kreative sa najlošijim performansama

- [ ] **Pojačaj ono što radi**
  - Povećaj budget za 20% na ad grupama/ad setovima sa konverzijama
  - Dodaj nove ključne reči slične onima koje konvertuju

- [ ] **Testiraj nove varijante**
  - Napiši novi oglas u Google Ads (drugačiji hook)
  - Kreiraj 2 nove kreative za Meta Ads

### Dan 27-28: SEO proverа

- [ ] **Proveri Google Search Console**
  - Da li su stranice indeksirane?
  - Da li ima grešaka?
  - Da li se pojavljuju prvi klikovi za blog postove?

- [ ] **Objavi još jedan blog post**
  - Fokus na BOFU ili MOFU ključnu reč
  - Interni linkovi ka postojećim stranicama

### Dan 29-30: Plan za mesec 2

- [ ] **Sumiraj rezultate meseca 1**
  - Ukupna potrošnja
  - Ukupne konverzije
  - Blended CAC
  - Ključni uvidi (šta radi, šta ne)

- [ ] **Napravi plan za mesec 2**
  - Koji kanal zaslužuje više budžeta?
  - Koje nove ključne reči/publike testirati?
  - Koji sadržaj kreirati sledeće?
  - Da li landing stranica treba A/B test?

---

## Rezime prvih 30 dana

| Nedelja | Fokus | Rezultat |
|---------|-------|---------|
| 1 | Infrastruktura | Tracking radi, nalozi spremni |
| 2 | Research & sadržaj | 50+ KW, 2-3 blog posta, LP optimizovana |
| 3 | Pokretanje oglasa | Google Search + Meta Ads + Retargeting aktivni |
| 4 | Analiza & optimizacija | Uvidi, optimizacije, plan za mesec 2 |
