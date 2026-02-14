---
title: Merenje i analitika
description: Kompletni vodič za GA4, UTM parametre, dashboarding, KPI praćenje i napredne SaaS metrike i formule.
---

## 1. Google Analytics 4 (GA4)

### 1.1 Šta je GA4 i zašto je obavezan

GA4 je besplatan alat za web analitiku od Google-a. Daje ti kompletnu sliku o tome ko posećuje tvoj sajt, odakle dolaze, šta rade i da li konvertuju.

### 1.2 Postavljanje GA4 — korak po korak

**Korak 1: Kreiranje GA4 property-ja**
1. Idi na analytics.google.com
2. Klikni "Admin" (donji levi ugao)
3. Klikni "Create Property"
4. Unesi:
   - Property name: "TvojBrend Website"
   - Timezone: tvoja
   - Currency: EUR
5. Klikni "Next", popuni informacije o biznisu
6. Klikni "Create"

**Korak 2: Postavljanje Data Stream-a**
1. Posle kreiranja, izaberi "Web"
2. Unesi URL sajta
3. Imenuj stream
4. Google ti da Measurement ID (G-XXXXXXXXXX)

**Korak 3: Instalacija na sajt**

**Direktna instalacija:**
```html
<!-- Google tag (gtag.js) — ide u <head> na svim stranicama -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Preko GTM-a (preporučeno):**
1. U GTM: kreiraj novi Tag
2. Tag Type: Google Analytics: GA4 Configuration
3. Measurement ID: G-XXXXXXXXXX
4. Trigger: All Pages
5. Objavi kontejner

**Korak 4: Podešavanje konverzija**
1. U GA4: Admin > Events
2. Nađi događaj koji želiš da bude konverzija (npr. sign_up, purchase)
3. Klikni toggle "Mark as conversion"

Ili kreiraj custom event:
1. Admin > Events > Create Event
2. Podesi uslove (npr. page_location contains "/thank-you")
3. Imenuj event
4. Označi kao konverziju

**Korak 5: Povezivanje sa Google Ads**
1. GA4: Admin > Product Links > Google Ads Links
2. Klikni "Link"
3. Izaberi Google Ads nalog
4. Omogući: "Enable Personalized Advertising" i "Auto-tagging"
5. Ovo omogućava uvoz GA4 konverzija u Google Ads

### 1.3 Ključni GA4 izveštaji za SaaS

| Izveštaj | Gde naći | Šta ti govori |
|---------|----------|---------------|
| **Acquisition overview** | Reports > Acquisition > Overview | Odakle dolaze posetioci (organski, plaćeni, direktno, social) |
| **Traffic acquisition** | Reports > Acquisition > Traffic acquisition | Detaljno po izvorima saobraćaja |
| **User acquisition** | Reports > Acquisition > User acquisition | Kako su se NOVI korisnici prvi put pojavili |
| **Engagement overview** | Reports > Engagement > Overview | Koliko su angažovani (vreme na sajtu, stranice po sesiji) |
| **Pages and screens** | Reports > Engagement > Pages and screens | Koje stranice su najpopularnije |
| **Conversions** | Reports > Engagement > Conversions | Koliko konverzija po tipu i izvoru |
| **Retention** | Reports > Retention | Da li se korisnici vraćaju |
| **User attributes** | Reports > User > User attributes | Demografija posetilaca |
| **Tech** | Reports > User > Tech | Uređaji, browseri, rezolucije |

### 1.4 Custom Reports (Explorations)

GA4 Explorations ti omogućava da kreiraš custom izveštaje.

**Koristan izveštaj: Funnel Exploration**
1. Explore > Create new exploration > Funnel exploration
2. Definiši korake funnel-a:
   - Korak 1: session_start (posetio sajt)
   - Korak 2: page_view (stranica /pricing)
   - Korak 3: page_view (stranica /signup)
   - Korak 4: sign_up (registracija)
3. Vidi gde gubite korisnike u funnelu

**Koristan izveštaj: Path Exploration**
1. Explore > Path exploration
2. Vidi koji put korisnici prolaze na sajtu pre konverzije
3. Identifikuj najčešći put do konverzije

---

## 2. UTM parametri — praćenje izvora saobraćaja

### 2.1 Šta su UTM parametri

UTM (Urchin Tracking Module) su tagovi koje dodaješ na URL-ove u oglasima da bi GA4 znao odakle tačno dolazi saobraćaj.

### 2.2 Struktura UTM-ova

```
https://tvoj-sajt.com/trial?utm_source=google&utm_medium=cpc&utm_campaign=crm-search-q1&utm_content=oglas-v1&utm_term=crm+softver
```

| Parametar | Šta označava | Obavezan? | Primeri |
|-----------|-------------|-----------|---------|
| **utm_source** | Platforma/izvor | Da | google, facebook, instagram, linkedin, email |
| **utm_medium** | Tip kanala | Da | cpc, social, email, organic, referral |
| **utm_campaign** | Naziv kampanje | Da | crm-search-q1, trial-promo-feb, retargeting-pricing |
| **utm_content** | Varijanta oglasa | Ne | video-v1, image-v2, cta-red, cta-blue |
| **utm_term** | Ključna reč | Ne | crm+softver, automatizacija+prodaje |

### 2.3 Konvencija imenovanja — budi konzistentan!

Definiši konvenciju i drži je se uvek:

```
utm_source:   naziv platforme malim slovima
              google, facebook, instagram, linkedin, email, twitter

utm_medium:   tip kanala
              cpc (plaćeni klikovi), social (organski social), email,
              display, retargeting, referral

utm_campaign: struktura: [proizvod]-[tip]-[period/detalj]
              crm-search-q1-2026, crm-retargeting-pricing,
              trial-promo-feb-2026

utm_content:  varijanta
              video-ugc-v1, image-screenshot-v2, text-benefit-focus

utm_term:     ključna reč (samo za search)
              crm+za+mali+biznis
```

### 2.4 UTM Builder

Koristi Google-ov UTM builder da ne praviš greške:

URL: ga-dev-tools.google/campaign-url-builder/

Ili napravi spreadsheet sa svim linkovima:

| Kampanja | URL sa UTM-ovima |
|---------|-----------------|
| Google Search - CRM | https://tvoj-sajt.com/trial?utm_source=google&utm_medium=cpc&utm_campaign=crm-search |
| Facebook - Video Ad v1 | https://tvoj-sajt.com/trial?utm_source=facebook&utm_medium=cpc&utm_campaign=crm-awareness&utm_content=video-v1 |
| Email - Onboarding Day 1 | https://tvoj-sajt.com/features?utm_source=email&utm_medium=email&utm_campaign=onboarding-day1 |

### 2.5 Napomena za Google Ads

Google Ads automatski dodaje `gclid` parametar (auto-tagging). Ovo radi automatski ako si povezao GA4 sa Google Ads-om. UTM-ovi su opcioni za Google Ads, ali korisni ako želiš dodatnu kontrolu ili koristiš i treće alate.

Za Meta Ads, **UTM-ovi su OBAVEZNI** jer Meta nema auto-tagging integraciju sa GA4.

---

## 3. Dashboard i KPI praćenje

### 3.1 Nedeljni dashboard

Napravi spreadsheet ili koristi alat (Google Looker Studio, Databox) sa ovim metrikama:

**Ukupne metrike:**

| Metrika | Ove nedelje | Prošla nedelja | Promena | Cilj |
|---------|-------------|---------------|---------|------|
| Ukupan saobraćaj | | | | |
| Ukupne konverzije (trial signups) | | | | |
| Ukupna potrošnja na oglase | | | | |
| Blended CAC | | | | |
| Trial-to-Paid rate | | | | |
| Novi plaćeni korisnici | | | | |
| MRR | | | | |

**Po kanalu:**

| Kanal | Potrošnja | Klikovi | CTR | Konverzije | CPA | ROAS |
|-------|----------|---------|-----|-----------|-----|------|
| Google Search | | | | | | |
| Google Display | | | | | | |
| Meta Ads | | | | | | |
| Organski (SEO) | N/A | | N/A | | N/A | |
| Email | N/A | | | | N/A | |

**SEO metrike:**

| Metrika | Ove nedelje | Prošla nedelja | Promena |
|---------|-------------|---------------|---------|
| Organski klikovi (GSC) | | | |
| Prosečna pozicija | | | |
| Broj indeksiranih stranica | | | |
| Novi backlink-ovi | | | |
| Top 10 rankinga | | | |

### 3.2 Mesečni izveštaj — dodatne metrike

| Metrika | Vrednost | Trend | Napomena |
|---------|---------|-------|---------|
| LTV | | | |
| LTV:CAC ratio | | | |
| Payback period | | | |
| Churn rate | | | |
| Activation rate | | | |
| NPS (Net Promoter Score) | | | |
| Organic traffic growth (MoM%) | | | |

### 3.3 Alati za dashboarding

| Alat | Cena | Prednosti |
|------|------|-----------|
| Google Looker Studio (ex Data Studio) | Besplatan | Povezivanje sa Google alatima, vizuelizacije |
| Google Sheets | Besplatan | Jednostavno, fleksibilno |
| Databox | Freemium | Lepi dashboards, automatski podaci |
| Geckoboard | od 39 USD/mes | Real-time TV dashboards |
| Klipfolio | od 49 USD/mes | Detaljni marketing dashboards |

---

## 4. Napredne metrike i formule

### 4.1 Formule za SaaS

**Customer Acquisition Cost (CAC):**
```
CAC = Ukupna potrošnja na marketing i prodaju / Broj novih plaćenih korisnika

Primer:
Marketing potrošnja: 3000 EUR
Sales tim plata (proporcionalna): 2000 EUR
Novih korisnika: 50
CAC = 5000 / 50 = 100 EUR
```

**Lifetime Value (LTV):**
```
LTV = ARPU × Gross Margin % × (1 / Monthly Churn Rate)

Primer:
ARPU = 30 EUR/mesec
Gross Margin = 80%
Monthly Churn = 5%

LTV = 30 × 0.80 × (1 / 0.05) = 30 × 0.80 × 20 = 480 EUR
```

**Quick LTV formula:**
```
Quick LTV = ARPU × Average Customer Lifespan (u mesecima)

Primer:
ARPU = 30 EUR
Prosečan korisnik ostaje 14 meseci
Quick LTV = 30 × 14 = 420 EUR
```

**LTV:CAC Ratio:**
```
LTV:CAC = LTV / CAC

Primer: 480 / 100 = 4.8:1 ✅ (cilj minimum 3:1)
```

**Payback Period:**
```
Payback Period = CAC / (ARPU × Gross Margin %)

Primer: 100 / (30 × 0.80) = 100 / 24 = 4.17 meseci ✅ (cilj < 12)
```

**ROAS:**
```
ROAS = Prihod od kampanje / Potrošnja na kampanju

Primer: 5000 EUR prihoda / 1000 EUR potrošnje = 5x ROAS
```

**MER (Marketing Efficiency Ratio):**
```
MER = Ukupan prihod / Ukupna marketing potrošnja

Primer: 15000 EUR prihoda / 5000 EUR potrošnje = 3.0 MER
```

**Trial-to-Paid Rate:**
```
Trial-to-Paid = Plaćeni korisnici / Trial korisnici × 100

Primer: 30 / 200 × 100 = 15%
```

**Activation Rate:**
```
Activation Rate = Korisnici koji su uradili ključnu akciju / Ukupno registrovanih × 100

Primer: 120 / 200 × 100 = 60%
```

**Net Revenue Retention (NRR):**
```
NRR = (Početni MRR + Expansion - Contraction - Churn) / Početni MRR × 100

Primer:
Početni MRR: 10000 EUR
Expansion (upsell): 1500 EUR
Contraction (downgrade): 300 EUR
Churn: 500 EUR
NRR = (10000 + 1500 - 300 - 500) / 10000 × 100 = 107% ✅ (cilj > 100%)
```

### 4.2 Benchmarking — šta su normalni rezultati za SaaS

| Metrika | Loše | Prosečno | Dobro | Odlično |
|---------|------|----------|-------|---------|
| Google Search CTR | < 2% | 3-5% | 5-8% | > 8% |
| Google Search CPC | > 10 EUR | 3-7 EUR | 1-3 EUR | < 1 EUR |
| Meta Ads CTR | < 0.5% | 0.8-1.5% | 1.5-3% | > 3% |
| Meta Ads CPM | > 30 EUR | 15-25 EUR | 8-15 EUR | < 8 EUR |
| Landing Page CVR | < 2% | 3-5% | 5-10% | > 10% |
| Trial-to-Paid | < 5% | 10-15% | 15-25% | > 25% |
| Monthly Churn | > 10% | 5-8% | 3-5% | < 3% |
| Email Open Rate | < 15% | 20-25% | 25-35% | > 35% |
| Email Click Rate | < 1% | 2-3% | 3-5% | > 5% |
| LTV:CAC | < 2:1 | 3:1 | 4-5:1 | > 5:1 |
| Payback Period | > 18 mes. | 12-18 mes. | 6-12 mes. | < 6 mes. |
| NRR | < 90% | 95-100% | 100-110% | > 110% |
| Activation Rate | < 20% | 30-40% | 40-60% | > 60% |

---

## Sledeći koraci

> [10 - Legal i compliance](/10-legal-compliance) — pravila platformi, GDPR, Consent Mode
