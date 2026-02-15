import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SaaS Marketing Edukacija',
  description: 'Kompletna edukacija za SaaS marketing — SEO, oglašavanje, PLG, brending, GTM strategija, analitika i AI automatizacija',
  lang: 'sr-Latn',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0bbc78' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'SEO & Oglašavanje za SaaS — Kompletna edukacija' }],
    ['meta', { name: 'og:description', content: 'Sveobuhvatni vodič za SEO, Google Ads i Meta Ads, prilagođen za SaaS platformu sa pretplatničkim modelom.' }],
  ],

  themeConfig: {
    logo: '/favicon.png',
    siteTitle: 'SaaS oglašavanje',

    nav: [
      { text: 'Početna', link: '/' },
      {
        text: 'Edukacija',
        items: [
          { text: 'Osnove', link: '/01-osnove' },
          { text: 'SaaS biznis model i pricing', link: '/16-saas-biznis-model' },
          { text: 'SEO', link: '/02-seo-organski' },
          { text: 'LEO (LLM optimizacija)', link: '/15-leo-llm-optimizacija' },
          { text: 'Google Ads', link: '/04-google-ads-osnove' },
          { text: 'Meta Ads', link: '/06-meta-ads-osnove' },
          { text: 'LinkedIn i B2B kanali', link: '/19-linkedin-ads-b2b' },
          { text: 'Brending i copywriting', link: '/17-brending-copywriting' },
        ]
      },
      {
        text: 'Napredne teme',
        items: [
          { text: 'Product-Led Growth', link: '/20-product-led-growth' },
          { text: 'GTM strategija', link: '/22-gtm-strategija' },
          { text: 'CRO i eksperimentisanje', link: '/23-cro-eksperimentisanje' },
          { text: 'MarTech i AI', link: '/24-martech-ai' },
          { text: 'B2B vs B2C SaaS', link: '/25-b2b-b2c-saas' },
          { text: 'Performanse i UX', link: '/26-performanse-ux' },
        ]
      },
      {
        text: 'Praktično',
        items: [
          { text: 'Akcioni plan (90 dana)', link: '/11-akcioni-plan' },
          { text: 'Checkliste', link: '/12-checkliste' },
          { text: 'Alati i resursi', link: '/14-alati-resursi' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Osnove',
        items: [
          { text: 'Osnove oglašavanja za SaaS', link: '/01-osnove' },
          { text: 'SaaS biznis model i pricing', link: '/16-saas-biznis-model' },
        ]
      },
      {
        text: 'SEO',
        collapsed: false,
        items: [
          { text: 'Organski saobraćaj', link: '/02-seo-organski' },
          { text: 'SEO strategije za SaaS', link: '/03-napredni-seo' },
        ]
      },
      {
        text: 'LEO (AI optimizacija)',
        items: [
          { text: 'LEO za SaaS platforme', link: '/15-leo-llm-optimizacija' },
        ]
      },
      {
        text: 'Google Ads',
        collapsed: false,
        items: [
          { text: 'Osnove plaćenog oglašavanja', link: '/04-google-ads-osnove' },
          { text: 'Napredne strategije', link: '/05-google-ads-napredni' },
        ]
      },
      {
        text: 'Meta Ads (FB / IG)',
        collapsed: false,
        items: [
          { text: 'Osnove FB i IG oglašavanja', link: '/06-meta-ads-osnove' },
          { text: 'Napredne strategije', link: '/07-meta-ads-napredni' },
        ]
      },
      {
        text: 'LinkedIn i B2B kanali',
        items: [
          { text: 'LinkedIn Ads i B2B kanali', link: '/19-linkedin-ads-b2b' },
        ]
      },
      {
        text: 'Brending i sadržaj',
        collapsed: true,
        items: [
          { text: 'Brand strategija i copywriting', link: '/17-brending-copywriting' },
          { text: 'Content strategija', link: '/18-content-strategija' },
        ]
      },
      {
        text: 'Product-Led Growth',
        collapsed: true,
        items: [
          { text: 'PLG za SaaS', link: '/20-product-led-growth' },
          { text: 'Lifecycle marketing i retencija', link: '/21-lifecycle-marketing' },
        ]
      },
      {
        text: 'Strategija i lansiranje',
        collapsed: true,
        items: [
          { text: 'Go-to-Market strategija', link: '/22-gtm-strategija' },
          { text: 'B2B vs B2C SaaS', link: '/25-b2b-b2c-saas' },
        ]
      },
      {
        text: 'Strategija i merenje',
        collapsed: false,
        items: [
          { text: 'Cross-channel strategija', link: '/08-cross-channel' },
          { text: 'Merenje i analitika', link: '/09-merenje-analitika' },
          { text: 'CRO i eksperimentisanje', link: '/23-cro-eksperimentisanje' },
        ]
      },
      {
        text: 'Tehnologija i alati',
        collapsed: true,
        items: [
          { text: 'MarTech stack i AI automatizacija', link: '/24-martech-ai' },
          { text: 'Performanse, UX i pristupačnost', link: '/26-performanse-ux' },
        ]
      },
      {
        text: 'Upravljanje i procesi',
        items: [
          { text: 'Agile marketing', link: '/27-agile-marketing' },
        ]
      },
      {
        text: 'Legal i compliance',
        items: [
          { text: 'Pravila, GDPR, Consent Mode', link: '/10-legal-compliance' },
        ]
      },
      {
        text: 'Akcioni planovi',
        collapsed: false,
        items: [
          { text: 'Prvih 90 dana', link: '/11-akcioni-plan' },
          { text: 'Nedeljni / mesečni / kvartalni', link: '/12-checkliste' },
          { text: 'Česte greške', link: '/13-greske' },
          { text: 'Alati i resursi', link: '/14-alati-resursi' },
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: 'Na ovoj stranici'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Pretraži',
            buttonAriaLabel: 'Pretraži'
          },
          modal: {
            displayDetails: 'Prikaži detalje',
            resetButtonTitle: 'Resetuj pretragu',
            backButtonTitle: 'Nazad',
            noResultsText: 'Nema rezultata za',
            footer: {
              selectText: 'Izaberi',
              navigateText: 'Navigiraj',
              closeText: 'Zatvori'
            }
          }
        }
      }
    },

    docFooter: {
      prev: 'Prethodno poglavlje',
      next: 'Sledeće poglavlje'
    },

    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Svetla tema',
    darkModeSwitchTitle: 'Tamna tema',
    sidebarMenuLabel: 'Meni',
    returnToTopLabel: 'Na vrh',

    footer: {
      message: 'Edukativni materijal za SaaS oglašavanje',
      copyright: 'Ludus Digital 2026.'
    }
  },

  markdown: {
    lineNumbers: false
  }
})
