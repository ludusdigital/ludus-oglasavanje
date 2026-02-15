import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SEO & oglašavanje za SaaS',
  description: 'Kompletna edukacija o SEO-u, Google Ads-u i Meta Ads-u za SaaS startup sa pretplatničkim modelom',
  lang: 'sr-Latn',

  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'SEO & Oglašavanje za SaaS — Kompletna edukacija' }],
    ['meta', { name: 'og:description', content: 'Sveobuhvatni vodič za SEO, Google Ads i Meta Ads, prilagođen za SaaS platformu sa pretplatničkim modelom.' }],
  ],

  themeConfig: {
    logo: undefined,
    siteTitle: 'SaaS oglašavanje',

    nav: [
      { text: 'Početna', link: '/' },
      {
        text: 'Edukacija',
        items: [
          { text: 'Osnove', link: '/01-osnove' },
          { text: 'SEO', link: '/02-seo-organski' },
          { text: 'LEO (LLM optimizacija)', link: '/15-leo-llm-optimizacija' },
          { text: 'Google Ads', link: '/04-google-ads-osnove' },
          { text: 'Meta Ads', link: '/06-meta-ads-osnove' },
        ]
      },
      {
        text: 'Praktično',
        items: [
          { text: 'Akcioni plan (30 dana)', link: '/11-akcioni-plan' },
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
        text: 'Strategija i merenje',
        collapsed: false,
        items: [
          { text: 'Cross-channel strategija', link: '/08-cross-channel' },
          { text: 'Merenje i analitika', link: '/09-merenje-analitika' },
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
          { text: 'Prvih 30 dana', link: '/11-akcioni-plan' },
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
