---
title: Legal i compliance — Pravila, GDPR, Consent Mode
description: Pravila Google Ads i Meta Ads platformi, GDPR regulativa, Consent Mode v2 implementacija i compliance za SaaS oglasavanje.
---

## 1. Pravila platformi

### 1.1 Google Ads politike

Google ima stroga pravila o tome šta smeš da oglašavaš i kako.

**Obavezno:**
- Landing stranica mora imati jasne kontakt informacije
- Mora postojati Privacy Policy na sajtu
- Oglas mora biti istinit — nema lažnih tvrdnji
- Landing stranica mora raditi (bez 404 grešaka)
- Sajt mora koristiti HTTPS

**Zabranjeno:**
- Obmanjujuće izjave ("Zagarantovano 10x rast prodaje")
- Automatsko preuzimanje softvera bez pristanka korisnika
- Cloaking — prikazivanje različitog sadržaja Google-u i korisnicima
- Malware ili maliciozni softver
- Prikupljanje ličnih podataka bez pristanka
- Lažni interaktivni elementi (fake dugmad za klik)

**SaaS-specifična pravila:**
- Ako nudiš besplatan trial, mora biti jasno šta se dešava posle (automatska naplata? prekid?)
- Cene u oglasu moraju biti tačne
- Moraju biti jasni uslovi korišćenja

**Šta se dešava ako prekršiš pravila:**
1. Oglas se odbija (Ad disapproval) — najčešće, možeš ispraviti i ponovo podneti
2. Ograničenje naloga (Account limitation) — privremeno ograničenje funkcionalnosti
3. Suspenzija naloga (Account suspension) — najozbiljnija kazna, teško za oporaviti

### 1.2 Meta Ads politike

**Obavezno:**
- Landing stranica funkcionalna i relevantna za oglas
- Jasna identifikacija oglašivača (ko plaća oglas)
- Privacy Policy na sajtu

**Zabranjeno:**
- Obmanjujuće tvrdnje o rezultatima
- Sadržaj koji implicira lične karakteristike korisnika
  - ❌ "Da li ste preduzetnik koji se bori sa prodajom?"
  - ✅ "Mnogi preduzetnici se bore sa upravljanjem prodajom."
- Lažni interaktivni UI elementi u slikama (fake play dugmad, fake notifikacije)
- Before/after slike za neke kategorije
- Obmanjujuće ponašanje (clickbait)

**Tekst na slikama:**
- Nema formalnog ograničenja na procenat teksta
- Ali Meta favorizuje slike sa manje teksta — bolji doseg
- Pravilo palca: drži tekst na slici ispod 20% površine

**Šta se dešava ako prekršiš pravila:**
1. Oglas se odbija — najčešće
2. Ograničenje naloga
3. Blokiranje Business Manager-a — najozbiljnije

**Kako izbeći probleme:**
- Pročitaj politike pre kreiranja oglasa
- Budi iskren u tvrdnjama
- Koristi "hedge words" umesto apsolutnih tvrdnji ("može pomoći" umesto "garantuje")
- Ako ti oglas bude odbijen, pročitaj razlog i ispravi — ne šalji isti oglas ponovo

---

## 2. GDPR (General Data Protection Regulation)

### 2.1 Šta je GDPR i koga se tiče

GDPR je EU regulativa o zaštiti ličnih podataka. Tiče te se ako:
- Ciljaš korisnike u EU (uključujući oglase)
- Prikupljaš podatke korisnika iz EU (email, IP adresa, kolačići)
- Imaš korisnike iz EU na platformi

**Srbija:** Srbija ima Zakon o zaštiti podataka o ličnosti (usklađen sa GDPR-om). Ako ciljaš i srpsko tržište, slične obaveze važe.

### 2.2 Šta moraš imati na sajtu

**1. Privacy Policy (Politika privatnosti)**

Mora objašnjavati:
- Koje podatke prikupljaš (email, ime, IP adresa, kolačići...)
- Zašto ih prikupljaš (registracija, analitika, marketing...)
- Kako ih koristiš
- Sa kim ih deliš (Google, Facebook, payment procesori...)
- Koliko dugo ih čuvaš
- Prava korisnika (pristup, brisanje, ispravka)
- Kontakt za pitanja o privatnosti

**2. Cookie Policy (Politika kolačića)**

Mora objašnjavati:
- Koje kolačiće koristiš
- Zašto (analitika, oglašavanje, funkcionalni)
- Kako korisnik može upravljati kolačićima

**3. Terms of Service (Uslovi korišćenja)**

Za SaaS obavezno:
- Uslovi pretplate i otkazivanja
- Prava i obaveze korisnika
- Prava i obaveze tebe kao provajdera
- Garancije i ograničenja odgovornosti

### 2.3 Cookie Consent (pristanak na kolačiće)

**Obavezno za EU korisnike:** Prikaži baner za pristanak na kolačiće PRE nego što se bilo koji nebitni kolačić postavi.

**Kategorije kolačića:**

| Kategorija | Primer | Pristanak potreban? |
|-----------|--------|-------------------|
| **Neophodni** | Sesija, login, korpa | Ne (uvek aktivni) |
| **Analitički** | Google Analytics, Hotjar | Da |
| **Marketing** | Meta Pixel, Google Ads tag | Da |
| **Funkcionalni** | Jezik, preferences | Da (ili legitimni interes) |

**Cookie consent baner mora:**
- Biti prikazan pre postavljanja analitičkih/marketing kolačića
- Imati jasnu opciju za odbijanje (ne sme biti sakrivena)
- Omogućiti granularnu kontrolu (korisnik bira kategorije)
- Čuvati zapis o pristanku

**CMP (Consent Management Platform) alati:**

| Alat | Cena | Napomena |
|------|------|---------|
| Cookiebot | Besplatan do 100 stranica | Popularan, lak za setup |
| CookieYes | Freemium | Jednostavan |
| OneTrust | Enterprise | Za veće kompanije |
| Osano | od 99 USD/mes | Dobra integracija |
| Cookie Notice (WP plugin) | Besplatan | Za WordPress sajtove |
| Iubenda | Freemium | Cookie consent + Privacy Policy generator |

---

## 3. Consent Mode v2 — Tehnička implementacija

### 3.1 Šta je Consent Mode

Consent Mode je Google-ov sistem koji prilagođava ponašanje Google tagova (Analytics, Ads) na osnovu korisnikovog pristanka na kolačiće.

**Zašto je bitan:**
- Google zahteva Consent Mode za oglašavanje u EU
- Bez njega, Google Ads konverzije mogu biti netačne
- Pomaže da zadržiš nivo praćenja i kada korisnik odbije kolačiće (kroz modeliranje)

### 3.2 Kako radi

```
SCENARIO 1: Korisnik PRISTAJE na kolačiće
→ Svi tagovi rade normalno
→ Puni tracking (Google Analytics, Ads konverzije, remarketing)

SCENARIO 2: Korisnik ODBIJA kolačiće
→ Tagovi se učitavaju ali NE postavljaju kolačiće
→ Google koristi "consent mode modeling" da proceni konverzije
→ Anonimizovani podaci se i dalje šalju (bez identifikatora)
→ Google modelira ~70-80% konverzija koje bi inače izgubio
```

### 3.3 Implementacija

**Korak 1: Postavi default consent state PRE GTM/gtag koda**

```html
<script>
  // Ovo IDE PRE Google Tag Manager koda ili gtag koda
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Default: sve odbijeno dok korisnik ne pristane
  gtag('consent', 'default', {
    'analytics_storage': 'denied',      // Google Analytics kolačići
    'ad_storage': 'denied',             // Google Ads kolačići
    'ad_user_data': 'denied',           // Slanje korisničkih podataka za ads
    'ad_personalization': 'denied',     // Personalizovani oglasi
    'functionality_storage': 'denied',  // Funkcionalni kolačići
    'personalization_storage': 'denied', // Personalizacija
    'security_storage': 'granted',      // Bezbednosni (uvek granted)
    'wait_for_update': 500              // Čekaj 500ms za CMP odgovor
  });
</script>

<!-- Onda ide GTM kod -->
<script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

**Korak 2: Ažuriraj consent kada korisnik pristane**

Ovo poziva tvoj CMP (Cookie consent alat) kada korisnik klikne "Prihvatam":

```javascript
// Pozovi ovo kada korisnik PRIHVATI kolačiće
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted'
});
```

**Korak 3: Ako korisnik ODBIJE**

Ne radiš ništa — default stanje (denied) ostaje. Google tagovi rade u ograničenom modu.

**Korak 4: U GTM podesi Consent Settings**

1. GTM > Admin > Container Settings > Enable consent overview
2. Za svaki tag podesi koji consent je potreban:
   - Google Analytics tag: zahteva `analytics_storage`
   - Google Ads Conversion tag: zahteva `ad_storage`
   - Meta Pixel: zahteva `ad_storage` (ili custom consent tip)

### 3.4 Integracija sa popularnim CMP alatima

Većina CMP alata ima built-in integraciju sa Google Consent Mode:

**Cookiebot:**
1. Kreiraj Cookiebot nalog
2. Dodaj Cookiebot tag u GTM
3. Cookiebot automatski upravlja consent state-om
4. Podesi mapiranje: Cookiebot kategorije → Google consent tipovi

**Iubenda:**
1. Instaliraj Iubenda Cookie Solution
2. Omogući "Google Consent Mode" u podešavanjima
3. Automatska integracija

---

## 4. Meta Ads compliance

### 4.1 Meta i privatnost

**Aggregated Event Measurement (AEM):**
- Meta ograničava na 8 konverzijskih evenata po domenu za iOS korisnike
- Prioritizuj evente po važnosti (Subscribe > StartTrial > Lead > PageView)

**Kako podesiti:**
1. Events Manager > Aggregated Event Measurement
2. Configure Web Events
3. Izaberi domen
4. Rangiraj do 8 evenata po prioritetu

### 4.2 iOS 14.5+ uticaj

Od iOS 14.5, Apple zahteva da korisnici aktivno pristanu na praćenje (App Tracking Transparency). Ovo utiče na Meta Ads jer:

- Manje podataka za optimizaciju
- Manje precizno targetiranje
- Kašnjenje u izveštavanju (do 72 sata)
- Gubici u praćenju konverzija

**Kako se prilagoditi:**
1. Implementiraj Conversions API (CAPI) — server-side praćenje
2. Verifikuj domen
3. Podesi Aggregated Event Measurement
4. Koristi UTM parametre za praćenje u GA4
5. Fokusiraj se na Broad targeting i Lookalike — Meta algoritam se prilagodio

---

## 5. Ostali pravni aspekti

### 5.1 Zaštitni znakovi u oglasima

- Google Ads: Smeš ciljati tuđi brend kao ključnu reč, ali NE smeš ga koristiti u tekstu oglasa
- Meta Ads: Ne koristi tuđe logotipe ili zaštićene brendove u kreativima
- Ako dobiješ žalbu za zaštitni znak, Google/Meta će te kontaktirati — postupi po uputstvima

### 5.2 Posebne industrije

Ako tvoj SaaS pokriva neke od ovih oblasti, važe dodatna pravila:

| Oblast | Dodatna pravila |
|--------|----------------|
| Zdravstvo | Nema tvrdnji o zdravstvenim rezultatima, HIPAA compliance |
| Finansije | Regulatorna ograničenja, obavezan disclaimer |
| Edukacija | Zabrana obmanjujućih tvrdnji o diplomama/sertifikatima |
| Gambling | Stroga regulativa, age-gating |

### 5.3 Disclaimer i pravna zaštita

Na landing stranici i u oglasima:
- Ako navodiš rezultate korisnika, dodaj disclaimer: "Rezultati mogu varirati"
- Ako navodiš statistike, navedi izvor
- Pricing mora biti jasan i tačan
- Uslovi trial-a moraju biti jasni (automatska naplata? potrebna kartica?)

---

## Sledeći koraci

> [11 - Akcioni plan prvih 30 dana](/11-akcioni-plan)
> [12 - Nedeljni, mesečni i kvartalni checklist](/12-checkliste)
