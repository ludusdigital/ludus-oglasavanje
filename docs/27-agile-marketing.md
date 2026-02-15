# Agile marketing i upravljanje projektima

SaaS marketing zahteva disciplinovan ali fleksibilan pristup. Agile marketing prilagođava principe iz software developmenta za marketing timove — brze iteracije, testiranje, i učenje iz podataka. Ovo poglavlje pokriva kako da organizuješ marketing tim i procese.

## 1. Agile Marketing

### 1.1 Šta je Agile Marketing

Agile marketing je pristup gde umesto velikih, dugoročnih planova koji se retko menjaju, radiš u kratkim sprintovima (1-2 nedelje), testirajući hipoteze i prilagođavajući se na osnovu rezultata.

**Tradicionalni vs Agile Marketing:**

| Aspekt | Tradicionalni | Agile |
|--------|-------------|-------|
| **Planiranje** | Godišnji plan, kvartalnog izvršavanje | Sprints (1-2 nedelje), kvartalno prilagođavanje |
| **Kampanje** | Velike, dugo planirane | Male, brze iteracije |
| **Odlučivanje** | Intuicija + iskustvo | Podaci + eksperimenti |
| **Greške** | Skupe (kasno otkrivene) | Jeftine (brzo otkrivene) |
| **Fleksibilnost** | Teško menjanje kursa | Brza adaptacija |
| **Merenje** | Kvartalni izveštaji | Nedeljni ili dnevni review |

### 1.2 Agile Marketing Framework

```
SPRINT CYCLE (2 nedelje):

NEDELJA 0 (petak): SPRINT PLANNING
├── Review prethodnog sprinta (šta smo postigli?)
├── Pregled backlog-a (šta treba uraditi?)
├── Prioritizacija (ICE scoring)
├── Odabir 3-5 taskova za sprint
└── Dodela odgovornosti

NEDELJA 1-2: EXECUTION
├── Dnevni standup (15 min)
│   ├── "Šta sam uradio juče?"
│   ├── "Šta radim danas?"
│   └── "Da li imam prepreke?"
├── Kanban board update (To Do → In Progress → Done)
└── Work, test, iterate

KRAJ SPRINTA: REVIEW + RETRO
├── Sprint Review: Šta smo postigli? Rezultati?
├── Retrospektiva: Šta je funkcionisalo? Šta nije? Šta menjamo?
└── Dokumentacija naučenih lekcija
```

### 1.3 Marketing Kanban Board

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   BACKLOG    │   TO DO      │ IN PROGRESS  │    DONE      │
│              │  (ovaj sprint)│              │              │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ LP redesign  │ Blog post    │ Google Ads   │ Email        │
│ Video series │ o retenciji  │ A/B test     │ sekvenca     │
│ Case study X │              │ headline-ova │ gotova ✅    │
│ SEO audit    │ LinkedIn     │              │              │
│ New feature  │ carousel     │ Meta Ads     │ UTM naming   │
│ announcement │              │ nova kreativa│ convention ✅│
│ ...          │              │              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘

WIP LIMIT: Max 3 taska u "In Progress" istovremeno
(previše paralelnog rada = ništa se ne završava)
```

### 1.4 Sprint Retrospektiva — Template

```
RETROSPEKTIVA - Sprint #[N] - [Datum]

ŠTA JE FUNKCIONISALO? (nastavi raditi)
├── A/B test headline-ova → +18% CTR
├── LinkedIn carousel format → visok engagement
└── Dnevni standup drži sve aligned

ŠTA NIJE FUNKCIONISALO? (prestani raditi)
├── Previše taskova u sprintu (5 → smanjiti na 3-4)
├── Meta Ads kreativa nije testirana pre puštanja
└── Blog post kasnio jer nije bio dodeljen reviewer

ŠTA DA PROBAMO? (eksperimentiši)
├── Probaj video ads na LinkedIn-u
├── Testiraj "no credit card" trial
└── Pokreni referral program

ACTION ITEMS:
├── [Ime]: Smanjiti WIP limit na 3
├── [Ime]: Kreirati review checklist za content
└── [Ime]: Pripremiti video ad skriptu do sledećeg sprinta
```

---

## 2. ICE Scoring — Prioritizacija eksperimenata

### 2.1 Kako funkcioniše ICE

Za svaku marketing ideju/eksperiment, oceni tri dimenzije na skali 1-10:

```
I = IMPACT (1-10)
Koliki bi bio uticaj na metrike ako eksperiment uspe?
1: Minimalan uticaj
5: Umeren uticaj
10: Game-changing

C = CONFIDENCE (1-10)
Koliko si siguran da će uspeti? (Na osnovu podataka, primera, iskustva)
1: Čisto nagađanje
5: Nekolicina signala
10: Gotovo siguran (istorijski podaci, konkurenti to već rade)

E = EASE (1-10)
Koliko je lako implementirati? (vreme, novac, resursi)
1: Meseci rada, veliki budžet
5: Nedelja rada, umeren napor
10: Možeš da završiš za dan

ICE SCORE = (I + C + E) / 3
```

### 2.2 ICE Scoring u praksi

| Eksperiment | I | C | E | ICE | Akcija |
|------------|---|---|---|-----|--------|
| Promena CTA teksta na LP | 7 | 7 | 9 | **7.7** | ✅ Radi odmah |
| Dodavanje social proof sekcije | 6 | 8 | 8 | **7.3** | ✅ Ovaj sprint |
| LinkedIn Ads kampanja | 8 | 5 | 4 | **5.7** | 📋 Backlog |
| Potpuni redesign LP | 9 | 4 | 2 | **5.0** | 📋 Planiraj za Q3 |
| Referral program | 8 | 5 | 3 | **5.3** | 📋 Planiraj sa product |
| Blog post optimizacija SEO | 5 | 7 | 8 | **6.7** | ✅ Ovaj sprint |

**Pravilo:** Radi prvo eksperimente sa ICE > 7. Eksperimente sa ICE 5-7 stavljaj u backlog. Ispod 5 — razmisli da li uopšte ima smisla.

### 2.3 Alternativni framework-ovi

**PIE (Potential, Importance, Ease):**
- Sličan ICE, ali "Importance" se fokusira na business prioritet

**RICE (Reach, Impact, Confidence, Effort):**
- Dodaje "Reach" — koliko korisnika će to pogoditi
- Score = (R × I × C) / E

```
PRIMER RICE:
Eksperiment: Nova email onboarding sekvenca
R (Reach): 500 novih trial korisnika/mesec → 500
I (Impact): Očekivano +20% aktivacije → 2 (na skali 0.25-3)
C (Confidence): Imamo case study koji potvrđuje → 80%
E (Effort): 2 person-weeks

RICE = (500 × 2 × 0.8) / 2 = 400
```

---

## 3. Cross-Functional koordinacija

### 3.1 Marketing + Product Alignment

```
ZAJEDNIČKI PROCESI:

PRODUCT LAUNCH:
├── Product → Marketing: Feature brief, release date, positioning
├── Marketing → Product: Customer insights, messaging feedback
└── Zajednički: Launch plan, go-to-market timing

FEATURE REQUESTS:
├── Marketing → Product: "Korisnici nam traže [X] (na osnovu kampanja)"
├── Product → Marketing: "Lansiramo [Y] sledeći mesec — pripremite"
└── Zajednički: Prioritizacija na osnovu customer data

CONTENT:
├── Product → Marketing: Technical details za blog postove
├── Marketing → Product: SEO insights ("korisnici traže [X]")
└── Zajednički: Documentation, help center
```

### 3.2 Marketing + Sales Alignment (SMarketing)

```
SHARED DEFINITIONS:
├── Lead: Ko se kvalifikuje kao lead?
├── MQL: Šta čini Marketing Qualified Lead?
├── SQL: Šta čini Sales Qualified Lead?
├── PQL: Šta čini Product Qualified Lead?
└── SLA: Marketing obezbeđuje [X] MQL-ova mesečno,
         Sales prati svaki MQL u roku od [Y] sati

SHARED MEETINGS:
├── Nedeljno: Pipeline review (15 min)
├── Mesečno: Feedback sesija (šta rade kampanje, šta sales čuje)
├── Kvartalno: Strategy alignment (KPI-jevi, target, budžet)
└── Ad hoc: Deal debrief (zašto smo dobili/izgubili)

SHARED TOOLS:
├── CRM (HubSpot, Salesforce) — oba tima koriste
├── Shared Slack kanal (#marketing-sales)
├── Content library (battle cards, case studies, demo decks)
└── Lead scoring model (dogovoreni kriterijumi)
```

### 3.3 Marketing + Customer Success Alignment

```
SHARED ACTIVITIES:
├── CS → Marketing: Identifikuj happy korisnike za case studies/testimonials
├── Marketing → CS: Kreiraj content koji CS može deliti sa korisnicima
├── CS → Marketing: Churn reasons → input za messaging i kampanje
├── Marketing → CS: Feature adoption kampanje sa CS follow-up
└── Zajednički: NPS program, referral program, upsell playbooks

SHARED METRICS:
├── NRR (Net Revenue Retention)
├── Feature Adoption Rate
├── NPS Score
├── Churn Rate
└── Expansion Revenue
```

---

## 4. Dokumentacija procesa

### 4.1 Šta dokumentovati

```
OBAVEZNO DOKUMENTOVATI:

1. CAMPAIGN BRIEFS (za svaku kampanju)
├── Cilj kampanje
├── Ciljna publika
├── Kanali
├── Budžet
├── Timeline
├── KPI-jevi
├── Creative assets (linkovi)
└── Odgovorna osoba

2. SOP-ovi (Standard Operating Procedures)
├── Kako podesiti Google Ads kampanju
├── Kako napraviti landing page
├── Kako pisati blog post (checklist)
├── Kako analizirati nedeljne metrike
├── Kako pokrenuti A/B test
└── Kako podesiti UTM parametre

3. POST-MORTEM (posle svake značajne kampanje)
├── Šta je bio cilj?
├── Šta se desilo? (rezultati vs očekivanja)
├── Šta je funkcionisalo?
├── Šta nije funkcionisalo?
├── Šta bismo uradili drugačije?
└── Akcioni koraci za budućnost

4. PLAYBOOKS (ponovljivi procesi)
├── Lead gen playbook
├── Content creation playbook
├── Launch playbook
├── Churn prevention playbook
└── Competitor response playbook
```

### 4.2 Gde dokumentovati

| Alat | Cena | Najbolje za |
|------|------|-------------|
| **Notion** | Free (personal); od $8/mes (team) | All-in-one wiki + project management |
| **Confluence** | Free (do 10 korisnika) | Ako već koristiš Atlassian (Jira) |
| **Google Docs** | Besplatan | Jednostavno, kolaborativno |
| **Slite** | Od $8/user/mes | Team knowledge base |
| **Gitbook** | Od $6.70/user/mes | Tehnička dokumentacija |

### 4.3 Campaign Brief Template

```markdown
# Campaign Brief: [Ime kampanje]

## Pregled
- **Cilj:** [Šta želimo postići?]
- **KPI:** [Kako ćemo meriti uspeh?]
- **Budžet:** [Koliko investiramo?]
- **Timeline:** [Početak] do [Kraj]
- **Vlasnik:** [Ko je odgovoran?]

## Ciljna publika
- **ICP:** [Opis idealnog korisnika]
- **Segment:** [Novi korisnici / Postojeći / Win-back]
- **Kanali:** [Google Ads, LinkedIn, Email...]

## Messaging
- **Headline:** [Glavna poruka]
- **Value Prop:** [Zašto treba da nas izaberu]
- **CTA:** [Šta želimo da urade]

## Assets
- [ ] Landing page: [link]
- [ ] Ad creative: [link]
- [ ] Email copy: [link]
- [ ] UTM parametri: [link]

## Merenje
- **Baseline:** [Trenutni rezultati]
- **Target:** [Željeni rezultati]
- **Review datum:** [Kada ćemo analizirati]
```

---

## 5. Mindset i kultura učenja

### 5.1 T-Shaped Marketer

```
T-SHAPED PROFESSIONAL:

Širina (razumevanje svih oblasti):
SEO | Paid | Content | Email | Analytics | CRO | Branding | Product
─────────────────────────────────────────────────────────────────────
                          │
                          │ Dubina (ekspertiza u 2-3 oblasti)
                          │
                    ┌─────┼─────┐
                    │     │     │
                    │     │     │
                  Paid  Content CRO

ZAŠTO T-SHAPE:
├── Razumeš celu sliku (kako se kanali dopunjuju)
├── Možeš da komuniciraš sa specijalistima u svakoj oblasti
├── Deep expertise u 2-3 oblasti daje competitive advantage
└── Fleksibilnost — možeš da promeniš fokus ako je potrebno
```

### 5.2 Growth Mindset u marketingu

```
FIXED MINDSET:                    GROWTH MINDSET:
"Ova kampanja je propala"         "Ova kampanja nas je naučila [X]"
"Nemam budžet za to"              "Kako da postignem isti cilj sa manje?"
"Konkurenti su jači"              "Šta oni rade dobro što mi možemo adaptirati?"
"To ne može da funkcioniše"       "Hajde da testiramo i vidimo podatke"
"Ja to ne znam"                   "Još ne znam, ali mogu naučiti"
```

### 5.3 Resursi za kontinuirano učenje

**Newsletteri i blogovi:**

| Resurs | Fokus | Frekvencija |
|--------|-------|------------|
| **Lenny's Newsletter** | Product, Growth, PLG | Nedeljno |
| **Reforge** | Growth strategy, frameworks | Kursevi + blog |
| **First Round Review** | Startup strategy | 2x mesečno |
| **SaaStr Blog** | SaaS metrics, scaling | Dnevno |
| **Growth.Design** | UX + Growth case studies | 2x mesečno |
| **CXL Blog** | CRO, experimentation | Nedeljno |
| **SparkToro Blog (Rand Fishkin)** | SEO, audience research | 2x mesečno |
| **Demand Curve** | Growth tactics | Nedeljno |

**Podcasti:**

| Podcast | Fokus |
|---------|-------|
| **Lenny's Podcast** | Product, Growth leaders |
| **SaaS Breakthrough** | SaaS marketing playbooks |
| **Marketing Against the Grain** | HubSpot — marketing trends |
| **The Growth Show** | Scaling stories |
| **My First Million** | Business ideas, trends |

**Kursevi i platforme:**

| Platforma | Fokus | Cena |
|-----------|-------|------|
| **Reforge** | Growth, Marketing, Product | ~$2K/god (ali vredi) |
| **CXL Institute** | CRO, Digital Analytics, Growth | Od $99/mes |
| **Demand Curve** | Growth marketing | Besplatan newsletter + plaćeni kurs |
| **HubSpot Academy** | Inbound, Content, Email | Besplatan |
| **Google Skillshop** | Google Ads, GA4 | Besplatan |
| **Meta Blueprint** | Meta Ads | Besplatan |

**Community:**

| Community | Platforma | Fokus |
|-----------|----------|-------|
| **Indie Hackers** | Web | Bootstrapped SaaS |
| **GrowthHackers** | Web | Growth eksperimenti |
| **Product-Led Alliance** | Slack | PLG strategije |
| **Demand Curve Community** | Slack | Growth marketing |
| **SaaS Growth Hacks** | Facebook | SaaS marketing taktike |

### 5.4 Eksperimentisanje sa novim kanalima

```
FRAMEWORK ZA TESTIRANJE NOVOG KANALA:

1. RESEARCH (1 nedelja)
├── Istraži kako drugi SaaS-ovi koriste kanal
├── Proceni audience fit (da li je tvoj ICP tamo?)
├── Proceni budget requirements
└── ICE score za kanal

2. PILOT (2-4 nedelje)
├── Minimalan budžet (200-500 EUR)
├── 2-3 varijacije kreative/poruke
├── Jasan KPI (CPA, CPL, ili engagement)
└── Definiši "success threshold" unapred

3. EVALUATE (1 nedelja)
├── Da li je dostignut success threshold?
├── Da li se vidi potencijal za skaliranje?
├── Da li je sustainable (možeš da nastaviš dugotrajno)?
└── Uporedi sa postojećim kanalima

4. DECIDE
├── SCALE: Kanal funkcioniše → Povećaj budžet, optimizuj
├── ITERATE: Rezultati su mixed → Još jedan sprint testiranja
└── KILL: Kanal ne funkcioniše → Nauči i preskoči
```

---

## 6. Marketing Operations Checklist

### Dnevno (10 min)

- [ ] Proveri ads dashboards (anomalije, budget pacing)
- [ ] Odgovori na komentare/poruke na social media
- [ ] Review notification/alertova (Sentry, Slack, email)

### Nedeljno (1 sat)

- [ ] Nedeljni standup / sprint review
- [ ] KPI dashboard review
- [ ] Content publication (blog, social)
- [ ] Kanban board update

### Mesečno (3 sata)

- [ ] Sprint retrospektiva
- [ ] Mesečni KPI izveštaj
- [ ] Budget review i realokacija
- [ ] Competitor check
- [ ] Content calendar za naredni mesec
- [ ] ICE scoring novih ideja

### Kvartalno (1 dan)

- [ ] Kvartalni strategy review
- [ ] OKR/KPI setting za naredni kvartal
- [ ] Full marketing audit
- [ ] Team skills assessment
- [ ] Tool/stack review
- [ ] Budget planning

---

## Zaključak

Agile marketing nije samo metodologija — to je mindset. Sposobnost da se brzo pristupiš, testiš, naučiš i adaptiraš je najvrednija veština u SaaS marketingu. Kombinuj disciplinu agile framework-a sa kreativnošću i empatijom prema korisnicima, i imaćeš osnov za dugotrajni rast.

> Ključna poruka: **Sistemsko razmišljanje.** Svaka kampanja, svaki kanal i svaka optimizacija su deo šire slike — od ideje, kroz proizvod, distribuciju i prihod, do zadržavanja korisnika. Optimizuj svaki korak ne izolovano, već kao deo celine.
