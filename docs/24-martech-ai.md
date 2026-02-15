# MarTech stack i AI automatizacija

Marketing Technology (MarTech) stack je skup alata i platformi koje koristiš za marketing aktivnosti. U 2026, AI i automatizacija nisu opcija — su neophodnost. Ovo poglavlje pokriva kako da izgradiš efikasan tech stack i iskoristiš AI za competitive advantage.

## 1. CRM sistemi

### 1.1 Šta je CRM i zašto je bitan za SaaS

CRM (Customer Relationship Management) je centralna baza podataka o korisnicima, lead-ovima i interakcijama. Za SaaS, CRM je "single source of truth" za sales i marketing.

### 1.2 Uporedni pregled CRM-ova

| CRM | Cena | Najbolje za | Prednosti | Mane |
|-----|------|------------|-----------|------|
| **HubSpot** | Free CRM; Marketing od $45/mes | Startupe i SMB, inbound marketing | All-in-one (CRM + Marketing + Sales + Support), besplatan CRM, odlična dokumentacija | Brzo postaje skup pri skaliranju, lock-in |
| **Salesforce** | Od $25/user/mes | Enterprise, B2B sa kompleksnim sales procesom | Najmoćniji na tržištu, beskonačna customizacija, AppExchange | Skup, kompleksan setup, zahteva admin-a |
| **Pipedrive** | Od $14/user/mes | Mali prodajni timovi, visual pipeline | Jednostavan, intuitivan, pipeline-first | Ograničen marketing automation |
| **Close** | Od $49/user/mes | Inside sales, SaaS sales timovi | Built-in calling, email, SMS; SaaS-focused | Manji ekosistem integracija |
| **Folk** | Od $20/user/mes | Lightweight CRM, mali timovi | Jednostavan, Notion-like UX | Manje feature-a |

### 1.3 Kada koji CRM koristiti

```
SOLO FOUNDER / 1-3 OSOBE:
→ HubSpot Free CRM ili Pipedrive Starter
  Razlog: Besplatno ili jeftino, lako za početi

MALI TIM (3-10):
→ HubSpot Starter ili Close
  Razlog: Balans funkcionalnosti i cene

SCALING SaaS (10-50):
→ HubSpot Professional ili Salesforce Essentials
  Razlog: Marketing automation + CRM u jednom

ENTERPRISE (50+):
→ Salesforce Enterprise
  Razlog: Customizacija, skalabilnost, integracije
```

---

## 2. Email Marketing platforme

### 2.1 Uporedni pregled

| Platforma | Cena | Najbolje za | SaaS feature-i |
|-----------|------|------------|----------------|
| **ActiveCampaign** | Od $29/mes | Automatizacija, email + CRM combo | Behavioral triggers, lead scoring, CRM uključen |
| **Customer.io** | Od $100/mes | SaaS lifecycle marketing | Event-driven messaging, segmentacija po ponašanju |
| **ConvertKit** | Od $29/mes | Content creators, newsletteri | Landing pages, visual automations |
| **Mailchimp** | Free do 500; od $13/mes | Početnike, jednostavnost | Easy setup, ali ograničena automatizacija |
| **Resend** | Free do 3K/mes; od $20/mes | Developer-friendly | React email, API-first, moderan DX |
| **Loops** | Od $49/mes | SaaS-first email marketing | Dizajniran za SaaS lifecycle |

### 2.2 Šta tražiti u email platformi za SaaS

```
MUST-HAVE:
├── Behavioral triggers (pošalji email kad korisnik uradi X)
├── Segmentacija po ponašanju (ne samo po demografiji)
├── A/B testiranje subject line-ova
├── Transactional + marketing emailovi u jednom
├── API za programsko slanje
└── Integracija sa tvojim app-om i CRM-om

NICE-TO-HAVE:
├── Visual automation builder (drag-and-drop flows)
├── Lead scoring
├── Dynamic content (personalizacija u emailu)
├── Send-time optimization (AI šalje u optimalno vreme)
└── Advanced analytics (revenue attribution)
```

### 2.3 Email Deliverability osnove

```
SETUP ZA DOBAR DELIVERABILITY:
1. SPF record — Dozvoljava email serveru da šalje u tvoje ime
2. DKIM — Digitalni potpis koji dokazuje autentičnost
3. DMARC — Politika šta raditi sa neautentifikovanim emailovima
4. Dedicated IP — Za > 50K emailova mesečno
5. Domain warmup — Postepeno povećavaj volume (ne šalji 10K odjednom)

BEST PRACTICES:
├── List hygiene — Ukloni inactive korisnike svakih 90 dana
├── Double opt-in — Potvrda pretplate (bolji engagement)
├── Easy unsubscribe — Vidljiv link u svakom emailu
├── Consistent sending — Redovnost > sporadičnost
└── Monitor bounce rate — Drži ispod 2%
```

---

## 3. Marketing Automation

### 3.1 Šta je Marketing Automation

Marketing automation je korišćenje softvera za automatizovanje repetitivnih marketing zadataka — email sekvence, lead scoring, social media posting, data sync, i još mnogo toga.

### 3.2 Automation platforme

| Platforma | Cena | Tip | Najbolje za |
|-----------|------|-----|-------------|
| **n8n** | Self-hosted besplatno; Cloud od $20/mes | Low-code workflow | Developeri, custom workflows, self-hosted |
| **Zapier** | Free (ograničen); od $19.99/mes | No-code | Početnike, brze integracije |
| **Make (Integromat)** | Free (ograničen); od $9/mes | Visual automation | Kompleksne automacije, bolji value |
| **Pipedream** | Free; od $19/mes | Developer-first | API integracije, serverless functions |

### 3.3 Automacije za SaaS — konkretni primeri

**1. Lead Scoring Automation:**

```
WORKFLOW: Lead Score Update

Trigger: Korisnik uradi specifičnu akciju
├── Poseta pricing stranice → +10 poena
├── Download whitepaper → +5 poena
├── Otvorio 3+ emaila → +3 poena
├── Signup za trial → +20 poena
├── Pozvao teammate-a → +15 poena
├── Nije se ulogovao 14 dana → -10 poena
└── Otkazao trial → -30 poena

Akcija: Kada score > 50 → Označi kao PQL → Notify sales tim
```

**2. Onboarding Automation:**

```
WORKFLOW: New User Onboarding

Trigger: user_signed_up event
├── Odmah: Pošalji welcome email
├── +1h: Proveri da li je completao onboarding
│   ├── DA → Pošalji "Quick wins" email
│   └── NE → Pošalji "Hajde da završimo setup" email
├── +3 dana: Proveri da li je aktiviran
│   ├── DA → Pošalji social proof email
│   └── NE → Pošalji "Need help?" email + Trigger in-app message
├── +7 dana: Feature discovery email
└── +10 dana (ako je trial): Trial expiry warning
```

**3. Churn Alert Automation:**

```
WORKFLOW: Churn Risk Alert

Trigger: Daily check korisničke aktivnosti
├── Korisnik se nije ulogovao 7 dana
│   └── Pošalji re-engagement email
├── Korisnik se nije ulogovao 14 dana
│   └── Alert CSM (Slack notification)
├── Korisnik poseti cancel stranicu
│   └── Urgentni alert sales/CS timu
└── Korisnik downgrade-uje plan
    └── Feedback survey + CSM follow-up
```

**4. Data Sync Automation:**

```
WORKFLOW: CRM ↔ Product Sync

Trigger: Novi korisnik u app-u
├── Kreiraj kontakt u HubSpot CRM-u
├── Dodeli lifecycle stage = "Trial"
├── Sync plan info (free/paid/enterprise)
├── Update kad korisnik upgrade-uje
└── Tag sa feature usage podacima
```

---

## 4. Analytics Stack

### 4.1 Data Flow za SaaS

```
DATA SOURCES:                COLLECTION:           STORAGE:          VISUALIZATION:
┌──────────┐               ┌──────────┐          ┌──────┐          ┌──────────────┐
│ Website  │──── GA4 ────→ │          │          │      │          │              │
│ App      │──── Segment ──│ Data     │────────→ │ Data │────────→ │  Dashboards  │
│ CRM      │──── API ─────→│ Pipeline │          │ Lake │          │  (Looker     │
│ Ads      │──── Connectors│          │          │      │          │   Studio,    │
│ Email    │──────────────→│          │          │      │          │   Metabase)  │
└──────────┘               └──────────┘          └──────┘          └──────────────┘
```

### 4.2 Analytics Stack po fazi rasta

**Early Stage (0-1K korisnika):**
```
├── GA4 (besplatan) — Web analytics
├── Mixpanel ili PostHog (besplatan tier) — Product analytics
├── Google Search Console — SEO
├── Platform native analytics (Google Ads, Meta Ads)
└── Google Sheets za dashboarding
```

**Growth Stage (1K-10K korisnika):**
```
├── GA4 — Web analytics
├── Mixpanel/Amplitude — Product analytics
├── Segment — Customer Data Platform (data routing)
├── Looker Studio ili Metabase — Dashboarding
├── Hotjar/Clarity — Heatmaps i recordings
└── Supermetrics ili Funnel.io — Ads data aggregation
```

**Scale Stage (10K+ korisnika):**
```
├── GA4 + BigQuery — Advanced web analytics
├── Amplitude/Mixpanel Enterprise — Product analytics
├── Segment + Data Warehouse (Snowflake/BigQuery)
├── Looker ili Tableau — BI dashboarding
├── Census ili Hightouch — Reverse ETL
└── Custom attribution model
```

### 4.3 Segment — Customer Data Platform

```
ŠTA JE SEGMENT:
Segment je "data router" — prikuplja podatke iz svih izvora i šalje ih
na sva odredišta. Jednom implementiraš tracking, a Segment distribuira
podatke gde god treba.

BEZ SEGMENTA:                    SA SEGMENTOM:
App → GA4                        App → Segment → GA4
App → Mixpanel                                  → Mixpanel
App → HubSpot                                   → HubSpot
App → Facebook Pixel                            → Facebook Pixel
App → Customer.io                               → Customer.io
(5 odvojenih implementacija)      (1 implementacija)

PREDNOSTI:
├── Jedan SDK za sve (umesto 5+ snippet-ova)
├── Dodavanje novog alata = 1 klik (ne novi kod)
├── Konzistentni event nazivi (user_signed_up svuda isto)
└── Data governance (centralna kontrola šta se šalje gde)

CENA: Free do 1K korisnika mesečno; Team od $120/mes
ALTERNATIVE: RudderStack (open-source), Jitsu, Freshpaint
```

---

## 5. Tag Management

### 5.1 Google Tag Manager (GTM)

```
ŠTA JE GTM:
GTM je kontejner koji ti dozvoljava da dodaješ i upravljaš
marketing/analytics skriptama na sajtu BEZ menjanja koda.

BEZ GTM-a:                          SA GTM-om:
Programer dodaje GA4 kod             Marketer dodaje GA4 u GTM
Programer dodaje Meta Pixel          Marketer dodaje Meta Pixel u GTM
Programer dodaje LinkedIn Tag        Marketer dodaje LinkedIn Tag u GTM
(svaki put: deploy, čekanje)         (jednom GTM instaliran → marketer upravlja)
```

### 5.2 Server-Side Tagging

```
PROBLEM SA CLIENT-SIDE TAGGING:
├── Ad blocker-i blokiraju tagove (15-30% saobraćaja se gubi)
├── Browser privacy restricije (ITP, ETP)
├── Sporije učitavanje sajta (mnogo JavaScript-a)
└── Manje precizan tracking

SERVER-SIDE TAGGING:
├── Tagovi se izvršavaju na tvom serveru (ne u browseru)
├── Ad blocker-i ne mogu da blokiraju
├── Brži sajt (manje JS-a na klijentu)
├── Bolji data quality
└── Potpuna kontrola nad podacima (GDPR+)

SETUP:
├── Google Cloud Run (hosting za GTM server container)
├── Custom domain (sgtm.tvojdomen.com)
├── Konfiguracija u GTM-u (Server container)
└── Cena: ~$50-100/mes za Cloud Run
```

---

## 6. AI za marketing

### 6.1 Generativni AI za sadržaj

| Use Case | Alat | Kako koristiti |
|----------|------|---------------|
| **Blog pisanje** | ChatGPT, Claude | Generisanje drafta, outline-a, istraživanje |
| **Email copywriting** | Claude, Jasper | Subject line-ovi, body tekst, personalizacija |
| **Social media postovi** | ChatGPT, Buffer AI | Generisanje postova, repurposing |
| **Ad copy** | ChatGPT, AdCreative.ai | Headline varijacije, opis oglasa |
| **SEO content** | SurferSEO + AI, Clearscope | Optimizacija postojećeg sadržaja |
| **Video scripts** | Claude, ChatGPT | Skripte za YouTube, Reels |
| **Prevoditi/lokalizovati** | DeepL, Claude | Prevod sadržaja na lokalne jezike |

**AI Content Workflow:**

```
1. ISTRAŽIVANJE (AI + Human)
├── AI: Keyword research, competitor analysis, topic ideas
└── Human: Validacija, prioritizacija, strategija

2. KREIRANJE (AI + Human)
├── AI: Draft, outline, varijacije headline-ova
└── Human: Editovanje, fact-checking, brand voice

3. OPTIMIZACIJA (AI)
├── AI: SEO scoring, readability check
└── AI: A/B test varijacije

4. DISTRIBUCIJA (AI + Automation)
├── AI: Repurposing (blog → social posts)
└── Automation: Scheduling, cross-posting
```

::: warning AI content pravila
1. **Nikad ne objavljuj raw AI output** — Uvek edituj, proveri činjenice, dodaj lično iskustvo
2. **Google prepoznaje generic AI content** — Dodaj original insight, podatke, primere
3. **Transparentnost** — Ako koristiš AI, budi otvoren po tom pitanju
4. **Brand voice** — AI ne zna tvoj brand voice — moraš ga naučiti (custom instructions)
:::

### 6.2 AI-Powered Marketing alati

| Kategorija | Alat | Šta radi |
|-----------|------|---------|
| **SEO** | SurferSEO, Clearscope | AI optimizacija sadržaja za bolji ranking |
| **Ads** | AdCreative.ai | AI generisanje oglasnih kreativa |
| **Analytics** | Amplitude AI, GA4 Insights | AI insights iz podataka |
| **Email** | Seventh Sense | AI optimizacija send time-a |
| **Personalization** | Mutiny, Dynamic Yield | AI personalizacija web sadržaja |
| **Social** | Buffer AI, Hootsuite AI | AI generisanje i scheduling social postova |
| **Design** | Midjourney, DALL-E, Canva Magic | AI generisanje vizuala |
| **Video** | Synthesia, HeyGen | AI generisanje video sadržaja |

### 6.3 AI Chatbotovi i konverzacioni marketing

**Zašto chatbot za SaaS:**
- 24/7 dostupnost (podrška i lead gen)
- Instant odgovori na česta pitanja
- Kvalifikacija lead-ova pre nego što stignu do sales tima
- Smanjenje opterećenja support tima za 30-50%

**Tipovi chatbot-ova:**

| Tip | Tehnologija | Primer | Kompleksnost |
|-----|------------|--------|-------------|
| **Rule-based** | If/then logika | "Izaberi temu: Pricing / Support / Demo" | Niska |
| **AI-powered** | LLM (GPT, Claude) | Razume prirodan jezik, daje dinamičke odgovore | Srednja |
| **Hybrid** | Kombinacija | AI za prvu liniju, human handoff za kompleksno | Visoka |

**Chatbot platforme:**

| Platforma | Cena | Tip |
|-----------|------|-----|
| **Intercom Fin** | Od $29/agent/mes + AI | AI-first, knowledge base trained |
| **Drift** | Custom | Conversational marketing + sales |
| **Crisp** | Free (ograničen); od $25/mes | Live chat + chatbot |
| **Tidio** | Free; od $29/mes | SMB-friendly |
| **CustomGPT / Chatbase** | Od $19/mes | Custom AI chatbot sa tvojim podacima |

**Chatbot implementation checklist:**

```
☐ Definiši top 20 najčešćih pitanja
☐ Kreiraj knowledge base (pomoćni sadržaj)
☐ Postavi fallback na human agent
☐ Definiši radno vreme (chatbot vs live agent)
☐ A/B testiraj welcome message
☐ Poveži sa CRM-om (logiraj sve razgovore)
☐ Prati: resolution rate, CSAT, handoff rate
```

---

## 7. Prediktivna analitika

### 7.1 Use Cases za SaaS

| Use Case | Šta predviđa | Benefit |
|----------|-------------|---------|
| **Churn prediction** | Koji korisnici će otkazati | Proaktivna retencija, smanjenje churn-a 10-30% |
| **Lead scoring** | Koji leadovi će konvertovati | Fokus sales tima na najvrednije leadove |
| **Revenue forecasting** | Koliki će MRR biti za 3/6/12 meseci | Bolje planiranje, investicione odluke |
| **Customer segmentation** | Grupe korisnika sa sličnim ponašanjem | Personalizovane kampanje, bolji targeting |
| **LTV prediction** | Koliko će korisnik vredeti dugoročno | Optimizacija CAC-a, pricing odluke |

### 7.2 Churn Prediction — kako funkcioniše

```
INPUT PODACI:
├── Login frekvencija (poslednje 2 nedelje vs prosek)
├── Feature usage (koliko feature-a koristi)
├── Support tiketi (broj i sentiment)
├── Billing history (missed payments, downgrade)
├── Team size (smanjenje broja korisnika u nalogu)
└── NPS score (poslednji)

MODEL:
Machine Learning model (Random Forest, XGBoost)
treniran na istorijskim podacima churned vs retained korisnika

OUTPUT:
├── Churn probability: 0-100%
├── Risk level: Low / Medium / High / Critical
└── Key factors: "Smanjena login frekvencija, 0 feature-a korišćeno poslednjih 7 dana"

AKCIJA:
High risk (>70%) → Urgent CSM outreach
Medium risk (40-70%) → Automated re-engagement email
Low risk (<40%) → Standard nurturing
```

### 7.3 Alati za prediktivnu analitiku

| Alat | Kompleksnost | Cena | Za koga |
|------|-------------|------|---------|
| **ProfitWell (Paddle)** | Niska | Besplatan | Churn prediction, revenue analytics |
| **ChartMogul** | Niska | Od $100/mes | SaaS metrics, cohort analysis |
| **Baremetrics** | Niska | Od $108/mes | Revenue analytics, forecasting |
| **Amplitude Predict** | Srednja | Enterprise | Behavioral prediction |
| **BigQuery ML** | Visoka | Pay-per-use | Custom ML modeli |
| **Python (scikit-learn)** | Visoka | Besplatan | Full custom, za data tim |

---

## 8. MarTech Stack preporuka po fazi

### Starter (0-50 korisnika, 0-500 EUR/mes budžet)

```
BESPLATAN STACK:
├── CRM: HubSpot Free
├── Email: Mailchimp Free ili Resend Free
├── Analytics: GA4 + Google Search Console
├── Product Analytics: PostHog (self-hosted) ili Mixpanel Free
├── Heatmaps: Microsoft Clarity (besplatan)
├── Automation: Zapier Free ili Make Free
├── Design: Canva Free
├── AI: ChatGPT Free + Claude Free
└── Chat: Crisp Free
```

### Growth (50-1K korisnika, 500-2K EUR/mes budžet)

```
GROWTH STACK:
├── CRM: HubSpot Starter ($45/mes)
├── Email: ActiveCampaign ($29/mes) ili Customer.io ($100/mes)
├── Analytics: GA4 + Mixpanel Growth
├── Automation: Make ($9/mes) ili n8n Cloud ($20/mes)
├── Tag Management: Google Tag Manager (besplatan)
├── Heatmaps: Hotjar ($32/mes)
├── A/B Testing: PostHog ili VWO ($99/mes)
├── AI: ChatGPT Plus + Claude Pro
└── Chat: Intercom Starter ($74/mes)
```

### Scale (1K+ korisnika, 2K+ EUR/mes budžet)

```
SCALE STACK:
├── CRM: HubSpot Professional ili Salesforce
├── Email: Customer.io ili ActiveCampaign Plus
├── CDP: Segment ($120/mes)
├── Product Analytics: Amplitude ili Mixpanel
├── Dashboarding: Looker Studio ili Metabase
├── Automation: n8n + custom scripts
├── Server-side GTM
├── A/B Testing: VWO ili Optimizely
├── AI: Enterprise AI tools + custom integrations
├── Chat: Intercom + AI bot
└── Revenue Analytics: ChartMogul ili ProfitWell
```

---

## Sledeći koraci

> Nastavi sa [B2B vs B2C SaaS specifičnosti →](/25-b2b-b2c-saas)
