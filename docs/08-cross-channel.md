---
title: Cross-Channel strategija i atribucija
description: Multi-touch atribucija, full-funnel strategija, post-click optimizacija i cross-channel koordinacija za SaaS oglasavanje.
---

## 1. Multi-touch atribucija

### 1.1 Zašto je atribucija bitna

Korisnik retko konvertuje posle prvog kontakta sa tvojim brendom. Tipičan SaaS customer journey izgleda ovako:

```
Dan 1:  Vidi Facebook oglas (svest)                    ← Meta kaže: "JA sam doneo korisnika"
Dan 3:  Google-uje problem, nađe tvoj blog post (SEO)  ← GA4 kaže: "Organski saobraćaj"
Dan 5:  Vidi retargeting oglas na Instagramu            ← Meta opet kaže: "JA"
Dan 7:  Google-uje ime tvog proizvoda                   ← Google Ads kaže: "JA sam doneo korisnika"
Dan 7:  Registruje se za trial
Dan 14: Postaje plaćeni korisnik
```

**Problem:** Svaki kanal pripisuje sebi zasluge za konverziju. Stvarnost je da su svi doprineli.

### 1.2 Modeli atribucije

| Model | Kako radi | Primer (4 kontakta pre konverzije) |
|-------|----------|-----------------------------------|
| **Last Click** | Poslednji kanal pre konverzije dobija 100% zasluge | FB: 0%, SEO: 0%, IG: 0%, Google: 100% |
| **First Click** | Prvi kanal dobija 100% zasluge | FB: 100%, SEO: 0%, IG: 0%, Google: 0% |
| **Linear** | Svi kanali dele zasluge ravnomerno | FB: 25%, SEO: 25%, IG: 25%, Google: 25% |
| **Time Decay** | Kanali bliži konverziji dobijaju više zasluge | FB: 10%, SEO: 20%, IG: 30%, Google: 40% |
| **Data-Driven** (GA4 default) | AI dodeljuje zasluge na osnovu podataka | Zavisi od ML modela |

### 1.3 Praktičan pristup za SaaS startup

Ne komplikuj previše sa atribucijom na početku. Koristi ove metrike:

**1. Blended CAC (najvažnija metrika)**
```
Blended CAC = Ukupna marketing potrošnja / Ukupan broj novih plaćenih korisnika

Primer:
Google Ads:  1000 EUR
Meta Ads:    800 EUR
SEO/Content: 200 EUR (plaćeni alati + freelancer)
─────────────────────
Ukupno:      2000 EUR

Novih plaćenih korisnika: 25

Blended CAC = 2000 / 25 = 80 EUR
```

**2. Per-channel CPA (iz platforme)**
- Google Ads CPA: koliko Google kaže da košta konverzija (prema Last Click)
- Meta Ads CPA: koliko Meta kaže (prema Meta-inom modelu)
- Ove brojke su korisne za optimizaciju unutar kanala

**3. GA4 Data-Driven atribucija (ukupna slika)**
- GA4 > Advertising > Attribution > Model comparison
- Uporedi Last Click vs Data-Driven
- Vidi koji kanali su podcenjeni/precenjeni

### 1.4 Šta praktično raditi

1. **Prati Blended CAC nedeljno/mesečno** — ovo je tvoja realna metrika
2. **Koristi platform-specifične CPA za optimizaciju kampanja** — unutar Google Ads, optimizuj na osnovu Google podataka
3. **Gledaj GA4 za ukupnu sliku** — razumi kako kanali rade zajedno
4. **Ne gasi kanal samo na osnovu Last Click** — TOFU kanali (Facebook) retko dobijaju zasluge u Last Click modelu, ali su kritični za punjenje funnel-a

---

## 2. Full-Funnel strategija

### 2.1 Mapiranje kanala na funnel

```
TOFU (Svest)                  MOFU (Razmatranje)         BOFU (Odluka)
──────────────────────────────────────────────────────────────────────
Meta Ads: Video oglasi    →   Retargeting: Case studies  → Retargeting: Free trial
YouTube: Edukativni       →   Google Search: Komercij.   → Google Search: Brand
Blog/SEO: Informativno   →   Email nurturing             → Email: Onboarding
Podcast/PR: Awareness     →   Webinari                   → Demo pozivi
LinkedIn: Thought leadership  Comparison content          → Pricing page
```

### 2.2 Kako kanali rade zajedno

**Primer za SaaS CRM:**

```
KORAK 1 (TOFU — Facebook/Instagram):
Video oglas: "5 znakova da vam Excel nije dovoljan za praćenje klijenata"
→ Korisnik gleda 10+ sekundi → dodaje se u remarketing publiku

KORAK 2 (MOFU — Blog/SEO):
Korisnik Google-uje: "kako pratiti klijente efikasno"
→ Nađe tvoj blog post: "Kompletni vodič za upravljanje kontaktima"
→ Čita, provodi 5 minuta na sajtu → dodaje se u remarketing publiku

KORAK 3 (MOFU — Retargeting):
Instagram Story oglas: Case study — "Kako je firma X povećala prodaju za 40%"
→ Korisnik klikne → pročita case study → dodaje se u "hot" remarketing publiku

KORAK 4 (BOFU — Google Search):
Korisnik Google-uje: "TvojBrend cene" ili "TvojBrend vs HubSpot"
→ Klikne na tvoj Google oglas
→ Dođe na pricing ili comparison stranicu
→ Registruje se za trial

KORAK 5 (POST-FUNNEL — Email):
Onboarding email sekvenca
→ 14 dana nurturing
→ Konvertuje u plaćenog korisnika
```

### 2.3 Budget alokacija po fazama funnel-a

| Faza SaaS startupa | TOFU | MOFU | BOFU | Retargeting |
|---------------------|------|------|------|-------------|
| Mesec 1-3 (početak) | 20% | 30% | 40% | 10% |
| Mesec 4-6 (rast) | 25% | 25% | 35% | 15% |
| Mesec 7-12 (skaliranje) | 30% | 20% | 30% | 20% |
| 12+ (zrela faza) | 35% | 20% | 25% | 20% |

Na početku, više budžeta ide na BOFU jer direktno donosi konverzije. Kako rastiš, više investiraš u TOFU jer BOFU publika je ograničena.

---

## 3. Post-Click optimizacija — od klika do pretplate

### 3.1 SaaS konverzijski funnel

Za SaaS sa pretplatničkim modelom, konverzija na oglasu (trial signup) nije kraj puta. Pravi novac je u retenciji.

```
Klik na oglas (100%)
    ↓
Landing stranica (cilj bounce rate: < 40%)
    ↓
Registracija za trial (cilj conversion rate: 5-15%)
    ↓
Aktivacija (korisnik je uradio ključnu akciju u proizvodu)
    (cilj activation rate: 40-60%)
    ↓
Pretplata (cilj trial-to-paid rate: 15-25%)
    ↓
Retencija mesec 2+ (cilj mesečni churn: < 5%)
    ↓
Ekspanzija (upsell na viši plan)
```

**Svaki korak u ovom funnelu je jednako bitan kao sam oglas.** Nema smisla dovoditi hiljade trial korisnika ako ih samo 2% konvertuje u pretplatnike.

### 3.2 Optimizacija svakog koraka

**Landing stranica → Trial signup (5-15%)**

| Problem | Rešenje |
|---------|---------|
| Visok bounce rate | Poboljšaj message match sa oglasom, ubrzi učitavanje |
| Nizak conversion rate | Pojednostavi formu (samo email), pojačaj CTA |
| Korisnici čitaju ali ne konvertuju | Dodaj socijalni dokaz, otkloni strahove |
| Mobilni korisnici ne konvertuju | Testiraj mobilnu verziju zasebno |

**Trial signup → Aktivacija (40-60%)**

Aktivacija = korisnik je uradio **ključnu akciju** koja pokazuje da je shvatio vrednost proizvoda.

Primeri ključnih akcija:
- CRM: Dodao 10+ kontakata
- Project management: Kreirao prvi projekat sa zadacima
- Email marketing: Poslao prvi email
- Analytics: Povezao sajt i video prvi izveštaj

**Trial → Plaćena pretplata (15-25%)**

| Taktika | Kako |
|---------|------|
| Onboarding email sekvenca | Automatizovani emailovi koji vode korisnika kroz proizvod |
| In-app onboarding | Checklist, tooltips, vodič kroz ključne akcije |
| Personalizovani follow-up | Kontaktiraj korisnike koji su aktivni ali nisu konvertovali |
| Urgentnost | "Vaš trial ističe za 3 dana" email |
| Socijalni dokaz | Prikaži kako drugi korisnici koriste proizvod |

### 3.3 Onboarding email sekvenca

| Dan | Email | Cilj | Subject line primer |
|-----|-------|------|-------------------|
| 0 | Welcome | Dobrodošlica + pristup | "Dobrodošli u TvojBrend! Evo kako da počnete" |
| 1 | Quick Start | Prva ključna akcija | "3 koraka da pokrenete [ključnu akciju] za 5 minuta" |
| 3 | Feature highlight | Pokaži najvredniji feature | "Da li ste probali [feature]? Evo zašto ga korisnici obožavaju" |
| 5 | Case study | Socijalni dokaz | "Kako [firma] koristi TvojBrend za [rezultat]" |
| 7 | Check-in | Pitaj da li trebaju pomoć | "Kako ide? Mogu li vam pomoći sa nečim?" |
| 10 | Napredni tip | Pokaži napredni feature | "[Napredni feature] može da vam uštedi 2 sata nedeljno" |
| 12 | Trial ističe uskoro | Urgentnost + ponuda | "Ostalo vam je još 2 dana triala" |
| 14 | Poslednji dan | Jasan CTA za pretplatu | "Vaš trial ističe danas — sačuvajte sve što ste napravili" |
| 17 | Win-back (ako nije konvertovao) | Poslednja šansa | "Šta možemo da uradimo da vas vratimo?" |
| 21 | Finalni pokušaj | Popust ili produžen trial | "Posebna ponuda: 20% popusta na prvu godinu" |

### 3.4 Metrike post-click funnela

| Metrika | Formula | Cilj |
|---------|---------|------|
| Landing page → Signup rate | Signups / LP visits × 100 | 5-15% |
| Signup → Activation rate | Activated / Total signups × 100 | 40-60% |
| Trial-to-Paid rate | Paid / Trial users × 100 | 15-25% |
| Time to activation | Prosečno vreme do ključne akcije | Što kraće, to bolje |
| Activation → Paid rate | Paid / Activated × 100 | 30-50% |

---

## 4. Email marketing kao deo strategije

### 4.1 Email liste za SaaS

| Lista | Ko je u njoj | Šta im šalješ |
|-------|-------------|---------------|
| Newsletter pretplatnici | Ljudi zainteresovani za temu | Edukativni sadržaj, blog postovi |
| Trial korisnici (aktivni) | Korisnici u trial periodu koji koriste proizvod | Onboarding, feature highlights |
| Trial korisnici (neaktivni) | Korisnici u trial periodu koji ne koriste proizvod | Aktivacioni emailovi, pomoć |
| Plaćeni korisnici | Pretplatnici | Product updates, upsell, NPS |
| Churned korisnici | Bivši pretplatnici | Win-back kampanje |
| Demo zahtevi | Tražili demo ali nisu se prijavili | Nurturing, socijalni dokaz |

### 4.2 Integracija emaila sa oglašavanjem

**Email lista → Custom Audience na Meta-i:**
1. Export-uj listu trial korisnika koji nisu konvertovali
2. Upload na Meta kao Custom Audience
3. Kreiraj retargeting kampanju specifično za njih
4. Prikaži im oglas sa popustom ili testimonijalom

**Email lista → Lookalike na Meta-i:**
1. Export-uj listu plaćenih korisnika
2. Upload na Meta
3. Kreiraj Lookalike 1% publiku
4. Najkvalitetniji source za Lookalike

---

## 5. Cross-channel koordinacija

### 5.1 Konzistentnost poruka

Svi kanali treba da komuniciraju konzistentnu poruku, prilagođenu fazi funnel-a:

| Faza | Poruka | Ton |
|------|--------|-----|
| TOFU | "Imate ovaj problem? Postoji bolje rešenje." | Edukativni, empatičan |
| MOFU | "Evo zašto je TvojBrend najbolje rešenje za ovaj problem." | Informativni, autoritativan |
| BOFU | "Probajte besplatno i vidite sami." | Direktan, urgentnan |
| Retargeting | "Još razmatrate? Evo dokaza da radi." | Ubedljiv, socijalni dokaz |

### 5.2 Exclusion strategija između kanala

Izbegni prikazivanje istoj osobi oglasa sa svih kanala istovremeno:

```
Meta Ads TOFU kampanja:
  Exclude: Email pretplatnici (Custom Audience)
  Exclude: Trial korisnici
  Exclude: Plaćeni korisnici

Meta Ads Retargeting kampanja:
  Include: Posetioci sajta
  Exclude: Trial korisnici (oni dobijaju email)
  Exclude: Plaćeni korisnici

Google Ads Brand kampanja:
  Include: Brand ključne reči
  RLSA bid adjustment: +30% za ljude sa remarketing liste
```

---

## Sledeći koraci

> [09 - Merenje i analitika](/09-merenje-analitika) — GA4, UTM-ovi, dashboards, formule
