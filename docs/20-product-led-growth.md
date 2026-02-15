# Product-Led Growth (PLG) za SaaS

U modernom SaaS-u, sam proizvod je glavni kanal rasta. Product-Led Growth (PLG) je strategija gde korisnici sami otkrivaju, probaju i kupuju proizvod — bez potrebe za sales timom. Ovo poglavlje pokriva sve aspekte PLG pristupa.

## 1. Šta je Product-Led Growth

### 1.1 Definicija

PLG je go-to-market strategija gde je **proizvod primarni pokretač akvizicije, konverzije i ekspanzije korisnika.** Umesto da sales tim prodaje proizvod, proizvod sam prodaje sebe.

**Primeri PLG kompanija:**

| Kompanija | Kako PLG funkcioniše |
|-----------|---------------------|
| **Slack** | Tim počne besplatno → raste korišćenje → firma plaća |
| **Notion** | Individua koristi besplatno → poziva tim → firma kupi |
| **Figma** | Dizajner koristi → deli sa klijentom/timom → firma plaća |
| **Dropbox** | Upload fajl → podeli → primalac se registruje |
| **Canva** | Napravi dizajn besplatno → trebaju premium elementi → plati |
| **Calendly** | Pošalji scheduling link → primalac vidi brend → registruje se |

### 1.2 PLG vs Sales-Led Growth

| Aspekt | Product-Led Growth | Sales-Led Growth |
|--------|-------------------|------------------|
| **Onboarding** | Self-serve, in-app tutorials | Sales demo, implementation tim |
| **Pricing** | Transparentan, self-serve checkout | "Contact us", custom quotes |
| **Sales cycle** | Kratak (minuti do dana) | Duži (nedelje do meseci) |
| **ACV** | Niži ($50-500/mes) | Viši ($5K-500K+ godišnje) |
| **Tim** | Product + Growth + Marketing | Sales + Marketing + CS |
| **CAC** | Niži (korisnik sam dolazi) | Viši (sales rep + demo + follow-up) |
| **Skalabilnost** | Vrlo visoka (ne zavisi od broja sales rep-ova) | Ograničena (zavisi od veličine sales tima) |

### 1.3 Kada PLG ima smisla

**PLG je dobar za:**
- Proizvod se lako razume i koristi bez obuke
- Time-to-value je kratak (< 5 minuta do "aha" momenta)
- Postoje viralnih feature-i (collaboration, sharing)
- SMB i individualni korisnici kao primarni target
- Niži ACV ($50-500/mes)

**PLG nije dobar za:**
- Kompleksna enterprise rešenja (zahtevaju obuku i implementaciju)
- Visoko regulisane industrije (healthcare, finance)
- Dugo vreme implementacije
- Korisnici koji nemaju tehničko znanje za self-serve
- Veoma visok ACV ($50K+ godišnje)

::: tip Hybrid pristup
Mnogi uspešni SaaS-ovi kombinuju PLG za manje korisnike i Sales-Led za enterprise. Slack, Notion, i Figma svi imaju self-serve za male timove i sales tim za velike firme. Ne moraš birati jedno ili drugo.
:::

---

## 2. PLG metrike

### 2.1 Activation Rate

Procenat novih korisnika koji dostignu "aha moment" — tačku gde prvi put dožive vrednost proizvoda.

```
Activation Rate = Korisnici koji su dostigli aha moment / Ukupno signup-ova × 100

Primer:
200 signup-ova u mesecu
120 korisnika je napravilo prvi projekat (definisan aha moment)
Activation Rate = 120/200 × 100 = 60%
```

**Benchmarkovi:**

| Activation Rate | Ocena |
|----------------|-------|
| < 30% | 🔴 Loše — ozbiljan problem u onboarding-u |
| 30-40% | 🟠 Ispod proseka — treba optimizacija |
| 40-60% | 🟢 Dobro — industrija standard |
| 60%+ | 🔵 Odlično — jak onboarding flow |

**Kako definisati "aha moment":**

| SaaS tip | Primer Aha momenta |
|----------|-------------------|
| Project management | Kreirao prvi projekat + dodao zadatak |
| CRM | Importovao kontakte + poslao prvi email |
| Analytics | Povezao data source + video prvi izveštaj |
| Design tool | Napravio prvi dizajn + exportovao |
| Communication | Poslao 5+ poruka u kanalu |

### 2.2 Time-to-Value (TTV)

Koliko brzo korisnik doživi prvu vrednost od trenutka registracije.

```
TTV = Vreme od signup-a do aha momenta

Cilj: Što kraće!
- Idealno: < 5 minuta
- OK: < 30 minuta
- Loše: > 1 sat
- Kritično: > 1 dan
```

**Kako smanjiti TTV:**
1. Minimalan signup form (email + password, ili Google/GitHub login)
2. Skip-able onboarding (za iskusne korisnike)
3. Pre-populated sample data (korisnik odmah vidi kako izgleda popunjen proizvod)
4. Templates (umesto praznog canvas-a, ponudi gotove template-e)
5. Interactive tour (vodi korisnika ka prvoj akciji)

### 2.3 Product Qualified Leads (PQL)

PQL je korisnik koji je kroz korišćenje proizvoda demonstrirao dovoljan nivo interesovanja i fit-a da bi mogao postati plaćajući korisnik.

**PQL vs MQL:**

| MQL (Marketing Qualified Lead) | PQL (Product Qualified Lead) |
|-------------------------------|------------------------------|
| Downloadovao whitepaper | Napravio 5 projekata u free planu |
| Registrovao se za webinar | Pozvao 3 teammate-a |
| Posetio pricing stranicu | Dostigao usage limit |
| Popunio contact form | Koristio proizvod 5+ dana zaredom |

**Primer PQL kriterijuma za različite SaaS tipove:**

```
PROJECT MANAGEMENT TOOL:
PQL = Korisnik koji je:
  ✅ Kreirao 3+ projekta
  ✅ Pozvao 2+ teammate-a
  ✅ Koristio 5+ dana
  ✅ Na free planu (potencijal za upgrade)

ANALYTICS PLATFORM:
PQL = Korisnik koji je:
  ✅ Povezao 2+ data izvora
  ✅ Kreirao custom dashboard
  ✅ Delio izveštaj sa kolegom
  ✅ Dostigao 80% usage limita
```

### 2.4 Free-to-Paid Conversion Rate

```
Free-to-Paid = Plaćeni korisnici / Free korisnici × 100
```

**Benchmarkovi:**

| Model | Prosečan | Dobar | Odličan |
|-------|---------|-------|---------|
| **Freemium** | 2-3% | 4-5% | 7%+ |
| **Free trial (no CC)** | 8-12% | 15-20% | 25%+ |
| **Free trial (CC required)** | 25-40% | 40-60% | 60%+ |

### 2.5 Virality Coefficient (k-factor)

Meri koliko novih korisnika svaki postojeći korisnik donosi.

```
k = (Prosečan broj pozivnica po korisniku) × (Conversion rate pozivnica)

Primer:
Prosečan korisnik pošalje 5 pozivnica
20% pozivnica konvertuje u signup
k = 5 × 0.20 = 1.0

Ako je k > 1 → Proizvod raste viralno (svaki korisnik donosi 1+ novih)
Ako je k < 1 → Potreban ti je i plaćeni marketing za rast
```

**Kako povećati k-factor:**
1. Ugradi sharing u core product experience (Calendly link, Loom video share)
2. Incentivizuj pozivnice (Dropbox: bonus storage za svakog pozvanog)
3. Personalizuj pozivnicu (ime pošiljaoca, kontekst zašto)
4. Jasna korist za pozvanu osobu (ne samo "Pridruži se!", već "Pridruži se da zajedno radimo na projektu")

---

## 3. Onboarding optimizacija

### 3.1 Anatomija odličnog onboarding-a

```
KORAK 1: Welcome Screen
├── Jasna poruka šta proizvod radi
├── Pitanje: "Šta želiš da postigneš?" (personalizacija)
├── Skip opcija za iskusne korisnike
└── Progress bar (motivacija za kompletiranje)

KORAK 2: Minimalan Profile Setup
├── Samo neophodni podaci (ime, firma — ništa više)
├── Google/GitHub login (zero-friction)
└── Mogućnost dopune kasnije

KORAK 3: Prva ključna akcija (guided)
├── Interactive tutorial — "Hajde da napravimo tvoj prvi [X]"
├── Pre-populated template (ne prazan ekran)
├── Tooltip-i koji vode korak po korak
└── Quick win za < 5 minuta

KORAK 4: Aha Moment
├── Korisnik vidi rezultat ODMAH
├── Celebration (konfete, congrats message 🎉)
└── "Evo šta si postigao!" summary

KORAK 5: Sledeći koraci
├── "Pozovi kolegu"
├── "Probaj [Feature X]"
├── "Pogledaj templates"
└── Checklist za dalje istraživanje
```

### 3.2 Onboarding Patterns

**Empty State Onboarding:**

Kada korisnik vidi prazan dashboard, umesto praznog ekrana prikaži:

```
┌────────────────────────────────────────────────────┐
│                                                     │
│   📊 Tvoj dashboard je spreman!                    │
│                                                     │
│   Počni dodavanjem prvog projekta:                 │
│   [+ Napravi novi projekat]                        │
│                                                     │
│   Ili pogledaj kako to izgleda sa primer podacima: │
│   [Prikaži demo podatke]                           │
│                                                     │
└────────────────────────────────────────────────────┘
```

**Product Tour (Overlay):**

- Tooltip arrows koji pokazuju na ključne elemente UI-a
- Korisnik klika "Sledeće" kroz 4-5 koraka
- Skip dugme uvek vidljivo
- Fokus na akciju, ne na čitanje

**Interactive Walkthrough:**

- Korisnik zapravo kreira nešto (ne samo čita tooltip-e)
- Checklist format (svaki ✓ daje dopamin)
- Npr: "✅ Napravi projekat → ✅ Dodaj zadatak → ✅ Pozovi kolegu → ✅ Podesi rok"

**Personalizovani Onboarding:**

```
Welcome Screen pitanje:
"Šta najbolje opisuje tvoju ulogu?"
├── Marketing Manager → Prikaži marketing-specific template-e
├── Developer → Prikaži tech-specific onboarding
├── Founder/CEO → Prikaži high-level overview
└── Other → Generički onboarding
```

### 3.3 Aktivacioni Playbooks — primeri poznatih SaaS-ova

**Slack:**
- Aha moment: Tim pošalje 2.000 poruka
- Onboarding fokus: Navesti tim da počne komunicirati
- Strategija: "Pozovi ceo tim", default kanali, bot koji podstiče interakciju

**Dropbox:**
- Aha moment: Upload prvog fajla + instalacija desktop app-a
- Onboarding fokus: Eliminisati barijere do prvog upload-a
- Strategija: Gamifikacija (checklist sa progress bar-om, bonus storage za svaki korak)

**Notion:**
- Aha moment: Kreiranje prve stranice sa blokovima
- Onboarding fokus: Pokazati fleksibilnost bez overwhelm-a
- Strategija: Template galerija, getting started tutorial, community examples

### 3.4 Onboarding email sekvenca za PLG

| Dan | Subject Line | Cilj | CTA |
|-----|-------------|------|-----|
| 0 | "Dobrodošli u [Brend] 🎉" | Potvrda + prvi korak | "Napravi prvi projekat →" |
| 1 | "3 stvari koje možeš da uradiš za 5 minuta" | Quick wins | "Pogledaj tutoriale →" |
| 3 | "Kako [Firma X] koristi [Brend] za [rezultat]" | Social proof | "Pročitaj priču →" |
| 5 | "Jesi li probao [Feature]?" | Feature discovery | "Aktiviraj [Feature] →" |
| 7 | "Tvoj tim bi voleo ovo" | Viralnost / expansion | "Pozovi kolege →" |
| 10 | "Tvoj trial ističe za 4 dana" | Urgency (samo za trial) | "Upgrade sada →" |
| 14 | "Poslednji dan — evo specijalne ponude" | Konverzija | "Aktiviraj sa 20% popusta →" |

---

## 4. In-App Messaging i Product Tours

### 4.1 Alati za in-app messaging

| Alat | Funkcija | Cena | Najbolje za |
|------|---------|------|-------------|
| **Intercom** | In-app chat + messaging + tours | Od $74/mes | Sve-u-jednom komunikacija |
| **Appcues** | Product tours + onboarding flows | Od $249/mes | Onboarding bez kodiranja |
| **Pendo** | Product analytics + in-app guides | Od $7K/god | Analytics-first pristup |
| **Chameleon** | Personalized product tours | Od $279/mes | Personalizacija |
| **UserGuiding** | Lightweight onboarding | Od $89/mes | Budget-friendly |
| **Userpilot** | Onboarding + feature adoption | Od $249/mes | Growth-focused |

### 4.2 In-app messaging use cases

**Feature Announcement:**
```
Trigger: Korisnik se uloguje posle release-a nove funkcionalnosti
Message: Tooltip ili modal
"🎉 Novo: [Feature name] je stigao!
 Sada možeš da [opis koristi].
 [Probaj odmah →] [Zatvori]"
```

**Upsell Prompt:**
```
Trigger: Korisnik klikne na premium feature
Message: Slideout ili modal
"🔒 [Feature] je dostupan na Pro planu.
 Upgrade-uj da bi otključao:
 ✅ [Benefit 1]
 ✅ [Benefit 2]
 ✅ [Benefit 3]
 [Upgrade na Pro →] [Možda kasnije]"
```

**Behavioral Re-engagement:**
```
Trigger: Korisnik nije koristio key feature 7+ dana
Message: Banner ili tooltip
"💡 Nisi koristio [Feature] neko vreme.
 Evo kratkog podsećanja kako ti može pomoći:
 [Pogledaj 30-sec tutorial →]"
```

**Feedback Request:**
```
Trigger: Korisnik koristi proizvod 30+ dana
Message: Slideout sa NPS
"Na skali od 0-10, koliko je verovatno da bi
 preporučio [Brend] kolegi?
 [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]"
```

### 4.3 In-app messaging best practices

1. **Jedan message po sesiji** — ne bombarduj korisnika
2. **Uvek omogući zatvaranje** — X dugme je obavezno
3. **Kontekstualan** — prikaži poruku kad je relevantna, ne nasumično
4. **A/B testiraj** — copy, pozicija, timing
5. **Segmentiraj** — različite poruke za različite korisničke profile
6. **Prati engagement** — koliko % korisnika interaguje vs zatvori

---

## 5. Freemium vs Free Trial optimizacija

### 5.1 Freemium model — detalji

**Šta dati besplatno:**

| Daj besplatno | Zaključaj (premium) |
|--------------|---------------------|
| Core funkcionalnost | Napredne feature-e |
| Ograničen capacity (3 projekta, 1GB) | Neograničen capacity |
| Individual use | Team collaboration |
| Community support | Priority support |
| Basic integrations | Premium integrations |
| Brending na outputu | White-label |

**Freemium upsell triggers:**

```
USAGE LIMIT HIT:
"Dostigao si limit od 10 projekata na Free planu.
 Upgrade na Pro za neograničene projekte.
 [Upgrade →] [Obriši projekat da nastaviš]"

FEATURE GATE:
"[Feature X] je dostupan na Pro planu.
 Korisnici koji ga koriste šetde prosečno 5h nedeljno.
 [Probaj 14 dana besplatno →]"

TIME-BASED:
"Koristiš [Brend] već 30 dana!
 Upgrade na Pro i otključaj sve feature-e.
 Specijalna ponuda: 20% popusta na prvi mesec.
 [Upgrade sa popustom →]"
```

### 5.2 Free Trial — detalji

**Trial dužina — optimizacija:**

| Dužina | Prednosti | Mane | Najbolje za |
|--------|----------|------|-------------|
| **7 dana** | Urgency, brža konverzija | Možda premalo za complex proizvode | Jednostavni alati sa brzim TTV |
| **14 dana** | Balans urgency i eksploracije | Standard (manja diferencijacija) | Većina SaaS-ova |
| **30 dana** | Dovoljno vremena za aktivaciju | Korisnici odlažu, zaborave | Complex enterprise alati |

**Credit Card Required vs Not:**

| | No CC Required | CC Required |
|---|---------------|-------------|
| **Signup rate** | Visoka (20-40% viša) | Niža |
| **Trial-to-Paid** | Niža (8-15%) | Viša (40-60%) |
| **Lead quality** | Mešovita (mnogi "just browsing") | Viša (commitment signal) |
| **Preporučeno za** | Rani SaaS, brand building | Zreliji SaaS, kvalifikovani leads |

### 5.3 Trial Expiration strategija

```
5 DANA PRE ISTEKA:
Email: "Tvoj trial ističe za 5 dana"
├── Podsetnik na vrednost ("Do sada si kreirao 15 projekata")
├── Highlight feature-a koje gubi
└── CTA: "Upgrade sada"

3 DANA PRE:
Email + In-app banner:
├── "Ostalo ti je 3 dana"
├── Case study ("Kako [Firma] je uštedela 20h nedeljno")
└── CTA: "Zaključaj pristup"

1 DAN PRE:
Email + In-app modal:
├── "Sutra gubite pristup svim projektima"
├── Ponuda: 20% popusta na prvi mesec
└── CTA: "Upgrade sa popustom →"

DAN ISTEKA:
├── Graceful degradation (NE briši podatke odmah!)
├── Read-only pristup (korisnik vidi projekte ali ne može editovati)
├── Email: "Tvoj trial je istekao — podaci su sačuvani"
└── CTA: "Upgrade da nastaviš rad"

POSLE ISTEKA (nurture):
Dan 3: "Podaci su još uvek tu — vrati se"
Dan 7: Case study + ponuda
Dan 30: "Zadnja šansa: 30% popust za bivše trial korisnike"
Dan 60: Win-back email (nova feature-i, poboljšanja)
```

---

## 6. Self-Serve Growth Loops

Growth loop je mehanizam gde korišćenje proizvoda direktno generiše nove korisnike.

### 6.1 Invitation Loop

```
Korisnik A koristi proizvod
    → Pozove Korisnika B (collaboration feature)
        → B se registruje
            → B pozove Korisnika C
                → Loop se nastavlja...
```

**Primeri:**
- **Slack:** Pozovi ceo tim na workspace
- **Figma:** Podeli dizajn sa klijentom/kolegom
- **Notion:** Deli workspace sa timom

**Optimizacija:**
- Učini pozivanje frictionless (1-klik invite)
- Jasna korist za pozvanu osobu ("[Ime] te poziva da sarađujete na projektu")
- Incentive za pošiljaoca (bonus feature, storage, credits)

### 6.2 Content Loop

```
Korisnik kreira sadržaj u tvom proizvodu
    → Objavljuje/deli javno
        → Drugi vide brend
            → Registruju se
                → Kreiraju sopstveni sadržaj...
```

**Primeri:**
- **Canva:** "Made with Canva" watermark na besplatnom planu
- **Loom:** "Record your own with Loom" CTA ispod video-a
- **Typeform:** "Create your own form with Typeform" na dnu forme

### 6.3 Integration Loop

```
Tvoj proizvod se integriše sa popularnim alatom
    → Korisnici tog alata vide integraciju u marketplace-u
        → Instaliraju tvoj proizvod
            → Koriste integraciju
                → Preporuče kolegama...
```

**Primeri:**
- **Zapier integrations:** Svaka integracija je landing page koji se rangira u Google-u
- **Slack App Directory:** Prisustvo u marketplace-u donosi organic installs
- **HubSpot App Marketplace:** Partneri dobijaju pristup HubSpot korisnicima

---

## 7. Product Analytics za PLG

### 7.1 Alati za product analytics

| Alat | Najbolje za | Free plan | Plaćeni od |
|------|------------|-----------|-----------|
| **Mixpanel** | Event-based analytics, funnels | 100K events/mes | $25/mes |
| **Amplitude** | Behavioral cohorts, retention | 10M events/mes | Custom |
| **PostHog** | Open-source, all-in-one | Self-hosted besplatno | $0.000225/event |
| **Heap** | Auto-capture (bez ručnog setup-a) | 10K sessions/mes | Custom |
| **Pendo** | Analytics + in-app guides | Ograničen | Custom |

### 7.2 Ključni eventi za tracking

```
SIGNUP & ONBOARDING:
├── user_signed_up (method: google/email/github)
├── onboarding_step_completed (step: 1/2/3/4/5)
├── profile_setup_completed
└── first_action_completed

ACTIVATION:
├── first_project_created
├── first_invite_sent
├── key_feature_used (feature: X)
└── activation_milestone_reached

ENGAGEMENT:
├── daily_login
├── feature_used (feature: X)
├── session_duration
└── content_created/edited

MONETIZATION:
├── viewed_pricing_page
├── started_checkout
├── completed_purchase (plan: basic/pro/enterprise)
├── upgraded_plan (from: X, to: Y)
└── churned (reason: X)

VIRALNOST:
├── invite_sent (count: N)
├── invite_accepted
├── content_shared (channel: email/link/social)
└── referral_signup
```

### 7.3 Funnels i Cohorts

**Signup-to-Activation Funnel:**

```
Visited landing page ........................ 10.000 (100%)
  └→ Clicked "Start Free Trial" ............ 3.000 (30%)
      └→ Completed signup form .............. 2.000 (20%)
          └→ Verified email ................. 1.500 (15%)
              └→ Completed onboarding ....... 1.000 (10%)
                  └→ First key action ........ 600 (6%)
                      └→ Activated ........... 400 (4%)

DROP-OFF ANALIZA:
Najveći drop-off: Landing → Signup (70% napušta)
→ Optimizuj: Hero sekcija, VP, CTA
Drugi drop-off: Signup → Onboarding (25%)
→ Optimizuj: Signup form (manje polja), email verifikacija
```

**Retention Cohort:**

```
         Mesec 0  Mesec 1  Mesec 2  Mesec 3  Mesec 4  Mesec 5
Jan      100%     45%      35%      30%      28%      27%
Feb      100%     50%      38%      32%      30%      —
Mar      100%     55%      42%      —        —        —
Apr      100%     48%      —        —        —        —

INSIGHT:
Mesec-za-mesec retencija se poboljšava (Jan→Apr)
= Onboarding optimizacije deluju
Najveći pad: Mesec 0 → Mesec 1 (55% churn-a se dešava u prvom mesecu)
= Fokus na prvih 30 dana korišćenja
```

---

## Sledeći koraci

> Nastavi sa [Lifecycle marketing, retencija i engagement →](/21-lifecycle-marketing)
