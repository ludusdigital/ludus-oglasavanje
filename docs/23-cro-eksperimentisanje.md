# CRO i eksperimentisanje

Conversion Rate Optimization (CRO) je sistematski proces poboljšanja procenta posetilaca koji obave željenu akciju. U SaaS-u, to znači više signup-ova, više aktivacija i više plaćajućih korisnika — bez povećanja marketing budžeta. Ovo poglavlje pokriva metodologiju, alate i taktike.

## 1. CRO osnove

### 1.1 Šta je Conversion Rate

```
Conversion Rate = (Broj konverzija / Ukupan broj posetilaca) × 100

Primer:
10.000 posetilaca mesečno
300 signup-ova
CR = (300 / 10.000) × 100 = 3%
```

### 1.2 SaaS Conversion Benchmarkovi

| Konverzija | Prosek | Dobar | Odličan |
|-----------|--------|-------|---------|
| Visitor → Free Trial | 2-5% | 5-10% | 10%+ |
| Visitor → Signup (freemium) | 5-10% | 10-20% | 20%+ |
| Free Trial → Paid | 10-15% | 15-25% | 25%+ |
| Freemium → Paid | 2-3% | 3-5% | 5%+ |
| Landing Page CTR | 2-5% | 5-10% | 10%+ |
| Pricing Page → Checkout | 10-20% | 20-35% | 35%+ |

### 1.3 CRO Process

```
1. ISTRAŽI (Research)
├── Kvantitativni podaci (GA4, heatmaps, funnels)
├── Kvalitativni podaci (user testing, surveys, recordings)
└── Identifikuj probleme i prilike

2. HIPOTEZIRAJ (Hypothesize)
├── "Ako promenimo [X], onda će [Y] jer [Z]"
├── Prioritizuj hipoteze (ICE scoring)
└── Izaberi top 3-5 za testiranje

3. TESTIRAJ (Test)
├── Dizajniraj A/B test
├── Izračunaj potreban sample size
├── Pokreni test
└── Čekaj statističku značajnost

4. ANALIZIRAJ (Analyze)
├── Interpretiraj rezultate
├── Dokumentuj naučeno
└── Implementiraj pobednika

5. ITERIRAJ (Iterate)
└── Ponovi ciklus sa novim hipotezama
```

---

## 2. A/B testiranje — metodologija

### 2.1 Šta je A/B test

A/B test (split test) deli saobraćaj nasumično između dve verzije stranice (A = kontrola, B = varijacija) i meri koja ostvaruje bolje rezultate.

```
SAOBRAĆAJ (50/50 podela)
├── 50% → Verzija A (original)
│         └── Meri konverziju
└── 50% → Verzija B (varijacija)
          └── Meri konverziju

Posle dovoljno podataka:
A: 3.0% conversion rate
B: 3.8% conversion rate (+27% improvement)
→ Ako je statistički značajno: implementiraj B
```

### 2.2 Statistička značajnost

**Šta je statistička značajnost:**
Verovatnoća da razlika u rezultatima NIJE slučajna.

```
Standardni prag: 95% confidence level
= Samo 5% šanse da je razlika slučajna

Prag za visoko-rizične promene: 99%
Prag za nisko-rizične promene: 90%
```

**Sample Size kalkulacija:**

```
Za pouzdan A/B test trebate:

Baseline conversion rate: 3%
Minimum detectable effect (MDE): 20% relativnog poboljšanja
(3% → 3.6%)
Confidence level: 95%
Power: 80%

→ Potreban sample size: ~16.000 posetilaca PO VARIJACIJI
→ Ukupno: ~32.000 posetilaca za ceo test

AKO IMAŠ 1.000 posetilaca dnevno:
32.000 / 1.000 = 32 dana

AKO IMAŠ 200 posetilaca dnevno:
32.000 / 200 = 160 dana → Previše dugo! Testiraj veće promene.
```

::: warning Najčešća greška
Ne zaustavljaj test čim vidiš "pobednika"! Rani rezultati su često lažno pozitivni. Pusti test da traje dok ne dostigneš kalkulisan sample size ili bar 2 pune nedelje (da pokriješ weekend varijacije).
:::

### 2.3 Šta testirati (prioritet za SaaS)

| Prioritet | Element | Potencijalni impact |
|-----------|---------|-------------------|
| 🔴 Visok | Headline / Value Proposition | Velik — prvi utisak |
| 🔴 Visok | CTA tekst i boja | Velik — direktno utiče na klik |
| 🔴 Visok | Pricing page layout | Velik — tu se donosi odluka |
| 🟠 Srednji | Social proof (testimonials, logotipi) | Srednji — trust building |
| 🟠 Srednji | Form length (koliko polja u signup-u) | Srednji — frikcija |
| 🟡 Nizak | Hero image/video | Manji — podrška, ne primarni driver |
| 🟡 Nizak | Footer layout | Minimalan |
| 🟡 Nizak | Boja pozadine | Minimalan |

### 2.4 A/B Test alati

| Alat | Cena | Najbolje za |
|------|------|-------------|
| **Google Optimize (ugašen)** | — | Zamenjeno Optimize 360 / alternative |
| **VWO** | Od $99/mes | SMB, jednostavan za korišćenje |
| **Optimizely** | Enterprise | Enterprise, full-stack testiranje |
| **AB Tasty** | Od $40K/god | Enterprise, personalizacija |
| **Convert** | Od $99/mes | Privacy-focused, GDPR compliant |
| **PostHog** | Besplatan (self-hosted) | Dev-friendly, open-source |
| **Statsig** | Besplatan do 1M events | Feature flags + A/B testing |

---

## 3. Multivariate testiranje

### 3.1 Razlika: A/B vs Multivariate

```
A/B TEST:
Testiraš JEDNU promenu
Verzija A: Headline "Save 10 hours/week"
Verzija B: Headline "Automate your reports"

MULTIVARIATE TEST:
Testiraš VIŠE promena istovremeno
Headline: "Save 10 hours" vs "Automate reports"
× CTA: "Start free trial" vs "Try for free"
× Image: Screenshot vs Illustration
= 2 × 2 × 2 = 8 kombinacija
```

### 3.2 Kada koristiti Multivariate

| Koristi A/B test kada... | Koristi Multivariate kada... |
|-------------------------|---------------------------|
| Imaš manje saobraćaja (< 50K/mes) | Imaš mnogo saobraćaja (100K+/mes) |
| Testiraš jednu veliku promenu | Testiraš interakciju između elemenata |
| Trebaš brze rezultate | Imaš vremena za duže testove |
| Potpuno drugačiji dizajn/layout | Fine-tuning postojećeg dizajna |

---

## 4. Heatmaps i Session Recordings

### 4.1 Alati

| Alat | Cena | Heatmaps | Recordings | Surveys |
|------|------|----------|-----------|---------|
| **Hotjar** | Free (ograničen), od $32/mes | ✅ | ✅ | ✅ |
| **Microsoft Clarity** | Potpuno besplatan | ✅ | ✅ | ❌ |
| **FullStory** | Custom pricing | ✅ | ✅ | ❌ |
| **Lucky Orange** | Od $32/mes | ✅ | ✅ | ✅ |
| **Mouseflow** | Od $31/mes | ✅ | ✅ | ✅ |

::: tip Preporuka za početnike
Microsoft Clarity je potpuno besplatan, bez ograničenja saobraćaja, i daje heatmaps + session recordings. Idealan za početak. Ako trebate surveys, kombinirajte sa Hotjar free planom.
:::

### 4.2 Tipovi Heatmapa

| Tip | Šta pokazuje | Šta da tražiš |
|-----|-------------|---------------|
| **Click heatmap** | Gde korisnici klikću | Da li klikću na ne-klikabilne elemente? Da li propuštaju CTA? |
| **Scroll heatmap** | Koliko daleko scrolluju | Gde prestaju da čitaju? Da li stižu do CTA? |
| **Move heatmap** | Gde pomeraju miša | Koje sekcije privlače pažnju? |
| **Rage click heatmap** | Gde frustrirano klikću | Koji elementi su confusing ili broken? |

### 4.3 Session Recording analiza

**Šta tražiti u session recordings:**

```
FRUSTRACIJE:
├── Rage clicks (brzo višestruko kliktanje)
├── Dead clicks (klik na nekliktabilne elemente)
├── U-turns (korisnik ode nazad odmah)
└── Error-i u formama (crvena polja, retry)

NAVIGACIJA:
├── Neočekivani putevi (ne prate intended flow)
├── Pretraga (šta pretražuju? Ne mogu da nađu?)
└── Exit stranice (odakle odlaze sa sajta?)

ENGAGEMENT:
├── Koliko vremena provode na ključnim sekcijama
├── Da li gledaju video/demo
└── Interakcija sa interactive elementima
```

**Koliko snimaka da gledaš:**
- 20-30 snimaka je dovoljno za identifikaciju pattern-a
- Fokusiraj se na snimke sa specifičnih stranica (pricing, signup)
- Filtriraj po segmentima (novi vs vraćajući, mobile vs desktop)

---

## 5. User Testing

### 5.1 Remote User Testing

Observiraj ljude dok koriste tvoj sajt/proizvod i beleži gde imaju probleme.

**Struktura user testa:**

```
1. UVOD (2 min)
├── "Hvala što učestvuješ"
├── "Ne testiramo tebe — testiramo sajt"
├── "Molim te razmišljaj naglas dok koristiš sajt"
└── "Nema pogrešnih odgovora"

2. SCENARIO TASKS (15-20 min)
├── "Zamisli da tražiš alat za [tvoj use case]"
├── "Pogledaj ovaj sajt i reci mi šta misliš da radi"
├── "Pokušaj da se registruješ za besplatni trial"
├── "Pronađi informacije o cenama"
└── "Kako bi kontaktirao podršku?"

3. POST-TEST PITANJA (5 min)
├── "Šta ti je bio prvi utisak?"
├── "Šta je bilo confusing?"
├── "Šta bi promenio?"
├── "Koliko je verovatno da bi koristio ovaj proizvod? (1-10)"
└── "Imaš li još neki komentar?"
```

### 5.2 User Testing alati

| Alat | Cena | Tip |
|------|------|-----|
| **UsabilityHub (Lyssna)** | Od $75/mes | Unmoderated remote testing |
| **UserTesting** | Od $49/video | Moderated + unmoderated |
| **Maze** | Od $99/mes | Prototype + live site testing |
| **Lookback** | Od $99/mes | Moderated live interviews |
| **Zoom** | Besplatan | DIY moderated testing |

**DIY pristup (besplatan):**
1. Nađi 5 ljudi iz ciljne grupe (kolege, prijatelji, LinkedIn)
2. Podesi Zoom call sa screen sharing
3. Daj im 3-4 tasks
4. Snimaj sesiju
5. Napiši findings dokument

::: tip 5 korisnika = 80% problema
Istraživanje Jakoba Nielsena pokazuje da 5 user test-ova otkriva ~80% usability problema. Ne treba ti 100 ispitanika — 5 je dovoljno za identificiranje najvećih problema.
:::

---

## 6. Landing Page Optimization

### 6.1 Elementi za testiranje (po prioritetu)

**1. Headline (najviši prioritet)**

```
Test primeri:
A: "Marketing analytics za SaaS timove"        (deskriptivan)
B: "Uštedite 10 sati nedeljno na izveštavanju" (benefit-driven)
C: "Svi marketing podaci. Jedan dashboard."     (koncizan)
```

**2. CTA (Call-to-Action)**

```
Test primeri:
A: "Start Free Trial" (standard)
B: "See It in Action" (curiosity)
C: "Get Started — It's Free" (objection removal)

CTA boja:
A: Zelena (pozitivna asocijacija)
B: Narandžasta (urgency)
C: Plava (poverenje, konzistentnost sa brendom)
```

**3. Social Proof**

```
Test primeri:
A: Logotipi klijenata
B: Customer testimonial sa slikom
C: Brojka ("2,000+ teams trust us")
D: G2 badge + rating
```

**4. Above-the-fold content**

```
Test primeri:
A: Product screenshot
B: Animated demo (GIF)
C: Embedded video (30 sec)
D: Ilustracija
```

### 6.2 Landing Page Audit Checklist

```
CLARITY:
☐ Da li posetilac razume šta proizvod radi za 5 sekundi?
☐ Da li je VP jasan i konkretan?
☐ Da li je jasno šta je sledeći korak (CTA)?

RELEVANCE:
☐ Da li se sadržaj poklapa sa oglasnom porukom koja je dovela posetioca?
☐ Da li se obraća pravoj ciljnoj grupi?

TRUST:
☐ Da li postoje trust signali (logotipi, testimoniali, badges)?
☐ Da li postoji security/privacy informacija?

FRICTION:
☐ Da li je signup form minimalan (3-5 polja max)?
☐ Da li postoji social login opcija?
☐ Da li CTA jasno govori šta se dešava posle klika?

MOBILE:
☐ Da li je responsive?
☐ Da li je CTA vidljiv bez scrollovanja na mobile-u?
☐ Da li su touch target-i dovoljno veliki (min 44px)?
```

---

## 7. Signup Flow optimizacija

### 7.1 Smanjivanje frikcije

| Problem | Rešenje | Očekivani impact |
|---------|--------|-----------------|
| Previše polja u formi | Smanji na 2-3 (email, password, ime) | +20-30% signup rate |
| Nema social login | Dodaj Google/GitHub login | +15-25% signup rate |
| Email verifikacija pre onboarding-a | Odloži verifikaciju (dozvoli pristup odmah) | +10-20% activation |
| Zahteva kreditnu karticu | Ukloni za trial (dodaj kasnije) | +20-40% signup rate |
| Dugo učitavanje posle signup-a | Optimizuj (< 3 sekunde) | +5-10% activation |

### 7.2 Progressive Profiling

Umesto da pitaš sve odjednom, prikupljaj podatke postepeno:

```
SIGNUP FORM (Korak 1):
├── Email
└── Password (ili Google login)

WELCOME SCREEN (Korak 2):
├── Ime
└── "Šta najbolje opisuje tvoju ulogu?" (dropdown)

POSLE PRVOG KORIŠĆENJA (Korak 3):
├── Ime firme
└── Veličina tima

POSLE 7 DANA (In-app ili email):
├── "Kako ste saznali za nas?"
└── "Koji problem pokušavate da rešite?"
```

### 7.3 Social Login

```
Prioritet social login opcija po SaaS tipu:

B2B SaaS:
1. Google Workspace (najčešće za business email)
2. Microsoft/Azure AD
3. GitHub (za developer tools)

B2C SaaS:
1. Google
2. Apple
3. Facebook
```

---

## 8. Pricing Page optimizacija

### 8.1 Pricing Page Layout testovi

**Layout A: Horizontal plans (standard)**
```
[Basic]  [Pro ★]  [Enterprise]
 $29/mo   $49/mo    $99/mo
```

**Layout B: Feature comparison table**
```
| Feature     | Basic | Pro ★ | Enterprise |
|-------------|-------|-------|------------|
| Users       |  5    | 25    | Unlimited  |
| Storage     |  5GB  | 50GB  | 500GB      |
| Support     | Email | Chat  | Dedicated  |
```

**Layout C: Use-case based**
```
"For Individuals"  "For Teams"  "For Enterprise"
    $29/mo           $49/mo        Custom
```

### 8.2 Pricing Page elementi za testiranje

| Element | Varijacija A | Varijacija B |
|---------|-------------|-------------|
| Default billing | Mesečno (prikazano) | Godišnje (prikazano, sa uštedom) |
| Preporučeni plan | Srednji plan | Najviši plan |
| Feature prikazivanje | Svi feature-i | Top 5 feature-a + "See all" |
| Enterprise | Prikazan sa cenom | "Contact us" |
| FAQ | Na stranici | Expandable accordion |
| Guarantee | Nije prikazana | "30-day money back" badge |
| Comparison | Samo tvoji planovi | Tvoji planovi vs konkurent |

### 8.3 Pricing Psychology taktike

```
ANCHORING:
Prikaži najskuplji plan prvi (čini ostale pristupačnijim)

DECOY EFFECT:
Dodaj plan koji čini željeni plan očiglednim izborom

LOSS AVERSION:
"Uštedite $120/godišnje" umesto "Godišnji plan: $39/mes"

ROUND NUMBERS vs PRECISE:
$49 (round) za percepciju kvaliteta
$47 (precise) za percepciju dila

FREE TRIAL CTA:
"Start free trial" > "Buy now"
(smanjuje commitment anxiety)

SOCIAL PROOF NA PLANU:
"Most popular" badge na željenom planu

PER-DAY PRICING:
"Less than $2/day" umesto "$49/month"
```

---

## 9. CRO Eksperiment Prioritizacija — ICE Framework

### 9.1 ICE Scoring

Za svaku CRO ideju, oceni tri dimenzije na skali 1-10:

```
I (Impact): Koliki bi bio uticaj na konverzije ako uspe?
C (Confidence): Koliko si siguran da će uspeti? (podaci, primeri)
E (Ease): Koliko je lako implementirati? (vreme, resursi)

ICE Score = (I + C + E) / 3
```

**Primer:**

| Eksperiment | Impact | Confidence | Ease | ICE Score |
|------------|--------|-----------|------|-----------|
| Promena headline-a na LP | 8 | 6 | 9 | **7.7** ← Radi ovo prvo |
| Dodavanje video demo-a | 7 | 5 | 4 | 5.3 |
| Redizajn pricing stranice | 9 | 4 | 3 | 5.3 |
| Smanjenje signup forme na 2 polja | 7 | 8 | 8 | **7.7** ← I ovo |
| Dodavanje live chat-a | 5 | 4 | 6 | 5.0 |

### 9.2 CRO Experiment Log

Dokumentuj svaki eksperiment:

```
EXPERIMENT #12
Datum: 15. februar 2026
Stranica: Landing page
Hipoteza: "Ako promenimo headline sa feature-focused na benefit-focused,
           signup rate će porasti jer korisnici brže razumeju vrednost"
Varijacija A: "Marketing Analytics Platform" (original)
Varijacija B: "Save 10 Hours/Week on Reports" (benefit)
Metrika: Signup rate (visitor → trial)
Duration: 21 dan
Sample size: 12.000 posetilaca po varijaciji
Result: B +23% (3.2% → 3.9%)
Confidence: 97%
Odluka: Implementiraj B
Lesson: Benefit-driven headline-ovi konzistentno bolje performiraju
```

---

## 10. CRO Checklist

### Nedeljno (15 min)

- [ ] Proveri conversion rate trend (GA4)
- [ ] Pogledaj 5-10 session recordings (Clarity/Hotjar)
- [ ] Proveri da li je aktivan A/B test i dalje u toku

### Mesečno (2 sata)

- [ ] Full funnel analiza (visitor → signup → activated → paid)
- [ ] Heatmap review ključnih stranica
- [ ] Identifikuj top 3 drop-off tačke
- [ ] Generiši 5 novih hipoteza za testiranje
- [ ] ICE scoring novih hipoteza
- [ ] Pokreni novi A/B test

### Kvartalno (pola dana)

- [ ] Review svih eksperimenata (šta je funkcionisalo, šta nije)
- [ ] User testing sesije (5 korisnika)
- [ ] Kompletni landing page audit
- [ ] Pricing page review
- [ ] Signup flow audit
- [ ] Competitior conversion flow analiza
- [ ] Update CRO roadmap za naredni kvartal

---

## Sledeći koraci

> Nastavi sa [MarTech stack i AI automatizacija →](/24-martech-ai)
