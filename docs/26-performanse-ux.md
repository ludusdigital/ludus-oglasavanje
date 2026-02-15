# Web performanse, UX i pristupačnost

Brzina sajta, korisničko iskustvo i pristupačnost direktno utiču na konverzije, retenciju i SEO. Svaka sekunda kašnjenja smanjuje konverzije za 7%. Ovo poglavlje pokriva kako da optimizuješ performanse i UX tvog SaaS sajta i aplikacije.

## 1. Mobile-First pristup

### 1.1 Zašto Mobile-First

- **60%+ saobraćaja** dolazi sa mobilnih uređaja
- Google koristi **mobile-first indexing** — rangira na osnovu mobilne verzije
- Korisnici očekuju **isti kvalitet** iskustva na svim uređajima
- Mobile UX problemi = **niže konverzije** i viši bounce rate

### 1.2 Mobile UX Best Practices

**Touch targets:**

```
PRAVILO:
├── Minimum touch target: 44 × 44 px (Apple) / 48 × 48 px (Google)
├── Razmak između elemenata: minimum 8px
└── CTA dugme: visoko kontrastno, lako za tapnuti

PRIMERI GREŠAKA:
❌ Mali linkovi u navigaciji (teško tapnuti)
❌ Form polja preblizu jedno drugom
❌ Hamburger meni sa sitnim opcijama
```

**Responsive dizajn checklist:**

```
☐ Layout se prilagođava od 320px do 2560px širine
☐ Slike se skaliraju (srcset / responsive images)
☐ Tekst je čitljiv bez zumiranja (min 16px za body)
☐ Forme su usable na mobilnom (input type="email", autocomplete)
☐ CTA dugmad vidljiva bez scrollovanja na mobilnom
☐ Navigacija funkcionalna na mobilnom
☐ Tabele se horizontalno skroluju ili prilagode
☐ Popup/modali se pravilno prikazuju na malom ekranu
☐ Video se pravilno renderuje
☐ Testirano na iOS Safari, Chrome Android, Samsung Browser
```

### 1.3 Mobile Page Speed

```
MOBILE SPEED TARGETS:
├── LCP (Largest Contentful Paint): < 2.5 sekundi
├── INP (Interaction to Next Paint): < 200 ms
├── CLS (Cumulative Layout Shift): < 0.1
└── Total Page Weight: < 1 MB (idealno < 500 KB)

OPTIMIZACIJE:
├── Lazy loading za slike ispod fold-a
├── Image format: WebP ili AVIF (30-50% manje od JPEG)
├── Critical CSS inline (above-the-fold stilovi)
├── Defer non-critical JavaScript
├── Preconnect za third-party resurse
├── Font: system-default ili preload web fontove
└── CDN za statičke resurse
```

---

## 2. Accessibility (a11y)

### 2.1 Zašto je pristupačnost bitna

- **15% svetske populacije** ima neku formu invaliditeta
- **Pravna obaveza** u mnogim jurisdikcijama (EU Accessibility Act od 2025)
- **SEO benefit** — pristupačan sajt je bolje strukturiran za crawlere
- **Bolji UX za sve** — pristupačan dizajn je bolji dizajn, tačka

### 2.2 WCAG Standardi

WCAG (Web Content Accessibility Guidelines) definiše tri nivoa:

| Nivo | Opis | Obaveznost |
|------|------|-----------|
| **A** | Osnovni nivo — apsolutni minimum | Obavezno |
| **AA** | Standardni nivo — dovoljan za većinu | Preporučeno (pravni standard) |
| **AAA** | Najviši nivo — maksimalna pristupačnost | Aspirativan |

### 2.3 Ključna pravila pristupačnosti

**Perceivable (može se videti/čuti):**

```
SLIKE:
├── Svaka <img> ima alt tekst koji opisuje sadržaj
├── Dekorativne slike: alt="" (prazan alt)
├── Informativne slike: alt="Grafikon koji prikazuje rast MRR-a za 30%"
└── Ne koristi slike za tekst (koristiti HTML tekst)

BOJE:
├── Color contrast ratio minimum 4.5:1 za tekst (AA)
├── Minimum 3:1 za veliki tekst (18px+)
├── Ne oslanjaj se SAMO na boju za prenošenje informacija
│   ❌ Crveno = greška (šta ako je korisnik daltonista?)
│   ✅ Crveno + ikona + tekst "Greška: popuni ovo polje"
└── Alat za proveru: WebAIM Contrast Checker

VIDEO:
├── Captions za sve video sadržaje
├── Audio description za vizuelne informacije
└── Transcript dostupan
```

**Operable (može se koristiti):**

```
TASTATURA:
├── SVE funkcionalnosti dostupne tastaturom (Tab, Enter, Space, Arrow keys)
├── Vidljiv focus indicator (outline na aktivnom elementu)
├── Logičan tab redosled
├── Skip-to-content link na vrhu stranice
└── Nema "keyboard traps" (korisnik može uvek izaći)

NAVIGACIJA:
├── Jasna, konzistentna navigacija na svim stranicama
├── Breadcrumbs za duboke stranice
├── Descriptivni link tekst ("Pročitaj case study" ne "Klikni ovde")
├── Heading hijerarhija (H1 → H2 → H3, bez preskakanja)
└── Landmarks (header, nav, main, footer, aside)
```

**Understandable (može se razumeti):**

```
FORME:
├── Svako polje ima vidljiv <label> (ne samo placeholder)
├── Error poruke su specifične i korisne
│   ❌ "Invalid input"
│   ✅ "Email adresa mora sadržati @ karakter"
├── Required polja jasno označena (*, "obavezno")
├── Error poruke pored polja, ne samo na vrhu forme
└── Auto-focus na prvo polje sa greškom

JEZIK:
├── Jasan, jednostavan jezik
├── Akronimi objašnjeni pri prvom pominjanju
├── Konzistentna terminologija
└── lang atribut na HTML tagu (<html lang="sr-Latn">)
```

**Robust (radi sa svim tehnologijama):**

```
SEMANTIČKI HTML:
├── Koristi <button> za dugmad (ne <div onclick>)
├── Koristi <a> za linkove
├── Koristi <nav> za navigaciju
├── Koristi <main> za glavni sadržaj
├── Koristi <form>, <input>, <select> za forme
└── Koristi heading tagove za naslove (ne <div class="heading">)

ARIA (kad semantički HTML nije dovoljan):
├── aria-label za elemente bez vidljivog teksta
├── aria-expanded za accordion/dropdown
├── aria-live za dinamički sadržaj
├── role="alert" za error poruke
└── aria-hidden="true" za dekorativne elemente
```

### 2.4 Accessibility Testing alati

| Alat | Cena | Šta testira |
|------|------|------------|
| **axe DevTools** (Chrome extension) | Besplatan | Automatsko skeniranje a11y grešaka |
| **WAVE** (web tool) | Besplatan | Vizuelni pregled a11y problema |
| **Lighthouse** (Chrome DevTools) | Besplatan | Accessibility score + detalji |
| **screen reader** (VoiceOver/NVDA) | Besplatan | Ručno testiranje sa screen reader-om |
| **Stark** (Figma plugin) | Od $10/mes | Contrast check u dizajnu |

### 2.5 Quick Wins za pristupačnost

```
TOP 10 FIXES (pokrivaju ~80% problema):
1. Dodaj alt tekst na sve slike
2. Proveri color contrast (4.5:1 minimum)
3. Dodaj <label> na sva form polja
4. Osiguraj keyboard navigaciju (Tab order)
5. Vidljiv focus indicator
6. Semantički HTML (button, a, nav, main)
7. Heading hijerarhija (H1 → H2 → H3)
8. Skip-to-content link
9. Descriptivni link tekst
10. Error poruke pored polja, ne generičke
```

---

## 3. PWA (Progressive Web App) koncept

### 3.1 Šta je PWA

PWA je web aplikacija koja se ponaša kao native app — može se instalirati, radi offline, šalje push notifikacije.

```
PWA MOGUĆNOSTI:
├── Instalacija na home screen (bez App Store-a)
├── Offline pristup (Service Worker cache)
├── Push notifikacije
├── Background sync
├── Brže učitavanje (cache-first strategija)
└── Full-screen mode (bez browser chrome-a)
```

### 3.2 Kada razmotriti PWA za SaaS

| Razmatranje | PWA ima smisla | PWA nema smisla |
|------------|---------------|----------------|
| **Mobile korišćenje** | Visoko (dnevno) | Nisko (mesečno) |
| **Internet pouzdanost** | Korisnici imaju slab internet | Uvek stabilan internet |
| **Push notifikacije** | Bitne za engagement | Nisu potrebne |
| **App Store** | Ne želiš App Store overhead | Trebaš App Store discovery |
| **Budget** | Ograničen (1 codebase za web + "app") | Dovoljan za native app |

### 3.3 PWA tehnički zahtevi

```
MINIMUM ZA PWA:
1. HTTPS (obavezno)
2. Web App Manifest (manifest.json)
   - name, short_name, icons, theme_color, background_color
3. Service Worker (caching + offline)
4. Responsive dizajn

MANIFEST.JSON PRIMER:
{
  "name": "DataFlow Analytics",
  "short_name": "DataFlow",
  "start_url": "/dashboard",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## 4. Error Monitoring

### 4.1 Zašto je Error Monitoring bitan za marketing

- Greške u aplikaciji = lošije korisničko iskustvo = viši churn
- Broken stranica = izgubljeni leadovi i konverzije
- JS greške mogu blokirati tracking (GA4, Meta Pixel)
- Error rate korelira sa NPS i customer satisfaction

### 4.2 Error Monitoring alati

| Alat | Cena | Specifičnosti |
|------|------|--------------|
| **Sentry** | Free (5K events/mes); od $26/mes | Najpopularniji, odlična integracija |
| **LogRocket** | Free (1K sessions/mes); od $99/mes | Session replay + error tracking |
| **Bugsnag** | Free (7.5K events/mes); od $59/mes | Mobile-focused |
| **Datadog RUM** | Od $15/mes | Enterprise, APM + RUM |
| **PostHog** | Free (self-hosted) | Open-source, all-in-one |

### 4.3 Šta monitorisati

```
FRONT-END:
├── JavaScript errors (uncaught exceptions)
├── Network errors (failed API calls)
├── Slow page loads (> 3 sec)
├── Console errors
└── Rage clicks (frustration signals)

BACKEND (ako imaš pristup):
├── Server errors (5xx)
├── Slow database queries
├── Memory leaks
├── Failed jobs (background tasks)
└── Third-party API failures

MARKETING-SPECIFIC:
├── Broken tracking (GA4, Meta Pixel ne rade)
├── Form submission errors
├── Payment processing failures
├── Landing page 404 errors
└── Redirect chain problems
```

### 4.4 Alerting strategija

```
SEVERITY LEVELS:

🔴 CRITICAL (alert odmah, 24/7):
├── Pricing/checkout page down
├── Signup form ne radi
├── Payment processing failure
└── > 5% error rate

🟠 HIGH (alert u radnom vremenu):
├── Landing page greška
├── Tracking code broken
├── Slow page load (> 5 sec)
└── 1-5% error rate

🟡 MEDIUM (dnevni review):
├── Minor UI bugs
├── Sporadični JS errors
├── Performance degradacija
└── < 1% error rate

KANALI ZA ALERTE:
├── Slack #engineering-alerts (za critical)
├── Email (za high)
└── Dashboard (za medium/low)
```

---

## 5. UX optimizacija za konverzije

### 5.1 Friction Audit

Friction je sve što otežava korisniku da postigne cilj. Friction audit identifikuje i eliminiše ove prepreke.

```
FRICTION AUDIT CHECKLIST:

SIGNUP:
☐ Koliko polja ima signup forma? (cilj: 2-3)
☐ Da li postoji social login? (Google, GitHub)
☐ Da li se zahteva email verifikacija PRE pristupa?
☐ Da li se zahteva kreditna kartica?
☐ Koliko je loading time posle signup-a?

ONBOARDING:
☐ Koliko koraka do prvog rezultata? (cilj: < 5)
☐ Da li postoji skip opcija?
☐ Da li se prikazuju pre-populated primeri?
☐ Da li postoje tooltips/guidance?
☐ Da li je onboarding personalizovan?

KLJUČNE AKCIJE:
☐ Koliko klikova do najvažnije akcije? (cilj: < 3)
☐ Da li su CTA dugmad jasna i vidljiva?
☐ Da li postoje zbunjujuće opcije/terminologija?
☐ Da li se akcije brzo izvršavaju? (loading state)

PRICING/UPGRADE:
☐ Da li je pricing jasan?
☐ Da li je upgrade 1-klik?
☐ Da li je billing transparentan?
☐ Da li je cancel lak?
```

### 5.2 Cognitive Load

Cognitive load je količina mentalnog napora koja je potrebna korisniku da obavi zadatak.

```
KAKO SMANJITI COGNITIVE LOAD:

1. PROGRESSIVE DISCLOSURE
   Ne prikazuj sve opcije odjednom
   ✅ Prikaži 3 najvažnije opcije + "Više opcija" link
   ❌ Prikaži 20 opcija u jednom dropdown-u

2. CHUNKING
   Grupiši povezane informacije
   ✅ Forma u 3 koraka (lični podaci → firma → plan)
   ❌ Forma sa 15 polja na jednoj stranici

3. DEFAULTS
   Postavi pametne default vrednosti
   ✅ "Godišnji plan" pre-selektovan (ušteda + niži churn)
   ❌ Korisnik mora da bira sve od nule

4. RECOGNITION > RECALL
   Pokaži opcije umesto da tražiš da ih se korisnik seti
   ✅ Dropdown sa predefinisanim opcijama
   ❌ Prazno polje gde korisnik mora da zna odgovor

5. VIZUELNA HIJERARHIJA
   Najvažniji elementi su vizuelno najistaknutiji
   ✅ CTA dugme je najveće, najkontrastnije
   ❌ Svi elementi izgledaju isto (flat design overload)
```

### 5.3 Informaciona arhitektura

```
PRINCIPI:
1. Korisnik treba da dođe do bilo koje informacije u max 3 klika
2. Navigacija mora biti predvidljiva i konzistentna
3. Search funkionalnost za sajtove sa 50+ stranica
4. Breadcrumbs za duboke stranice
5. Jasna labeling (koristiti korisnički jezik, ne interni žargon)

TESTIRANJE:
├── Card sorting (korisnici grupišu stranice/feature-e)
├── Tree testing (korisnici pronalaze informacije u navigaciji)
└── First-click testing (gde korisnik prvo klikne za dati task)
```

### 5.4 Loading i Perceived Performance

```
LOADING STRATEGIJE:

SKELETON SCREENS (bolje od spinera):
┌────────────────────────────┐
│ ██████████████             │  ← Placeholder za header
│ ████████████████████████   │  ← Placeholder za tekst
│ ████████████████           │  ← Placeholder za tekst
│ ┌─────┐ ┌─────┐ ┌─────┐  │  ← Placeholder za kartice
│ │░░░░░│ │░░░░░│ │░░░░░│  │
│ │░░░░░│ │░░░░░│ │░░░░░│  │
│ └─────┘ └─────┘ └─────┘  │
└────────────────────────────┘

OPTIMISTIC UI:
Prikaži rezultat ODMAH, pre nego što server potvrdi.
Primer: Klik na "Like" odmah prikazuje srce,
        a tek onda šalje request serveru.

PROGRESS INDICATORS:
Za operacije > 2 sekunde, prikaži napredak:
├── Progress bar (za poznato trajanje)
├── Spinner (za nepoznato trajanje)
└── Status text ("Importujem podatke... 45%")
```

---

## 6. Web Performance Checklist

### Mesečno (15 min)

- [ ] PageSpeed Insights test (desktop + mobile) — cilj: 90+
- [ ] Core Web Vitals check u Search Console
- [ ] Provera broken linkova (Screaming Frog ili ahrefs)
- [ ] Image optimization (nove slike kompresovane?)

### Kvartalno (2 sata)

- [ ] Full Lighthouse audit (Performance, Accessibility, SEO, Best Practices)
- [ ] Mobile UX review (testiraj na realnom uređaju)
- [ ] Third-party script audit (da li su svi potrebni?)
- [ ] Font optimization (FOUT/FOIT check)
- [ ] Error rate review (Sentry/LogRocket)

### Godišnje (pola dana)

- [ ] Full accessibility audit (WCAG AA compliance)
- [ ] Performance budget review (page weight, number of requests)
- [ ] Browser compatibility test (Chrome, Safari, Firefox, Edge)
- [ ] Technology stack review (da li framework treba update?)

---

## Sledeći koraci

> Nastavi sa [Agile marketing i upravljanje projektima →](/27-agile-marketing)
