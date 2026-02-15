# SaaS poslovni model, pricing i tržišno pozicioniranje

Pre nego što pokreneš bilo kakvu kampanju, moraš duboko razumeti kako SaaS biznis funkcioniše. Bez poznavanja metrika, pricing logike i tržišta — svaka optimizacija je nasumična.

## 1. Detaljno razumevanje SaaS metrike

### 1.1 MRR (Monthly Recurring Revenue)

MRR je najvažnija metrika za svaki SaaS. Predstavlja predvidive mesečne prihode od pretplata.

**Formula:**

```
MRR = Broj aktivnih pretplatnika × Prosečna mesečna cena pretplate
```

**MRR dekompozicija:**

| Komponenta | Opis | Primer |
|------------|------|--------|
| **New MRR** | Prihod od novih korisnika u datom mesecu | 20 novih × 50 EUR = 1.000 EUR |
| **Expansion MRR** | Prihod od upsell-a i upgrade-a postojećih | 10 upgrade × 30 EUR = 300 EUR |
| **Contraction MRR** | Gubitak prihoda od downgrade-a | 5 downgrade × 20 EUR = -100 EUR |
| **Churned MRR** | Gubitak prihoda od otkazanih pretplata | 8 otkazanih × 50 EUR = -400 EUR |
| **Net New MRR** | New + Expansion - Contraction - Churned | 1.000 + 300 - 100 - 400 = **800 EUR** |

**Benchmarkovi:**

- Seed faza: 5-20K EUR MRR
- Series A: 50-200K EUR MRR
- Zdrav mesečni rast: 10-20% (rani SaaS), 5-10% (zreliji)

### 1.2 ARR (Annual Recurring Revenue)

```
ARR = MRR × 12
```

ARR se koristi kada razgovaraš sa investitorima ili planiraš dugoročno. SaaS kompanije se obično vrednuju kao multiple ARR-a:
- Rani SaaS (pre product-market fit): 5-15x ARR
- Rastući SaaS (dokazan PMF): 15-40x ARR
- Enterprise SaaS (stabilni prihodi): 8-20x ARR

### 1.3 CAC (Customer Acquisition Cost)

Koliko te košta da dovedeš jednog plaćajućeg korisnika.

**Formula:**

```
CAC = Ukupni troškovi prodaje i marketinga / Broj novih plaćajućih korisnika

Primer:
Marketing budget: 5.000 EUR/mesec
Sales troškovi: 3.000 EUR/mesec
Novi plaćajući korisnici: 40
CAC = (5.000 + 3.000) / 40 = 200 EUR
```

**Dva načina merenja CAC-a:**

| Tip | Formula | Kada koristiti |
|-----|---------|---------------|
| **Blended CAC** | Svi marketing troškovi / svi novi korisnici | Generalni pregled zdravlja |
| **Channel-specific CAC** | Troškovi kanala X / korisnici iz kanala X | Optimizacija alokacije budžeta |

::: tip Zašto je channel-specific CAC kritičan
Ako ti je blended CAC 200 EUR, ali Google Ads donosi korisnike za 150 EUR a Meta Ads za 350 EUR — jasno je gde treba preraspodeliti budžet. Uvek prati CAC po kanalu.
:::

### 1.4 LTV (Customer Lifetime Value)

Koliko prihoda jedan korisnik generiše tokom celokupnog odnosa sa platformom.

**Jednostavna formula:**

```
LTV = ARPU × Prosečan životni vek korisnika (u mesecima)

Primer:
ARPU (Average Revenue Per User): 50 EUR/mesec
Prosečan životni vek: 24 meseca
LTV = 50 × 24 = 1.200 EUR
```

**Naprednija formula (sa churn-om):**

```
LTV = ARPU / Monthly Churn Rate

Primer:
ARPU: 50 EUR/mesec
Monthly churn: 5%
LTV = 50 / 0.05 = 1.000 EUR
```

**Sa gross margin-om (najrealniji prikaz):**

```
LTV = (ARPU × Gross Margin) / Monthly Churn Rate

Primer:
ARPU: 50 EUR, Gross Margin: 80%, Monthly Churn: 5%
LTV = (50 × 0.80) / 0.05 = 800 EUR
```

### 1.5 LTV:CAC odnos — zlatna metrika

```
LTV:CAC = LTV / CAC

Primer: 1.200 EUR / 200 EUR = 6:1
```

| Odnos | Interpretacija | Akcija |
|-------|---------------|--------|
| < 1:1 | Gubiš novac na svakom korisniku | 🔴 Hitno smanjiti CAC ili povećati cene |
| 1:1 - 3:1 | Preživljavaš, ali nema prostora za greške | 🟡 Optimizuj oba — akviziciju i retenciju |
| **3:1** | **Zdrav odnos — industrija standard** | 🟢 Održavaj i skaliraj |
| 5:1+ | Odličan ali moguće da ne investiraš dovoljno u rast | 🔵 Razmotri agresivniji marketing |

### 1.6 Churn Rate — stopa odliva

**Logo Churn (korisnici):**

```
Monthly Logo Churn = Broj korisnika koji su otkazali / Ukupan broj korisnika na početku meseca × 100

Primer: 15 otkazanih / 300 ukupno = 5% monthly churn
```

**Revenue Churn (prihod):**

```
Monthly Revenue Churn = Izgubljen MRR / MRR na početku meseca × 100

Primer: 2.000 EUR izgubljeno / 50.000 EUR ukupno = 4% revenue churn
```

::: warning Logo vs Revenue Churn
Revenue churn je često važniji od logo churn-a. Ako odlaze samo korisnici na najjeftinijem planu, logo churn može biti visok (5%), ali revenue churn nizak (2%). Uvek prati oba.
:::

**Benchmarkovi za mesečni churn:**

| Tip SaaS | Dobar churn | Odličan churn |
|----------|------------|---------------|
| B2C SaaS (SMB) | < 5% | < 3% |
| B2B SaaS (Mid-market) | < 3% | < 1.5% |
| B2B Enterprise | < 1% | < 0.5% |

### 1.7 NRR (Net Revenue Retention)

NRR meri koliko prihoda zadržavate od postojećih korisnika — uključujući expansion (upsell) i contraction (downgrade).

```
NRR = (Početni MRR + Expansion MRR - Contraction MRR - Churned MRR) / Početni MRR × 100

Primer:
Početni MRR: 50.000 EUR
Expansion: +5.000 EUR
Contraction: -1.000 EUR
Churn: -2.000 EUR
NRR = (50.000 + 5.000 - 1.000 - 2.000) / 50.000 × 100 = 104%
```

| NRR | Interpretacija |
|-----|---------------|
| < 90% | 🔴 Ozbiljan problem — korisnici odlaze brže nego što rastete |
| 90-100% | 🟡 OK, ali nema expansion-a — rast zavisi samo od novih korisnika |
| 100-110% | 🟢 Zdrav — čak i bez novih korisnika, prihod raste |
| 110-130% | 🔵 Odličan — jak upsell, čest kod najboljih SaaS kompanija |
| 130%+ | 🟣 Izuzetan — Slack, Twilio, Snowflake kategorija |

### 1.8 Payback Period

Koliko meseci treba da se investicija u akviziciju jednog korisnika vrati.

```
Payback Period = CAC / (ARPU × Gross Margin)

Primer:
CAC: 200 EUR
ARPU: 50 EUR/mesec
Gross Margin: 80%
Payback = 200 / (50 × 0.80) = 5 meseci
```

| Payback | Interpretacija |
|---------|---------------|
| < 6 meseci | 🟢 Odlično — brz povraćaj, možeš agresivno skalirati |
| 6-12 meseci | 🟡 OK — standardno za većinu SaaS-a |
| 12-18 meseci | 🟠 Rizično — trebaš jak cash flow |
| 18+ meseci | 🔴 Problematično — osim ako si Enterprise sa ugovorima |

---

## 2. Pricing modeli i strategije

### 2.1 Modeli formiranja cena

| Model | Kako funkcioniše | Primeri | Prednosti | Mane |
|-------|-----------------|---------|-----------|------|
| **Freemium** | Besplatna verzija zauvek + plaćeni planovi | Slack, Notion, Canva | Masovna akvizicija, viralnost | Nizak % konverzije (2-5%), visoki serverski troškovi |
| **Free Trial** | Besplatan pristup na ograničeno vreme (7-30 dana) | HubSpot, Salesforce | Viša konverzija (10-25%), urgency | Kraći prozor za demonstraciju vrednosti |
| **Pay-as-you-go** | Plaćaš koliko koristiš | AWS, Twilio, Stripe | Nizak ulazni prag, fer percepacija | Nepredvidivi prihodi, teže planiranje |
| **Tiered pricing** | 2-4 plana sa rastućim feature-ima | Mailchimp, Zoom | Jasna vrednosna lestvica, upsell put | Kompleksnost izbora za korisnika |
| **Per-seat pricing** | Cena po korisniku/sedištu | Slack, Jira, Figma | Predvidiv rast sa timom, lako razumljiv | Incentive da se smanji broj korisnika |
| **Usage-based** | Cena na osnovu potrošnje (API pozivi, storage, emailovi) | SendGrid, Snowflake | Direktna veza cena-vrednost | Teže prognoziranje, strah od troškova |
| **Hybrid** | Kombinacija modela (base + usage) | HubSpot (seat + contacts) | Fleksibilnost, viša retencija | Složenost komunikacije |

### 2.2 Psihologija cena

**Anchor Pricing (sidrenje):**
Postavi najskuplji plan prvi (ili istakni ga) da ostali izgledaju pristupačnije.

```
❌ Basic: 19 EUR | Pro: 49 EUR | Enterprise: 99 EUR
✅ Enterprise: 99 EUR | Pro: 49 EUR (POPULARAN) | Basic: 19 EUR
```

**Decoy efekat:**
Dodaj "mamac" plan koji čini željeni plan očiglednim izborom.

```
Plan A: 29 EUR — 5 korisnika, 10GB storage
Plan B: 49 EUR — 10 korisnika, 50GB storage  ← "MOST POPULAR"
Plan C: 45 EUR — 5 korisnika, 50GB storage    ← DECOY (skuplje od A, gotovo isto kao B)
```

Plan C postoji samo da bi Plan B izgledao kao bolji deal.

**Charm pricing:**

```
49 EUR umesto 50 EUR — klasično, ali i dalje funkcioniše
```

**Godišnji vs mesečni:**

```
Mesečno: 49 EUR/mes (= 588 EUR/god)
Godišnje: 39 EUR/mes (= 468 EUR/god) — "Uštedite 20%!"
```

Godišnji planovi:
- Smanjuju churn (commitment)
- Poboljšavaju cash flow
- Povećavaju LTV

::: tip Best Practice
Uvek prikazuj cenu godišnjeg plana kao mesečnu cenu. "39 EUR/mesec, plaća se godišnje" zvuči pristupačnije od "468 EUR godišnje".
:::

### 2.3 Pricing page optimizacija

**Anatomija dobre pricing stranice:**

1. **Jasna headline** — "Simple, transparent pricing" ili "Izaberite plan koji vam odgovara"
2. **3-4 plana** — više od 4 stvara "paradox of choice"
3. **Preporučeni plan istaknut** — vizuelno (border, badge "POPULARAN", drugačija boja)
4. **Feature comparison tabela** — ispod planova, sa checkmarks
5. **FAQ sekcija** — odgovori na najčešća pitanja o cenama
6. **Trust signali** — "30.000+ timova koristi [Brend]", logotipi klijenata
7. **Garancija** — "30-day money-back guarantee" ili "Cancel anytime"
8. **CTA na svakom planu** — "Start free trial" ili "Get started"

**Šta testirati na pricing stranici:**

- Broj prikazanih planova (3 vs 4)
- Default na godišnji vs mesečni
- Isticanje preporučenog plana (koja boja, koji badge)
- CTA tekst ("Start free trial" vs "Get started" vs "Try for free")
- Feature comparison — koliko feature-a prikazati
- Prikazivanje/skrivanje enterprise plana

### 2.4 Upgrade i downgrade tokovi

**Upgrade flow (korisnik prelazi na viši plan):**

```
Trigger (korisnik dostigao limit ili kliknuo premium feature)
  → Prikaži jasnu vrednost viših planova
    → Seamless checkout (1-2 klika)
      → Prorated billing (naplata razlike)
        → Onboarding za nove feature-e
```

**Downgrade flow (korisnik želi jeftiniji plan):**

```
Korisnik klikne "Downgrade"
  → Prikaži šta gubi (retention taktika)
    → Ponudi alternativu (pause, popust, manji plan ali sa ključnim feature-ima)
      → Ako i dalje želi — glatko spusti plan
        → Follow-up email za feedback
```

::: warning Ne otežavaj otkazivanje
"Dark patterns" (skrivanje cancel dugmeta, višestruki koraci za otkazivanje) mogu kratkoročno smanjiti churn, ali dugoročno uništavaju brand i generišu negativne review-e. Učini otkazivanje lakim, ali ponudi alternative.
:::

---

## 3. Tržišna analiza i pozicioniranje

### 3.1 Competitive Analysis — sistematski pristup

**Korak 1: Identifikuj konkurente**

| Tip konkurenta | Opis | Primer |
|---------------|------|--------|
| **Direktni** | Isti problem, slično rešenje | Notion vs Coda |
| **Indirektni** | Isti problem, drugačije rešenje | Notion vs Google Docs + Trello |
| **Zamena** | Korisnici rade posao ručno ili drugačije | Notion vs Excel spreadsheets |

**Korak 2: Prikupi podatke**

Za svakog konkurenta dokumentuj:
- Pricing (planovi, cene, model)
- Pozicioniranje (tagline, messaging, za koga je)
- Feature set (šta ima, šta nema)
- Kanali akvizicije (gde se oglašavaju, kakav content prave)
- Review-i korisnika (G2, Capterra — šta hvale, na šta se žale)
- Financijski podaci (ako su javno dostupni — broj korisnika, prihod, funding)

**Korak 3: Competitive Matrix**

```
| Feature       | Tvoj SaaS | Konkurent A | Konkurent B | Konkurent C |
|---------------|-----------|-------------|-------------|-------------|
| Feature 1     |     ✅    |      ✅     |      ❌     |      ✅     |
| Feature 2     |     ✅    |      ❌     |      ✅     |      ❌     |
| Feature 3     |     ✅    |      ✅     |      ✅     |      ❌     |
| Cena od       |   29 EUR  |    49 EUR   |    19 EUR   |    39 EUR   |
| Free plan     |     ✅    |      ❌     |      ✅     |      ❌     |
| API           |     ✅    |      ✅     |      ❌     |      ✅     |
```

**Korak 4: Pronađi prostor**

Na osnovu matrice — gde postoji praznina? Šta nijedan konkurent ne radi dobro? Tu je tvoja prilika za diferentnost.

### 3.2 Market Positioning

**Positioning Statement formula:**

```
Za [ciljnu grupu] koji [imaju ovaj problem],
[Tvoj proizvod] je [kategorija proizvoda]
koji [ključna korist/diferencijator].
Za razliku od [alternativa/konkurenata],
mi [jedinstvena vrednost].
```

**Primer:**

```
Za marketing timove u SaaS kompanijama koji troše previše vremena na manuelno kreiranje izveštaja,
DataFlow je platforma za automatizovanu marketing analitiku
koja spojava sve kanale u jedan dashboard za 5 minuta.
Za razliku od Google Sheets i ručnih izveštaja,
mi automatski povlačimo podatke iz 50+ izvora i generišemo uvide pomoću AI-a.
```

**Tri ose pozicioniranja:**

1. **Cena** — Najjeftiniji / Najbolji value / Premium
2. **Feature set** — Najkompletniji / Najspecijalizovaniji / Najjednostavniji
3. **Publika** — Za sve / Za specifičnu industriju / Za specifičnu veličinu firme

::: tip Ne pokušavaj da budeš sve
Najuspešniji SaaS proizvodi su jasno pozicionirani. Slack nije "alat za komunikaciju" — to je "where work happens". Notion nije "notes app" — to je "all-in-one workspace". Izaberi jednu stvar u kojoj si najbolji i vlasni tu poziciju.
:::

### 3.3 ICP (Ideal Customer Profile)

ICP je detaljan opis tvog idealnog korisnika. Bez njega, targetiraš sve — i ne pogađaš nikoga.

**ICP Template za B2B SaaS:**

```
FIRMOGRAFSKI PODACI:
- Industrija: ___________
- Veličina firme: ___________ zaposlenih
- Godišnji prihod: ___________
- Lokacija/tržište: ___________
- Tehnološki stack: ___________

DECISION MAKER:
- Pozicija/Uloga: ___________
- Odeljenje: ___________
- Nivo senioriteta: ___________
- KPI-jevi za koje je odgovoran: ___________

PAIN POINTS:
- Problem 1: ___________
- Problem 2: ___________
- Problem 3: ___________

PONAŠANJE:
- Gde se informišu: ___________ (blogovi, podcasti, LinkedIn grupe)
- Kako kupuju software: ___________ (samostalno vs tim odlučuje)
- Budget za alate: ___________ EUR/godišnje
- Decision timeline: ___________ (nedelje, meseci)

TRIGGER EVENTI (šta pokreće potrebu za tvojim rešenjem):
- Tim je porastao preko ___ ljudi
- Izgubili su ___ sati nedeljno na ___
- Trenutno rešenje je ___________
```

**ICP Template za B2C SaaS:**

```
DEMOGRAFIJA:
- Starost: ___________
- Zanimanje: ___________
- Prihod: ___________
- Lokacija: ___________

PSIHOGRAFIJA:
- Vrednosti: ___________
- Aspiracije: ___________
- Frustracije: ___________
- Omiljeni brendovi: ___________

PONAŠANJE:
- Društvene mreže: ___________
- Uređaji: ___________ (mobile-first, desktop, oba)
- Spremnost za plaćanje: ___________
- Kako otkrivaju nove alate: ___________
```

### 3.4 Jobs-to-be-Done (JTBD) Framework

JTBD polazi od premise: korisnici ne kupuju proizvod — oni "zapošljavaju" proizvod da obavi posao za njih.

**JTBD formula:**

```
Kada [situacija/kontekst],
želim da [motivacija/cilj],
kako bih [očekivani rezultat].
```

**Primeri za SaaS:**

```
Kada moj tim raste i komunikacija postaje haotična,
želim da sve razgovore organizujem po projektu,
kako bih uštedeo vreme i smanjio propuštene poruke.
→ "Zapošljava" Slack

Kada imam 10+ marketing kanala i ne znam koji donosi klijente,
želim da vidim sve podatke na jednom mestu,
kako bih pravilno rasporedio budžet.
→ "Zapošljava" analytics tool

Kada kreiram prezentaciju i nemam dizajnerske veštine,
želim da brzo napravim profesionalan dizajn,
kako bih ostavio dobar utisak na klijenta.
→ "Zapošljava" Canva
```

**Kako koristiti JTBD u marketingu:**

1. **Copywriting** — "Kad ti se desi [situacija], koristi [tvoj proizvod]"
2. **Feature prioritizacija** — Koji "job" nije dovoljno dobro opslužen?
3. **Competitor analysis** — Koje "jobs" opslužuju konkurenti, a koje ne?
4. **Onboarding** — Pitaj korisnika "Šta pokušavaš da postigneš?" i prilagodi iskustvo

### 3.5 TAM/SAM/SOM analiza

Razumevanje veličine tržišta je ključno za strateško planiranje i komunikaciju sa investitorima.

```
TAM (Total Addressable Market)
└── SAM (Serviceable Addressable Market)
    └── SOM (Serviceable Obtainable Market)
```

**Definicije:**

| Metrika | Pitanje | Primer |
|---------|---------|--------|
| **TAM** | Koliko je veliko celokupno tržište? | "Globalno tržište za project management software: 7.2B USD" |
| **SAM** | Koliki deo tržišta mogu realno da opsluži? | "PM software za SMB (10-200 zaposlenih) u Evropi: 1.2B USD" |
| **SOM** | Koliki deo tržišta mogu realno da osvojim u narednih 3-5 godina? | "5% SAM-a u prva 3 godine: 60M USD" |

**Bottom-up formula za SOM:**

```
SOM = Broj potencijalnih korisnika koje mogu dosegnuti × Konverzija × ACV

Primer:
Potencijalni korisnici u regionu: 50.000 firmi
Realna konverzija (3 godine): 2%
ACV (godišnja pretplata): 600 EUR
SOM = 50.000 × 0.02 × 600 = 600.000 EUR
```

::: tip TAM/SAM/SOM za početnike
Ako nisi u fazi traženja investicija, fokusiraj se na SOM. To je jedini broj koji je zaista actionable — koliko korisnika realno možeš pridobiti sa tvojim resursima u definisanom vremenskom periodu.
:::

---

## Sledeći koraci

> Sada kada razumeš SaaS poslovni model, nastavi sa [Brand strategija i SaaS copywriting →](/17-brending-copywriting)
