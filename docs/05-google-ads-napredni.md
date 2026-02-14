---
title: Google Ads — Napredne strategije
description: SKAG pristup, napredne bidding strategije, remarketing kampanje, Google Ads Scripts automatizacija, competitor kampanje, Performance Max i YouTube Ads za SaaS.
---

## 1. SKAG — Single Keyword Ad Groups (precizniji pristup)

### 1.1 Šta je SKAG

SKAG je strategija gde svaka Ad grupa sadrži jednu temu sa 2-3 varijacije match type-ova. Cilj: maksimalna relevantnost između ključne reči i oglasa.

### 1.2 Struktura

```
Kampanja: CRM Software
├── AG: crm za mali biznis
│   ├── "crm za mali biznis"        (Phrase Match)
│   ├── [crm za mali biznis]        (Exact Match)
│   └── Oglas: naslov sadrži "CRM za mali biznis"
│
├── AG: upravljanje kontaktima softver
│   ├── "upravljanje kontaktima softver"
│   ├── [upravljanje kontaktima softver]
│   └── Oglas: naslov sadrži "Softver za upravljanje kontaktima"
│
├── AG: automatizacija prodaje
│   ├── "automatizacija prodaje"
│   ├── [automatizacija prodaje]
│   └── Oglas: naslov sadrži "Automatizacija prodaje"
```

### 1.3 Prednosti i mane

| Prednosti | Mane |
|-----------|------|
| Maksimalna relevantnost oglas ↔ ključna reč | Više posla za kreiranje i održavanje |
| Viši Quality Score | Može biti previše granularno za mali budget |
| Niži CPC | Teže za skaliranje |
| Bolji CTR | Google favorizuje veće ad grupe sa više podataka |
| Preciznija kontrola | Manje podataka po ad grupi za optimizaciju |

**Preporuka:** Koristi SKAG pristup za tvoje najvažnije (top 10-20) ključne reči. Za ostale, grupiši po temama (5-10 srodnih KW po ad grupi).

---

## 2. Bidding strategije — detaljno

### 2.1 Pregled svih strategija

| Strategija | Kako radi | Minimum konverzija | Kada koristiti |
|-----------|----------|-------------------|---------------|
| **Manual CPC** | Ti postavljaš cenu za svaku ključnu reč | 0 | Tek počinješ, učiš platformu |
| **Enhanced CPC (eCPC)** | Ti postavljaš bid, Google prilagođava ±30% na osnovu verovatnoće konverzije | 5+ mesečno | Prelaz sa manual-a |
| **Maximize Clicks** | Google maksimizira klikove u okviru budgeta | 0 | Tek počinješ i nemaš konverzije |
| **Maximize Conversions** | Google maksimizira broj konverzija u okviru budgeta | 15+ mesečno | Imaš dovoljno konverzija |
| **Target CPA** | Google optimizuje za ciljanu cenu po konverziji | 30+ mesečno | Znaš koliko možeš platiti po konverziji |
| **Maximize Conversion Value** | Google maksimizira ukupnu vrednost konverzija | 15+ mesečno | Imaš različite vrednosti konverzija |
| **Target ROAS** | Google optimizuje za ciljani povrat na investiciju | 50+ mesečno | Imaš jasne vrednosti konverzija |

### 2.2 Pravilo prelaska između strategija

```
FAZA 1: Učenje (0-15 konverzija mesečno)
│  → Manual CPC ili Maximize Clicks
│  → Cilj: prikupi podatke o tome šta konvertuje
│
FAZA 2: Optimizacija (15-30 konverzija mesečno)
│  → Maximize Conversions
│  → Google ima dovoljno podataka za osnovnu optimizaciju
│
FAZA 3: Kontrola (30-50 konverzija mesečno)
│  → Target CPA
│  → Postavi target 10-20% iznad prosečnog CPA iz prethodnog perioda
│  → Postepeno snižavaj target dok ne nađeš sweet spot
│
FAZA 4: Skaliranje (50+ konverzija mesečno)
│  → Target ROAS (ako imaš vrednosti konverzija)
│  → Ili nastavi sa Target CPA i povećavaj budget
```

### 2.3 Saveti za Target CPA

- **Početni Target CPA:** Postavi na 10-20% iznad prosečnog CPA iz poslednjih 30 dana
- **Spuštanje:** Smanjuj po 5-10% svake 2 nedelje
- **Ako nema dovoljno konverzija:** Povećaj Target CPA ili se vrati na Maximize Conversions
- **Learning period:** Posle svake promene, Google ulazi u "learning" period od 7-14 dana — ne menjaj ništa u tom periodu
- **Budget:** Dnevni budget treba da bude minimum 5-10x Target CPA

### 2.4 Portfolio Bidding

Možeš grupišeš više kampanja pod jednu bidding strategiju da bi Google imao više podataka za optimizaciju.

1. Tools > Shared Library > Bid Strategies
2. Kreiraj Portfolio Strategy (npr. Target CPA = 50 EUR)
3. Primeni na 2-3 kampanje sa istim ciljem

---

## 3. Remarketing kampanje na Google Ads

### 3.1 Display Remarketing

Prikaži banere ljudima koji su već posetili tvoj sajt ali nisu konvertovali.

**Korak po korak:**

1. **Kreiraj remarketing listu:**
   - Google Ads > Tools > Audience Manager > Create Audience
   - Segment: Website visitors
   - Pravilo: Posetili sajt u poslednjih 30 dana
   - Izuzmi: Ljude koji su već konvertovali (posetili thank-you stranicu)

2. **Kreiraj Display kampanju:**
   - Nova kampanja > Display
   - Cilj: Sales ili Leads
   - Budget: 5-10 EUR dnevno
   - Targeting: tvoja remarketing lista (pod "Audiences")

3. **Kreiraj Responsive Display Ad:**
   - Upload-uj 3-5 slika (horizontalne 1200x628 + kvadratne 1200x1200)
   - Napiši 5 naslova (30 karaktera)
   - Napiši 5 opisa (90 karaktera)
   - Dodaj logo
   - Final URL: landing stranica
   - Google automatski kombinuje i prilagođava formate

4. **Segmentiraj publike za različite poruke:**

| Segment | Trajanje | Poruka |
|---------|----------|--------|
| Posetili homepage | 30 dana | Generalna poruka o proizvodu |
| Posetili pricing | 14 dana | Ponuda sa popustom ili bonus feature |
| Posetili blog | 60 dana | Edukativni sadržaj + trial |
| Započeli trial, nisu aktivirali | 7 dana | Onboarding pomoć, video tutorijal |
| Trial istekao, nisu platili | 30 dana | Popust na prvu pretplatu |

### 3.2 RLSA (Remarketing Lists for Search Ads)

Prikaži drugačije Search oglase ili ponude ljudima koji su već posetili tvoj sajt.

**Dva pristupa:**

**Pristup A: Observation (preporučen)**
- Dodaj remarketing publiku na Search kampanju
- Postavi na "Observation" (ne "Targeting")
- Povećaj bid za 20-50% za ljude koji su već posetili sajt
- Korisnici iz remarketing liste vide isti oglas ali ti plaćaš više da budeš na boljoj poziciji

**Pristup B: Targeting**
- Kreiraj posebnu kampanju SAMO za remarketing publike
- Koristi šire ključne reči (Broad Match) jer su ovi korisnici već pokazali interes
- Piši agresivnije oglase sa jačim ponudama

### 3.3 YouTube Remarketing

Prikaži video oglase ljudima koji su posetili tvoj sajt.

- Kreiraj YouTube kampanju sa ciljem "Sales" ili "Leads"
- Koristi In-Stream Ads (skippable — korisnik može preskočiti posle 5 sekundi)
- Targetiraj remarketing listu
- Video treba da bude 15-30 sekundi sa jasnim CTA

---

## 4. Google Ads Scripts — Automatizacija

Google Ads Scripts su JavaScript kodovi koji automatizuju rutinske zadatke.

### 4.1 Gde dodati scripts

Google Ads > Tools > Bulk Actions > Scripts > New Script

### 4.2 Korisne skripte za SaaS

**Skripta 1: Pauziraj ključne reči sa visokim troškom i nula konverzija**

```javascript
function main() {
  var COST_THRESHOLD = 50; // EUR - prilagodi
  var DATE_RANGE = 'LAST_30_DAYS';

  var keywordIterator = AdsApp.keywords()
    .withCondition('Status = ENABLED')
    .withCondition('Conversions < 1')
    .withCondition('Cost > ' + COST_THRESHOLD)
    .forDateRange(DATE_RANGE)
    .get();

  while (keywordIterator.hasNext()) {
    var keyword = keywordIterator.next();
    keyword.pause();
    Logger.log('Paused: ' + keyword.getText() +
               ' | Cost: ' + keyword.getStatsFor(DATE_RANGE).getCost());
  }
}
```

**Skripta 2: Dnevni izveštaj na email**

```javascript
function main() {
  var EMAIL = 'tvoj@email.com';
  var DATE_RANGE = 'YESTERDAY';

  var report = AdsApp.report(
    'SELECT CampaignName, Impressions, Clicks, Cost, Conversions, CostPerConversion ' +
    'FROM CAMPAIGN_PERFORMANCE_REPORT ' +
    'WHERE CampaignStatus = ENABLED ' +
    'DURING ' + DATE_RANGE);

  var rows = report.rows();
  var html = '<table border="1"><tr><th>Campaign</th><th>Clicks</th><th>Cost</th><th>Conversions</th><th>CPA</th></tr>';

  while (rows.hasNext()) {
    var row = rows.next();
    html += '<tr>';
    html += '<td>' + row['CampaignName'] + '</td>';
    html += '<td>' + row['Clicks'] + '</td>';
    html += '<td>' + row['Cost'] + '</td>';
    html += '<td>' + row['Conversions'] + '</td>';
    html += '<td>' + row['CostPerConversion'] + '</td>';
    html += '</tr>';
  }
  html += '</table>';

  MailApp.sendEmail(EMAIL, 'Google Ads Daily Report', '', {htmlBody: html});
}
```

**Skripta 3: Alert za nagle promene u performansama**

```javascript
function main() {
  var EMAIL = 'tvoj@email.com';
  var CPA_ALERT_THRESHOLD = 100; // EUR

  var campaigns = AdsApp.campaigns()
    .withCondition('Status = ENABLED')
    .forDateRange('YESTERDAY')
    .get();

  while (campaigns.hasNext()) {
    var campaign = campaigns.next();
    var stats = campaign.getStatsFor('YESTERDAY');

    if (stats.getConversions() > 0) {
      var cpa = stats.getCost() / stats.getConversions();
      if (cpa > CPA_ALERT_THRESHOLD) {
        MailApp.sendEmail(EMAIL,
          'CPA Alert: ' + campaign.getName(),
          'CPA yesterday was ' + cpa.toFixed(2) + ' EUR (threshold: ' + CPA_ALERT_THRESHOLD + ' EUR)');
      }
    }
  }
}
```

### 4.3 Postavljanje automatskog pokretanja

1. Posle kreiranja skripte, klikni "Preview" da testiraš
2. Klikni "Run" za jednoratno izvršavanje
3. Za automatsko pokretanje: klikni "Frequency" i podesi raspored
   - Dnevni izveštaj: Daily at 8:00 AM
   - Pauziranje: Weekly on Monday
   - Alerti: Daily

---

## 5. Competitor kampanje

### 5.1 Strategija

Ciljanje brendiranih ključnih reči konkurencije je legalno i efikasno za SaaS.

**Pravila:**
- Smeš da ciljaš brend konkurenta kao ključnu reč
- **NE smeš** da koristiš njihov zaštićeni brend u tekstu oglasa
- Landing stranica treba da bude stranica poređenja (TvojProizvod vs Konkurent)

### 5.2 Struktura kampanje

```
Kampanja: Competitor Targeting
├── AG: Salesforce alternativa
│   ├── KW: "salesforce alternativa"
│   ├── KW: "zamena za salesforce"
│   ├── KW: [salesforce alternative]
│   └── Oglas:
│       Headline: Tražite bolju alternativu?
│       Headline: 50% jeftinije, iste funkcije
│       Headline: Prebacite se za 30 minuta
│       Desc: Sve funkcije koje vam trebaju, bez komplikovane implementacije.
│       URL: /salesforce-alternativa
│
├── AG: HubSpot alternativa
│   ├── KW: "hubspot alternativa"
│   ├── KW: "hubspot alternative"
│   └── Oglas prilagođen za HubSpot korisnike
│       URL: /hubspot-alternativa
```

### 5.3 Landing stranica za competitor kampanje

Napravi posebnu landing stranicu za svaku konkurentsku kampanju:

```
Struktura stranice "/salesforce-alternativa":

H1: TvojBrend vs Salesforce — Poređenje

Tabela poređenja:
| Feature          | TvojBrend | Salesforce |
| Cena            | 29 EUR    | 150+ EUR   |
| Setup vreme     | 5 min     | Nedelje    |
| Kompleksnost    | Jednostavno| Kompleksno|
| Podrška         | 24/7      | Samo enterprise|

Zašto se firme prebacuju na nas:
- Testimonijal korisnika koji je prešao sa Salesforce-a
- Specifični benefiti

CTA: Probajte besplatno i vidite razliku
```

---

## 6. Performance Max (PMax) kampanje

### 6.1 Šta je Performance Max

PMax je Google-ov AI-driven tip kampanje koji automatski prikazuje oglase na SVIM Google kanalima: Search, Display, YouTube, Gmail, Discover, Maps.

### 6.2 Kada koristiti za SaaS

- Imaš **50+ konverzija mesečno** (idealno 100+)
- Već imaš optimizovane Search kampanje koje rade
- Želiš da proširis doseg bez ručnog upravljanja svakim kanalom
- Imaš dovoljno kreativnih materijala (slike, video)

### 6.3 Kako podesiti

1. **Nova kampanja > Sales/Leads > Performance Max**
2. **Budget i bidding:**
   - Postavi dnevni budget (minimum 50 EUR za SaaS)
   - Koristi Target CPA (preporučeno) ili Maximize Conversions
3. **Kreiraj Asset Group:**

| Asset tip | Minimum | Preporučeno |
|-----------|---------|-------------|
| Horizontalne slike (1.91:1) | 3 | 5+ |
| Kvadratne slike (1:1) | 3 | 5+ |
| Portretne slike (4:5) | 1 | 3+ |
| Logo (1:1) | 1 | 2 |
| Logo (4:1) | 1 | 1 |
| Kratki naslovi (30 char) | 5 | 10+ |
| Dugi naslovi (90 char) | 5 | 5+ |
| Opisi (90 char) | 2 | 4+ |
| Video (YouTube) | 0 (Google pravi auto) | 1+ |
| Final URL | 1 | 1 |
| Business name | 1 | 1 |
| CTA | 1 | 1 |

4. **Audience Signals** (pomaži Google-u da brže nauči):
   - Custom Segments: unesi ključne reči tvoje ciljne grupe
   - Your Data: remarketing liste, customer match liste
   - Interests & Demographics: relevantna interesovanja

5. **URL Expansion:**
   - ON: Google može slati saobraćaj na bilo koju stranicu tvog sajta
   - OFF: Google šalje samo na Final URL koji si odredio
   - Preporuka za početak: OFF (više kontrole)

### 6.4 Praćenje i optimizacija

**Problem sa PMax-om:** Ograničena vidljivost gde se oglasi prikazuju i za šta.

**Rešenja:**
- Insights tab: PMax > Insights — vidi top search termove, publike, kanale
- Asset Performance: vidi koji kreativni materijali rade (Low/Good/Best)
- Zameni "Low" performanse asete novim varijantama
- Prati da li Search kampanje gube performanse (PMax može da "krade" saobraćaj)

### 6.5 PMax + Search — kako ih kombinovati

```
Strategija:
1. Search kampanja za brand ključne reči (zaštiti brend)
2. Search kampanja za top non-brand ključne reči (kontrola)
3. PMax za sve ostalo (automatska ekspanzija)

Pravilo: Search kampanje imaju prioritet nad PMax-om za exact match
ključne reči. Ali za broad match, PMax može "preuzeti" prikazivanja.
```

---

## 7. YouTube Ads za SaaS

### 7.1 Formati

| Format | Trajanje | Plaćanje | Kada koristiti |
|--------|----------|----------|---------------|
| **Skippable In-Stream** | Bilo koje, preporučeno 15-60s | Plaćaš kad korisnik gleda 30s+ ili klikne | Brand awareness + retargeting |
| **Non-Skippable In-Stream** | Max 15 sekundi | Plaćaš per impression (CPM) | Kratke poruke, retargeting |
| **In-Feed (Discovery)** | Bilo koje | Plaćaš po kliku | Edukativni sadržaj |
| **Bumper** | Max 6 sekundi | CPM | Brand awareness, retargeting |
| **Shorts** | Max 60 sekundi, vertikalni | CPM ili CPV | Mlađa publika, awareness |

### 7.2 Video ad struktura za SaaS

```
SKIPPABLE IN-STREAM (30 sekundi):

0-5s:   HOOK — zaustavi korisnika PRE nego što klikne "Skip"
        "Gubite 10 sati nedeljno na manuelne izveštaje?"

5-15s:  PROBLEM → REŠENJE
        "Sa [TvojProizvod], ceo proces je automatizovan."
        Screen recording proizvoda u akciji

15-25s: SOCIJALNI DOKAZ
        "500+ firmi već koristi..."
        Testimonijal clip

25-30s: CTA
        "Započnite besplatno na tvojbrand.com"
        End card sa dugmetom
```

---

## 8. Napredna optimizacija — Auction Insights i Competition Analysis

### 8.1 Auction Insights

Vidi ko su tvoji konkurenti u aukciji i kako se ponosiš u odnosu na njih.

Gde naći: Campaigns > Auction Insights (tab)

| Metrika | Šta znači |
|---------|-----------|
| **Impression Share** | Koliki % dostupnih prikazivanja dobijaš |
| **Overlap Rate** | Koliko često se tvoj i konkurentov oglas pojavljuju zajedno |
| **Position Above Rate** | Koliko često je konkurent iznad tebe |
| **Top of Page Rate** | Koliko često si na vrhu stranice |
| **Outranking Share** | Koliko često si iznad konkurenta |

### 8.2 Šta raditi sa ovim podacima

| Situacija | Akcija |
|-----------|--------|
| Impression Share < 50% | Povećaj budget ili bid |
| Konkurent uvek iznad tebe | Poboljšaj Quality Score ili povećaj bid |
| Previše konkurenata | Ciljaj duže, specifičnije ključne reči |
| Impression Share > 90% | Možeš smanjiti bid i uštedeti |

---

## Sledeći koraci

-> [06 - Meta Ads osnove](/06-meta-ads-osnove) — kako podesiti i pokrenuti Facebook/Instagram oglase
