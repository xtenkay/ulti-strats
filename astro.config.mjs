import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://xtenkay.github.io',
  integrations: [starlight({
    title: 'NA Ultimate Strats',
    social: {
      github: 'https://github.com/xtenkay/ulti-strats',
      twitter: 'https://x.com/_Tenkay_'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'UCOB',
        link: '/guides/ucob/',
        attrs: {
          class: `ucob-sidebar`
        }
      }, {
        label: 'UWU',
        link: '/guides/uwu/',
        attrs: {
          class: `uwu-sidebar`
        }
      }, {
        label: 'TEA',
        link: '/guides/tea/',
        attrs: {
          class: `tea-sidebar`
        }
      }, {
        label: 'DSR',
        link: '/guides/dsr/',
        attrs: {
          class: `dsr-sidebar`
        }
      }, {
        label: 'TOP',
        link: '/guides/top/',
        attrs: {
          class: `top-sidebar`
        }
      }]
    }, {
      label: 'Others',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Credits',
        link: '/others/credits/'
      },
    {
      label: 'Contact / Feedback',
        link: '/others/contact/'
    } ]
    }],
    pagination: false,
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css']
  }), expressiveCode({}), mdx()]
});