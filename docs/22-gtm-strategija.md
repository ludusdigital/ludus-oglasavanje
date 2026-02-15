# Go-to-Market (GTM) strategija

GTM strategija je plan kako ćeš lansirati proizvod ili novu funkcionalnost na tržište. Bez jasne GTM strategije, čak i odličan proizvod može da propadne jer ga pravi ljudi nikada ne saznaju. Ovo poglavlje pokriva sve aspekte GTM-a za SaaS.

## 1. Launch Planning

### 1.1 Tri tipa lansiranja

| Tip | Kada | Obim | Primer |
|-----|------|------|--------|
| **Soft Launch** | MVP, novi feature, minor update | Mala publika, tiho | Beta korisnici, early adopters |
| **Standard Launch** | Nova funkcionalnost, pricing promena | Postojeći korisnici + ciljana publika | In-app announcement + blog + email |
| **Big Bang Launch** | Novi proizvod, major rebrand, pivotni momenat | Maksimalan reach | Product Hunt, PR, influenceri, paid ads |

### 1.2 Pre-Launch Checklist (4-6 nedelja pre)

```
PRODUCT:
☐ Proizvod/feature je testiran i stabilan
☐ Dokumentacija/help centar ažuriran
☐ Known issues dokumentovani
☐ Rollback plan pripremljen

MARKETING:
☐ Messaging definisan (VP, key benefits, tagline)
☐ Landing page kreirana i testirana
☐ Blog post napisan
☐ Email sekvence pripremljene
☐ Social media postovi zakaženi
☐ Paid ads kreirani (ako je primenjivo)
☐ Press kit pripremljen (za big bang launch)

SALES:
☐ Sales tim obučen (demo, objection handling)
☐ Battle cards ažurirani
☐ FAQ pripremljen
☐ Pricing page ažuirana

SUPPORT:
☐ Support tim obučen na novoj funkcionalnosti
☐ Canned responses pripremljeni
☐ Known issues i workaround-i dokumentovani
☐ Escalation plan definisan

ANALYTICS:
☐ Tracking postavljen (events, goals, funnels)
☐ Dashboard kreiran za praćenje launch metrika
☐ Baseline metrike zabeležene (da bi mogli meriti impact)
```

### 1.3 Launch Day Playbook

```
PRE-LAUNCH (1 dan ranije):
├── Final QA check
├── Pre-heat social media ("Sutra vas čeka nešto novo...")
└── Team standup — svi znaju svoje uloge

LAUNCH (ujutru):
├── Deploy / Feature flag upaliti
├── Email blast svim korisnicima
├── Blog post publish
├── Social media postovi (LinkedIn, Twitter)
├── In-app announcement (modal/banner)
├── Product Hunt submit (ako je big bang)
└── PR outreach (ako je big bang)

LAUNCH DAY (tokom dana):
├── Monitor metrike u realnom vremenu
├── Odgovaraj na komentare/pitanja
├── Bug triage (ako se pojave)
├── Engage sa community
└── Dokumentuj sve

POST-LAUNCH (Dan 1-3):
├── Follow-up email (za one koji nisu otvorili prvi)
├── Retarget visitore launch page-a
├── Prikupljaj rane feedback-e
├── Thank you post na social media
└── Internal retrospektiva
```

### 1.4 Launch Metrike

| Metrika | Šta meri | Target (primer) |
|---------|---------|-----------------|
| **Signup/Trial starts** | Koliko novih korisnika je došlo | +50% u odnosu na prosečnu nedelju |
| **Activation rate** | Da li novi korisnici koriste feature | > 40% u prvoj nedelji |
| **Feature adoption** | Koliko postojećih korisnika je probalo | > 20% u prvom mesecu |
| **NPS** | Zadovoljstvo novim feature-om | > 50 |
| **Support tiketi** | Da li je nešto confusing ili buggy | < 5% od korisnika |
| **Media coverage** | Koliko medija/blogova je pisalo | 3-5 relevantnih mention-a |

---

## 2. Beta Program Management

### 2.1 Zašto Beta program

- Rani feedback pre punog lansiranja
- Pronalaženje bug-ova u realnom korišćenju
- Izgradnja community-ja "early adopters" koji postaju ambasadori
- Social proof za launch ("100+ beta korisnika kaže...")

### 2.2 Beta Program struktura

```
FAZA 1: CLOSED BETA (2-4 nedelje)
├── 20-50 ručno izabranih korisnika
├── Kriterijumi: Power useri, dobra komunikacija, raznovrsni use cases
├── Nedeljni feedback call ili survey
├── Direct Slack/Discord kanal sa product timom
└── Očekivanje: Bug-ovi, rough edges, iskrena kritika

FAZA 2: OPEN BETA (2-4 nedelje)
├── 100-500 korisnika (waitlista ili opt-in)
├── Feature flag pristup unutar app-a
├── In-app feedback widget
├── Automated survey na kraju beta perioda
└── Očekivanje: Usability feedback, edge cases, scale testing

FAZA 3: GENERAL AVAILABILITY (GA)
├── Feature dostupan svima
├── Dokumentacija finalizovana
├── Marketing launch
└── Beta korisnici dobijaju "thank you" (discount, badge, shout-out)
```

### 2.3 Beta Feedback prikupljanje

| Metoda | Kada | Tip uvida |
|--------|------|----------|
| **1-on-1 intervju** | Closed beta | Duboki kvalitativni uvidi |
| **Survey (Typeform)** | Obe faze | Kvantitativni + kvalitativni |
| **In-app feedback** | Open beta | Kontekstualni feedback |
| **Usage analytics** | Obe faze | Kvantitativni behavioral |
| **Slack/Discord diskusija** | Obe faze | Real-time reakcije |
| **Bug report form** | Obe faze | Tehnički problemi |

**Ključna beta pitanja:**

```
1. Koliko lako je bilo početi koristiti [Feature]? (1-5)
2. Koji problem vam ovaj feature rešava?
3. Koliko često biste koristili ovaj feature? (Dnevno/Nedeljno/Mesečno/Retko)
4. Šta bi poboljšali ili promenili?
5. Na skali 1-10, koliko bi preporučili ovaj feature kolegi?
6. Da li bi platili više za ovaj feature? (Da/Ne/Možda)
```

---

## 3. Product Positioning

### 3.1 Positioning Statement

```
ZA [ciljna grupa]
KOJI [imaju ovaj problem/potrebu],
[Tvoj proizvod] JE [kategorija]
KOJI [ključni benefit].
ZA RAZLIKU OD [alternativa],
MI [jedinstveni diferencijator].
```

**Primeri:**

```
ZA marketing timove u SaaS kompanijama (10-200 zaposlenih)
KOJI troše previše vremena na manuelno izveštavanje,
DataFlow JE marketing analytics platforma
KOJA automatski spaja sve kanale u jedan dashboard.
ZA RAZLIKU OD ručnog izveštavanja u Excel-u,
MI nudimo setup za 5 minuta i AI-powered uvide.
```

### 3.2 Messaging Framework

| Element | Opis | Primer |
|---------|------|--------|
| **Tagline** | Jedna rečenica — essence brenda | "Marketing analytics on autopilot" |
| **Elevator pitch** | 30 sekundi — šta, za koga, zašto | "DataFlow automatski spaja 50+ marketing kanala u jedan dashboard, štedi 10h nedeljno" |
| **Value pillars** | 3 ključne koristi | 1. Automatizacija 2. Real-time uvidi 3. Tim kolaboracija |
| **Supporting messages** | Detalji za svaki pillar | "50+ integracija, setup za 5 min, AI insights, shared dashboards..." |
| **Proof points** | Dokazi | "2.000+ timova, 12h uštede nedeljno, 4.8/5 na G2" |

### 3.3 Positioning za različite segmente

Isti proizvod, drugačija poruka za različite publike:

```
SEGMENT: MARKETING MANAGER
Pain: "Trošim 3 sata nedeljno na izveštaje"
Message: "Automatski izveštaji — nikad više ručni Excel"
Proof: Case study marketing tima

SEGMENT: CEO/FOUNDER
Pain: "Nemam pregled nad marketing ROI"
Message: "Sve metrike na jednom dashboardu — real-time"
Proof: ROI kalkulator, benchmarkovi

SEGMENT: DATA ANALYST
Pain: "Podaci su razbacani po 10 platformi"
Message: "50+ integracija, čisti podaci, API pristup"
Proof: Tech dokumentacija, API demo
```

---

## 4. Competitive Battle Cards

### 4.1 Šta su Battle Cards

Battle cards su kratki dokumenti (1-2 stranice) koje sales i marketing tim koriste da razumeju konkurente i pozicioniraju proizvod u odnosu na njih.

### 4.2 Battle Card Template

```
┌──────────────────────────────────────────────────┐
│  BATTLE CARD: [Tvoj Brend] vs [Konkurent X]      │
├──────────────────────────────────────────────────┤
│                                                   │
│  QUICK SUMMARY:                                   │
│  [Konkurent] je [opis] fokusiran na [segment].    │
│  Mi smo bolji u [X], oni su bolji u [Y].         │
│                                                   │
│  PRICING:                                         │
│  Mi: $49/mes (Pro) | Oni: $79/mes (Standard)     │
│                                                   │
│  KLJUČNE RAZLIKE:                                │
│  ┌────────────────┬─────────┬───────────┐        │
│  │ Feature        │ Mi      │ Oni       │        │
│  ├────────────────┼─────────┼───────────┤        │
│  │ Setup vreme    │ 5 min   │ 2-3 sata  │        │
│  │ Integracije    │ 50+     │ 20        │        │
│  │ AI insights    │ ✅       │ ❌         │        │
│  │ Enterprise SSO │ ❌       │ ✅         │        │
│  └────────────────┴─────────┴───────────┘        │
│                                                   │
│  NAŠE PREDNOSTI:                                  │
│  1. Brži setup (5 min vs 2-3 sata)               │
│  2. Više integracija (50+ vs 20)                 │
│  3. AI-powered insights (oni nemaju)             │
│                                                   │
│  NJIHOVE PREDNOSTI:                               │
│  1. Enterprise features (SSO, SAML)              │
│  2. Duži na tržištu (brand awareness)            │
│  3. Veća baza korisnika                          │
│                                                   │
│  OBJECTION HANDLING:                              │
│  "Ali [Konkurent] ima više korisnika"             │
│  → "Više korisnika ne znači bolji proizvod.       │
│     Naši korisnici biraju nas jer [benefit]."     │
│                                                   │
│  "Ali [Konkurent] ima enterprise features"        │
│  → "Enterprise features su na našem roadmap-u.    │
│     Za vaš use case, naše rešenje je kompletno."  │
│                                                   │
│  WIN STORIES:                                     │
│  "[Firma X] je prešla sa [Konkurent] na nas       │
│   jer im je trebao brži setup i više integracija.│
│   Rezultat: 40% manje vremena na izveštavanje."  │
│                                                   │
│  RESOURCES:                                       │
│  - Comparison page: [link]                        │
│  - Migration guide: [link]                        │
│  - Case study: [link]                             │
│                                                   │
└──────────────────────────────────────────────────┘
```

### 4.3 Kako održavati Battle Cards

- **Kvartalno ažuriranje** — Prati promene u pricing-u, feature-ima
- **Competitive monitoring** — Postavi Google Alerts, prati G2 review-e
- **Sales feedback** — Posle svakog loss-a, update-uj battle card
- **Win/Loss analysis** — Zašto smo dobili/izgubili deal? Šta to znači za positioning?

---

## 5. Listing na Review platformama

### 5.1 Zašto su G2, Capterra, TrustRadius bitni

- **SEO** — Review sajtovi se rangiraju za "best [kategorija] software" pretraga
- **Social proof** — Kupci čitaju review-e pre odluke (92% B2B kupaca)
- **Lead gen** — Ove platforme šalju kvalifikovane leadove
- **Competitive intelligence** — Vidiš šta korisnici misle o konkurentima

### 5.2 Strategija za Review platforme

| Platforma | Prioritet | Akcija |
|-----------|----------|--------|
| **G2** | 🥇 Najviši | Claim profil, prikupi 10+ review-a, optimizuj listing |
| **Capterra** | 🥈 Visok | Claim profil, prikupi review-e, razmotri paid listing |
| **TrustRadius** | 🥉 Srednji | Claim profil, dobar za enterprise |
| **Product Hunt** | 🏅 Za launch | Launch product, prikupi upvote-ove |
| **GetApp** | 📋 Nice-to-have | Automatski povlači Capterra review-e |

### 5.3 Kako prikupiti review-e

```
STRATEGIJA:
1. Identifikuj happy korisnike (NPS 9-10, active users)
2. Personalizovani email od CSM-a:
   "Zdravo [Ime], primećujemo da ste aktivni korisnik [Brend]-a.
    Da li biste bili voljni da ostavite kratak review na G2?
    Traje 2-3 minuta.
    [Ostavi review →]"
3. Incentive (ali transparentno!):
   - $25 poklon kartica za G2 review (G2 to dozvoljava)
   - Pristup beta feature-ima
   - Brend merch (majica, stikeri)
4. Automatizuj:
   - NPS survey → Promoter → Automatic redirect na G2
   - In-app prompt posle pozitivnog milestone-a
```

---

## 6. Partnerstva i integracije kao kanal rasta

### 6.1 Tipovi partnerstava

| Tip | Opis | Primer |
|-----|------|--------|
| **Integration partnerships** | Tehnička integracija dva proizvoda | Slack + Google Drive |
| **Co-marketing** | Zajednički sadržaj/kampanje | Zajednički webinar |
| **Referral partnerships** | Međusobno preporučivanje | Agencija preporučuje tvoj tool |
| **Channel partnerships** | Prodaja preko partnera | Reseller program |
| **Technology alliances** | Strateški savez | Platformski ekosistem |

### 6.2 Integration Partnership Playbook

```
KORAK 1: Identifikuj potencijalne partnere
├── Komplementarni proizvodi (ne konkurenti)
├── Ista ciljna grupa
├── Slična veličina (ili veći od tebe za leverage)
└── Lista: 20-50 potencijalnih partnera

KORAK 2: Outreach
├── Email sa jasnom vrednosnom propozicijom
├── "Naši korisnici traže integraciju sa [Partner]"
├── Ponudi: Co-marketing, zajednički blog post, cross-promotion
└── Cilj: Upoznati se, validirati fit

KORAK 3: Integracija
├── API/SDK development
├── Zajednička dokumentacija
├── Testiranje sa mutual korisnicima
└── Launch plan (zajednička objava)

KORAK 4: Co-Marketing
├── Zajednički blog post o integraciji
├── Oba partnera šalju email svom audience-u
├── Social media cross-promotion
├── Listing na oba marketplace-a
└── Zajednički webinar

KORAK 5: Ongoing
├── Kvartalni check-in
├── Praćenje metrika (koliko korisnika koristi integraciju)
├── Feature updates i maintenance
└── Ekspanzija partnerstva
```

### 6.3 Integration Marketplace

```
PRIMER: Slack App Directory, HubSpot Marketplace, Shopify App Store

ZAŠTO JE OVO BITNO:
├── Organic discovery (korisnici pregledaju marketplace)
├── SEO (marketplace stranice se rankiraju u Google-u)
├── Trust signal (prisustvo u marketplace-u = legitimnost)
└── Lead generation (korisnici direktno instaliraju)

KAKO OPTIMIZOVATI LISTING:
├── Jasan naslov i opis (keyword-optimizovan)
├── Screenshots / video demo
├── Setup instructions
├── Review-i korisnika
├── Responsive support
└── Regular updates
```

---

## 7. GTM Checklist — sve na jednom mestu

### Za novi proizvod

- [ ] ICP definisan (Ideal Customer Profile)
- [ ] Competitive analysis završena
- [ ] Positioning statement napisan
- [ ] Messaging framework kreiran
- [ ] Pricing definisan i testiran
- [ ] Landing page kreirana
- [ ] Demo/trial flow optimizovan
- [ ] Sales tim obučen (battle cards, demo, objections)
- [ ] Content pripremljen (blog, video, case study)
- [ ] Email sekvence postavljene (onboarding, nurture, conversion)
- [ ] Paid acquisition kampanje pripremljene
- [ ] Analytics i tracking postavljeni
- [ ] Support tim obučen
- [ ] Launch plan dokumentovan i koordinisan
- [ ] Post-launch monitoring dashboard spreman

### Za novi feature

- [ ] Feature dokumentovan (help center, changelog)
- [ ] In-app announcement pripremljen
- [ ] Email obaveštenje napisano
- [ ] Blog post napisan (use cases, how-to)
- [ ] Video tutorial snimljen
- [ ] Beta feedback inkorporiran
- [ ] Tracking postavljen (feature adoption events)
- [ ] Support obučen
- [ ] Social media postovi pripremljeni

---

## Sledeći koraci

> Nastavi sa [CRO i eksperimentisanje →](/23-cro-eksperimentisanje)
