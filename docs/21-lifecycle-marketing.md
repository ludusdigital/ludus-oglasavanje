# Lifecycle marketing, retencija i engagement

Akvizicija novog korisnika košta 5-7x više nego zadržavanje postojećeg. Lifecycle marketing je disciplina upravljanja celokupnim životnim ciklusom korisnika — od prvog kontakta do lojalnog ambasadora. Ovo poglavlje pokriva sve faze tog ciklusa.

## 1. Lifecycle Email sekvence

### 1.1 Pregled email sekvenci po fazi

```
LIFECYCLE FAZE:
│
├── 1. WELCOME (Dan 0)
│   └── Dobrodošlica, prvi koraci
│
├── 2. ACTIVATION (Dan 1-7)
│   └── Vodi ka aha momentu
│
├── 3. ENGAGEMENT (Dan 7-30)
│   └── Edukacija o feature-ima, deepening usage
│
├── 4. CONVERSION (Dan 10-14 za trial)
│   └── Trial expiry, upgrade prompt
│
├── 5. RETENTION (Mesec 2+)
│   └── Ongoing value, feature updates
│
├── 6. EXPANSION (Ongoing)
│   └── Upsell, cross-sell
│
├── 7. RE-ENGAGEMENT (Kad se udalje)
│   └── Win-back, "miss you" emails
│
└── 8. ADVOCACY (Loyal users)
    └── Referral, review, case study request
```

### 1.2 Welcome Email Sekvenca

**Email 1 — Dobrodošlica (Dan 0, odmah po signup-u):**

```
Subject: "Dobrodošli u [Brend] 🎉"
Preheader: "Tvoj nalog je spreman — hajde da počnemo"

SADRŽAJ:
- Kratka potvrda registracije
- 1 jasna akcija ("Napravi svoj prvi [X]")
- Link ka Getting Started guide-u
- "Ako ti treba pomoć — samo odgovori na ovaj email"

CTA: [Napravi prvi [X] →]
```

**Email 2 — Quick Wins (Dan 1):**

```
Subject: "3 stvari koje možeš da uradiš za 5 minuta"
Preheader: "Brzi početak — bez komplikacija"

SADRŽAJ:
- 3 konkretne akcije sa linkovima
  1. Kreiraj [X] koristeći template
  2. Poveži [integraciju]
  3. Podesi [setting]
- Screenshot ili GIF demonstracija

CTA: [Počni sada →]
```

**Email 3 — Social Proof (Dan 3):**

```
Subject: "Kako [Firma] štedi 10h nedeljno sa [Brend]"
Preheader: "Priča iz prakse — pogledaj rezultate"

SADRŽAJ:
- Kratak case study (3 paragrafa)
- Konkretan rezultat sa brojevima
- Citat korisnika sa slikom

CTA: [Pročitaj celu priču →]
```

### 1.3 Behavioral Email Triggers

Umesto slanja emailova po fiksnom rasporedu, behavioral triggers reaguju na akcije (ili neaktivnost) korisnika.

| Trigger | Akcija | Email sadržaj |
|---------|--------|--------------|
| Signup ali nije completao onboarding | Posle 24h | "Hajde da završimo setup — ostao je samo 1 korak" |
| Koristio Feature A, ali ne Feature B | Posle 3 dana | "Jesi li probao [Feature B]? Evo kako ti može pomoći" |
| Nije se ulogovao 7 dana | Dan 8 | "Primetili smo da nisi bio tu — evo šta je novo" |
| Dostigao usage limit | Odmah | "Dostigao si limit — upgrade za neograničen pristup" |
| Pozvao teammate-a | Odmah | "Odlično! Evo kako da maksimalno iskoristite timski rad" |
| Kreirao 10+ projekata | Odmah | "Wow, 10 projekata! Evo pro tips za power usere" |
| Pokušao feature ali napustio | Posle 1h | "Trebala ti je pomoć sa [Feature]? Evo vodiča" |

### 1.4 Milestone Emails

Slave dostignuća korisnika i jačaju engagement:

```
"🎉 Upravo si kreirao svoj 10. projekat!"
"📊 Tvoj tim je uštedeo 50 sati ovog meseca!"
"🏆 Koristiš [Brend] već 6 meseci — hvala ti!"
"⚡ Čestitamo — upravo si probao sve premium feature-e!"
```

---

## 2. Churn Prevention

### 2.1 Early Warning Signali

Korisnik ne churne iznenada. Postoje signali koji prethode otkazivanju:

| Signal | Risk nivo | Akcija |
|--------|----------|--------|
| Smanjena frekvencija logovanja | 🟡 Srednji | Nurturing email, feature highlight |
| Prestao da koristi key feature | 🟠 Visok | In-app tooltip, tutorial |
| Nije se ulogovao 14+ dana | 🔴 Kritičan | Re-engagement email + personalizovani outreach |
| Poseta cancel stranici | 🔴 Kritičan | Retention offer, survey |
| Support tiketi sa frustriranim tonom | 🟠 Visok | Eskalacija, priority support |
| Downgrade sa višeg na niži plan | 🟡 Srednji | Feedback, alternativna ponuda |
| Smanjen broj aktivnih korisnika u timu | 🟠 Visok | Outreach, check-in call |

### 2.2 Health Score sistem

Health Score je kompozitni skor koji predviđa verovatnoću churn-a za svakog korisnika.

**Kako izračunati Health Score:**

```
KOMPONENTE (primer):
├── Login frekvencija (0-25 poena)
│   ├── Dnevno: 25
│   ├── Nedeljno: 15
│   ├── Mesečno: 5
│   └── Nije se ulogovao 30+ dana: 0
│
├── Feature adoption (0-25 poena)
│   ├── Koristi 5+ feature-a: 25
│   ├── Koristi 3-4: 15
│   ├── Koristi 1-2: 5
│   └── Koristi samo basic: 0
│
├── Team engagement (0-25 poena)
│   ├── 5+ aktivnih korisnika: 25
│   ├── 3-4 aktivna: 15
│   ├── 1-2 aktivna: 5
│   └── Samo admin: 0
│
└── Support sentiment (0-25 poena)
    ├── Pozitivni tiketi/NPS promoter: 25
    ├── Neutralno: 15
    ├── Negativni tiketi: 5
    └── Eskalacije/pritužbe: 0

HEALTH SCORE = Zbir svih komponenti (0-100)

80-100: 🟢 Healthy — Maintain
50-79:  🟡 At Risk — Monitor + Nurture
20-49:  🟠 High Risk — Intervene
0-19:   🔴 Critical — Urgent action
```

### 2.3 Churn Prevention Playbooks

**Za "At Risk" korisnike (Health Score 50-79):**
1. Automatski email: "Evo 3 feature-a koje možda nisi probao"
2. In-app: Banner sa educational sadržajem
3. Newsletter: Relevantni case studies

**Za "High Risk" korisnike (Health Score 20-49):**
1. Personalizovani email od CSM-a (Customer Success Manager)
2. Ponuda za besplatan training/onboarding session
3. Check-in poziv: "Kako možemo da poboljšamo vaše iskustvo?"

**Za "Critical" korisnike (Health Score 0-19):**
1. Urgentni poziv od CSM-a ili Account Manager-a
2. Retention ponuda (discount, extended plan, bonus feature)
3. Executive outreach (email od CEO-a za veće korisnike)

### 2.4 Cancellation Flow optimizacija

Kada korisnik klikne "Cancel":

```
KORAK 1: Razumevanje razloga
"Žao nam je što odlazite. Možete li nam reći zašto?"
├── Preskupo → Ponudi niži plan ili popust
├── Koristim drugi alat → Ponudi comparison / migration help
├── Nedostaje feature → Pokazi roadmap / prosledi product timu
├── Ne koristim dovoljno → Ponudi pause umesto cancel
├── Previše komplikovano → Ponudi 1-on-1 training
└── Drugo → Free text polje

KORAK 2: Personalizovana retention ponuda
Na osnovu odgovora iz Koraka 1:
"Pre nego što odete — evo šta možemo da ponudimo:
 [50% popusta na naredna 3 meseca]
 ili
 [Pauzirajte nalog na 30 dana besplatno]"

KORAK 3: Ako i dalje želi da otkaže
├── Lako otkazivanje (NE otežavaj!)
├── Potvrda emailom
├── Podaci sačuvani 30 dana (mogućnost povratka)
└── "Vaš nalog je deaktiviran. Podaci su sačuvani 30 dana."
```

::: warning Ne otežavaj otkazivanje
Dark patterns (sakrivanje cancel dugmeta, zahtevanje poziva za otkazivanje) kratkoročno smanjuju churn ali dugoročno uništavaju brand reputaciju i generišu negativne review-e. FTC u SAD-u je počeo da kažnjava "trick subscriptions". Učini cancel lakim, ali ponudi alternative.
:::

---

## 3. Win-Back kampanje

### 3.1 Win-Back Email sekvenca

| Dan (posle churn-a) | Subject Line | Sadržaj |
|---------------------|-------------|---------|
| **Dan 1** | "Žao nam je što odlazite" | Feedback survey, "Šta bismo mogli da uradimo bolje?" |
| **Dan 7** | "Evo šta se promenilo od kad si otišao" | Novi feature-i, poboljšanja |
| **Dan 30** | "Nedostaješ nam — evo specijalne ponude" | 30-50% popusta na 3 meseca |
| **Dan 60** | "Poslednja šansa: [Ponuda]" | Finalni win-back offer |
| **Dan 90** | "Samo da znaš — ovde smo kad budeš spreman" | Soft touch, newsletter invite |

### 3.2 Win-Back ponude

| Ponuda | Kada koristiti | Očekivani win-back rate |
|--------|---------------|------------------------|
| 30% popust na 3 meseca | Cena bio razlog odlaska | 5-10% |
| Besplatan mesec | Korisnik nije imao dovoljno vremena | 8-15% |
| Feature unlock (premium feature besplatno) | Nedostajao feature | 3-8% |
| 1-on-1 onboarding | Proizvod bio komplikovan | 10-20% |
| Upgrade uz istu cenu | Korisnik želi više vrednosti | 5-12% |

---

## 4. Upsell i Cross-Sell automatizacija

### 4.1 Upsell Triggers

| Trigger | Ponuda | Kanal |
|---------|--------|-------|
| Dostigao 80% usage limita | "Upgrade za neograničen pristup" | In-app + Email |
| Kliknuo na premium feature 3+ puta | "Otključaj [Feature] sa Pro planom" | In-app modal |
| Tim porastao (dodat novi korisnik) | "Prebaci se na Team plan — 20% jeftinije po korisniku" | Email |
| Koristi proizvod 60+ dana | "Uštedi 20% sa godišnjim planom" | In-app banner |
| Power user (koristi 80%+ feature-a) | "Enterprise plan ima [napredne feature-e]" | Email od CSM-a |

### 4.2 Upsell Best Practices

1. **Pokaži vrednost PRE nego što pitaš za novac** — "Uštedeli ste 15h ovog meseca. Zamislite šta biste mogli sa Pro feature-ima."
2. **Timing je sve** — Pitaj kad je korisnik aktivan i angažovan, ne kad se tek ulogovao posle mesec dana
3. **Personalizuj ponudu** — Na osnovu korišćenja, ne generički "Upgrade now!"
4. **Olakšaj upgrade** — 1-klik upgrade, prorated billing, instant pristup
5. **Ne prekidaj workflow** — Prikaži upsell kao nastavak onoga što korisnik radi, ne kao interruption

### 4.3 Cross-Sell strategije

Cross-sell u SaaS-u znači prodaju komplementarnih proizvoda ili add-on-ova.

```
PRIMER:
Korisnik koristi tvoj project management tool.

Cross-sell opcije:
├── Time tracking add-on ($5/mes po korisniku)
├── Advanced reporting add-on ($15/mes)
├── Client portal add-on ($10/mes)
└── Integration pack ($20/mes)

Trigger: Korisnik traži "time tracking" u app search-u
→ In-app message: "Znao si? Imamo time tracking add-on.
   Prati vreme direktno u projektima. [Aktiviraj →]"
```

---

## 5. NPS i Feedback Loops

### 5.1 NPS (Net Promoter Score)

NPS meri lojalnost korisnika jednim pitanjem: "Na skali od 0-10, koliko je verovatno da bi preporučili [Brend] kolegi?"

```
KATEGORIJE:
0-6: Detractors (nezadovoljni)
7-8: Passives (neutralni)
9-10: Promoters (lojalni)

NPS = % Promoters - % Detractors

Primer:
100 odgovora: 50 Promoters, 30 Passives, 20 Detractors
NPS = 50% - 20% = +30

BENCHMARKOVI:
< 0: Loše
0-30: OK
30-50: Dobro
50-70: Odlično
70+: Izuzetno (Apple, Netflix kategorija)
```

### 5.2 Kada slati NPS survey

| Timing | Zašto | Prednost |
|--------|-------|---------|
| 30 dana posle signup-a | Dovoljno iskustva za mišljenje | Meri onboarding kvalitet |
| 90 dana posle signup-a | Establišovan korisnik | Meri core product satisfaction |
| Posle support interakcije | Meri support kvalitet | Brz feedback |
| Kvartalno (za long-term korisnike) | Tracking trendova | Longitudinalni podaci |

### 5.3 Šta raditi sa NPS rezultatima

**Promoters (9-10):**
```
Automatski follow-up:
"Hvala na pozitivnom feedbacku! Da li biste bili voljni da:
├── Napišete review na G2? [Link]
├── Učestvujete u case study intervjuu?
└── Podelite [Brend] sa kolegom? [Referral link]"
```

**Passives (7-8):**
```
Automatski follow-up:
"Hvala na feedbacku! Šta bismo mogli da uradimo da
budemo 9 ili 10 za vas?
[Open text field]"

→ Analiziraj odgovore → Identifikuj patterns → Prosledi product timu
```

**Detractors (0-6):**
```
URGENTNO — Automatski follow-up + alert za CS tim:
"Žao nam je što vaše iskustvo nije na nivou.
Možete li nam reći šta bismo mogli da poboljšamo?
[Open text field]"

→ CSM kontaktira korisnika u roku od 24h
→ Personalizovano rešavanje problema
→ Follow-up posle rešenja
```

### 5.4 Feedback Loop sistem

```
PRIKUPLJANJE
├── NPS survey (kvartalno)
├── In-app micro-surveys ("Kako biste ocenili ovaj feature? 👍 👎")
├── Support tiketi (analiza najčešćih problema)
├── Feature request board (Canny, Productboard)
├── Social listening (Twitter mentions, Reddit diskusije)
└── Exit survey (pri otkazivanju)

ANALIZA
├── Kategorizacija feedback-a po temi
├── Identifikovanje top 10 najčešćih zahteva
├── Prioritizacija (ICE scoring)
└── Distribucija relevantnim timovima

AKCIJA
├── Product tim: Feature requests → Roadmap
├── Support: Recurring issues → Knowledge base update
├── Marketing: Pozitivni feedback → Testimonials, case studies
└── Sales: Objections → Battle cards, FAQ update

KOMUNIKACIJA (close the loop!)
├── "Poslušali smo vas — evo šta smo promenili"
├── In-app announcement za nove feature-e
├── Email za korisnike koji su tražili specifičan feature
└── Changelog sa credit-om za korisnike koji su predložili
```

---

## 6. Customer Success integracija

### 6.1 Marketing + Customer Success alignment

| Marketing aktivnost | CS doprinos |
|--------------------|--------------------|
| Case study kreiranje | CS identifikuje happy korisnike |
| Upsell email kampanje | CS signalizira PQL-ove |
| Churn prevention | CS dele health score podatke |
| Feature adoption | CS daje uvide o korišćenju |
| Referral program | CS pita promotere za referral |

### 6.2 Shared KPI-jevi

```
METRIKE KOJE DELE MARKETING I CS:
├── Net Revenue Retention (NRR)
├── Customer Health Score prosek
├── Feature Adoption Rate
├── NPS Score
├── Expansion MRR (upsell)
└── Churn Rate
```

---

## 7. Retencija i Engagement strategije

### 7.1 Gamifikacija i Reward sistemi

```
PRIMERI GAMIFIKACIJE U SaaS-U:

STREAKS:
"🔥 Koristis [Brend] 15 dana zaredom!"
→ Motiviše daily login, habit formation

PROGRESS BARS:
"Profil je 70% kompletiran. Dopuni ga za pristup bonusima."
→ Zeigarnik efekat (želja da se završi započeto)

BADGES / ACHIEVEMENTS:
"🏆 Power User — Koristio si sve feature-e!"
"⚡ Speed Runner — Kreirao projekat za manje od 2 minuta"
→ Priznanje, status

LEADERBOARDS:
"Top contributor ove nedelje: [Ime]"
→ Kompetitivnost (oprezno — može biti i demotivišuće)

MILESTONES:
"Upravo si kreirao 100. zadatak! 🎉"
→ Celebration, sense of progress
```

### 7.2 Habit Loops i Regular Usage Triggers

**Habit Loop formula (Charles Duhigg):**

```
CUE (okidač) → ROUTINE (rutina) → REWARD (nagrada)

SaaS primeri:

Cue: Ponedeljak ujutru
Routine: Otvori [Brend] dashboard
Reward: Vidi nedeljni pregled performansi

Cue: Notifikacija "Novi komentar na tvom projektu"
Routine: Otvori app da pročitaš komentar
Reward: Interakcija sa timom, rešen problem

Cue: Email "Tvoj nedeljni izveštaj je spreman"
Routine: Klikni i pogledaj metrike
Reward: Uvid u napredak, informisane odluke
```

**Kako kreirati habit triggers:**
1. **Email digest** (nedeljni summary) — daje razlog da se vrati
2. **Push notifikacije** (pametne, ne spam) — novi komentari, mention-i
3. **Slack/Teams integracija** — notifikacije u alatima koje već koriste
4. **Recurring tasks** — Automatski podsećaj za ponavljajuće aktivnosti

### 7.3 Community Building

**Zašto community povećava retenciju:**
- Korisnici koji su deo community-ja churnu-ju 30-50% manje
- Community generiše UGC (user-generated content)
- Peer-to-peer support smanjuje opterećenje support tima
- Product feedback je bogatiji i brži

**Community platforme za SaaS:**

| Platforma | Tip | Cena | Najbolje za |
|-----------|-----|------|-------------|
| **Discord** | Real-time chat | Besplatan | Tech-savvy korisnici, developeri |
| **Slack** | Professional chat | Besplatan (ograničen) | B2B, professional communities |
| **Circle** | Community platforma | Od $39/mes | Branded community |
| **Discourse** | Forum | Self-hosted besplatan | Q&A, knowledge sharing |
| **Mighty Networks** | All-in-one | Od $33/mes | Course + community |

### 7.4 Feature Adoption kampanje

Kada lansiraš novi feature, ne očekuj da ga korisnici sami pronađu.

```
FEATURE LAUNCH PLAN:

NEDELJA 0 (pre-launch):
├── Teaser u community-ju ("Coming soon...")
├── Beta access za power usere
└── Feedback prikupljanje

DAN LANSIRANJA:
├── In-app announcement (modal ili banner)
├── Email svim korisnicima
├── Blog post sa use case-ovima
├── Social media (LinkedIn, Twitter)
└── Video tutorial

NEDELJA 1-2 (post-launch):
├── Targeted in-app tooltip za korisnike koji bi imali koristi
├── Email za korisnike koji su tražili ovaj feature
├── Webinar "How to use [New Feature]"
└── Community discussion thread

MESEC 1 (tracking):
├── Adoption rate (% korisnika koji koriste novi feature)
├── Feature usage frequency
├── Feedback i bug reports
└── Iteracija na osnovu podataka
```

---

## Sledeći koraci

> Nastavi sa [Go-to-Market (GTM) strategija →](/22-gtm-strategija)
