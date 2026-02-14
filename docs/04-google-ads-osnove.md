---
title: Google Ads — Osnove plaćenog oglašavanja na Google-u
description: Kompletni vodič za Google Ads - kako radi aukcija, tipovi kampanja, postavljanje naloga, praćenje konverzija, pisanje oglasa i optimizacija za SaaS.
---

## 1. Kako radi Google Ads

Kada korisnik ukuca nešto u Google, održava se **aukcija u realnom vremenu** među svim oglašivačima koji ciljaju tu ključnu reč. Tvoj oglas se prikazuje (ili ne) na osnovu rezultata te aukcije.

### 1.1 Ad Rank — Kako se određuje pozicija oglasa

```
Ad Rank = Bid (tvoja ponuda) × Quality Score (ocena kvaliteta)
```

**To znači:** Nije uvek onaj ko više plati na prvom mestu. Ako imaš bolji Quality Score, možeš platiti manje i biti iznad konkurenta.

### 1.2 Quality Score (Ocena kvaliteta) — od 1 do 10

Google ocenjuje kvalitet tvog oglasa na skali 1-10. Viši Quality Score = niži CPC i bolja pozicija.

**Tri faktora Quality Score-a:**

| Faktor | Šta znači | Kako poboljšati |
|--------|-----------|----------------|
| **Expected CTR** | Da li će ljudi kliknuti na tvoj oglas? | Piši relevantne, privlačne naslove |
| **Ad Relevance** | Da li je oglas relevantan za ključnu reč? | Uključi ključnu reč u naslov oglasa |
| **Landing Page Experience** | Da li landing stranica odgovara na očekivanja korisnika? | Brza, relevantna, mobilno prilagođena stranica |

**Primer uticaja Quality Score-a na cenu:**

| Oglašivač | Bid | Quality Score | Ad Rank | Pozicija | Stvarni CPC |
|-----------|-----|--------------|---------|----------|-------------|
| Ti | 3 EUR | 8 | 24 | 1. | 2.10 EUR |
| Konkurent A | 4 EUR | 5 | 20 | 2. | 3.50 EUR |
| Konkurent B | 5 EUR | 3 | 15 | 3. | 4.80 EUR |

U ovom primeru, ti si na prvom mestu sa najnižom ponudom jer imaš najviši Quality Score.

---

## 2. Tipovi kampanja

| Tip kampanje | Gde se prikazuje | Format | Kada koristiti za SaaS |
|-------------|-----------------|--------|----------------------|
| **Search** | Google pretraga | Tekstualni oglasi | **Primarni kanal** — hvata ljude sa kupovnom namerom |
| **Display** | Banner na 35+ miliona sajtova | Slike, animacije | Retargeting, brand awareness |
| **Performance Max** | Svi Google kanali automatski | Svi formati | Kada imaš 50+ konverzija mesečno |
| **YouTube (Video)** | YouTube | Video oglasi | Brand awareness, edukacija, retargeting |
| **Demand Gen** | YouTube, Gmail, Discover | Slike + video | Generisanje tražnje kod nove publike |
| **Shopping** | Google Shopping tab | Proizvodi sa cenama | Ne koristi se za SaaS |
| **App** | Google Play, YouTube, Search | Razni | Samo ako imaš mobilnu app |

**Za SaaS startup koji počinje: fokusiraj se na Search kampanje.**

---

## 3. Postavljanje Google Ads naloga — korak po korak

### Korak 1: Kreiranje naloga

1. Idi na **ads.google.com**
2. Klikni "Start now"
3. Uloguj se sa Google nalogom (preporučujem poseban za biznis)
4. Google će te odmah pitati da napraviš kampanju — **NE PRAVI JE ODMAH**
5. Klikni **"Switch to Expert Mode"** (na dnu stranice)
6. Zatim klikni **"Create an account without a campaign"**
7. Podesi:
   - **Billing country** — tvoja zemlja
   - **Valuta** — EUR ili RSD (ovo se NE MOŽE menjati naknadno!)
   - **Vremenska zona** — tvoja (ovo se NE MOŽE menjati naknadno!)
8. Klikni "Submit"
9. Dodaj način plaćanja: Settings > Billing > Payment methods

### Korak 2: Povezivanje sa Google Analytics 4

1. U Google Ads: Tools > Linked accounts > Google Analytics (GA4)
2. Klikni "Link" pored tvog GA4 property-ja
3. Odobri pristup
4. Ovo omogućava uvoz GA4 konverzija i publika u Google Ads

### Korak 3: Postavljanje praćenja konverzija (KRITIČNO!)

**Bez praćenja konverzija ne znaš šta radi a šta ne — bukvalno bacaš novac.**

Za SaaS, tipične konverzije su:
- Registracija za besplatan probni period (primarna konverzija)
- Zahtev za demo
- Kupovina pretplate
- Registracija za webinar/newsletter (sekundarna konverzija)

**Opcija A: Google Ads Conversion Tag (jednostavnija)**

1. U Google Ads idi na: **Tools > Conversions > New conversion action**
2. Izaberi **"Website"**
3. Unesi URL sajta — Google skenira i predloži konverzije
4. Klikni **"Add a conversion action manually"**
5. Popuni:
   - **Conversion name:** "Free Trial Signup"
   - **Category:** Sign-up
   - **Value:** Ako znaš LTV (npr. 480 EUR), koristi ga. Ako ne, stavi prosečnu mesečnu pretplatu.
   - **Count:** "One" (jedna konverzija po korisniku)
   - **Click-through conversion window:** 30 dana
   - **View-through conversion window:** 1 dan
6. Klikni "Done" i "Save and continue"
7. Google ti daje dva koda:

**Global site tag** — ide u `<head>` sekciju SVIH stranica:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>
```

**Event snippet** — ide SAMO na "Thank You" stranicu (posle uspešne registracije):
```html
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXX',
    'value': 30.0,
    'currency': 'EUR'
  });
</script>
```

**Opcija B: Google Tag Manager (preporučeno za duži rok)**

GTM ti omogućava da upravljaš svim tagovima (Google Ads, Meta Pixel, Analytics) sa jednog mesta, bez menjanja koda sajta.

1. Kreiraj nalog na **tagmanager.google.com**
2. Kreiraj kontejner za tvoj sajt (Web)
3. Postavi GTM kontejner kod na sajt:

```html
<!-- U <head> sekciju -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Odmah posle otvaranja <body> taga -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

4. U GTM kreiraj tag:
   - **Tag type:** Google Ads Conversion Tracking
   - **Conversion ID:** (iz Google Ads)
   - **Conversion Label:** (iz Google Ads)
   - **Trigger:** Stranica sa URL-om koji sadrži "/thank-you" ili "/hvala"
5. Testiraj u **Preview** modu (desno gore u GTM-u)
6. Kad radi — klikni **"Submit"** da objaviš kontejner

### Korak 4: Verifikacija praćenja

1. Instaliraj Chrome extension: **Google Tag Assistant**
2. Poseti sajt i proveri da li se tagovi učitavaju
3. U Google Ads: Tools > Conversions — proveri da li se konverzije beleže
4. Napravi test konverziju (registruj se za trial) i proveri da li se pojavljuje

---

## 4. Struktura kampanje

### 4.1 Hijerarhija

```
Nalog (Account)
  └── Kampanja (Campaign)
        ├── Budget se podešava na nivou kampanje
        ├── Bidding strategija se podešava na nivou kampanje
        ├── Geo targeting na nivou kampanje
        │
        └── Ad Grupa (Ad Group)
              ├── Ključne reči (Keywords) — na šta se oglas aktivira
              └── Oglasi (Ads) — šta korisnik vidi
```

### 4.2 Organizacija kampanja za SaaS

**Preporučena struktura za početak:**

```
KAMPANJA 1: [Brand] Brand Search
├── Budget: 5-10 EUR/dan
├── AG: Brand Name
│   ├── KW: [tvojbrend], "tvojbrend", "tvojbrend crm"
│   └── Oglas: Brendiran sa jakim CTA

KAMPANJA 2: [Non-Brand] Core Product
├── Budget: 15-25 EUR/dan
├── AG: CRM za mali biznis
│   ├── KW: "crm za mali biznis", "crm softver za male firme"
│   └── Oglas prilagođen ovoj grupi
├── AG: Upravljanje kontaktima
│   ├── KW: "softver za upravljanje kontaktima", "baza kontakata softver"
│   └── Oglas prilagođen ovoj grupi
└── AG: Automatizacija prodaje
    ├── KW: "automatizacija prodaje softver", "sales automation"
    └── Oglas prilagođen ovoj grupi

KAMPANJA 3: [Competitor] Competitor Targeting
├── Budget: 5-10 EUR/dan
├── AG: Salesforce alternativa
│   ├── KW: "salesforce alternativa", "zamena za salesforce"
│   └── Oglas koji ističe tvoju prednost
└── AG: HubSpot alternativa
    ├── KW: "hubspot alternativa", "hubspot zamena"
    └── Oglas koji ističe tvoju prednost

KAMPANJA 4: [Retargeting] Display Remarketing
├── Budget: 5-10 EUR/dan
├── AG: Posetili sajt (30 dana)
│   └── Display oglas sa podsetinkom
└── AG: Posetili pricing (14 dana)
    └── Display oglas sa ponudom
```

**Pravilo:** Svaka Ad grupa treba da bude tematski uska — **5-15 srodnih ključnih reči maksimum**. Ako imaš previše raznovrsnih ključnih reči u jednoj Ad grupi, Quality Score će biti nizak.

---

## 5. Match Types (tipovi podudaranja ključnih reči)

Match type kontroliše koliko široko ili usko Google tumači tvoju ključnu reč.

### 5.1 Tri tipa

| Tip | Kako se piše | Šta radi | Primer |
|-----|-------------|----------|--------|
| **Broad Match** | crm softver | Najšire podudaranje — uključuje sinonime, povezane pojmove, varijacije | Oglas se prikazuje za: "alat za upravljanje klijentima", "customer relationship management", "softver za prodaju" |
| **Phrase Match** | "crm softver" | Fraza mora biti sadržana u pretrazi, ali može imati reči pre ili posle | Oglas se prikazuje za: "najbolji crm softver za firme", "crm softver cena", "besplatan crm softver" |
| **Exact Match** | [crm softver] | Samo ta ključna reč i vrlo bliske varijacije (množina, greške u kucanju) | Oglas se prikazuje za: "crm softver", "crm softveri", "crm software" |

### 5.2 Preporuke

| Situacija | Preporučeni match type |
|-----------|----------------------|
| Tek počinješ, mali budget | **Exact Match** [ključna reč] — maksimalna kontrola |
| Imaš umeren budget, želiš više podataka | **Phrase Match** "ključna reč" — dobar balans |
| Imaš veliki budget i dosta konverzija | **Broad Match** sa Smart Bidding-om — Google AI optimizuje |
| Brand ključne reči | **Exact + Phrase Match** — zaštiti ime brenda |

**Generalna preporuka za SaaS startup:** Počni sa **Phrase Match** za većinu ključnih reči. To daje dovoljno podataka bez preteranog trošenja budžeta.

---

## 6. Negativne ključne reči — OBAVEZNO

Negativne ključne reči sprečavaju prikazivanje tvog oglasa za nebitne pretrage. Bez njih, bacaš novac na klikove koji nikada neće konvertovati.

### 6.1 Početna lista negativnih ključnih reči za SaaS

```
Kategorija: BESPLATNO (osim ako nudiš besplatan plan)
- besplatno
- free
- open source
- bez plaćanja
- džabe

Kategorija: KARIJERA
- posao
- zapošljavanje
- plata
- karijera
- oglas za posao
- konkurs

Kategorija: EDUKACIJA (osim ako je to tvoj proizvod)
- kurs
- obuka
- tutorial
- lekcija
- učenje
- fakultet
- škola

Kategorija: INFORMATIVNO (niska konverzija)
- šta je
- definicija
- wiki
- wikipedia
- referat
- seminarski

Kategorija: DIY
- napravi sam
- kako napraviti
- excel
- google sheets
- template besplatan
```

### 6.2 Gde dodati negativne ključne reči

1. Na nivou kampanje: Campaign > Keywords > Negative Keywords > Add
2. Na nivou naloga: Tools > Shared Library > Negative Keyword Lists
   - Napravi listu i primeni je na sve kampanje

### 6.3 Kontinuirano dodavanje

**Svake nedelje:**
1. Idi na: Campaigns > Keywords > Search Terms
2. Vidi šta su ljudi zapravo ukucali kada im je prikazan tvoj oglas
3. Ako vidiš nebitne pretrage — dodaj ih kao negativne ključne reči
4. Ako vidiš relevantne pretrage koje nisi ciljao — dodaj ih kao ključne reči

---

## 7. Pisanje Google Search oglasa

### 7.1 Format — Responsive Search Ads (RSA)

Google koristi RSA format koji kombinuje tvoje naslove i opise automatski:
- Do **15 naslova** (max 30 karaktera svaki)
- Do **4 opisa** (max 90 karaktera svaki)
- Google testira kombinacije i prikazuje one koje najbolje rade

### 7.2 Strategija pisanja naslova

Grupaj naslove po tipu:

| Pozicija | Tip | Primer |
|----------|-----|--------|
| **1-3** | Primarna ključna reč + vrednosna ponuda | "CRM za mali biznis" / "Automatizujte prodaju lako" |
| **4-6** | Benefiti / rezultati | "Uštedite 5h nedeljno" / "Povećajte prodaju za 30%" |
| **7-9** | Socijalni dokaz / kredibilitet | "500+ zadovoljnih firmi" / "Ocena 4.8/5 na G2" |
| **10-12** | Poziv na akciju | "Probajte besplatno 14 dana" / "Bez kreditne kartice" |
| **13-15** | Razne varijacije / urgentnost | "Posebna ponuda ovog meseca" / "Setup za 5 minuta" |

### 7.3 Strategija pisanja opisa

- **Opis 1:** Glavna vrednosna ponuda + poziv na akciju
- **Opis 2:** Dodatni benefiti + specifičnosti
- **Opis 3:** Socijalni dokaz + poziv na akciju (drugačiji)
- **Opis 4:** Feature-fokusiran

### 7.4 Primer kompletnog oglasa za SaaS CRM

```
NASLOVI:
1.  CRM za mali biznis                    (ključna reč)
2.  Automatizujte prodajni proces         (benefit)
3.  Besplatan probni period               (ponuda)
4.  Uštedite 5h nedeljno                  (rezultat)
5.  Upravljajte kontaktima lako           (benefit)
6.  500+ zadovoljnih kompanija            (socijalni dokaz)
7.  Setup za samo 5 minuta                (lakoća korišćenja)
8.  Bez kreditne kartice                  (otklanjanje prepreka)
9.  Ocena 4.8/5 na G2                     (kredibilitet)
10. Počnite danas besplatno               (CTA)
11. CRM softver za male firme             (varijacija ključne reči)
12. Povećajte prodaju za 30%              (rezultat)
13. Sve na jednom mestu                   (benefit)
14. Posebna ponuda za startupe            (ponuda)
15. Zašto 500+ firmi bira nas?            (pitanje + dokaz)

OPISI:
1. Upravljajte kontaktima, prodajnim procesom i timom na jednom mestu.
   Započnite besplatan probni period od 14 dana. (90 karaktera)

2. Bez kreditne kartice. Setup za 5 minuta. Podrška 24/7.
   Pridružite se 500+ kompanija koje rastu sa nama. (90 karaktera)

3. Automatizujte follow-up, pratite svaki deal i zatvarajte više poslova.
   Besplatan trial — bez obaveza. (85 karaktera)

4. Pipeline management, email integracija, automatski izveštaji.
   Sve što vam treba za prodaju u jednom alatu. (90 karaktera)
```

### 7.5 Pinning naslova

Možeš "zakovati" (pin) određeni naslov na poziciju 1, 2 ili 3. Ovo ograničava Google-ovu mogućnost testiranja ali obezbeđuje da se određeni naslov uvek prikazuje.

**Preporuka:**
- Pin headline sa ključnom reči na poziciju 1 (uvek relevantan)
- Ne pin-uj ostale — pusti Google da testira
- Ili: pin 2-3 naslova na svaku poziciju (Google bira između njih)

### 7.6 Ad Strength

Google ocenjuje kvalitet tvog oglasa:
- **Excellent** — cilj
- **Good** — prihvatljivo
- **Average** — treba poboljšati
- **Poor** — hitno poboljšaj

Za bolji Ad Strength:
- Koristi svih 15 naslova
- Koristi sva 4 opisa
- Uključi ključne reči u naslove
- Naslovi treba da budu raznovrsni (ne ponavljaj istu poruku)
- Koristi različite CTA-ove

---

## 8. Ad Extensions (proširenja oglasa) — OBAVEZNO

Proširenja oglasa povećavaju veličinu i vidljivost tvog oglasa. Besplatna su i značajno poboljšavaju CTR.

### 8.1 Obavezna proširenja

| Proširenje | Šta radi | Primer |
|-----------|----------|--------|
| **Sitelink** | Dodatni linkovi ka drugim stranicama | Features, Pricing, Demo, Blog, Integracije |
| **Callout** | Kratki tekst benefita (do 25 karaktera) | "Besplatan trial", "24/7 Podrška", "Bez kreditne kartice" |
| **Structured Snippet** | Kategorija + lista | "Funkcije: CRM, Pipeline, Automatizacija, Analitika" |

### 8.2 Opciona proširenja

| Proširenje | Šta radi | Kada koristiti |
|-----------|----------|---------------|
| **Call** | Prikaže broj telefona | Ako imaš prodajni tim/podršku |
| **Image** | Prikaže sliku pored oglasa | Uvek (screenshot proizvoda ili logo) |
| **Lead Form** | Forma za registraciju direktno u oglasu | Za lead gen kampanje |
| **Price** | Prikaže cene paketa | Ako imaš jasnu strukturu cena |
| **Promotion** | Prikaže specijalnu ponudu | Za promocije i popuste |

### 8.3 Kako podesiti

1. U Google Ads: Campaigns > Ad extensions (ili Assets)
2. Klikni "+" i izaberi tip
3. Popuni polja
4. Dodaj na nivou kampanje ili naloga

**Primer Sitelink-ova za SaaS:**
```
Sitelink 1: Features — Pogledajte sve funkcionalnosti
Sitelink 2: Cene — Paketi od 19 EUR/mesec
Sitelink 3: Besplatan trial — Počnite za 5 minuta
Sitelink 4: Integracije — 50+ integracija dostupno
```

---

## 9. Landing stranice za Google Ads

### 9.1 Zašto je landing stranica bitna

Oglas je samo pola posla. Ako korisnik klikne na tvoj oglas i dođe na lošu stranicu, nećeš imati konverzije, a plaćaš za svaki klik.

**Loša landing stranica = visok bounce rate + nizak Quality Score + visok CPC + nema konverzija**

### 9.2 Anatomija dobre SaaS landing stranice

```
┌────────────────────────────────────────────┐
│  IZNAD FOLDA (vidljivo bez skrolovanja)    │
│                                            │
│  ┌──────────────────────────────────┐      │
│  │ NASLOV (Message match sa oglasom) │      │
│  │ Podnaslov sa benefitom            │      │
│  │ CTA dugme (jedan jasan CTA)       │      │
│  │ Screenshot/video proizvoda        │      │
│  └──────────────────────────────────┘      │
│                                            │
│  Socijalni dokaz: logotipi klijenata       │
├────────────────────────────────────────────┤
│  BENEFITI / FEATURES                       │
│  3-4 ključna benefita sa ikonama           │
│  (ne lista feature-a, nego rezultati)      │
├────────────────────────────────────────────┤
│  SOCIJALNI DOKAZ                           │
│  Testimonijali, ocene, case study brojke   │
├────────────────────────────────────────────┤
│  HOW IT WORKS                              │
│  3 koraka: 1. Registruj se 2. Podesi      │
│  3. Uživaj u rezultatima                   │
├────────────────────────────────────────────┤
│  FAQ                                       │
│  Otkloni najčešće sumnje                   │
├────────────────────────────────────────────┤
│  FINALNI CTA                               │
│  Ponovljen poziv na akciju                 │
└────────────────────────────────────────────┘
```

### 9.3 Pravila za konverziju

| Pravilo | Objašnjenje |
|---------|-------------|
| **Message match** | Naslov na landing stranici MORA odgovarati naslovu oglasa. Ako oglas kaže "CRM za mali biznis", landing stranica ne sme da kaže "Najbolji poslovni softver" |
| **Jedan jasan CTA** | Samo jedan poziv na akciju: "Započni besplatno" ILI "Zatraži demo". Ne oba |
| **Bez navigacije** | Ukloni glavni meni sa landing stranice — ne daj korisnicima razlog da odu |
| **Brzina < 3 sekunde** | Svaka sekunda kašnjenja smanjuje konverziju za 7% |
| **Mobile-first** | 60%+ saobraćaja je sa mobilnih uređaja |
| **Iznad folda** | Najbitnija poruka i CTA vidljivi bez skrolovanja |
| **Specifičan** | Prilagodi landing stranicu za svaku Ad grupu (ili bar kampanju) |

### 9.4 Česte greške

```
❌ Šalješ saobraćaj na homepage umesto na landing stranicu
❌ Landing stranica govori o svemu, a ne o onome što korisnik traži
❌ Previše CTA-ova (registruj se, zatraži demo, preuzmi e-book...)
❌ Forma sa 15 polja (ime, prezime, firma, pozicija, telefon, email, grad...)
❌ Nema socijalnog dokaza
❌ Sporo se učitava

✅ Specifična landing stranica za svaku ad grupu/kampanju
✅ Naslov se poklapa sa oglasom
✅ Jedan CTA: "Započni besplatno" sa kratkom formom (samo email)
✅ Logotipi klijenata, testimonijali, ocene
✅ Učitava se za < 2 sekunde
✅ A/B testiraj varijante
```

---

## 10. Optimizacija Google Ads kampanja

### 10.1 Prva nedelja — prikupljanje podataka

| Zadatak | Koliko često | Napomena |
|---------|-------------|----------|
| Proveravaj Search Terms | Dnevno | Dodaj negativne ključne reči |
| Proveravaj CTR po ad grupi | Dnevno | Ispod 3%? Poboljšaj oglas |
| Proveravaj CPC | Dnevno | Previše? Smanji bid ili poboljšaj QS |
| NE menjaj ništa drastično | — | Google-u treba vreme da nauči |

### 10.2 Posle 2 nedelje (minimum 100-200 klikova)

| Zadatak | Akcija |
|---------|--------|
| Analiziraj ključne reči po konverzijama | Pauziraj one sa visokim troškom i 0 konverzija |
| Proveri Quality Score | Ispod 5? Poboljšaj relevantnost oglasa i landing stranice |
| Testiraj nove varijante oglasa | Napravi drugi oglas u istoj ad grupi |
| Proveri konverzije | Da li se pravilno beleže? Testiraj |

### 10.3 Posle 4 nedelje

| Zadatak | Akcija |
|---------|--------|
| Ako imaš 15+ konverzija | Prebaci se na "Maximize Conversions" bidding |
| Ako imaš 30+ konverzija | Prebaci se na "Target CPA" bidding |
| Podesi Target CPA | Na početku postavi 10-20% iznad prosečnog CPA |
| Pokreni retargeting | Display kampanja za posetioce sajta |
| Skaliraj pobednike | Povećaj budget za 20-30% na ad grupama koje rade |

### 10.4 Ključne metrike za praćenje

| Metrika | Šta govori | Dobar benchmark za SaaS |
|---------|-----------|------------------------|
| **CTR** | Da li je oglas relevantan | 3-8% za Search |
| **CPC** | Koliko plaćaš po kliku | 1-10 EUR (zavisi od industrije) |
| **Conversion Rate** | Da li landing stranica radi | 3-10% za trial signup |
| **CPA** | Koliko te košta konverzija | Zavisi od LTV-a (cilj: LTV/3) |
| **Quality Score** | Google-ova ocena kvaliteta | 7+ je dobro |
| **Impression Share** | Koliki % dostupnih prikazivanja dobijaš | 50%+ za brand, 20%+ za non-brand |
| **ROAS** | Povrat na investiciju u oglase | 3x+ |

---

## 11. Česte greške početnika na Google Ads

| Greška | Posledica | Rešenje |
|--------|-----------|---------|
| Nema praćenja konverzija | Ne znaš šta radi | Prvo postavi tracking, pa tek onda pusti oglase |
| Šalje saobraćaj na homepage | Nizak conversion rate | Napravi specifičnu landing stranicu |
| Jedna kampanja za sve | Teško optimizovati | Strukturiraj po temama |
| Nema negativnih ključnih reči | Troši budget na nebitne klikove | Dodaj listu na početku, proveravaj nedeljno |
| Broad Match bez Smart Bidding-a | Previše nebitnih prikazivanja | Počni sa Phrase/Exact Match |
| Menja sve nakon 2 dana | Google nema vremena da nauči | Sačekaj minimum 7 dana pre promene |
| Previše ključnih reči u ad grupi | Nizak Quality Score | Maksimum 5-15 srodnih KW po ad grupi |
| Ne koristi ad extensions | Manji oglas, niži CTR | Dodaj minimum sitelinks, callouts, structured snippets |

---

## Sledeći koraci

-> [05 - Google Ads napredni](/05-google-ads-napredni) — SKAG, napredni bidding, remarketing, scripts, Performance Max
