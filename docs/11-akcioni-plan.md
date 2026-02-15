---
title: Akcioni plan — Prvih 90 dana
description: Detaljan plan po nedeljama za prvih 90 dana SaaS marketinga — od infrastrukture i brendinga, preko pokretanja kampanja, do PLG, lifecycle marketinga, CRO-a i skaliranja.
---

# Akcioni plan - Prvih 90 dana

Detaljan plan po nedeljama za prvih 90 dana SaaS marketinga - od postavljanja infrastrukture i definisanja brenda, preko pokretanja kampanja, do PLG optimizacije, lifecycle marketinga i skaliranja.

Ovaj plan pretpostavlja da imaš sajt (landing stranicu) spreman za saobraćaj. Ako nemaš — to je korak nula.

---

## Mesec 1: Infrastruktura, brending i prvi oglasi

### Nedelja 1: Tracking, brending i messaging osnove

Ništa ne radi bez praćenja i jasne poruke. Ova nedelja je posvećena tome da sve bude spremno.

#### Dan 1-2: Google alati

- [ ] **Kreiraj Google Analytics 4 nalog**
  - [analytics.google.com](https://analytics.google.com) > Create Property
  - Postavi Data Stream za tvoj sajt
  - Instaliraj GA4 tag na sajt

- [ ] **Kreiraj Google Tag Manager nalog**
  - [tagmanager.google.com](https://tagmanager.google.com) > Create Account > Create Container (Web)
  - Instaliraj GTM container kod na sajt (`<head>` + `<body>`)
  - Prebaci GA4 tag u GTM (umesto direktne instalacije)

- [ ] **Postavi Google Search Console**
  - [search.google.com/search-console](https://search.google.com/search-console)
  - Dodaj property (URL prefix)
  - Verifikuj vlasništvo (DNS ili HTML tag)
  - Postavi sitemap (tvoj-sajt.com/sitemap.xml)

- [ ] **Kreiraj Google Ads nalog**
  - [ads.google.com](https://ads.google.com) > Switch to Expert Mode > Create without campaign
  - Podesi valutu (EUR) i vremensku zonu
  - Dodaj payment metod

- [ ] **Poveži GA4 sa Google Ads**
  - GA4 > Admin > Product Links > Google Ads Links

#### Dan 3-4: Meta alati

- [ ] **Kreiraj Meta Business Manager**
  - [business.facebook.com](https://business.facebook.com) > Create Account
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

#### Dan 5: Konverzije i eventi

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

#### Dan 6: Brending i messaging osnove

- [ ] **Definiši Ideal Customer Profile (ICP)**
  - Ko je tvoj idealan korisnik? (industrija, veličina firme, uloga)
  - Koji problem rešavaš za njega?
  - Napravi 2-3 buyer persone sa imenima, ulogama, pain points

- [ ] **Definiši Value Proposition**
  - Koristi formulu: "Pomažemo [kome] da [šta postignu] kroz [kako]"
  - Napiši 3 varijante i izaberi najjaču
  - Testiraj sa 3-5 postojećih korisnika ili poznanika iz ciljne grupe

- [ ] **Definiši brand voice i ton**
  - Odredi 3-4 osobine brenda (npr. profesionalan, pristupačan, konkretan)
  - Napiši šta JESTE tvoj brend i šta NIJE (npr. "Konkretni smo, ne korporativni")
  - Ovo koristi za SVE tekstove — sajt, oglase, emailove, social

- [ ] **Napiši ključne messaging poruke**
  - Hero headline za sajt (jasno, benefit-focused)
  - Elevator pitch (1-2 rečenice)
  - 3 ključna benefita sa objašnjenjem
  - Objection handling — 3-5 najčešćih primedbi i odgovori

#### Dan 7: Cookie consent, legal i positioning

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

- [ ] **Competitive positioning**
  - Napravi listu top 5 konkurenata
  - Za svakog: cena, ključne funkcionalnosti, slabosti
  - Definiši čime se razlikuješ (tvoj unique angle)
  - Zapiši 2-3 "battle card" teze — zašto si bolji od konkretnih konkurenata

---

### Nedelja 2: Keyword Research, content strategija i priprema

#### Dan 8-10: Keyword Research

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

#### Dan 11-12: Content strategija i on-page SEO

- [ ] **Napravi content plan za 90 dana**
  - TOFU: 2 edukativna posta mesečno (broad awareness)
  - MOFU: 2 comparison/guide posta mesečno (consideration)
  - BOFU: 1 case study ili "vs" post mesečno (decision)
  - Dodeli datume i odgovorne osobe

- [ ] **Definiši content repurposing workflow**
  - Svaki blog post → LinkedIn post + carousel
  - Svaki blog post → email newsletter segment
  - Svaki guide → Video tutorial (kada budžet dozvoli)

- [ ] **Optimizuj postojeće stranice**
  - Homepage: title tag, meta description, H1, hero sa value proposition
  - Features stranica: title tag, meta description, heading struktura
  - Pricing stranica: title tag, meta description, FAQ sa schema markup-om

- [ ] **Kreiraj/optimizuj landing stranicu za trial signup**
  - Naslov sa primarnom ključnom reči i benefit-om
  - Podnaslov sa value proposition
  - CTA dugme iznad folda
  - Socijalni dokaz (logotipi, testimonijali, brojke)
  - Brzina < 3 sekunde
  - Mobile-friendly

#### Dan 13-14: Sadržaj i email priprema

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

- [ ] **Pripremi welcome email sekvencu (draft)**
  - Email 1 (odmah): Dobrodošlica + šta je sledeći korak
  - Email 2 (dan 1): Pomoć sa prvom ključnom akcijom
  - Email 3 (dan 3): Primer korišćenja / case study
  - Email 4 (dan 7): "Kako ti ide?" + pomoć
  - Email 5 (dan 14): Podsetnik da trial ističe + benefit preglasavanja

---

### Nedelja 3: Pokretanje plaćenih oglasa

#### Dan 15-17: Google Search kampanja

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
  - Koristi value proposition iz Nedelje 1

- [ ] **Dodaj Ad Extensions**
  - Sitelinks (minimum 4: Features, Pricing, Trial, Blog)
  - Callouts (minimum 4: "Besplatan trial", "24/7 Podrška", itd.)
  - Structured Snippets

- [ ] **Dodaj negativne ključne reči**
  - Početna lista: besplatno, posao, kurs, šta je, wiki, tutorial
  - Na nivou kampanje

#### Dan 18-19: Meta Ads kampanja

- [ ] **Kreiraj prvu Sales kampanju**
  - Cilj: Sales > CompleteRegistration ili StartTrial
  - Budget: 15-20 EUR/dan po Ad Set-u

- [ ] **Kreiraj 2-3 Ad Set-a za testiranje kreativa**
  - Isti targeting na svim (Lookalike 1% ili Detailed Targeting)
  - Različit kreativ u svakom

- [ ] **Kreiraj 3-5 oglasa**
  - Minimum 1 video (15-30s)
  - Minimum 2 slike (različiti koncepti)
  - Svaki sa hook tekstom i jasnim CTA

- [ ] **Postavi Retargeting kampanju**
  - Kreiraj Custom Audience: Posetioci sajta 30 dana (exclude konvertovane)
  - Manji budget: 5-10 EUR/dan
  - Specifična poruka za retargeting (social proof, urgency)

#### Dan 20-21: Provera i praćenje

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

### Nedelja 4: Analiza, optimizacija i plan za mesec 2

#### Dan 22-24: Analiza podataka

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

#### Dan 25-26: Optimizacija

- [ ] **Pauziraj ono što ne radi**
  - Google Ads: pauziraj ključne reči sa visokim troškom i 0 konverzija
  - Meta Ads: pauziraj kreative sa najlošijim performansama

- [ ] **Pojačaj ono što radi**
  - Povećaj budget za 20% na ad grupama/ad setovima sa konverzijama
  - Dodaj nove ključne reči slične onima koje konvertuju

- [ ] **Testiraj nove varijante**
  - Napiši novi oglas u Google Ads (drugačiji hook)
  - Kreiraj 2 nove kreative za Meta Ads

#### Dan 27-28: SEO provera

- [ ] **Proveri Google Search Console**
  - Da li su stranice indeksirane?
  - Da li ima grešaka?
  - Da li se pojavljuju prvi klikovi za blog postove?

- [ ] **Objavi još jedan blog post**
  - Fokus na BOFU ili MOFU ključnu reč
  - Interni linkovi ka postojećim stranicama

#### Dan 29-30: Rezime meseca 1

- [ ] **Sumiraj rezultate meseca 1**
  - Ukupna potrošnja po kanalu
  - Ukupne konverzije i trial sign-up-ovi
  - Blended CAC
  - Ključni uvidi (šta radi, šta ne)

- [ ] **Pripremi dashboard sa ključnim metrikama**
  - MRR (ili očekivani MRR iz trial-a)
  - CAC po kanalu
  - Conversion rate (visitor → trial)
  - Top 3 kanala po performansama

---

## Mesec 2: PLG, lifecycle marketing i proširenje kanala

### Nedelja 5-6: Product-Led Growth i onboarding

#### Nedelja 5: Analiza onboarding-a i aktivacije

- [ ] **Definiši "Aha moment"**
  - Koja je ključna akcija koju korisnik mora da uradi da bi video vrednost?
  - Primeri: kreirao prvi projekat, pozvao kolegu, integrisao alat, završio setup
  - Postavi event tracking za tu akciju u GA4/Mixpanel

- [ ] **Izmeri trenutni Activation Rate**
  - Koliki % trial korisnika završi ključnu akciju?
  - Koliko vremena im treba? (Time-to-Value)
  - Gde u procesu odustaju? (Funnel analiza)

- [ ] **Optimizuj onboarding flow**
  - Smanji broj koraka do "Aha momenta" na minimum
  - Dodaj progress bar ili checklist u app
  - Ukloni nepotrebna polja iz signup forme
  - Dodaj empty state sa jasnim prvim korakom

- [ ] **Postavi product analytics**
  - Izaberi alat: Mixpanel (besplatan do 20M events), PostHog (open-source) ili Amplitude
  - Definiši 5-10 ključnih evenata za praćenje
  - Postavi funnels: Signup → Onboarding → Activation → Retention

#### Nedelja 6: Freemium/Trial optimizacija

- [ ] **Revidiraj freemium/trial model**
  - Ako free trial: da li je 7, 14 ili 30 dana optimalno? (testiraj)
  - Ako freemium: da li besplatan plan daje dovoljno vrednosti da korisnik "navikne"?
  - Da li upgrade path jasno komunicira dodatnu vrednost?

- [ ] **Optimizuj pricing stranicu**
  - Da li je jasno šta svaki plan uključuje?
  - Dodaj "Most Popular" badge na srednji plan
  - Dodaj FAQ sekciju sa najčešćim pitanjima
  - Dodaj social proof (broj korisnika, testimonijali, logotipi)
  - Dodaj annual vs monthly toggle (sa prikazanom uštedom)

- [ ] **Postavi in-app upgrade prompts**
  - Identifikuj momente kada korisnik udari u limit besplatnog plana
  - Prikaži kontekstualnu poruku: "Upgrade da bi mogao X"
  - Ne budi agresivan — 1-2 prompta dnevno maksimum

- [ ] **Istraži growth loops**
  - Da li korisnici mogu da pozovu kolege? (invitation loop)
  - Da li deljeni sadržaj nosi tvoj brending? (content loop)
  - Da li integracije mogu doneti nove korisnike? (integration loop)

---

### Nedelja 7-8: Lifecycle marketing i email automatizacija

#### Nedelja 7: Email sekvence

- [ ] **Implementiraj welcome/onboarding sekvencu**
  - Izaberi email platformu: Customer.io, ActiveCampaign, Resend ili Loops
  - Implementiraj 5 email-ova iz drafta iz Nedelje 2
  - Podesi triggere (signup, aktivacija, neaktivnost)
  - Testiraj ceo flow sa test nalogom

- [ ] **Postavi behavioral trigger email-ove**
  - Korisnik se registrovao ali nije završio setup → email posle 24h
  - Korisnik je aktivan ali nije isprobao ključni feature → email sa tutorialom
  - Korisnik nije aktivan 7 dana → re-engagement email
  - Korisnik se približava kraju trial-a → podsetnik sa CTA

- [ ] **Postavi NPS ili feedback anketu**
  - In-app popup ili email posle 14 dana korišćenja
  - NPS pitanje: "Koliko biste preporučili [Proizvod] prijatelju? (0-10)"
  - Follow-up: "Šta bismo mogli da poboljšamo?"
  - Alat: Typeform, Google Forms, ili in-app custom

#### Nedelja 8: Churn prevention i retencija

- [ ] **Definiši "health score" za korisnika**
  - Kreiraj scoring na osnovu: učestalost logovanja, korišćenje ključnih feature-a, broj korisnika na nalogu
  - Segmentiraj: Healthy / At-risk / Churning
  - Postavi alert za korisnike koji prelaze u "At-risk"

- [ ] **Postavi churn prevention automatizaciju**
  - Korisnik neaktivan 14+ dana → automatski email sa "Šta se desilo?"
  - Korisnik smanjio korišćenje → proaktivni email sa novim feature-ima
  - Trial ističe za 3 dana → email sa urgency + popust ponuda (opcionalno)

- [ ] **Postavi win-back sekvencu**
  - Korisnik otkazao → email dan 1: "Žao nam je, feedback?"
  - Dan 7: "Evo šta smo poboljšali od kada ste otišli"
  - Dan 30: "Specijalna ponuda za povratak" (20-30% popust)

- [ ] **Kreiraj milestone email-ove**
  - "Čestitamo, završili ste 10 projekata!"
  - "Koristite nas već 30 dana — evo vaših statistika"
  - Ovi email-ovi grade engagement i smanjuju churn

---

### Nedelja 7-8 (paralelno): Proširenje kanala

#### LinkedIn i B2B (ako si B2B SaaS)

- [ ] **Optimizuj lične profile osnivača/tima na LinkedIn-u**
  - Profesionalna fotografija, banner sa brendingom
  - Headline sa value proposition (ne samo titula)
  - About sekcija sa storytelling-om

- [ ] **Pokreni LinkedIn content kalendar**
  - 3-5 postova nedeljno sa ličnog profila (ne company page)
  - Mix: edukativni, storytelling, data-driven, product updates
  - Angažuj se na komentare u prvih 30 minuta

- [ ] **Razmotri LinkedIn Ads** (ako je budget 500+ EUR/mes)
  - Sponsored Content kampanja za lead generation
  - Targeting: Job title + Industry + Company size
  - Lead Gen Form za white paper ili webinar download
  - Instaliraj LinkedIn Insight Tag

#### Content marketing mašina

- [ ] **Objavi 4+ blog posta tokom meseca 2**
  - Prati content plan iz Nedelje 2
  - Minimum 1 TOFU, 2 MOFU, 1 BOFU
  - Svaki optimizovan za SEO

- [ ] **Pokreni email newsletter**
  - Nedeljni ili dvonedeljni format
  - Sadržaj: novi blog post + tip nedelje + product update
  - CTA: Trial signup ili upgrade

- [ ] **Thought leadership aktivnosti**
  - Piši komentare na LinkedIn postove lidera u industriji
  - Odgovaraj na relevantna pitanja na Reddit/Quora
  - Razmotri gostujući blog post na relevantnom sajtu

---

## Mesec 3: CRO, MarTech i skaliranje

### Nedelja 9-10: CRO i eksperimentisanje

#### Nedelja 9: Postavljanje CRO infrastrukture

- [ ] **Instaliraj heatmap i session recording alat**
  - Microsoft Clarity (besplatan) ili Hotjar
  - Postavi na landing page, pricing page i signup flow
  - Prikupi minimum 100 sesija pre analize

- [ ] **Analiziraj snimke i heatmape**
  - Gde korisnici klikću na landing stranici?
  - Gde prestaju da scrolluju?
  - Gde se dešava drop-off u signup flow-u?
  - Zapiši 5 ključnih uvida

- [ ] **Identifikuj top 3 mogućnosti za poboljšanje**
  - Koristi ICE scoring: Impact (1-10) × Confidence (1-10) × Ease (1-10)
  - Sortiraj po ICE score-u i počni od vrha
  - Primeri: promena headline-a, drugačiji CTA, kraći signup form

- [ ] **Postavi A/B testing alat**
  - Google Optimize je ugašen — koristi VWO (besplatan za 50K posetilaca) ili Posthog
  - Alternativno: ručni A/B test sa UTM parametrima i dve landing stranice

#### Nedelja 10: Prvi A/B testovi

- [ ] **Pokreni A/B test na landing stranici**
  - Test 1: Headline (benefit vs feature vs question)
  - Čekaj statističku značajnost (minimum 100 konverzija po varijanti)
  - Prati primarnu metriku: conversion rate (visitor → trial)

- [ ] **Optimizuj signup flow**
  - Koliko polja ima signup forma? Smanji na minimum (email + password)
  - Dodaj social login (Google, GitHub — zavisi od ciljne grupe)
  - Testiraj: signup sa ili bez kreditne kartice
  - Dodaj progress indicator ako ima više koraka

- [ ] **Optimizuj pricing stranicu**
  - Testiraj raspored planova (3 kolone vs feature comparison tabela)
  - Testiraj poziciju "Most Popular" badge-a
  - Testiraj prisustvo/odsustvo besplatnog plana na stranici
  - Dodaj FAQ sekciju ako nemaš

- [ ] **Landing page copywriting revizija**
  - Primeni PAS formulu (Problem → Agitation → Solution) na hero sekciju
  - Dodaj specifične brojke umesto generičkih tvrdnji
  - Dodaj objection handling sekciju pre CTA
  - Pojačaj social proof (testimonijali sa imenima, firmama i slikama)

---

### Nedelja 11-12: MarTech stack i skaliranje

#### Nedelja 11: MarTech i automatizacija

- [ ] **Revidiraj i optimizuj MarTech stack**
  - CRM: Koristiš li neki? Ako ne, razmotri HubSpot Free ili Pipedrive
  - Email: Da li platforma zadovoljava potrebe? (Automation, segmentacija)
  - Analytics: Da li imaš product analytics pored GA4?
  - Napravi listu svih alata, cena i da li ih zaista koristiš

- [ ] **Postavi marketing automation workflow-e**
  - Lead scoring: dodeli poene na osnovu aktivnosti (poseta pricing-a = +10, download = +15)
  - Automatski alert za "hot leads" (korisnici koji posete pricing stranicu 3+ puta)
  - Integriši alate: CRM ↔ Email ↔ Analytics (Zapier, Make ili n8n)

- [ ] **Istraži AI za marketing**
  - AI za copywriting: Claude ili ChatGPT za draft blog postova, email subject lines, ad copy varijante
  - AI za analizu: Postavi ChatGPT custom instructions za analizu marketing podataka
  - AI za support: Razmotri chatbot za FAQ na sajtu (Intercom, Crisp)

- [ ] **Postavi data routing (ako imaš više alata)**
  - Razmotri Segment ili RudderStack za centralizovano slanje event-ova
  - Jedan event tracking kod → šalje podatke svuda (GA4, Mixpanel, ads platforme)

#### Nedelja 12: GTM revizija i skaliranje

- [ ] **Revidiraj Go-to-Market strategiju**
  - Da li je ICP iz Nedelje 1 još uvek tačan? Ažuriraj na osnovu stvarnih korisnika
  - Koji kanali su doneli 80% konverzija? Fokusiraj se na njih
  - Koji kanali nisu opravdali ulaganje? Smanji ili pauziraj

- [ ] **Skaliranje pobedničkih kanala**
  - Google Ads: povećaj budget za 20-30% na kampanjama sa dobrim CPA
  - Meta Ads: proširaj publiku (Lookalike 2-3%, novi interesi)
  - SEO: udvostruči frekvenciju sadržaja na teme koje rangiraju
  - LinkedIn: povećaj frekvenciju postova, razmotri LinkedIn Ads

- [ ] **Planiraj nove kanale za mesec 4+**
  - Da li ima smisla testirati YouTube (tutoriali, product demos)?
  - Da li ima smisla testirati podcast (guest appearances)?
  - Da li je Product Hunt launch opcija?
  - Da li partner/affiliate program može da donese korisnike?

- [ ] **Postavi review i reputacija strategiju**
  - Kreiraj nalog na G2, Capterra ili TrustRadius
  - Pošalji email happy korisnicima sa molbom za review
  - Dodaj review badge-eve na sajt

---

## Rezime prvih 90 dana

| Nedelja | Fokus | Ključni rezultat |
|---------|-------|---------|
| 1 | Infrastruktura + brending | Tracking radi, messaging definisan, positioning jasan |
| 2 | Research + content strategija | 50+ KW, content plan za 90 dana, LP optimizovana |
| 3 | Pokretanje oglasa | Google Search + Meta Ads + Retargeting aktivni |
| 4 | Analiza + optimizacija | Uvidi iz podataka, optimizovane kampanje |
| 5-6 | PLG + onboarding | Activation rate izmeren, onboarding optimizovan, pricing revidiran |
| 7-8 | Lifecycle + novi kanali | Email automatizacija, churn prevention, LinkedIn/content pokrenuti |
| 9-10 | CRO + eksperimenti | Heatmaps, A/B testovi, signup flow optimizovan |
| 11-12 | MarTech + skaliranje | Automatizacija, AI alati, GTM revizija, plan za skaliranje |

---

## Ključne metrike za praćenje

Na kraju 90 dana, trebalo bi da imaš jasne odgovore na:

| Metrika | Pitanje | Cilj |
|---------|---------|------|
| **MRR** | Koliki je mesečni prihod? | Rastući trend |
| **CAC po kanalu** | Koji kanal najjeftinije donosi korisnike? | LTV:CAC > 3:1 |
| **Trial → Paid** | Koliki % trial korisnika plati? | > 15-25% |
| **Activation Rate** | Koliki % korisnika doživi "Aha moment"? | > 40% |
| **Monthly Churn** | Koliki % korisnika odlazi mesečno? | < 5% |
| **NPS** | Da li bi korisnici preporučili proizvod? | > 30 |
| **Organic Traffic** | Da li SEO daje rezultate? | Rastući trend |
| **Email Open Rate** | Da li korisnici čitaju emailove? | > 25% |

---

## Šta dalje posle 90 dana?

Na osnovu 90-dnevnih rezultata, fokusiraj se na:

1. **Skaliranje pobednika** — kanali sa najboljim CAC-om zaslužuju 60-70% budžeta
2. **Eksperimentisanje** — 20-30% budžeta na testiranje novih kanala i pristupa
3. **Retencija** — svako poboljšanje churn-a ima ogroman uticaj na LTV
4. **Automatizacija** — sve što radiš ručno više od 2x mesečno — automatizuj
5. **Sadržaj** — nastavi da gradiš SEO autoritet, compound efekat tek počinje

> Nastavi sa [Nedeljne, mesečne i kvartalne checkliste →](/12-checkliste)
