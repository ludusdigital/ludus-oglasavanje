---
title: Meta Ads — Facebook i Instagram oglašavanje (Osnove)
description: Kompletni vodič za Meta Ads - postavljanje naloga, Meta Pixel, Conversions API, targetiranje publike, kreativni materijali, budžetiranje i retargeting za SaaS.
---

## 1. Razlika u odnosu na Google Ads

| Karakteristika | Google Search Ads | Meta (FB/IG) Ads |
|---------------|-------------------|-----------------|
| **Princip** | Intent-based — hvataš ljude koji aktivno traže | Interruption-based — prekidaš ljude dok skroluju |
| **Kada koristiti** | Korisnik traži rešenje | Korisnik ne zna da mu treba tvoj proizvod |
| **Format** | Tekst (pretežno) | Vizualni (slike, video) |
| **Targeting** | Ključne reči (šta kucaju) | Demografija, interesovanja, ponašanje (ko su) |
| **Najjači za** | Konverzije sa kupovnom namerom | Brand awareness, retargeting, generisanje tražnje |
| **Cena** | Obično viši CPC, niži CPA | Obično niži CPC, može biti viši CPA |

**Za SaaS, Meta Ads su odlični za:**
- Generisanje svesti o proizvodu kod ljudi koji ne znaju da postoji
- Retargeting — ponovo ciljanje posetilaca sajta
- Hvatanje korisnika koji ne znaju da imaju problem koji tvoj proizvod rešava
- Lookalike publika — pronalaženje novih korisnika sličnih tvojim postojećim

---

## 2. Struktura Meta Ads naloga

```
Meta Business Suite ([business.facebook.com](https://business.facebook.com))
│
├── Business Manager
│   ├── Facebook stranica (Page)
│   ├── Instagram nalog
│   ├── Meta Pixel
│   ├── Conversions API
│   └── Ad Account(s) — reklamni nalog(lozi)
│
└── Ads Manager (upravljanje oglasima)
    └── Campaign (Kampanja) — cilj se bira ovde
        └── Ad Set (Set oglasa) — targeting, budget, raspored
            └── Ad (Oglas) — kreativni materijal + tekst
```

**Bitna razlika od Google Ads:**
- Google Ads: Campaign > Ad Group > Ad
- Meta Ads: Campaign > Ad Set > Ad

Na Meta platformi, targeting i budget su na nivou Ad Set-a, dok je cilj na nivou Campaign-a.

---

## 3. Postavljanje — korak po korak

### Korak 1: Kreiraj Business Manager

1. Idi na **[business.facebook.com](https://business.facebook.com)**
2. Klikni **"Create Account"**
3. Unesi:
   - Naziv biznisa
   - Tvoje ime
   - Email adresa (poslovni email)
4. Klikni "Submit"
5. Potvrdi email

### Korak 2: Dodaj Facebook stranicu

1. U Business Manager: **Business Settings > Accounts > Pages**
2. Klikni **"Add"**
3. Izaberi: "Add a Page" (ako već imaš stranicu) ili "Create a New Page"
4. Poveži svoju Facebook stranicu

### Korak 3: Dodaj Instagram nalog

1. Business Settings > **Accounts > Instagram Accounts**
2. Klikni **"Add"**
3. Uloguj se sa Instagram kredencijalima
4. Poveži sa Facebook stranicom

### Korak 4: Kreiraj Ad Account (reklamni nalog)

1. Business Settings > **Accounts > Ad Accounts**
2. Klikni **"Add" > "Create a New Ad Account"**
3. Podesi:
   - **Naziv:** npr. "TvojBrend - Main Ad Account"
   - **Valuta:** EUR (ne može se menjati naknadno!)
   - **Vremenska zona:** tvoja (ne može se menjati naknadno!)
4. Dodaj način plaćanja: Ad Account > Payment Settings > Add Payment Method

### Korak 5: Instaliraj Meta Pixel (KRITIČNO!)

Meta Pixel je JavaScript kod koji pratiš na svom sajtu. Bez njega, Meta NE MOŽE da:
- Prati konverzije (ko se registrovao, ko je kupio)
- Optimizuje kampanje za konverzije
- Kreira remarketing publike
- Pravi Lookalike publike

**Proces instalacije:**

1. U Business Manager: **Events Manager > Connect Data Sources > Web > Meta Pixel**
2. Imenuj pixel (npr. "TvojBrend Pixel")
3. Unesi URL sajta
4. Izaberi metod instalacije:

**Opcija A: Manuelna instalacija (kopiraš kod na sajt)**

Base Pixel Code — ide u `<head>` sekciju SVIH stranica:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TVOJ_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=TVOJ_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

**Opcija B: Preko Google Tag Manager-a (preporučeno)**

1. U GTM: kreiraj novi Tag
2. Tag Type: Custom HTML
3. Zalepi pixel kod
4. Trigger: All Pages
5. Sačuvaj i objavi

### Korak 6: Podesi standardne događaje (Events)

Događaji govore Meta-i šta se dešava na sajtu. Za SaaS, najvažniji su:

```javascript
// Na stranici registracije za trial (posle uspešne registracije):
fbq('track', 'StartTrial', {
  value: 0,
  currency: 'EUR'
});

// Na stranici kupovine pretplate:
fbq('track', 'Subscribe', {
  value: 29.99,
  currency: 'EUR',
  predicted_ltv: 480.00
});

// Na stranici registracije (generalno):
fbq('track', 'CompleteRegistration');

// Na stranici kontakt/demo:
fbq('track', 'Lead');

// Na stranici sa cenama (pricing page):
fbq('track', 'ViewContent', {
  content_name: 'Pricing Page'
});

// Kada korisnik klikne "Započni trial" dugme:
fbq('track', 'InitiateCheckout');
```

**Gde staviti:**
- Base pixel (PageView): na sve stranice
- StartTrial: samo na thank-you stranicu posle registracije
- Subscribe: samo na stranicu posle uspešne kupovine
- Lead: na thank-you stranicu posle demo zahteva

**Preko GTM-a:**
1. Kreiraj Custom HTML tag za svaki event
2. Postavi trigger specifičan za tu stranicu (npr. Page URL contains "/thank-you")
3. Testiraj u Preview modu

### Korak 7: Testiraj Pixel

1. Events Manager > **Test Events**
2. Unesi URL sajta i klikni "Open Website"
3. Prođi kroz tok registracije
4. Proveri da li se events pojavljuju u Test Events tab-u
5. Alternativno: instaliraj **Meta Pixel Helper** Chrome extension

### Korak 8: Verifikuj domen

1. Business Settings > **Brand Safety > Domains**
2. Klikni "Add" i unesi domen
3. Izaberi metod verifikacije:
   - **DNS TXT zapis** (preporučeno) — dodaj TXT zapis u DNS podešavanja domena
   - **HTML file upload** — upload-uj fajl na root sajta
   - **Meta tag** — dodaj meta tag u `<head>`
4. Klikni "Verify"

### Korak 9: Podesi Conversions API (CAPI) — preporučeno

Browseri sve više blokiraju third-party cookie-je i pixel-e. Conversions API šalje podatke direktno sa servera, zaobilazeći ograničenja browsera.

**Zašto je bitan:**
- Pixel hvata samo 60-80% konverzija (ostale blokira browser)
- CAPI hvata ~95%+ konverzija
- Bolja optimizacija kampanja = niži CPA

**Kako podesiti:**
- Ako koristiš Shopify, WordPress, ili drugi CMS — postoji plugin/integracija
- Za custom sajtove: pozivaj Meta API sa servera posle svake konverzije

```python
# Primer server-side eventa (Python)
from facebook_business.adobjects.serverside.event import Event
from facebook_business.adobjects.serverside.event_request import EventRequest
from facebook_business.adobjects.serverside.user_data import UserData
from facebook_business.adobjects.serverside.custom_data import CustomData

user_data = UserData(
    email='hash_email',  # SHA256 hash
    client_ip_address='korisnik_ip',
    client_user_agent='korisnik_user_agent',
    fbc='fbclid_cookie',
    fbp='fbp_cookie'
)

custom_data = CustomData(
    currency='EUR',
    value=29.99
)

event = Event(
    event_name='Subscribe',
    event_time=int(time.time()),
    user_data=user_data,
    custom_data=custom_data,
    event_source_url='https://tvoj-sajt.com/thank-you',
    action_source='website'
)

request = EventRequest(
    events=[event],
    pixel_id='TVOJ_PIXEL_ID',
    access_token='TVOJ_ACCESS_TOKEN'
)

response = request.execute()
```

---

## 4. Tipovi kampanja na Meta Ads

| Cilj kampanje | Optimizacija za | Kada koristiti za SaaS |
|--------------|----------------|----------------------|
| **Awareness** | Doseg, brand recall | Lansiranje proizvoda, ulazak na novo tržište |
| **Traffic** | Klikove na sajt | Dovođenje ljudi na blog ili content (ne za konverzije!) |
| **Engagement** | Lajkovi, komentari, deljenja | Povećanje interakcije sa objavama |
| **Leads** | Lead forme na Facebooku | Lead gen — korisnik ne napušta Facebook |
| **App Promotion** | Instalacije app-a | Samo ako imaš mobilnu app |
| **Sales** | Konverzije na sajtu | **PRIMARNI CILJ ZA SaaS** — trial signup, purchase |

**Za SaaS startup: koristi "Sales" kampanje sa optimizacijom na konverzije (npr. StartTrial event).**

### Ako nemaš dovoljno konverzija za Sales kampanju

Meta treba minimum 50 konverzija nedeljno po Ad Set-u za optimalnu optimizaciju. Ako nemaš toliko:

1. **Počni sa višim event-om u funnelu** — umesto "Subscribe", optimizuj za "CompleteRegistration" ili "Lead"
2. **Ili koristi Traffic kampanju** sa optimizacijom na landing page views — pa kada skupiš 50+ konverzija, prebaci na Sales

---

## 5. Targetiranje publike

### 5.1 Custom Audiences (prilagođene publike)

Custom Audiences su publike koje kreiraš na osnovu podataka koje već imaš.

**Tip 1: Website Custom Audience (retargeting)**

1. Audiences > Create Audience > Custom Audience > Website
2. Izaberi pixel
3. Definiši pravilo:
   - Svi posetioci sajta (30/60/90 dana)
   - Posetioci specifičnih stranica (npr. pricing stranica)
   - Posetioci koji su proveli X sekundi na sajtu
   - Posetioci koji su pokrenuli event ali nisu konvertovali

**Najkorisnije publike za SaaS retargeting:**

| Publika | Pravilo | Trajanje | Poruka |
|---------|---------|----------|--------|
| Svi posetioci sajta (bez konverzija) | Visited website, EXCLUDES CompleteRegistration | 30 dana | Generalna ponuda za trial |
| Pricing page posetioci | URL contains "/pricing" ili "/cene" | 14 dana | Pojačana ponuda, otkloni sumnje |
| Blog čitaoci | URL contains "/blog" | 60 dana | Edukativni sadržaj → trial |
| Trial korisnici (neplaćeni) | Event = StartTrial, EXCLUDES Subscribe | 30 dana | Onboarding pomoć, popust za pretplatu |
| Napušteni signup | URL contains "/signup", EXCLUDES CompleteRegistration | 7 dana | "Zaboravili ste?" — podsetnik |

**Tip 2: Customer List (email lista)**

1. Audiences > Create Audience > Custom Audience > Customer list
2. Upload-uj CSV fajl sa email adresama korisnika
3. Meta uparuje email-ove sa profilima (match rate obično 40-70%)

**Korisne liste za SaaS:**
- Plaćeni korisnici → za upsell kampanje i Lookalike
- Trial korisnici koji nisu konvertovali → za win-back kampanje
- Newsletter pretplatnici → za trial kampanje
- Korisnici sa najvišim LTV-om → za best Lookalike source

**Tip 3: Engagement Custom Audience**

Ljudi koji su interagovali sa tvojim sadržajem na FB/IG:
- Video viewers (gledali 50%+ videa)
- People who interacted with your page
- People who opened lead form
- Instagram profile visitors

### 5.2 Lookalike Audiences (slične publike)

Meta pronalazi ljude slične tvojim postojećim korisnicima. **Najmoćniji targeting alat za SaaS.**

**Kako kreirati:**

1. Audiences > Create Audience > **Lookalike Audience**
2. Izaberi izvor (Source):
   - Customer List plaćenih korisnika (NAJBOLJI izvor)
   - Website Custom Audience (posetioci koji su konvertovali)
   - Email lista korisnika sa visokim LTV-om
3. Izaberi lokaciju (zemlje)
4. Izaberi veličinu (1% - 10%):
   - **1%** — najsličniji tvojim korisnicima (najmanji doseg, najbolji kvalitet)
   - **2-3%** — dobar balans kvaliteta i dosega
   - **5-10%** — veći doseg, niži kvalitet

**Preporuka za testiranje:**
```
Ad Set 1: Lookalike 1% od plaćenih korisnika
Ad Set 2: Lookalike 2% od plaćenih korisnika
Ad Set 3: Lookalike 1% od trial korisnika
→ Testiraj 5-7 dana, skaliraj pobednika
```

**Kvalitet Lookalike-a zavisi od kvaliteta izvora:**
```
NAJBOLJI IZVOR → NAJBOLJI LOOKALIKE
Plaćeni korisnici sa visokim LTV-om > Svi plaćeni korisnici >
Trial korisnici > Posetioci pricing stranice > Svi posetioci sajta
```

### 5.3 Detailed Targeting (interesovanja i demografija)

Koristi kada nemaš dovoljno podataka za Custom ili Lookalike Audiences.

**Korisna interesovanja za SaaS:**

| Kategorija | Interesovanja |
|-----------|---------------|
| **Tehnologija** | SaaS, Cloud computing, Business software, CRM, Project management |
| **Pozicije** | CEO, CTO, Marketing Manager, Sales Manager, IT Director |
| **Biznis** | Small business owners, Entrepreneurship, Startups |
| **Ponašanja** | Technology early adopters, Online shoppers, Business decision makers |
| **Konkurencija** | Interesovanja za konkurentske proizvode (npr. Salesforce, HubSpot) |

**Pravila za Detailed Targeting:**
- Kombinuj interesovanja sa demografijom (npr. pozicija + interesovanje)
- Ne pravi previše uzak targeting (minimum 100.000 people audience size)
- Ne pravi previše širok (maximum 1-2 miliona za početak)

### 5.4 Broad Targeting (bez targetiranja)

Sa dovoljno podataka na pixel-u (50+ konverzija nedeljno), Meta algoritam može sam naći pravu publiku bez targetiranja.

- Postavi samo lokaciju i jezik
- Ne dodaj interesovanja, demografiju, ni Lookalike
- Meta koristi pixel podatke i machine learning
- Ovo često radi NAJBOLJE za skalirane naloge

---

## 6. Kreativni materijali (Ad Creative)

### 6.1 Formati koji rade za SaaS

| Format | Opis | Kada koristiti | Performance |
|--------|------|---------------|------------|
| **Video (15-30s)** | Screen recording sa voiceover-om ili UGC | Primarni format — uvek testiraj | Najbolji za SaaS |
| **Single Image** | Screenshot proizvoda sa overlay tekstom | Brzo za testiranje poruka | Dobar za retargeting |
| **Carousel** | Više slika/slajdova u jednom oglasu | Feature showcase, pre/posle | Odličan za MOFU |
| **Collection** | Cover slika/video + galerija | Ređe za SaaS, više za e-commerce | Situaciono |

### 6.2 Struktura teksta oglasa

```
HOOK (prvi red — OVO korisnik vidi pre nego što klikne "See more")
─────────────────────────────────
Ovo je najbitniji deo. Mora da zaustavi skrolovanje.
Max 125 karaktera pre "See more" na mobilnom.

PROBLEM (2-3 rečenice)
─────────────────────
Opiši bol/frustraciju koju tvoja ciljna grupa ima.
Budi specifičan — koristi brojke i situacije.

REŠENJE (2-3 rečenice + bullet points)
──────────────────────────────────────
Predstavi tvoj proizvod kao rešenje.
→ Benefit 1
→ Benefit 2
→ Benefit 3

SOCIJALNI DOKAZ (1 rečenica)
────────────────────────────
Brojka, testimonijal, ili kredibilitet.

CTA (1 rečenica)
────────────────
Jasan poziv na akciju sa linkom.
```

**Primer za SaaS CRM:**

```
Gubite 10+ sati nedeljno na manuelno praćenje klijenata?

Naš tim je prošao kroz isti problem. Excel tabele, zaboravljeni follow-up-ovi,
izgubljeni dealovi...

Zato smo napravili TvojBrend — CRM koji automatizuje ceo prodajni proces:

→ Centralizovana baza kontakata sa punom istorijom
→ Automatski follow-up emailovi (nikad ne zaboravite klijenta)
→ Prodajni pipeline sa drag & drop (vidite svaki deal na jednom mestu)

500+ firmi je već ubrzalo prodaju za prosečno 40%.

Započnite besplatno → tvojbrand.com (bez kreditne kartice, setup za 5 min)
```

### 6.3 Tehnički zahtevi za kreative

| Format | Dimenzije | Aspect Ratio | Gde se prikazuje |
|--------|----------|-------------|------------------|
| Feed (FB + IG) | 1080 x 1080 px | 1:1 (kvadrat) | Feed objave |
| Feed (FB) | 1200 x 628 px | 1.91:1 | Facebook feed (horizontalni) |
| Stories/Reels | 1080 x 1920 px | 9:16 (vertikalni) | Stories, Reels |
| In-Stream Video | 1280 x 720 px | 16:9 | Video stream-ovi |

**Video zahtevi:**
- Format: MP4 ili MOV
- Max trajanje: 240 minuta (ali drži 15-60 sekundi)
- Max veličina: 4 GB
- Min rezolucija: 720p

**Tekst na slici:**
- Nema formalnog ograničenja na procenat teksta
- Ali: manje teksta = bolji doseg (Meta favorizuje slike sa manje teksta)
- Pravilo palca: max 20% površine slike

---

## 7. Budget i Bidding

### 7.1 Koliko uložiti

| Faza | Dnevni budget po Ad Set-u | Ukupan dnevni | Cilj |
|------|--------------------------|---------------|------|
| Testiranje (mesec 1-2) | 10-20 EUR | 30-60 EUR | Naučiti šta radi |
| Optimizacija (mesec 3-4) | 15-30 EUR | 50-100 EUR | Fokusirati se na pobednike |
| Skaliranje (mesec 5+) | 30-100+ EUR | 100-500+ EUR | Povećati obim |

**Minimum za učenje:** 10 EUR dnevno po Ad Set-u. Ispod toga, Meta nema dovoljno podataka za optimizaciju.

**Optimalan budget:** Minimum 50 konverzija nedeljno po Ad Set-u za punu optimizaciju. Ako ti CPA = 25 EUR, trebaš 50 x 25 = 1250 EUR nedeljno / 178 EUR dnevno po Ad Set-u.

### 7.2 Bidding strategije

| Strategija | Kako radi | Kada koristiti |
|-----------|----------|---------------|
| **Lowest Cost** (default) | Meta troši ceo budget za što više konverzija po najnižoj ceni | Početak, testiranje |
| **Cost Cap** | Postavljaš maksimalan prosečan CPA | Kada znaš koliko možeš da platiš po konverziji |
| **Bid Cap** | Postavljaš maksimalnu ponudu za svaku aukciju | Napredna kontrola troškova |
| **Minimum ROAS** | Meta optimizuje za minimalan ROAS | Kada imaš jasne vrednosti konverzija |

**Preporuka:** Počni sa **Lowest Cost**. Kada imaš dovoljno podataka (50+ konverzija), prebaci na **Cost Cap** sa limitom 10-20% iznad prosečnog CPA.

---

## 8. A/B testiranje

### 8.1 Šta testirati (po prioritetu)

| Redosled | Element | Uticaj na performanse |
|----------|---------|----------------------|
| 1. | **Kreativni materijal** (slika/video) | NAJVEĆI uticaj — 50-70% performanse |
| 2. | **Hook** (prvi red teksta / prva 3s videa) | Vrlo visok uticaj |
| 3. | **Ponuda** (trial vs demo vs popust) | Visok uticaj |
| 4. | **Tekst oglasa** (body copy) | Srednji uticaj |
| 5. | **Publika** (targeting) | Srednji uticaj |
| 6. | **CTA dugme** (Learn More vs Sign Up vs Try Free) | Nizak do srednji uticaj |
| 7. | **Landing stranica** | Srednji uticaj (ali na conversion rate, ne na CTR) |

### 8.2 Pravila testiranja

- **Menjaj samo jednu stvar u isto vreme** — inače ne znaš šta je uticalo na rezultat
- **Minimum 3-5 dana** i **1000+ impressions** pre zaključka
- **Statistička značajnost** — ne reaguj na male uzorke (50 klikova nije dovoljno)
- **Testiraj 3-5 varijanti odjednom** — ne samo 2 (veća šansa da nađeš pobednika)
- **Ugasi gubitnika, skaliraj pobednika, testiraj novu varijaciju**

### 8.3 Kako tehnički podesiti test

**Metod 1: Ručno (više kontrole)**
- Kreiraj kampanju sa više Ad Set-ova (istim targeting-om)
- Svaki Ad Set ima drugačiji kreativ
- Isti budget na svakom
- Uporedi posle 5-7 dana

**Metod 2: Meta A/B Testing alat**
- U Ads Manager: "A/B Test" dugme
- Izaberi šta testiraš (Creative, Audience, Placement)
- Meta automatski deli budžet i daje statistički značajan rezultat
- Pouzdaniji rezultat ali manje kontrole

---

## 9. Retargeting strategija

### 9.1 Segmenti i poruke

| Segment | Opis | Trajanje | Tip oglasa | Poruka |
|---------|------|----------|-----------|--------|
| **Svi posetioci** | Posetili bilo koju stranicu | 30 dana | Video / Image | Podseti na proizvod + ponudi trial |
| **Pricing posetioci** | Posetili pricing stranicu | 14 dana | Testimonijal + CTA | Socijalni dokaz + popust |
| **Blog čitaoci** | Posetili blog | 60 dana | Edukativni + CTA | Vredan sadržaj → trial |
| **Napušteni signup** | Počeli registraciju, nisu završili | 7 dana | Jednostavan CTA | "Završite registraciju" |
| **Trial korisnici** | Registrovali se za trial | 14 dana | Onboarding pomoć | "Evo kako da počnete" |
| **Expired trial** | Trial istekao, nisu platili | 30 dana | Ponuda | Popust na pretplatu |

### 9.2 Exclusion pravila (koga NE targetirati)

Veoma bitno da ne trošiš novac na ljude koji su već konvertovali:

```
Retargeting kampanja za trial:
  Include: Svi posetioci sajta (30 dana)
  Exclude: Korisnici koji su se registrovali za trial (Custom Audience)
  Exclude: Plaćeni korisnici (Customer List)

Retargeting kampanja za plaćenu pretplatu:
  Include: Trial korisnici
  Exclude: Plaćeni korisnici
```

---

## 10. Česte greške na Meta Ads

| Greška | Posledica | Rešenje |
|--------|-----------|---------|
| Nema Meta Pixel-a | Nema praćenja, nema optimizacije | Instaliraj pixel PRVOG DANA |
| Optimizacija za klikove umesto konverzija | Dobijaš klikove ali ne konverzije | Koristi Sales cilj sa konverzijskim eventom |
| Previše uzak targeting | Skup doseg, mala publika | Min 100K ljudi u publici |
| Jedna kreativa bez testiranja | Ne znaš da li je optimalna | Testiraj min 3-5 kreativa |
| Menjanje oglasa svaki dan | Meta nema vremena da nauči | Čekaj 5-7 dana pre promena |
| Nema retargetinga | Najveći ROI kanal ignorisan | Pokreni retargeting odmah |
| Ista poruka za sve | Neefikasno | Prilagodi poruku fazi funnel-a |
| Ignorisanje frequency | Kreativni zamor, negativna reakcija | Prati frequency, zameni kreative |
| Loša landing stranica | Dobijaš klikove ali ne konverzije | Optimizuj LP pre skaliranja |

---

## Sledeći koraci

-> [07 - Meta Ads napredni](/07-meta-ads-napredni) — CBO vs ABO, kreativna strategija, Advantage+, scaling
